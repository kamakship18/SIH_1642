import React from "react";
import { useFormContext } from "react-hook-form";
import { InputField } from "./InputField";

export const StartupFundingStep = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Step 5: Startup Funding Details
      </h2>
      <InputField
        label="Angel Funding"
        name="angel_funding"
        type="number"
        register={register}
        rules={{ required: "Angel Funding amount is required" }}
        error={errors.angel_funding}
      />
      <InputField
        label="Number of Employees"
        name="number_of_employees"
        type="number"
        register={register}
        rules={{ required: "Number of Employees is required" }}
        error={errors.number_of_employees}
      />
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Funding Status
        </label>
        <select
          {...register("funding_status", { required: "Funding Status is required" })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="N">No</option>
          <option value="Y">Yes</option>
        </select>
        {errors.funding_status && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.funding_status.message}
          </p>
        )}
      </div>
    </div>
  );
};