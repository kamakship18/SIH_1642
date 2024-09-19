'use client';

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { ChevronRight, ChevronLeft, Check, Router } from "lucide-react";
import { Steps } from "./components/Steps";
import { UserVerificationStep } from "./components/UserVerificationStep";
import { StartupBasicInfoStep } from "./components/StartupBasicInfoStep";
import { StartupLocationStep } from "./components/StartupLocationStep";
import { StartupAdditionalInfoStep } from "./components/StartupAdditionalInfoStep";
import { StartupFundingStep } from "./components/StartupFundingStep";
import { StartupSocialLinksStep } from "./components/StartupSocialLinksStep";
import { ReviewStep } from "./components/ReviewStep";
import { useRouter } from 'next/navigation';

const CombinedVerificationForm = () => {
  const router = useRouter()
  const [step, setStep] = useState(1);
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      aadhaarNumber: "",
      panNumber: "",
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
    },
  });

  const { handleSubmit, trigger } = methods;

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/submit-form", data);
      console.log("Form submitted successfully:", response.data);
      // Handle successful submission (e.g., show success message, redirect)
      router.push("/waiting_page/startup");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle submission error (e.g., show error message)
      router.push("/waiting_page/startup");
    
    }
  };

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <UserVerificationStep />;
      case 2:
        return <StartupBasicInfoStep />;
      case 3:
        return <StartupLocationStep />;
      case 4:
        return <StartupAdditionalInfoStep />;
      case 5:
        return <StartupFundingStep />;
      case 6:
        return <StartupSocialLinksStep />;
      case 7:
        return <ReviewStep />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <Steps currentStep={step} totalSteps={7} />

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <motion.button
                  type="button"
                  onClick={handleBack}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="mr-2 h-5 w-5" />
                  Back
                </motion.button>
              )}
              {step < 7 ? (
                <motion.button
                  type="button"
                  onClick={handleNext}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Next
                  <ChevronRight className="ml-2 h-5 w-5" />
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                  <Check className="ml-2 h-5 w-5" />
                </motion.button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CombinedVerificationForm;
