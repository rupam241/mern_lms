import React, { useState, useEffect } from "react";

const ToastNotification = ({ message }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (message) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2000); 

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    showToast && (
      <div
        className="fixed bottom-10 right-5 bg-gray-800 text-blue-400 p-4 rounded-lg opacity-90 transform transition-all duration-500 ease-out"
        style={{
          transform: showToast ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.9)',
          opacity: showToast ? 1 : 0,
        }}
      >
        {message}
      </div>
    )
  );
};

export default ToastNotification;
