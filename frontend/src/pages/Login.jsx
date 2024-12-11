import React, { useState } from "react";


function Login() {
  const [activeTab, setActiveTab] = useState("signup");
  const [signupdata, setsignupdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleValue = (e) => {
    const { name, value } = e.target; // Destructure name and value
    setsignupdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupdata), 
      });
  
      if (!response.ok) {
        throw new Error("Failed to signup");
      }
  
      const data = await response.json(); 
      console.log("Signup successful:", data);
      setActiveTab("login")
    } catch (error) {
      console.error("Error during signup:", error.message);
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-[400px] rounded-lg shadow-md p-4">
        {/* Tabs Navigation */}
        <div className="flex justify-between border-b-2 border-gray-200 bg-gray-50 p-2 rounded-t-md">
          <button
            aria-selected={activeTab === "signup"}
            onClick={() => setActiveTab("signup")}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              activeTab === "signup"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            } hover:text-blue-500`}
          >
            Signup
          </button>
          <button
            aria-selected={activeTab === "login"}
            onClick={() => setActiveTab("login")}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
              activeTab === "login"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            } hover:text-blue-500`}
          >
            Login
          </button>
        </div>

        {/* Tabs Content */}
        <div className="mt-2">
          {activeTab === "signup" && (
            <div className="text-sm text-gray-600">
              <span className="text-md font-semibold font-serif">Signup</span>
              <p className="mt-1 text-sm font-serif">
                Create a new account and click signup when you're done.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col mt-2">
                  <label
                    htmlFor="name"
                    className="text-lg font-serif font-semibold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="name"
                    placeholder="ex: rupam"
                    className="outline-none border-2 border-gray-200 p-2 rounded-xl font-serif text-md"
                    onChange={handleValue}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-lg font-serif font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ex: rupam"
                    className="outline-none border-2 border-gray-200 p-2 rounded-xl font-serif text-md"
                    onChange={handleValue}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="text-lg font-serif font-semibold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="ex: ********"
                    className="outline-none border-2 border-gray-200 p-2 rounded-xl font-serif text-md"
                    onChange={handleValue}
                  />
                </div>
              </div>
              <button
                className="mt-2 border-2 border-gray-200 py-2 px-4 rounded-xl font-semibold font-serif hover:bg-black hover:text-white"
                onClick={handleSignup}
              >
                Signup
              </button>
            </div>
          )}
          {activeTab === "login" && (
            <div className="text-sm text-gray-600">Login to your account.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;