'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const UserVerification = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    aadhaarNumber: '',
    panNumber: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNumber || formData.phoneNumber.length !== 10) newErrors.phoneNumber = "Valid Phone Number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.aadhaarNumber || formData.aadhaarNumber.length !== 12) newErrors.aadhaarNumber = "Valid Aadhaar Number is required";
    if (!formData.panNumber || formData.panNumber.length !== 10) newErrors.panNumber = "Valid PAN Number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      localStorage.setItem('userData', JSON.stringify(formData));
      router.push('/registration/startup/verify/startup');
    }
  };

  const renderStep1 = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4">User Verification - Basic Details</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
          required
        />
        {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
          required
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
          maxLength={10}
          required
        />
        {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
      </div>
      <button onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Next
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4">User Verification - Aadhaar & PAN</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Aadhaar Number</label>
        <input
          type="text"
          name="aadhaarNumber"
          value={formData.aadhaarNumber}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
          maxLength={12}
          required
        />
        {errors.aadhaarNumber && <p className="text-red-500">{errors.aadhaarNumber}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">PAN Card Number</label>
        <input
          type="text"
          name="panNumber"
          value={formData.panNumber}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
          maxLength={10}
          required
        />
        {errors.panNumber && <p className="text-red-500">{errors.panNumber}</p>}
      </div>
      <button onClick={handleNext} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
        Next
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-xl p-8 bg-white shadow-md rounded-md">
        {step === 1 ? renderStep1() : renderStep2()}
      </div>
    </div>
  );
};

export default UserVerification;
