import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Style.css'


export default function Login() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();

    console.log("Email : -", email )
    console.log("Password : -", password )
 
    setEmail("");
    setPassword("");
 }


  return (
    <div className=' h-screen bg-cover bg-center flex items-center justify-center min-h-screen bg-[url("https://images8.alphacoders.com/468/468739.jpg")]'>

      <div className="relative w-[400px] h-[440px] bg-transparent  rounded-xl backdrop-blur-lg shadow-sm shadow-white pt-[50px] ">

        <div className="w-[100%] p-[30px]">
          <p className="font-bold text-center text-4xl text-white">Login</p>

          <form onSubmit={handleSubmit}>
            <div className="relative w-[100%] h-[50px] border-b-2 mt-[30px] mb-[30px] border-black ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mt-5 absolute right-2 text-lg leading-[57px] "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <input type="email" required value={email}  className="w-[100%] h-[100%] bg-transparent border-none focus:outline-none " onChange={(e) => setEmail(e.target.value) } />
              <label htmlFor="email" className="absolute top-1/2 left-5 transform -translate-y-1/2 text-lg text-gray-400 font-semibold pointer-events-none label "> Email</label>
            </div>

            <div className="relative w-[100%] h-[50px] border-b-2 mt-[30px] mb-[30px] border-black">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mt-5 absolute right-2 text-lg leading-[57px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </span>
              <input type="password" required value={password} className="w-[100%] h-[100%] bg-transparent border-none focus:outline-none" onChange={(e) => setPassword(e.target.value) } />
              <label htmlFor="password" className="absolute top-1/2 left-5 transform -translate-y-1/2 text-lg text-gray-400 font-semibold pointer-events-none label">Password</label>
            </div>

            <div className="flex ">
                <p htmlFor="" className="text-white"><input type="Checkbox" /> Remember me</p>
                <Link to="" className="ml-20 text-yellow-500">Forget password ?</Link>   
            </div>
            <button type="submit" className="text-white bg-violet-600 w-[350px] h-10 mt-5 rounded-lg font-bold">LogIn</button>

            <div className="flex mt-2">
              <p className="text-white">Dont have an account ? </p>
                <Link to="/Form" className="text-blue-500"><u>Register</u></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
