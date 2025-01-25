import React from "react";
import { FaTwitter, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";  // Import the necessary icons
import { Link } from "react-router";

export default function Footer() {
    return (
        <React.Fragment>
            <footer className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <div className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full">
                            <FaGithub />
                        </div>
                        <span className="ml-3 text-xl">App Name</span>
                    </a>
                    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
                        © 2025 App Name —
                        <a
                            href="https://github.com/ZayanMustafa/"
                            className="text-gray-500 ml-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @zayyanmustafa
                        </a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link to={"https://github.com/ZayanMustafa/"} className="text-gray-400">

                            <FaTwitter className="w-5 h-5" />
                        </Link>
                        <Link to={"https://github.com/ZayanMustafa/"} className="ml-3 text-gray-400">
                            <FaGithub className="w-5 h-5" />
                        </Link>
                        <Link to={"https://github.com/ZayanMustafa/"} className="ml-3 text-gray-400">
                            <FaInstagram className="w-5 h-5" />
                        </Link>
                        <Link to={"https://github.com/ZayanMustafa/"} className="ml-3 text-gray-400">
                            <FaFacebook className="w-5 h-5" />
                        </Link>
                    </span>
                </div>
            </footer>
        </React.Fragment>
    );
}
