import React, { useState } from "react";
import "./Style.css";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
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

    if (firstName.length < 4) {
      alert("First Name should at least four char");
      return; 
    }

    if (lastName.length < 4) {
      alert("Last Name should at least four char");
      return; 
    }

    if (number.length < 10 || number.length >= 11) {
      alert(" Mobile Number only ten number ");
      return; 
    }

    if (password.length < 8) {
      alert(" Password must be at least 8 char ");
      return; 
    }

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Mobile Number:", number);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    alert("You are successfully Register");

    setFirstName("");
    setLastName("");
    setEmail("");
    setNumber("");
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
    setNumber("");
    setPassword("");
    setConfirmPassword("");
    setPasswordsMatch(true);
  };

  return (
    <div className="md:pt-40 md:pb-20 md:pl-40 pl-2 pt-10 pb-[100%] bg-gradient-to-r from-indigo-500 ">
      <div className="center">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName" className=" text-lg font-bold">First Name: -</label>
          <input
            type="text"
            placeholder="Enter First name"
            className="w-96 h-10 md:ml-[70px] ml-3 border-spacing-1.5 border-black rounded-xl bg-slate-200 pl-2  shadow-lg shadow-[#4b5563]"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="lastName" className=" text-lg font-bold">Last Name: -</label>
          <input
            type="text"
            placeholder="Enter last name"
            className="w-96 h-10 md:ml-[72px] ml-3  border-spacing-1.5 border-black rounded-xl bg-slate-200 pl-2 shadow-lg shadow-[#4b5563]"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="email" className=" text-lg font-bold">Email: -</label>
          <input
            type="email"
            placeholder="email"
            className="w-96 h-10 md:ml-[116px] ml-3  border-spacing-1.5 border-black rounded-xl bg-slate-200 pl-2 shadow-lg shadow-[#4b5563]"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="number" className=" text-lg font-bold">Mobile Number: -</label>
          <input
            type="number"
            placeholder="Number"
            className="w-96 h-10 md:ml-[28px] ml-3  border-spacing-1.5 border-black rounded-xl bg-slate-200 pl-2 shadow-lg shadow-[#4b5563]"
            value={number}
            required
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="password" className=" text-lg font-bold">Password: -</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="w-96 h-10 md:ml-[85px] ml-3  border-spacing-1.5 border-black rounded-xl bg-slate-200 pl-2 shadow-lg shadow-[#4b5563]"
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
            <label htmlFor="showPassword" >Show Password</label>
          </span>
          <br />
          <br />

          <label htmlFor="confirmpassword" className=" text-lg font-bold">Confirm Password: -</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-96 h-10 md:ml-3 ml-3  border-spacing-1.5 border-black rounded-xl bg-slate-200 pl-2 shadow-lg shadow-[#4b5563]"
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

          <button type="submit" className=" md:ml-48 ml-20  hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded bg-green-300 shadow-lg shadow-[#4b5563]">Submit</button>
          
          
          <button type="button" onClick={handleReset} className="ml-10  hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded bg-red-300 shadow-lg shadow-[#4b5563]">Reset</button>
        </form>
      </div>
    </div>
  );
}
