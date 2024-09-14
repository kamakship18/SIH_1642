import slugify from "slugify"; // For slug creation

const InvestorSchema = new mongoose.Schema(
  {
    investor_user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recognition_number: {
      type: String,
      unique: true,
      required: true,
    },
    nature_of_investor: {
      type: String,
      required: true,
      enum: ["individual", "VC_firm", "angel_investor", "corporate_investor"],
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
    industry_focus: {
      type: String,
      required: true,
    },
    sector_focus: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      default: null,
    },
    about_investor: {
      type: String,
      default: null,
    },
    funding_stage_focus: {
      type: [String], // Array of funding stages
      enum: ["Seed", "Early-stage", "Growth", "Late-stage"],
      default: ["Seed"],
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
    proof_of_investment: {
      type: String,
      default: "Information Not Shared",
    },
    total_investments_made: {
      type: Number,
      default: 0,
    },
    portfolio_companies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Startup", // Refers to Startup entities
      },
    ],
    number_of_employees: {
      type: Number,
      default: null,
    },
    funding_available: {
      type: Number,
      default: null,
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

// Pre-save hook for generating slug based on investor nature
InvestorSchema.pre("save", function (next) {
  if (!this.isModified("nature_of_investor")) return next();

  // Generate slug from the nature of investor for unique SEO-friendly URLs
  this.slug = slugify(this.nature_of_investor, { lower: true, strict: true });

  next();
});

// Pre-save hook for handling "created_at" and "updated_at" fields
InvestorSchema.pre("save", function (next) {
  this.updated_at = Date.now(); // Set updated timestamp
  if (!this.created_at) {
    this.created_at = Date.now(); // Set created timestamp if not set
  }
  next();
});

// Custom method to add a portfolio company
InvestorSchema.methods.addPortfolioCompany = function (startupId) {
  if (!this.portfolio_companies.includes(startupId)) {
    this.portfolio_companies.push(startupId);
    this.save();
  }
};

// Method to check if the investor has social media links
InvestorSchema.methods.hasSocialLinks = function () {
  const links = this.social_links;
  return !!(links.facebook || links.twitter || links.linkedin || links.youtube || links.other);
};

// Pre-save hook to validate total investments based on portfolio companies
InvestorSchema.pre("save", function (next) {
  // Update total_investments_made if portfolio companies exist
  this.total_investments_made = this.portfolio_companies.length;
  
  next();
});

// Method to convert investor data to a simplified JSON format (to hide sensitive data)
InvestorSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.__v; // Remove version key
  return obj;
};

const Investor = mongoose.model("Investor", InvestorSchema);

export default Investor;
