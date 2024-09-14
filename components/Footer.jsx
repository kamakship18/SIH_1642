import React from "react";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-900">
        <div className="mx-auto w-full max-w-screen-2xl p-4 py-6">
          <div className="md:flex md:justify-between">
            <div className="mb-6">
              <a href="https://ayush.gov.in/" target="_blank">
                <Image src="/logo.jpg" alt="Logo" width={250} height={250} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  Contact Us
                </h2>
                <ul className="text-gray-400 text-sm">
                  <li className="mb-4 mr-10">
                    <p>1800-11-22-02 (9:00 AM to 5:30 PM) (IST)</p>
                    <p>ph: 011-24651942</p>
                  </li>
                  <li>
                    <p className="font-bold">For Website related:</p> ph:
                    011-24648354
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  Other
                </h2>
                <ul className="text-gray-400 font-sm">
                  <li className="mb-4">
                    <a
                      href="https://ayush.gov.in/webpolicy.html#Help_S"
                      className="hover:underline"
                      target="_blank"
                    >
                      Help
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ayush.gov.in/terms_and_condition.html"
                      className="hover:underline"
                      target="_blank"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-500 mx-auto" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-400">
              <p>
                <strong>© Copyright Ministry of Ayush. </strong> All Rights
                Reserved
              </p>
              In house product
            </span>
            <div className="flex mt-4 gap-4 sm:mt-0">
              <a
                href="https://www.facebook.com/moayush"
                className="text-gray-400 hover:text-gray-100"
                target="_blank"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://x.com/moayush"
                className="text-gray-400 hover:text-gray-100"
                target="_blank"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.youtube.com/@MinistryofAYUSHofficial/videos"
                className="text-gray-400 hover:text-gray-100"
                target="_blank"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://www.instagram.com/ministryofayush/"
                className="text-gray-400 hover:text-gray-100"
                target="_blank"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
