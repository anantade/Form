import React, { useState } from "react";
import "./Style.css";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);

    setFirstName("");
    setLastName("");
    setEmail("");
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
            value={firstName} required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="lastName">Last Name: -</label>
          <input
            type="text"
            placeholder="Enter last name"
            className="input1"
            value={lastName} required
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="email">Email: -</label>
          <input
            type="email"
            placeholder="email"
            className="input2"
            value={email} required
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
