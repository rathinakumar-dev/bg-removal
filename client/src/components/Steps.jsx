import React from "react";
import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-4 m-4 py-20 md:py-30 md:pb-36">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-6">
        Steps to remove background <br /> image in seconds
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Step 1 */}
        <div className="card bg-base-100 w-80 shadow-lg border border-gray-200 rounded-lg hover:scale-105 transition-all duration-500">
          <div className="card-body p-5">
            <h2 className="card-title text-xl mb-1 flex gap-4 items-center font-medium">
              <img src={assets.upload_icon} alt="icon" width={35} height={35} />
              Upload Your Image
            </h2>
            <p className="ms-13 text-neutral-500">
              Pick a photo to start. You can use any image format.
            </p>
          </div>
        </div>
        {/* Step 2 */}
        <div className="card bg-base-100 w-80 shadow-lg border border-gray-200 rounded-lg hover:scale-105 transition-all duration-500">
          <div className="card-body p-5">
            <h2 className="card-title text-xl mb-1 flex gap-4 items-center font-medium">
              <img
                src={assets.remove_bg_icon}
                alt="icon"
                width={35}
                height={35}
              />
              Remove Background
            </h2>
            <p className="ms-13 text-neutral-500">
              AI erases the background in seconds. Preview and adjust if needed.
            </p>
          </div>
        </div>
        {/* Step 3 */}
        <div className="card bg-base-100 w-80 shadow-lg border border-gray-200 rounded-lg hover:scale-105 transition-all duration-500">
          <div className="card-body p-5">
            <h2 className="card-title text-xl mb-1 flex gap-4 items-center font-medium">
              <img
                src={assets.download_icon}
                alt="icon"
                width={35}
                height={35}
              />
              Download Image
            </h2>
            <p className="ms-13 text-neutral-500">
              Save your image with a transparent background. Ready to use!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
