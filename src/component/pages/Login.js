import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const cookie = new Cookies()
    let resultFetch = await fetch(`https://test-binar.herokuapp.com/auth/login`, {
      method: "POST",
      body: JSON.stringify(values),
    })
    resultFetch = await resultFetch.json()
    
      if (resultFetch.status=="OK") {

        cookie.set("token",resultFetch.result.access_token,{path:"/"})
        navigate("/Home")
      }
  };

  

  return (
    <div className="container mx-auto p-4 bg-white w-screen h-screen flex justify-center items-center">
      <div className=" w-1/3 mx-auto my-12 content-center">
        <h1 className="text-4xl font-bold text-center my-8">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-4 border shadow-md py-12 px-12 rounded-xl"
        >
          <input
            type="email"
            name="email"
            className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="Email address"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <input
            type="password"
            name="password"
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            placeholder="Password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <button
            type="submit"
            className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent  bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center font-medium focus:outline-none"
            
          >
            Login
          </button>
        </form>
        <div className="flex flex-col items-center mt-5">
          <p className="mt-1 text-sm font-light text-gray-500">
            Don't have an account?
            <a href="/SignUp" className="ml-1 font-medium text-blue-400">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
