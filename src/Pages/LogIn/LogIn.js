import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Link } from "react-router-dom";

const LogIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    setLoginError("");
  }
  return (
    <div className='lg:px-16 bg-base-200 py-16'>
      <div className="mb-10">
          <h1 className="text-5xl text-center font-bold">Login now!</h1>
      </div>
      <div className="hero">
          <Form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  {...register("phoneNumber",
                    {
                      required: "**Phone Number is Required",
                      pattern: { value: /^(\+88)?(01)[0-9]{9}$/, message: "**Invalid Phone Number" }
                    }
                  )}
                  placeholder="Enter your phone number"
                  className="input input-bordered"
                />
                {errors.phoneNumber && <p className="text-red-700 mt-2">{errors.phoneNumber?.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password",
                  {
                    required: "**Password is Required",
                    minLength: { value: 6, message: "**Password must be at least 6 characters" },
                    maxLength: { value: 15, message: "**Password must be at most 15 characters" },
                    pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, message: "**Password must contain at least one letter and one number" }
                  }
                  )}
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                {errors.password && <p className="text-red-700 mt-2">{errors.password?.message}</p>}
                <label className="label text-center">
                  <Link to="/forget-password" className="label-text-alt link link-hover">
                  <p className="label-text-alt">Forgot Password?</p>
                  </Link>
                </label>
                {loginError && <p className="text-red-700 mt-2">{loginError}</p>}
              </div>
              <div className="form-control">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <label className="label text-center">
                  <p className="label-text-alt">New User? &nbsp;
                  <Link to="/registration" className="label-text-alt link link-hover text-primary">
                    Go to Registration
                  </Link></p>
                </label>
              </div>
              <div className="divider">OR</div>
              <div className="form-control">
                <button className="btn btn-outline btn-primary">Continue with Google</button>
              </div>
            </div>
          </Form>
      </div>
    </div>
  );
};

export default LogIn;