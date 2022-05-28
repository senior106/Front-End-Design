import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Country, State } from "country-state-city";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
const SignUp = () => {
  const { handleSubmit } = useForm();
 const navigate=useNavigate();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    subject: "",
    mobile: "",
  });

  const handleValue = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const registrationSubmit = async (e) => {
 
    const { name, email, password, country, subject, mobile } = newUser;

  
    await axios
      .post("http://localhost:1001/api/registration", {
        name,
        email,
        password,
        country,
        subject,
        mobile,
      })
      .then((response) => {
          
        toast.success(response.data.msg);
        navigate("/signin")

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
              <form class="" onSubmit={handleSubmit(registrationSubmit)}>
                <div>
                  <h1 class="text-2xl font-bold">Register to your account</h1>
                </div>
                <div class="flex">
                  <div class="mt-5 px-1">
                    <label class="block text-md mb-2" for="name">
                      Name
                    </label>
                    <input
                      class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                      type="text"
                      name="name"
                      onChange={handleValue}
                      placeholder="name"
                    />
                  </div>
                  <div class="mt-5 px-1">
                    <label class="block text-md mb-2" for="email">
                      Email
                    </label>
                    <input
                      class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                      type="email"
                      name="email"
                      onChange={handleValue}
                      placeholder="email"
                    />
                  </div>
                </div>
                <div class="flex">
                  <div class="mt-5 px-1">
                    <label class="block text-md mb-2" for="password">
                      Password
                    </label>
                    <input
                      class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                      type="password"
                      name="password"
                      onChange={handleValue}
                      placeholder="password"
                    />
                  </div>
                  <div class="mt-5 px-1 ">
                    <label class="block text-md mb-2" for="country">
                      Country
                    </label>
                    <select
                      type="text"
                      onChange={handleValue}
                      name="country"
                      class="  w-full border-2 py-2 rounded-md text-sm outline-none"
                    >
                      <option value="">Country</option>

                      {Country &&
                        Country.getAllCountries().map((item) => (
                          <option key={item.isoCode} value={item.name}>
                            {" "}
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div class="flex ">
                  <div class="mt-5 px-1">
                    <label class="block text-md mb-2" for="subject">
                      Subject
                    </label>
                    <input
                      class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                      type="text"
                      name="subject"
                      onChange={handleValue}
                      placeholder="Subject"
                    />
                  </div>
                  <div class="mt-5 px-1">
                    <label class="block text-md mb-2" for="mobile">
                      Phone
                    </label>
                    <input
                      class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                      type="number"
                      name="mobile"
                      onChange={handleValue}
                      placeholder="phone"
                    />
                  </div>
                </div>

                <div class="">
                  <button
                    type="submit"
                    class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              <p class="mt-8">
                {" "}
                I have an account?{" "}
                <span class="cursor-pointer text-sm text-blue-600">
                  {" "}
                  <Link to="/signin"> Sign In</Link>
                </span>
              </p>
              <Toaster/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
