import React from "react";
import { useFormContext } from "react-hook-form";
import { InputField } from "./InputField";

export const StartupSocialLinksStep = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Step 6: Startup Social Links
      </h2>
      <InputField
        label="Facebook"
        name="social_links.facebook"
        type="url"
        register={register}
        rules={{
          pattern: {
            value: /^https?:\/\/(www\.)?facebook.com\/.+$/,
            message: "Invalid Facebook URL",
          },
        }}
        error={errors.social_links?.facebook}
      />
      <InputField
        label="Twitter"
        name="social_links.twitter"
        type="url"
        register={register}
        rules={{
          pattern: {
            value: /^https?:\/\/(www\.)?twitter.com\/.+$/,
            message: "Invalid Twitter URL",
          },
        }}
        error={errors.social_links?.twitter}
      />
      <InputField
        label="LinkedIn"
        name="social_links.linkedin"
        type="url"
        register={register}
        rules={{
          pattern: {
            value: /^https?:\/\/(www\.)?linkedin.com\/(company|in)\/.+$/,
            message: "Invalid LinkedIn URL",
          },
        }}
        error={errors.social_links?.linkedin}
      />
      <InputField
        label="YouTube"
        name="social_links.youtube"
        type="url"
        register={register}
        rules={{
          pattern: {
            value: /^https?:\/\/(www\.)?youtube.com\/.+$/,
            message: "Invalid YouTube URL",
          },
        }}
        error={errors.social_links?.youtube}
      />
      <InputField
        label="Other"
        name="social_links.other"
        type="url"
        register={register}
        rules={{
          pattern: {
            value: /^https?:\/\/.+\..+$/,
            message: "Invalid URL format",
          },
        }}
        error={errors.social_links?.other}
      />
    </div>
  );
};