import "./App.css";

import { Routes, Route } from "react-router-dom";
import Signin from "./Components/Signin";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

function App() {
  const [user, setUser] = useState({});
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const getProfile = async (e) => {
    await axios
      .get("http://localhost:1001/api/profile", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      })
      .then((response) => {
        setisAuthenticated(true);
        console.log(response);
        setUser(response.data.user);
      })
      .catch((error) => {
        toast.error(error.response.data.msg);
      });
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
