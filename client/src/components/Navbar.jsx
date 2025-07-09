import React from "react";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <nav className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-3">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Logo */}
        <img className="w-32 sm:w-38" src={assets.logo} alt="Logo" />

        {isSignedIn ? (
          <div>
            <UserButton />
          </div>
        ) : (
          <button
            type="button"
            onClick={() => openSignIn({})}
            className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-full text-xs sm:text-sm px-4 sm:px-5 py-3 inline-flex items-center gap-1 sm:gap-2 transition-all duration-200"
          >
            Get started
            <img
              src={assets.arrow_icon}
              alt="icon"
              className="w-3 sm:w-4 h-3 sm:h-4"
            />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
