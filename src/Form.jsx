import React, { useState } from "react";
import "./Style.css";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      alert("Password and Confirm Password do not match.");
      return; // Exit the function
    }

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPasswordsMatch(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPasswordsMatch(true);
  };

  return (
    <div className="p-40 bg-gradient-to-r from-indigo-500 ">
      <div className="center">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name: -</label>
          <input
            type="text"
            placeholder="Enter First name"
            className="w-96 h-10 ml-[70px] border-spacing-1.5 border-black rounded-xl bg-slate-200 pl-2"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="lastName">Last Name: -</label>
          <input
            type="text"
            placeholder="Enter last name"
            className="w-96 h-10 ml-[70px] border-spacing-1.5 border-black rounded-xl bg-slate-200 pl-2"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="email">Email: -</label>
          <input
            type="email"
            placeholder="email"
            className="w-96 h-10 ml-[107px] border-spacing-1.5 border-black rounded-xl bg-slate-200 pl-2"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="password">Password: -</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="w-96 h-10 ml-[79px] border-spacing-1.5 border-black rounded-xl bg-slate-200 pl-2"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="ml-8">
            <input
              type="checkbox"
              id="showPassword"
              onChange={togglePasswordVisibility}
            />
            <label htmlFor="showPassword">Show Password</label>
          </span>
          <br />
          <br />

          <label htmlFor="confirmpassword">Confirm Password: -</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-96 h-10 ml-5 border-spacing-1.5 border-black rounded-xl bg-slate-200 pl-2 "
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className="ml-8">
            <input
              type="checkbox"
              id="showConfirmPassword"
              onChange={toggleConfirmPasswordVisibility}
            />
            <label htmlFor="showConfirmPassword">Show Confirm Password</label>
          </span>

          <br />
          <br />

          <button type="submit" className=" ml-48  hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded bg-green-300 shadow-lg shadow-[#4b5563]">Submit</button>
          
          {/* Reset button */}
          <button type="button" onClick={handleReset} className="ml-10  hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded bg-red-300 shadow-lg shadow-[#4b5563]">Reset</button>
        </form>
      </div>
    </div>
  );
}
