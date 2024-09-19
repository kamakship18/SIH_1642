import React from "react";
import { useFormContext } from "react-hook-form";
import { InputField } from "./InputField";

export const UserVerificationStep = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Step 1: User Verification
      </h2>
      <InputField
        label="Full Name"
        name="fullName"
        register={register}
        rules={{ required: "Full Name is required" }}
        error={errors.fullName}
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        register={register}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
        error={errors.email}
      />
      <InputField
        label="Phone Number"
        name="phoneNumber"
        register={register}
        rules={{
          required: "Phone Number is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Invalid phone number",
          },
        }}
        error={errors.phoneNumber}
      />
      <InputField
        label="Aadhaar Number"
        name="aadhaarNumber"
        register={register}
        rules={{
          required: "Aadhaar Number is required",
          pattern: {
            value: /^[0-9]{12}$/,
            message: "Invalid Aadhaar number",
          },
        }}
        error={errors.aadhaarNumber}
      />
      <InputField
        label="PAN Number"
        name="panNumber"
        register={register}
        rules={{
          required: "PAN Number is required",
          pattern: {
            value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
            message: "Invalid PAN number",
          },
        }}
        error={errors.panNumber}
      />
    </div>
  );
};