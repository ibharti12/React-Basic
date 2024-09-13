import { useForm } from "react-hook-form";
import {Row,Col} from "react-bootstrap"
import { CiUser } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import GoogleLoginCustom from "./GoogleLoginCustom";

interface SignupForm {
    firstName: string;
    lastName: string;
  password: string;
  confirmPassword: string;
  email:string
}
const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupForm>();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const password = watch("password");

  return (
  
      <>
      <div className="container">
        <div className="row justify-content-center h-screen align-items-center">
          <div className="col-md-12">
            <div className="wrap d-md-flex  ">
              <div className="text-wrap bg-mainColor leftHero position-relative p-4 p-lg-5 text-center d-flex align-items-center ">
                {/* <div className="position-absolute  shape">
                  <img src={shape} alt="shape" className="img-fluid" />
                </div>
                <div className="position-absolute  shapeTwo">
                  <img src={shapeTwo} alt="shape" className="img-fluid" />
                </div> */}
                <div className="text w-100">
                  <h2>Realesta</h2>
                </div>
              </div>
            <div className="login-wrap ">
              {/* <div className="position-absolute cross" onClick={handleClose}>
                <RxCross1 size="22" />
              </div> */}
              <div className="d-flex">
                <div className="w-100">
                  <h2 className="mb-3 font-30 font-xxl-40 fw-bold  ">
                    Sign Up
                  </h2>
                  <p className="font-18 grey-500 mb-4">
                    Enter your details to Sign Up.
                  </p>
                </div>
              </div>
              <form
                key={1}
                onSubmit={handleSubmit(onSubmit)}
                className="signin-form"
              >
                <Row>
                  <Col lg={12}>
                    <div className="form-group mb-4">
                      <label className="label " htmlFor="firstName">
                        First Name
                      </label>
                      <div className="position-relative">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.firstName ? "is-invalid" : ""
                          }`}
                          placeholder="Enter Your First Name "
                          {...register("firstName", {
                            required: "First Name is required",
                          })}
                        />
                        {errors.firstName && (
                          <div className="invalid-feedback position-absolute">
                            {errors.firstName.message}
                          </div>
                        )}
                        <div className="inputicon">
                          <CiUser color="#757575" size={20} />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={12}>
                    <div className="form-group mb-4">
                      <label className="label " htmlFor="lastName">
                        Last Name
                      </label>
                      <div className="position-relative">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.lastName ? "is-invalid" : ""
                          }`}
                          placeholder="Enter Your Last Name "
                          {...register("lastName", {
                            required: "First Name is required",
                          })}
                        />
                        {errors.lastName && (
                          <div className="invalid-feedback position-absolute">
                            {errors.lastName.message}
                          </div>
                        )}
                        <div className="inputicon">
                          <CiUser color="#757575" size={20} />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={12}>
                    <div className="form-group mb-4">
                      <label className="label " htmlFor="email">
                        Email ID
                      </label>
                      <div className="position-relative">
                        <input
                          type="text"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          placeholder="Enter Email Id"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors.email && (
                          <div className="invalid-feedback position-absolute">
                            {errors.email.message}
                          </div>
                        )}
                        <div className="inputicon">
                          <IoMailOutline color="#757575" size={20} />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <div className="form-group mb-3 showError">
                      <label className="label" htmlFor="password">
                        Password
                      </label>
                      <div className="position-relative">
                        <input
                          type={"password"}
                          className={`form-control ${
                            errors.password ? "is-invalid" : ""
                          }`}
                          placeholder="Enter Password"
                          {...register("password", {
                            required: "Password is required",
                            pattern: {
                              value:
                                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                              message:
                                "Password must be at least 8 characters and include at least one alphabet, one number, and one special character.",
                            },
                          })}
                        />
                        {/* <div
                          className="inputicon"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <AiOutlineEyeInvisible color="#757575" size={20} />
                          ) : (
                            <AiOutlineEye color="#757575" size={20} />
                          )}
                        </div> */}
                        {errors.password && (
                          <div className="invalid-feedback position-absolute">
                            {errors.password.message}
                          </div>
                        )}
                        {/* <div
                          className="inputicon"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? (
                            <LuEyeOff size={20} color="#757575" />
                          ) : (
                            <LuEye color="#757575" size={20} />
                          )}
                        </div> */}
                      </div>
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password.message}
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>

                <div className="mb-4 form-check" style={{ marginTop: "26px" }}>
                  <input type="checkbox" className="form-check-input" />
                  <label className="m-0 form-check-label">Remember me</label>
                </div>
                <Row className="flex-column align-items-center">
                  <Col lg={12}>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control fw-semibold primaryBgUser submit px-3 "
                      >
                        Sign Up
                      </button>
                    </div>
                  </Col>
                </Row>
                <div className="font-14 d-flex justify-content-center mb-3 align-items-center">
                  {/* <div className="hrLine"></div> */}
                  <div className="font-20 grey-500 fw-bold"> Or</div>
                  {/* <div className="hrLine"></div> */}
                </div>
                <div className="d-flex justify-content-center gap-4  mb-3">
                  <p className="m-0">
                    <GoogleLoginCustom />
                  </p>

                  {/* <p className="m-0 cursor">
                    <FacebookLoginCustom register={register} />
                  </p> */}
                </div>
                <div className="text-center d-flex justify-content-center gap-1 mt-4">
                  Already Have An Account?{" "}
                  <div
                   
                    className=" userColorPrimary fw-bold"
                  >
                    Login
                  </div>
                </div>
                <div>
                  <p className="text-center m-0 mt-5 grey-500">
                    By creating an account you agree to our{" "}
                    <Link
                      to="https://realesta.ai/terms.html"
                      className="text-decoration-underline primary-color"
                    >
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="https://realesta.ai/terms.html"
                      className="text-decoration-underline primary-color"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </form>
            </div>
         
          </div>
          </div>
          </div>
          </div>
    </>
  );
};
export default Signup;
