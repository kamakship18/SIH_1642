import mongoose from "mongoose";
import crypto from "crypto"; // For generating tokens

const UserVerificationSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // Email and phone verification
    emailVerificationToken: {
      type: String,
      default: null,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    phoneVerificationCode: {
      type: String,
      default: null,
    },
    phoneVerified: {
      type: Boolean,
      default: false,
    },
    phoneNumber: {
      type: String,
      trim: true,
      match: [/^\d{10}$/, "Please enter a valid 10-digit phone number."],
    },
    verificationExpiry: {
      type: Date,
      default: null,
    },
    // Aadhaar and other document verification
    aadhaarNumber: {
      type: String,
      required: [true, "Aadhaar number is required for verification"],
      unique: true,
      trim: true,
      match: [/^\d{12}$/, "Please enter a valid 12-digit Aadhaar number"],
    },
    aadhaarDocument: {
      type: String, // URL or path to the uploaded Aadhaar document (PDF/image)
      required: [true, "Aadhaar document is required for verification"],
    },
    documentVerificationStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    documentVerificationRemarks: {
      type: String,
      default: "",
    },
    // Other identity documents (optional)
    panCardNumber: {
      type: String,
      trim: true,
      match: [/^[A-Z]{5}\d{4}[A-Z]{1}$/, "Please enter a valid PAN number"], // PAN number format
    },
    panCardDocument: {
      type: String, // URL or path to the uploaded PAN document
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook to generate verification tokens for new users
UserVerificationSchema.pre("save", function (next) {
  if (this.isNew) {
    this.emailVerificationToken = crypto.randomBytes(32).toString("hex");
    this.phoneVerificationCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
    const expiryTime = Date.now() + 3600000; // 1 hour from now
    this.verificationExpiry = new Date(expiryTime);
  }
  next();
});

// Method to verify email using the token
UserVerificationSchema.methods.verifyEmail = function (token) {
  if (this.emailVerificationToken === token && this.verificationExpiry > Date.now()) {
    this.emailVerified = true;
    this.emailVerificationToken = null;
    return true;
  }
  return false;
};

// Method to verify phone number using the code
UserVerificationSchema.methods.verifyPhone = function (code) {
  if (this.phoneVerificationCode === code && this.verificationExpiry > Date.now()) {
    this.phoneVerified = true;
    this.phoneVerificationCode = null;
    return true;
  }
  return false;
};

// Method to approve or reject document verification (for admin use)
UserVerificationSchema.methods.verifyDocuments = function (status, remarks = "") {
  if (status === "approved" || status === "rejected") {
    this.documentVerificationStatus = status;
    this.documentVerificationRemarks = remarks;
    return true;
  }
  return false;
};

// Method to check if the user has uploaded all required documents
UserVerificationSchema.methods.isDocumentsUploaded = function () {
  return !!this.aadhaarDocument;
};

// Method to check if user is fully verified (email, phone, Aadhaar)
UserVerificationSchema.methods.isFullyVerified = function () {
  return (
    this.emailVerified &&
    this.phoneVerified &&
    this.documentVerificationStatus === "approved"
  );
};

// Method to resend verification codes (for both email and phone)
UserVerificationSchema.methods.resendVerification = function () {
  this.emailVerificationToken = crypto.randomBytes(32).toString("hex");
  this.phoneVerificationCode = Math.floor(100000 + Math.random() * 900000).toString();
  const expiryTime = Date.now() + 3600000; // 1 hour from now
  this.verificationExpiry = new Date(expiryTime);
  this.save();
};

const UserVerification = mongoose.model("UserVerification", UserVerificationSchema);

export default UserVerification;
