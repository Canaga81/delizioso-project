import React from "react";
import LoginSignUpImage from "../../../src/Images/login_signup_image.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <div className="w-full h-full mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:justify-between gap-28 items-center lg:flex-row">
          <div className="flex flex-col gap-[50px] pl-[70px]">

            <div>
              <div>
                {
                  isAuthenticated && <>
                  
                    <div className="lg:flex items-center justify-between mt-12">
                      <div className="w-[50px] h-[50px]">
                        <img className="w-full h-full rounded-full" src={user.picture} alt="" />
                      </div>
                      <div className="flex flex-col gap-3">
                        <h2 className="text-[24px] max-w-[300px] font-primary font-bold">{user.name}</h2>
                        <p className="text-[16px] max-w-[320px] font-primary font-normal">{user.email}</p>
                      </div>
                    </div>
                  
                  </>
                }
              </div>
            </div>

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

            <div className="flex flex-col gap-[15px]">
              <h4 className="font-normal font-primary text-[#311F09] text-[14px]">
                Email address
              </h4>
              <input
                className="w-[230px] lg:w-[415px] md:w-[330px] rounded-[10px] font-primary h-[60px] placeholder:text-[#311F09] text-[14px] pl-3 text-[#311F09] outline-none bg-[#D0CCC7] opacity-80"
                type="email"
                placeholder="Email address"
                id="email"
                name="email"
              />
            </div>

            <div className="flex flex-col gap-[15px]">
              <h4 className="font-normal font-primary text-[#311F09] text-[14px]">
                Password
              </h4>
              <input
                className="w-[230px] lg:w-[415px] md:w-[330px] rounded-[10px] h-[60px] font-primary placeholder:text-[#311F09] text-[14px] pl-3 text-[#311F09] outline-none bg-[#D0CCC7] opacity-80"
                type="password"
                placeholder="Password"
                id="password"
                name="password"
              />
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
              {isAuthenticated ? (
                // Logout Button
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                  className="w-[230px] lg:w-[415px] md:w-[330px] h-[60px] bg-[#FF8A00] rounded-[10px] text-[14px] text-[#fff] font-primary font-[400] hover:transition-all hover:opacity-75 duration-200"
                >
                  Logout
                </button>
              ) : 
              // Login Button
              (
                <button
                  onClick={() => loginWithRedirect()}
                  className="w-[230px] lg:w-[415px] md:w-[330px] h-[60px] bg-[#FF8A00] rounded-[10px] text-[14px] text-[#fff] font-primary font-[400] hover:transition-all hover:opacity-75 duration-200"
                >
                  Log in
                </button>
              )}

              <button className="flex items-center gap-[17px] justify-center w-[200px] lg:w-[415px] md:w-[330px]  h-[60px] bg-transparent border border-1 border-solid border-[#B6A38B] text-[14px] text-[#311F09] font-primary font-[400] hover:bg-slate-800 hover:text-white transition-all duration-200">
                <FaGoogle className="text-[30px]" />
                Log in with google
              </button>
            </div>
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
  );
};

export default Login;
