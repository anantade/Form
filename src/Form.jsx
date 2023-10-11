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
    <div className=" h-screen  bg-[url('https://static.vecteezy.com/system/resources/previews/008/715/553/non_2x/two-birds-sit-together-on-a-branch-on-a-dark-starry-moonlit-night-vector.jpg')]  ">

       <div className="md:pt-[2%]  md:pl-[7%] md:ml-10 ">

         {/* left side of page */}
        <div className="mt-5 w-[90%] h-[90%]  pl-2 flex rounded-xl bg-white pr-0">

         <div className=" pb-5">
          <div className="flex">
          <div>
            <button className="bg-blue-500 ml-10 font-bold py-2 px-4 rounded-sm text-white ">Register</button>
          </div>

          <div>
            <button className=" ml-2 font-bold py-2 px-4 rounded-lg  ">Sing in</button>
          </div>
        </div>
          <h1 className=" text-4xl pb-8 pl-64 font-bold underline">Register</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName" className=" text-lg  font-bold">First Name: -</label>
          <input
            type="text"
            placeholder="Enter First name"
            className="w-72 h-10 md:ml-[70px] ml-3 border-spacing-1.5 border-black rounded-xl bg-slate-200 pl-2  shadow-lg shadow-[#4b5563]"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="lastName" className=" text-lg font-bold  ">Last Name: -</label>
          <input
            type="text"
            placeholder="Enter last name"
            className="w-72 h-10 md:ml-[72px] ml-3  border-spacing-1.5 border-black rounded-xl bg-slate-200 pl-2 shadow-lg shadow-[#4b5563]"
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="email" className=" text-lg font-bold  ">Email: -</label>
          <input
            type="email"
            placeholder="email"
            className="w-72 h-10 md:ml-[116px] ml-3  border-spacing-1.5 border-black rounded-xl bg-slate-200 pl-2 shadow-lg shadow-[#4b5563]"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="number" className=" text-lg font-bold  ">Mobile Number: -</label>
          <input
            type="number"
            placeholder="Number"
            className="w-72 h-10 md:ml-[28px] ml-3  border-spacing-1.5 border-black rounded-xl bg-slate-200 pl-2 shadow-lg shadow-[#4b5563]"
            value={number}
            required
            onChange={(e) => setNumber(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="password" className=" text-lg font-bold  ">Password: -</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="w-72 h-10 md:ml-[85px] ml-3  border-spacing-1.5 border-black rounded-xl bg-slate-200 pl-2 shadow-lg shadow-[#4b5563]"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="ml-2">
            <input
              type="checkbox"
              id="showPassword"
              onChange={togglePasswordVisibility}
            />
            <label htmlFor="showPassword" >Show</label>
          </span>
          <br />
          <br />

          <label htmlFor="confirmpassword" className=" text-lg font-bold  ">Confirm Password: -</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-72 h-10 md:ml-3 ml-3 rounded-xl bg-slate-200 pl-2 shadow-lg shadow-[#4b5563]"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className="ml-1">
            <input
              type="checkbox"
              id="showConfirmPassword"
              onChange={toggleConfirmPasswordVisibility}
            />
            <label htmlFor="showConfirmPassword" className="">Show</label>
          </span>

          <br />
          <br />

          <button type="submit" className=" md:ml-48 ml-20  hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded bg-green-300 shadow-lg shadow-[#4b5563]">Register</button>
          
          
          <button type="button" onClick={handleReset} className="ml-10  hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded bg-red-300 shadow-lg shadow-[#4b5563]">Reset</button>
        </form>
        </div>
  
      <div className="w-[51.85%] bg-[#090659] rounded-xl md:block hidden">

       <img src="https://static.vecteezy.com/system/resources/previews/008/715/553/non_2x/two-birds-sit-together-on-a-branch-on-a-dark-starry-moonlit-night-vector.jpg" className="rounded-xl h-[50%] w-[100%]" alt="" />
      
       <div className="p-1">
         <p className="text-white text-center text-3xl mt-11">Welcome Page</p>
         <p className="text-gray-400 pt-2 text-center text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Sint voluptatibus perspiciatis iste saepe neque nam <br /> fugiat voluptatum quo expedita impedit.</p>
       </div>

         <div className="flex">
          <hr className="w-28 h-1 mt-6 ml-3 bg-white border-0 rounded dark:bg-gray-400" />
            <p className="ml-24 text-white mt-3 text-lg">Get Connected</p>
          <hr className="w-28 h-1 mt-6 ml-24 bg-white border-0 rounded dark:bg-gray-400" />
         </div>

      </div>

      </div>
    </div>
</div>
  );
}
