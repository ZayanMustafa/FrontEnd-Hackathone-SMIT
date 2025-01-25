import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios"; 
import SubmitBtn from "../components/button";

const Login = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(""); 
    const navigate = useNavigate();  

    // Handle login form submission
    const handleLogin = async (e) => {
        e.preventDefault(); 

        setLoading(true); 
        setError(""); 

        try {

            const response = await axios.post("https://your-api-url.com/login", {
                email,
                password,
            });

            if (response.data.success) {
                navigate("/home"); 
            } else {
                setError("Wrong email or password");
            }
        } catch (err) {
            console.error("Error during login:", err);
            setError("Error occurred. Please try again.");
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="w-full max-w-md p-8 bg-white border border-gray-300 rounded-lg shadow-lg">
                <div className="flex justify-center mb-8">
                    <img alt="Logo" className="w-28 h-28" />
                </div>
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold">Hey! Welcome Back</h2>
                    <p className="text-gray-500">Please fill the form to continue</p>
                </div>
                <form className="max-w-sm mx-auto" onSubmit={handleLogin}>
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@flowbite.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                required
                            />
                        </div>
                        <label
                            htmlFor="remember"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Remember me
                        </label>
                    </div>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>} 
                    <SubmitBtn label={loading ? "Logging in..." : "Login"} color="bg-blue-500" type="submit" disabled={loading} />
                </form>
            </div>
        </div>
    );
};

export default Login;
