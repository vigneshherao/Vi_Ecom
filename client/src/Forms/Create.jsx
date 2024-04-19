import React, { useRef, useState } from "react";
import handleValidation from "../utils/validation/loginVaidation";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

const Create = () => {
  const [validMessage, setValidMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("Something went Wrong");
  const [alert, setAlert] = useState(false);
  const username = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const navigate = useNavigate();


  const handleOnClick = async (e) => {
    e.preventDefault();
    const name = username.current.value;
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    const validateMessage = handleValidation(email, password);
    setValidMessage(validateMessage);
    if (!validateMessage) {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const errorMessage = await response.text();
      console.log(errorMessage)
      const preContent = errorMessage.match(/<pre>([^<]+)<br/s);
      if (preContent) {
        setAlertMessage("User Created!");
        navigate("/");
      } else {
        setAlertMessage(preContent ? preContent[1] : "User Created!");
      }
      setAlert(true);
    }
  };
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        {alert ? <Alert data={alertMessage} /> : null}
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border">
          <h2 className="text-3xl font-semibold text-black mb-4">SIGN UP</h2>
          <form onSubmit={handleOnClick}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-black"
              >
                Username
              </label>
              <input
                ref={username}
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                placeholder="Enter Username"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 bg-gray-100 text-black"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Email
              </label>
              <input
                ref={emailInput}
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                placeholder="Enter Email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 bg-gray-100 text-black"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black"
              >
                Password
              </label>
              <input
                ref={passwordInput}
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                placeholder="Enter Password"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 bg-gray-100 text-black"
              />
            </div>
            <p className="text-center text-red-700 font-semibold m-2">
              {validMessage}
            </p>
            <div className="text-center">
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring focus:ring-indigo-200"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
