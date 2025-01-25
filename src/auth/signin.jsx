import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SubmitBtn from "../components/button";

const Signup = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [fullName, setFullName] = useState(""); 
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(""); 
    const navigate = useNavigate(); 

    const handleSignup = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const response = await fetch('http://your-api-url/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName, email, password }),
            });

            const data = await response.json();

            if (data.success) {
                // Redirect to /home if user is created successfully
                navigate("/home");
            } else {
                // Show an error message if account creation fails
                setError("Error in creating account");
                setEmail(""); 
                setPassword("");
                setFullName(""); 
            }
        } catch (err) {
            // Handle any errors from the API request
            setError("Error in creating account");
            setEmail(""); 
            setPassword(""); 
            setFullName("");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white border border-gray-300 rounded-lg shadow-lg">
                <div className="flex justify-center mb-8">
                    <img alt="Logo" className="w-28 h-28" />
                </div>

                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold">Create an Account</h2>
                    <p className="text-gray-500">Please fill in the details below</p>
                </div>

                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4 relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <div
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ?  <FaEye /> : <FaEyeSlash />}
                        </div>
                    </div>
                    
                    {error && <div className="text-red-500 text-sm mb-3">{error}</div>}

                    <SubmitBtn label="Create Account" color="flex items-center justify-center bg-blue-500" type="submit" />

                </form>

                <p className="mt-6 text-center text-gray-500">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
