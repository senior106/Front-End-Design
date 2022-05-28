import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Country, State } from "country-state-city";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
const Signin = () => {
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const handleValue = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const loginSubmit = async (e) => {
    const { email, password } = newUser;

    await axios
      .post("http://localhost:1001/api/login", {
        email,
        password,
      })
      .then((response) => {
           localStorage.setItem("userToken", response.data.token);
        
       
           toast.success("Log in successfully.");
        window.location.href="/";
      })
      .catch((error) => {
        toast.error(error.response.data.msg);
      });
  };
  return (
    <div>
      <div class="">
        <div class="flex justify-center ">
          <div class="bg-white  min-h-screen w-1/2 flex justify-center items-center">
            <div class="shadow-xl p-4">
              <form class="" onSubmit={handleSubmit(loginSubmit)}>
                <div>
                  <span class="text-sm text-gray-900">Welcome back</span>
                  <h1 class="text-2xl font-bold">Login to your account</h1>
                </div>
                <div class="mt-5">
                  <label class="block text-md mb-2" for="password">
                    Password
                  </label>
                  <input
                    class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                    onChange={handleValue}
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                </div>
                <div class="my-3">
                  <label class="block text-md mb-2" for="email">
                    Email
                  </label>
                  <input
                    class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                    onChange={handleValue}
                    type="email"
                    name="email"
                    placeholder="email"
                  />
                </div>
                <div class="flex justify-between">
                  <span class="text-sm text-blue-700 hover:underline cursor-pointer">
                    Forgot password?
                  </span>
                </div>
                <div class="">
                  <button class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">
                    Login now
                  </button>
                </div>
              </form>
              <p class="mt-8">
                {" "}
                Dont have an account?{" "}
                <span class="cursor-pointer text-sm text-blue-600">
                  {" "}
                  <Link to="/signup"> Sign Up</Link>
                </span>
              </p>
            </div>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
