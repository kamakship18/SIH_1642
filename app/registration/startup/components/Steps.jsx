import React from "react";
import { Check } from "lucide-react";

export const Steps = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            i + 1 === currentStep
              ? "bg-blue-800 text-white"
              : i + 1 < currentStep
              ? "bg-green-500 text-white"
              : "bg-gray-300 text-gray-600"
          }`}
        >
          {i + 1 < currentStep ? <Check size={16} /> : i + 1}
        </div>
      ))}
    </div>
  );
};