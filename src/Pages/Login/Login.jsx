import { useState } from "react";
import LoginSignUpImage from "../../../src/Images/login_signup_image.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 8) {
      validationErrors.password = "password should be at least 8 char";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successfully");
    }
  };

  return (
    <div className="w-full h-full mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:justify-between gap-28 items-center lg:flex-row">
          <div className="flex flex-col gap-[50px] ">
            <div className="flex flex-col gap-[17px]">
              <h1 className="font-primary font-bold text-[#311F09] text-[40px]">
                Login
              </h1>
              <p className="text-[#5C4529] font-primary text-[14px] font-[400]">
                Don't have an account?{" "}
                <Link
                  className="text-[#0094FF] font-primary text-[14px] hover:opacity-75 transition-all duration-150"
                  to={"/signup"}
                >
                  Sign Up
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-[17px]">
              <div className="flex flex-col gap-[15px]">
                <label className="font-normal font-primary text-[#311F09] text-[14px]">
                  Email address
                </label>
                <input
                  className="w-[250px] lg:w-[500px] md:w-[420px]   rounded-[10px] font-primary h-[60px] placeholder:text-[#311F09] text-[14px] pl-3 text-[#311F09] outline-none bg-[#D0CCC7] opacity-80"
                  type="email"
                  placeholder="Email address"
                  name="email"
                  autoComplete="off"
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="text-[red] text-[14px] tracking-[1px]">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-[15px]">
                <label className="font-normal font-primary text-[#311F09] text-[14px]">
                  Password
                </label>
                <input
                  className="w-[250px] lg:w-[500px] md:w-[420px]   rounded-[10px] h-[60px] font-primary placeholder:text-[#311F09] text-[14px] pl-3 text-[#311F09] outline-none bg-[#D0CCC7] opacity-80"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                {errors.password && (
                  <span className="text-[red] text-[14px] tracking-[1px]">
                    {errors.password}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
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
            <div className="">
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
  );
};

export default Login;