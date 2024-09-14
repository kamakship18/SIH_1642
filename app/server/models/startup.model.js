import mongoose from "mongoose";
import slugify from "slugify"; // For generating SEO-friendly slugs
import crypto from "crypto"; // If needed for token generation or other utilities

const StartupSchema = new mongoose.Schema(
  {
    startup_user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recognition_number: {
      type: String,
      unique: true,
      required: true,
    },
    nature_of_entity: {
      type: String,
      required: true,
      enum: ["public", "private", "proprietorship", "partnership"],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    state_id: {
      type: Number,
      required: true,
    },
    city_id: {
      type: Number,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    industry_id: {
      type: Number,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
    sector_id: {
      type: Number,
      required: true,
    },
    logo: {
      type: String,
      default: null,
    },
    about_startup: {
      type: String,
      default: null,
    },
    stage: {
      type: String,
      enum: ["Seed", "Growth", "Mature", "Scaling"],
      default: null,
    },
    website_url: {
      type: String,
      default: "",
    },
    social_links: {
      facebook: { type: String, default: "" },
      twitter: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      youtube: { type: String, default: "" },
      other: { type: String, default: "" },
    },
    proof_of_concept: {
      type: String,
      default: "Information Not Shared",
    },
    prototype_development: {
      type: String,
      default: "Information Not Shared",
    },
    funding_status: {
      type: String,
      enum: ["Y", "N"],
      default: "N",
    },
    number_of_employees: {
      type: String,
      default: "Information Not Shared",
    },
    angel_funding: {
      type: Number,
      default: null,
    },
    added_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User who added the startup
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook for generating slug based on startup nature
StartupSchema.pre("save", function (next) {
  if (!this.isModified("nature_of_entity")) return next();

  // Generate slug from the nature of entity for unique SEO-friendly URLs
  this.slug = slugify(this.nature_of_entity, { lower: true, strict: true });

  next();
});

// Pre-save hook for handling "created_at" and "updated_at" fields
StartupSchema.pre("save", function (next) {
  this.updated_at = Date.now(); // Set updated timestamp
  if (!this.created_at) {
    this.created_at = Date.now(); // Set created timestamp if not set
  }
  next();
});

// Custom method to update funding details
StartupSchema.methods.updateFundingDetails = function (funding) {
  this.angel_funding = funding.angel_funding || this.angel_funding;
  this.vc_funding = funding.vc_funding || this.vc_funding;
  this.loans = funding.loans || this.loans;
  this.other_funding = funding.other_funding || this.other_funding;
  this.save();
};

// Custom method to check if the startup has social media links
StartupSchema.methods.hasSocialLinks = function () {
  const links = this.social_links;
  return !!(links.facebook || links.twitter || links.linkedin || links.youtube || links.other);
};

// Pre-save hook to validate funding status based on funding details
StartupSchema.pre("save", function (next) {
  const hasFunding = this.angel_funding || this.vc_funding || this.loans || this.other_funding;

  // If any funding exists, mark funding_status as 'Y'
  if (hasFunding) {
    this.funding_status = "Y";
  } else {
    this.funding_status = "N";
  }
  
  next();
});

// Method to convert startup data to a simplified JSON format (to hide sensitive data)
StartupSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.__v; // Remove version key
  return obj;
};

const Startup = mongoose.model("Startup", StartupSchema);

export default Startup;
