import slugify from "slugify"; // For slug creation

const GovernmentEntitySchema = new mongoose.Schema(
  {
    government_user_id: {
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
      enum: ["central", "state", "local", "department", "public_sector"],
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
    ministry: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      default: null,
    },
    about_entity: {
      type: String,
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
    official_documents: [
      {
        type: String, // Links to official government documents
        default: null,
      },
    ],
    projects_supported: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project", // Refers to government projects/entities they support
      },
    ],
    official_contact_email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
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

// Pre-save hook for generating slug based on the nature of entity
GovernmentEntitySchema.pre("save", function (next) {
  if (!this.isModified("nature_of_entity")) return next();

  // Generate slug from the nature of the government entity for unique SEO-friendly URLs
  this.slug = slugify(this.nature_of_entity, { lower: true, strict: true });

  next();
});

// Pre-save hook for handling "created_at" and "updated_at" fields
GovernmentEntitySchema.pre("save", function (next) {
  this.updated_at = Date.now(); // Set updated timestamp
  if (!this.created_at) {
    this.created_at = Date.now(); // Set created timestamp if not set
  }
  next();
});

// Custom method to add a project supported by the government entity
GovernmentEntitySchema.methods.addProjectSupported = function (projectId) {
  if (!this.projects_supported.includes(projectId)) {
    this.projects_supported.push(projectId);
    this.save();
  }
};

// Method to check if the entity has social media links
GovernmentEntitySchema.methods.hasSocialLinks = function () {
  const links = this.social_links;
  return !!(links.facebook || links.twitter || links.linkedin || links.youtube || links.other);
};

// Method to convert government entity data to a simplified JSON format (to hide sensitive data)
GovernmentEntitySchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.__v; // Remove version key
  return obj;
};

const GovernmentEntity = mongoose.model("GovernmentEntity", GovernmentEntitySchema);

export default GovernmentEntity;
