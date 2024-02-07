import LoginSignUpImage from "../../../src/Images/login_signup_image.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { motion } from 'framer-motion';

const Signup = () => {
  const isValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in !";

    if (id === null || id === "") {
      isproceed = false;
      errormessage += " Full Name";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }

    if (!isproceed) {
      alert(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        alert("Please Enter the Valid email !");
      }
    }

    return isproceed;
  };

  const navigate = useNavigate();

  const [id, idchange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    let regobj = { id, email, password };

    if (isValidate()) {
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          alert("SignUp Successfully :) * (: ");
          navigate("/login");
        })
        .catch((err) => {
          alert("Failed :" + err.message);
        });
    }
  };

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.6 }}>
      <div className="w-full h-full mb-12">
        <div className="container mx-auto">
          <div className="flex flex-col lg:justify-between gap-28 items-center lg:flex-row">
            <div className="flex flex-col gap-[50px]">
              <div className="flex flex-col gap-[17px]">
                <h1 className="font-primary font-bold text-[#311F09] text-[40px]">
                  Sign up
                </h1>
                <p className="text-[#5C4529] font-primary text-[14px] font-[400]">
                  Don't have an account?{" "}
                  <Link
                    className="text-[#0094FF] font-primary text-[14px] hover:opacity-75 transition-all duration-150"
                    to={"/login"}
                  >
                    Login
                  </Link>
                </p>
              </div>

              <form
                className="flex flex-col gap-[50px]"
                onSubmit={handlesubmit}
              >
                <div className="flex flex-col gap-[15px]">
                  <label className="font-normal font-primary text-[#311F09] text-[14px]">
                    Full name
                  </label>
                  <input
                    className="w-[250px] lg:w-[500px] md:w-[420px]  rounded-[10px] font-primary h-[60px] placeholder:text-[#311F09] text-[14px] pl-3 text-[#311F09] outline-none bg-[#D0CCC7] opacity-80"
                    type="text"
                    placeholder="Full name"
                    autoComplete="off"
                    value={id}
                    onChange={(e) => idchange(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-[15px]">
                  <label className="font-normal font-primary text-[#311F09] text-[14px]">
                    Email address
                  </label>
                  <input
                    className="w-[250px] lg:w-[500px] md:w-[420px]   rounded-[10px] font-primary h-[60px] placeholder:text-[#311F09] text-[14px] pl-3 text-[#311F09] outline-none bg-[#D0CCC7] opacity-80"
                    type="email"
                    placeholder="Email address"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => emailchange(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-[15px]">
                  <label className="font-normal font-primary text-[#311F09] text-[14px]">
                    Password
                  </label>
                  <input
                    className="w-[250px] lg:w-[500px] md:w-[420px]   rounded-[10px] h-[60px] font-primary placeholder:text-[#311F09] text-[14px] pl-3 text-[#311F09] outline-none bg-[#D0CCC7] opacity-80"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => passwordchange(e.target.value)}
                  />
                </div>

                <div className="flex justify-between items-start">
                  <div className="flex gap-[16px] items-center">
                    <input
                      className="rounded-[8px] w-[25px] h-[25px]"
                      type="checkbox"
                    />
                    <p className="text-[14px] text-[#5C4529] font-primary font-[400]">
                      Remember me
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] text-[#5C4529] font-primary font-[400]">
                      Forget Password?
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-[20px]">
                  <button
                    type="submit"
                    className="w-[250px] lg:w-[500px] md:w-[420px] h-[60px] bg-[#FF8A00] rounded-[10px] text-[14px] text-[#fff] font-primary font-[400] hover:transition-all hover:opacity-75 duration-200"
                  >
                    Log in
                  </button>
                  <button className="flex items-center gap-[17px] justify-center md:w-[420px] w-[250px] lg:w-[500px] h-[60px] bg-transparent border border-1 border-solid border-[#B6A38B] text-[14px] text-[#311F09] font-primary font-[400] hover:bg-slate-800 hover:text-white transition-all duration-200">
                    <FaGoogle className="text-[30px]" />
                    Log in with google
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden lg:block">
              <div className="-mr-[39.9px]">
                <img
                  className="max-h-[100vh] w-full"
                  src={LoginSignUpImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;