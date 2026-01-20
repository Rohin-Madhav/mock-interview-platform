import React from "react";
import {Link} from "react-router-dom"

function Footer() {
  return (
    <footer className="p-4 fixed bottom-0 w-full border-t border-gray-200 mt-auto bg-gray-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center gap-4 flex-wrap">
        <span className="text-gray-500">
          © {new Date().getFullYear()} Mock Interview Platform
        </span>
        <nav>
          <Link 
           to={""}
            className="mr-3 text-gray-700 no-underline hover:text-gray-900"
          >
            About
          </Link>
          <Link
            to={""}
            className="mr-3 text-gray-700  hover:text-gray-900"
          >
            Features
          </Link>
          <Link
            to={""}
            className="text-gray-700  hover:text-gray-900"
          >
            Stories
          </Link>
          <Link
            to={""}
            className="text-gray-700 hover:text-gray-900"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
