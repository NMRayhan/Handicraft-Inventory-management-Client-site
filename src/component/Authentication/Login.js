import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../common/Spinner";
import SocialAuthentication from "./SocialAuthentication";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    await signInWithEmailAndPassword(email, password);
  };

  //   react router dom
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  if (errors || error) {
    console.log(errors || error);
  }

  return (
    <div className="">
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">Welcome to Our Service</h1>
            <h1 className="text-3xl font-bold text-primary mt-3">
              Please Login
            </h1>
            <form className="py-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control mt-5">
                <input
                  className="input input-bordered"
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </div>
              <div className="form-control mt-5">
                <input
                  className="input input-bordered"
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    min: 6,
                    maxLength: 12,
                  })}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <button className="btn btn-primary w-4/12 mt-5" type="submit">
                Login
              </button>
            </form>
            <div className="">
              <h3 className="text-xl font-light">
                You have no account?{" "}
                <Link to="/registration" className="text-accent">
                  Register
                </Link>
              </h3>
            </div>
            <div className="divider">OR</div>
            <SocialAuthentication />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
