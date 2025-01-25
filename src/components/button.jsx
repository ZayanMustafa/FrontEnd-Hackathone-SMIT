import React from "react";
import { toast } from "react-toastify";

// Notify Function
export const notify = (message, type = "success") => {
  const options = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  if (type === "success") {
    toast.success(message, options);
  } else if (type === "error") {
    toast.error(message, options);
  }
};

// Submit Button Component
const SubmitBtn = ({ label, color, notifyMessage, onClose, btnSize = "md", disabled = false }) => {
  const handleClick = () => {
    if (notifyMessage) notify(notifyMessage); // Call notify only if a message is provided
    if (onClose) onClose(); // Call onClose only if it is provided
  };

  // Tailwind classes for button size
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type="button"
      className={`rounded-md ${sizeClasses[btnSize]} ${
        disabled
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : `${color} hover:opacity-90`
      } text-white font-medium transition`}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default SubmitBtn;
