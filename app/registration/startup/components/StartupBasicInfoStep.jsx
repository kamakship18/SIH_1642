import React from "react";
import { useFormContext } from "react-hook-form";
import { InputField } from "./InputField";

export const StartupBasicInfoStep = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Step 2: Startup Basic Information
      </h2>
      <InputField
        label="Recognition Number"
        name="recognition_number"
        register={register}
        rules={{ required: "Recognition Number is required" }}
        error={errors.recognition_number}
      />
      <InputField
        label="Name of Entity"
        name="name_of_entity"
        register={register}
        rules={{ required: "Entity Name is required" }}
        error={errors.name_of_entity}
      />
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Entity Type
        </label>
        <select
          {...register("slug", { required: "Entity Type is required" })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Select</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="proprietorship">Proprietorship</option>
          <option value="partnership">Partnership</option>
        </select>
        {errors.slug && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {errors.slug.message}
          </p>
        )}
      </div>
    </div>
  );
};