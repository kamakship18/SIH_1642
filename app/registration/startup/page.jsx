"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

const CombinedVerificationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // User verification fields
    fullName: "",
    email: "",
    phoneNumber: "",
    aadhaarNumber: "",
    panNumber: "",
    // Startup verification fields
    recognition_number: "",
    name_of_entity: "",
    slug: "",
    state_id: "",
    city_id: "",
    industry: "",
    industry_id: "",
    sector: "",
    sector_id: "",
    about_startup: "",
    stage: "",
    website_url: "",
    proof_of_concept: "",
    prototype_development: "",
    angel_funding: "",
    number_of_employees: "",
    funding_status: "",
    social_links: {
      facebook: "",
      twitter: "",
      linkedin: "",
      youtube: "",
      other: "",
    },
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    const [parent, child] = name.split(".");
    setFormData((prevState) => ({
      ...prevState,
      [parent]: {
        ...prevState[parent],
        [child]: value,
      },
    }));
  };

  const validateStep = (currentStep) => {
    const newErrors = {};
    switch (currentStep) {
      case 1:
        if (!formData.fullName) newErrors.fullName = "Full Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phoneNumber || formData.phoneNumber.length !== 10)
          newErrors.phoneNumber = "Valid Phone Number is required";
        break;
      case 2:
        if (!formData.aadhaarNumber || formData.aadhaarNumber.length !== 12)
          newErrors.aadhaarNumber = "Valid Aadhaar Number is required";
        if (!formData.panNumber || formData.panNumber.length !== 10)
          newErrors.panNumber = "Valid PAN Number is required";
        break;
      // Add validation for other steps here
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    if (validateStep(step)) {
      // Handle form submission
      console.log("Form submitted:", formData);
      // You can add your submission logic here
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Step 1: User Verification - Basic Details
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.fullName ? "border-red-500" : ""
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.phoneNumber ? "border-red-500" : ""
                }`}
                maxLength={10}
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Step 2: User Verification - Aadhaar & PAN
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Aadhaar Number
              </label>
              <input
                type="text"
                name="aadhaarNumber"
                value={formData.aadhaarNumber}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.aadhaarNumber ? "border-red-500" : ""
                }`}
                maxLength={12}
              />
              {errors.aadhaarNumber && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.aadhaarNumber}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                PAN Card Number
              </label>
              <input
                type="text"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.panNumber ? "border-red-500" : ""
                }`}
                maxLength={10}
              />
              {errors.panNumber && (
                <p className="mt-1 text-sm text-red-500">{errors.panNumber}</p>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Step 3: Startup Verification - Basic Information
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Recognition Number
              </label>
              <input
                type="text"
                name="recognition_number"
                value={formData.recognition_number}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.recognition_number ? "border-red-500" : ""
                }`}
              />
              {errors.recognition_number && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.recognition_number}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name of Entity
              </label>
              <input
                type="text"
                name="name_of_entity"
                value={formData.name_of_entity}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.name_of_entity ? "border-red-500" : ""
                }`}
              />
              {errors.name_of_entity && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name_of_entity}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Entity Type
              </label>
              <select
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.slug ? "border-red-500" : ""
                }`}
              >
                <option value="">Select</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="proprietorship">Proprietorship</option>
                <option value="partnership">Partnership</option>
              </select>
              {errors.slug && (
                <p className="mt-1 text-sm text-red-500">{errors.slug}</p>
              )}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Step 4: Startup Verification - Location and Industry
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                State ID
              </label>
              <input
                type="number"
                name="state_id"
                value={formData.state_id}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.state_id ? "border-red-500" : ""
                }`}
              />
              {errors.state_id && (
                <p className="mt-1 text-sm text-red-500">{errors.state_id}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City ID
              </label>
              <input
                type="number"
                name="city_id"
                value={formData.city_id}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.city_id ? "border-red-500" : ""
                }`}
              />
              {errors.city_id && (
                <p className="mt-1 text-sm text-red-500">{errors.city_id}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Industry
              </label>
              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.industry ? "border-red-500" : ""
                }`}
              />
              {errors.industry && (
                <p className="mt-1 text-sm text-red-500">{errors.industry}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Industry ID
              </label>
              <input
                type="number"
                name="industry_id"
                value={formData.industry_id}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.industry_id ? "border-red-500" : ""
                }`}
              />
              {errors.industry_id && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.industry_id}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sector
              </label>
              <input
                type="text"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.sector ? "border-red-500" : ""
                }`}
              />
              {errors.sector && (
                <p className="mt-1 text-sm text-red-500">{errors.sector}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sector ID
              </label>
              <input
                type="number"
                name="sector_id"
                value={formData.sector_id}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.sector_id ? "border-red-500" : ""
                }`}
              />
              {errors.sector_id && (
                <p className="mt-1 text-sm text-red-500">{errors.sector_id}</p>
              )}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Step 5: Startup Verification - Additional Information
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                About Startup
              </label>
              <textarea
                name="about_startup"
                value={formData.about_startup}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.about_startup ? "border-red-500" : ""
                }`}
                rows="4"
              />
              {errors.about_startup && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.about_startup}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Stage
              </label>
              <select
                name="stage"
                value={formData.stage}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.stage ? "border-red-500" : ""
                }`}
              >
                <option value="">Select</option>
                <option value="Seed">Seed</option>
                <option value="Growth">Growth</option>
                <option value="Mature">Mature</option>
                <option value="Scaling">Scaling</option>
              </select>
              {errors.stage && (
                <p className="mt-1 text-sm text-red-500">{errors.stage}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Website URL
              </label>
              <input
                type="url"
                name="website_url"
                value={formData.website_url}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.website_url ? "border-red-500" : ""
                }`}
              />
              {errors.website_url && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.website_url}
                </p>
              )}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Step 6: Startup Verification - Funding Details
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Angel Funding
              </label>
              <input
                type="number"
                name="angel_funding"
                value={formData.angel_funding}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.angel_funding ? "border-red-500" : ""
                }`}
              />
              {errors.angel_funding && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.angel_funding}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number of Employees
              </label>
              <input
                type="text"
                name="number_of_employees"
                value={formData.number_of_employees}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.number_of_employees ? "border-red-500" : ""
                }`}
              />
              {errors.number_of_employees && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.number_of_employees}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Funding Status
              </label>
              <select
                name="funding_status"
                value={formData.funding_status}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors.funding_status ? "border-red-500" : ""
                }`}
              >
                <option value="N">No</option>
                <option value="Y">Yes</option>
              </select>
              {errors.funding_status && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.funding_status}
                </p>
              )}
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Step 7: Startup Verification - Social Links
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Facebook
              </label>
              <input
                type="url"
                name="social_links.facebook"
                value={formData.social_links.facebook}
                onChange={handleNestedChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors["social_links.facebook"] ? "border-red-500" : ""
                }`}
              />
              {errors["social_links.facebook"] && (
                <p className="mt-1 text-sm text-red-500">
                  {errors["social_links.facebook"]}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Twitter
              </label>
              <input
                type="url"
                name="social_links.twitter"
                value={formData.social_links.twitter}
                onChange={handleNestedChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors["social_links.twitter"] ? "border-red-500" : ""
                }`}
              />
              {errors["social_links.twitter"] && (
                <p className="mt-1 text-sm text-red-500">
                  {errors["social_links.twitter"]}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                LinkedIn
              </label>
              <input
                type="url"
                name="social_links.linkedin"
                value={formData.social_links.linkedin}
                onChange={handleNestedChange}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-50 ${
                  errors["social_links.linkedin"] ? "border-red-500" : ""
                }`}
              />
              {errors["social_links.linkedin"] && (
                <p className="mt-1 text-sm text-red-500">
                  {errors["social_links.linkedin"]}
                </p>
              )}
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Step 8: Review & Submit
            </h2>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                Form Summary
              </h3>
              
              <div className="space-y-2">
                {Object.entries(formData).map(([key, value]) => (
                  <div key={key} className="flex">
                    <span className="font-medium text-gray-600 w-1/3">
                      {key.replace(/_/g, " ")}:
                    </span>
                    <span className="text-gray-800 w-2/3">
                      {typeof value === "object"
                        ? JSON.stringify(value)
                        : value.toString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                i + 1 === step
                  ? "bg-blue-800 text-white"
                  : i + 1 < step
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {i + 1 < step ? <Check size={16} /> : i + 1}
            </div>
          ))}
        </div>

        <form className="mt-8 space-y-6">
          {renderStep()}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
              >
                <ChevronLeft className="mr-2 h-5 w-5" />
                Back
              </button>
            )}
            {step < 8 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
              >
                Next
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800"
              >
                Submit
                <Check className="ml-2 h-5 w-5" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CombinedVerificationForm;
