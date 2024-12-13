import React, { useState, useEffect } from "react";

const ToastNotification = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true); // Show the toast when message is passed
      const timer = setTimeout(() => {
        setIsVisible(false); // Hide the toast after 3 seconds
      }, 3000);

      return () => clearTimeout(timer); // Clear the timeout if the component unmounts or the message changes
    }
  }, [message]); // Dependency on message to trigger re-render when it changes

  return (
    <div
      className={`fixed bottom-4 right-4 w-64 bg-green-500 text-white p-4 rounded-lg transition-all duration-300 ease-in-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {message}
    </div>
  );
};

export default ToastNotification;
