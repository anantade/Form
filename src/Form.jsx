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

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };

 
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

 
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      <div className="center">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name: -</label>
          <input
            type="text"
            placeholder="Enter First name"
            className="input1"
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
            className="input1"
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
            className="input2"
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
            className="input2"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>
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
            className="input2"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span>
            <input
              type="checkbox"
              id="showConfirmPassword"
              onChange={toggleConfirmPasswordVisibility}
            />
            <label htmlFor="showConfirmPassword">Show Confirm Password</label>
          </span>
          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
