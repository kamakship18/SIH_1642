import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import axios from "axios";
import { InputField } from "./InputField";

export const StartupAdditionalInfoStep = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  const websiteUrl = watch("website_url");
  const [isUrlValid, setIsUrlValid] = useState(null); // Function to check if URL is working

  const checkUrl = async (url) => {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setIsUrlValid(true);
      } else {
        setIsUrlValid(false);
      }
    } catch (error) {
      setIsUrlValid(false);
    }
  }; // Watch for URL changes to validate

  React.useEffect(() => {
    if (websiteUrl) {
      checkUrl(websiteUrl);
    } else {
      setIsUrlValid(null);
    }
  }, [websiteUrl]);

  return (
    <div className="space-y-4">
           {" "}
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                Step 4: Startup Additional Information      {" "}
      </h2>
            {/* About Startup field */}     {" "}
      <div>
               {" "}
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    About Startup        {" "}
        </label>
               {" "}
        <textarea
          {...register("about_startup", {
            required: "About Startup is required",
          })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          rows="4"
        />
               {" "}
        {errors.about_startup && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {errors.about_startup.message}         {" "}
          </p>
        )}
             {" "}
      </div>
            {/* Stage field */}     {" "}
      <div>
               {" "}
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Stage        {" "}
        </label>
               {" "}
        <select
          {...register("stage", { required: "Stage is required" })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
                    <option value="">Select</option>         {" "}
          <option value="Seed">Seed</option>         {" "}
          <option value="Growth">Growth</option>         {" "}
          <option value="Mature">Mature</option>         {" "}
          <option value="Scaling">Scaling</option>       {" "}
        </select>
               {" "}
        {errors.stage && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        {errors.stage.message}         {" "}
          </p>
        )}
             {" "}
      </div>
            {/* Website URL field with URL checking */}
           {" "}
      <InputField
        label="Website URL"
        name="website_url"
        type="url"
        register={register}
        rules={{
          required: "Website URL is required",
          pattern: {
            value: /^https?:\/\/.+\..+$/,
            message: "Invalid URL format",
          },
        }}
        error={errors.website_url}
      />
           {" "}
      {isUrlValid !== null && (
        <p className="mt-2 text-sm">
                   {" "}
          {isUrlValid ? (
            <span className="text-green-600 dark:text-green-500">
              ✔ URL is working
            </span>
          ) : (
            <span className="text-red-600 dark:text-red-500">
              ✖ URL is not reachable
            </span>
          )}
                 {" "}
        </p>
      )}
         {" "}
    </div>
  );
};
