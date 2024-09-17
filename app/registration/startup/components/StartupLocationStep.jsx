import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

const InputField = ({ label, name, type = 'text', register, rules, error }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      id={name}
      {...register(name, rules)}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    />
    {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
  </div>
);

const Select = ({ label, name, options, register, rules, error }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <select
      id={name}
      {...register(name, rules)}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    >
      <option value="">Select {label}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
  </div>
);

export const StartupLocationStep = () => {
  const { register, setValue, watch, formState: { errors } } = useFormContext();
  const [postOffices, setPostOffices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const pincode = watch('pincode');

  useEffect(() => {
    const fetchPostOffices = async () => {
      if (pincode && pincode.length === 6) {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
          const data = await response.json();
          if (data[0].Status === 'Success') {
            setPostOffices(data[0].PostOffice);
            if (data[0].PostOffice.length > 0) {
              const firstPostOffice = data[0].PostOffice[0];
              setValue('district', firstPostOffice.District);
              setValue('state', firstPostOffice.State);
              setValue('country', firstPostOffice.Country);
            }
          } else {
            setError('No data found for this pincode');
            setPostOffices([]);
          }
        } catch (err) {
          setError('Failed to fetch data. Please try again.');
          setPostOffices([]);
        } finally {
          setLoading(false);
        }
      } else {
        setPostOffices([]);
      }
    };

    fetchPostOffices();
  }, [pincode, setValue]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Step 3: Startup Location and Industry
      </h2>
      <InputField
        label="Pincode"
        name="pincode"
        type="text"
        register={register}
        rules={{ 
          required: "Pincode is required", 
          pattern: { value: /^[0-9]{6}$/, message: "Invalid pincode" } 
        }}
        error={errors.pincode}
      />
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {postOffices.length > 0 && (
        <Select
          label="Post Office"
          name="postOffice"
          options={postOffices.map(po => po.Name)}
          register={register}
          rules={{ required: "Post Office is required" }}
          error={errors.postOffice}
        />
      )}
      <InputField
        label="District"
        name="district"
        register={register}
        rules={{ required: "District is required" }}
        error={errors.district}
      />
      <InputField
        label="State"
        name="state"
        register={register}
        rules={{ required: "State is required" }}
        error={errors.state}
      />
      <InputField
        label="Country"
        name="country"
        register={register}
        rules={{ required: "Country is required" }}
        error={errors.country}
      />
      <InputField
        label="Industry"
        name="industry"
        register={register}
        rules={{ required: "Industry is required" }}
        error={errors.industry}
      />
      <InputField
        label="Sector"
        name="sector"
        register={register}
        rules={{ required: "Sector is required" }}
        error={errors.sector}
      />
    </div>
  );
};