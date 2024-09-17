import React from "react";
import { useFormContext } from "react-hook-form";

export const ReviewStep = () => {
  const { getValues } = useFormContext();
  const formData = getValues();

  const renderValue = (value) => {
    if (typeof value === "object" && value !== null) {
      return (
        <ul className="list-disc list-inside">
          {Object.entries(value).map(([key, val]) => (
            <li key={key}>
              {key}: {renderValue(val)}
            </li>
          ))}
        </ul>
      );
    }
    return value.toString();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Step 7: Review & Submit
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
                {renderValue(value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};