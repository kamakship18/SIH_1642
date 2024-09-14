'use client';
import { useState } from 'react';

const InvestorForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    investor_user_id: '',
    recognition_number: '',
    nature_of_investor: '',
    state_id: '',
    city_id: '',
    industry_focus: '',
    sector_focus: '',
    funding_stage_focus: ['Seed'],
    logo: '',
    about_investor: '',
    website_url: '',
    social_links: {
      facebook: '',
      twitter: '',
      linkedin: '',
      youtube: '',
      other: '',
    },
    proof_of_investment: 'Information Not Shared',
    total_investments_made: 0,
    portfolio_companies: [],
    number_of_employees: '',
    funding_available: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleArrayChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value.split(',').map(item => item.trim()), // Convert comma-separated string to array
    }));
  };

  const handleNext = () => {
    // Validate current step
    if (step === 1) {
      if (validateStep1()) setStep(step + 1);
    } else if (step === 2) {
      if (validateStep2()) setStep(step + 1);
    } else if (step === 3) {
      if (validateStep3()) setStep(step + 1);
    } else if (step === 4) {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    alert('Form submitted successfully! Check console for details.');
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.investor_user_id) newErrors.investor_user_id = "Investor User ID is required";
    if (!formData.recognition_number) newErrors.recognition_number = "Recognition Number is required";
    if (!formData.nature_of_investor) newErrors.nature_of_investor = "Nature of Investor is required";
    if (!formData.state_id) newErrors.state_id = "State ID is required";
    if (!formData.city_id) newErrors.city_id = "City ID is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.industry_focus) newErrors.industry_focus = "Industry Focus is required";
    if (!formData.sector_focus) newErrors.sector_focus = "Sector Focus is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    // Validate fields on Step 3
    return true;
  };

  const renderStep1 = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Investor User ID</label>
        <input
          type="text"
          name="investor_user_id"
          value={formData.investor_user_id}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
          required
        />
        {errors.investor_user_id && <p className="text-red-500">{errors.investor_user_id}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Recognition Number</label>
        <input
          type="text"
          name="recognition_number"
          value={formData.recognition_number}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
          required
        />
        {errors.recognition_number && <p className="text-red-500">{errors.recognition_number}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Nature of Investor</label>
        <input
          type="text"
          name="nature_of_investor"
          value={formData.nature_of_investor}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
          required
        />
        {errors.nature_of_investor && <p className="text-red-500">{errors.nature_of_investor}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">State ID</label>
        <input
          type="text"
          name="state_id"
          value={formData.state_id}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
          required
        />
        {errors.state_id && <p className="text-red-500">{errors.state_id}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">City ID</label>
        <input
          type="text"
          name="city_id"
          value={formData.city_id}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
          required
        />
        {errors.city_id && <p className="text-red-500">{errors.city_id}</p>}
      </div>
      <button onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Next
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4">Investment Focus</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Industry Focus</label>
        <input
          type="text"
          name="industry_focus"
          value={formData.industry_focus}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
          required
        />
        {errors.industry_focus && <p className="text-red-500">{errors.industry_focus}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Sector Focus</label>
        <input
          type="text"
          name="sector_focus"
          value={formData.sector_focus}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
          required
        />
        {errors.sector_focus && <p className="text-red-500">{errors.sector_focus}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Funding Stage Focus (comma separated)</label>
        <input
          type="text"
          name="funding_stage_focus"
          value={formData.funding_stage_focus.join(', ')}
          onChange={handleArrayChange}
          className="w-full mt-2 p-2 border rounded-md"
        />
      </div>
      <button onClick={handleBack} className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 mr-2">
        Back
      </button>
      <button onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Next
      </button>
    </div>
  );

  const renderStep3 = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4">Additional Details</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Logo URL</label>
        <input
          type="text"
          name="logo"
          value={formData.logo}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">About Investor</label>
        <textarea
          name="about_investor"
          value={formData.about_investor}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Website URL</label>
        <input
          type="text"
          name="website_url"
          value={formData.website_url}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Social Links (comma separated)</label>
        <input
          type="text"
          name="social_links"
          value={Object.values(formData.social_links).join(', ')}
          onChange={handleArrayChange}
          className="w-full mt-2 p-2 border rounded-md"
        />
      </div>
      <button onClick={handleBack} className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 mr-2">
        Back
      </button>
      <button onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Next
      </button>
    </div>
  );

  const renderStep4 = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4">Final Details</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Proof of Investment</label>
        <input
          type="text"
          name="proof_of_investment"
          value={formData.proof_of_investment}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Total Investments Made</label>
        <input
          type="number"
          name="total_investments_made"
          value={formData.total_investments_made}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Number of Employees</label>
        <input
          type="number"
          name="number_of_employees"
          value={formData.number_of_employees}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Funding Available</label>
        <input
          type="number"
          name="funding_available"
          value={formData.funding_available}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        />
      </div>
      <button onClick={handleBack} className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 mr-2">
        Back
      </button>
      <button onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
        Submit
      </button>
    </div>
  );

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-md shadow-md">
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      {step === 4 && renderStep4()}
    </div>
  );
};

export default InvestorForm;

