import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import shape from ""

interface LoginForm {
  username: string;
  password: string;
  email: string;
}
interface UserData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  

  return (
    <>
     
      <div className="container">
        <div className="row justify-content-center h-screen align-items-center">
          <div className="col-md-12">
            <div className="wrap d-md-flex  ">
              <div className="text-wrap bg-mainColor leftHero position-relative p-4 p-lg-5 text-center d-flex align-items-center ">
                <div className="position-absolute  shape">
                  <img  alt="shape" className="img-fluid" />
                </div>
                <div className="position-absolute  shapeTwo">
                  <img alt="shape" className="img-fluid" />
                </div>
                <div className="text w-100">
                  <h2>Realesta</h2>
                </div>
              </div>
              <div className="login-wrap p-4 p-lg-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h2 className="mb-4 ">Login</h2>
                  </div>
                </div>
                <form className="signin-form">
                  <div className="form-group mb-3">
                    <label className="label fw-semibold" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="text"
                    //   className={`form-control ${
                    //     errors.email ? "is-invalid" : ""
                    //   }`}
                      placeholder="Email"
                    //   {...register("email", {
                    //     required: "Email is required",
                    //     pattern: {
                    //       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    //       message: "Invalid email address",
                    //     },
                    //   })}
                    />
                    {/* {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )} */}
                  </div>
                  <div className="form-group mb-3">
                    <label className="label fw-semibold" htmlFor="password">
                      Password
                    </label>
                    <div className="customInput">
                      <input
                        // type={showPassword ? "text" : "password"}
                        // className={`form-control ${
                        //   errors.password ? "is-invalid" : ""
                        // }`}
                        placeholder="Password"
                        // {...register("password", {
                        //   required: "Password is required",
                        //   // pattern: {
                        //   //   value:
                        //   //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                        //   //   message:
                        //   //     "Password must be at least 8 characters and include at least one alphabet, one number, and one special character.",
                        //   // },
                        // })}
                      />
                      {/* <div
                        className="password-icon position-absolute rightNum"
                        onClick={togglePasswordVisibility}
                      > */}
                        {/* {showPassword ? <IoMdEyeOff /> : <IoMdEye />} */}
                      </div>
                      {/* {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password.message}
                        </div>
                      )} */}
                    </div>
                 
                  <div className="text-end w-103 mb-4 fw-medium">
                    <Link to="/admin/forgotpassword">Forgot Password?</Link>
                  </div>
                  <div className="form-group ">
                    <button
                      type="submit"
                      className="form-control bg-mainColor btn btn-primary fw-semibold   submit px-3"
                    >
                      Login
                    </button>
                  </div>
                  </form>
           
               <div>
                </div> 
               
                </div>
              </div>
            </div>
      
    </div>
    </div>
    </>
  );
};

export default Login;
