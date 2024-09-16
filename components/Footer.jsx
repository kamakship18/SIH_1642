import React from "react";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="mx-auto w-full max-w-screen-2xl p-4 py-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6">
            <a
              href="https://ayush.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/1.jpg"
                alt="Logo"
                width={250}
                height={250}
                layout="intrinsic"
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Contact Us
              </h2>
              <ul className="text-gray-400 text-sm">
                <li className="mb-4">
                  <p>1800-11-22-02 (9:00 AM to 5:30 PM) (IST)</p>
                  <p>ph: 011-24651942</p>
                </li>
                <li>
                  <p className="font-bold">For Website related:</p>
                  ph: 011-24648354
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Other</h2>
              <ul className="text-gray-400 text-sm">
                <li className="mb-4">
                  <a
                    href="https://ayush.gov.in/webpolicy.html#Help_S"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="https://ayush.gov.in/terms_and_condition.html"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-500" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400">
            <p>
              <strong>© Copyright Ministry of Ayush. </strong> All Rights
              Reserved
            </p>
            In-house product
          </span>
          <div className="flex mt-4 gap-4 sm:mt-0">
            <a
              href="https://www.facebook.com/moayush"
              className="text-gray-400 hover:text-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://x.com/moayush"
              className="text-gray-400 hover:text-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.youtube.com/@MinistryofAYUSHofficial/videos"
              className="text-gray-400 hover:text-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon />
            </a>
            <a
              href="https://www.instagram.com/ministryofayush/"
              className="text-gray-400 hover:text-gray-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
