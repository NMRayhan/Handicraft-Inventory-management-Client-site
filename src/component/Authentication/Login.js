/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useToken from "../../Hooks/useToken";
import Spinner from "../common/Spinner";
import ForgotPass from "./ForgotPass";
import SocialAuthentication from "./SocialAuthentication";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //   react router dom
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [token] = useToken(user);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;
    await signInWithEmailAndPassword(email, password);
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    toast.error(error.message);
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
                  <label
                    htmlFor="forgotPass-Modal"
                    className="btn btn-link link-hover"
                  >
                    Forgot password?
                  </label>
                </label>
              </div>

              <button className="btn btn-primary w-4/12 mt-5" type="submit">
                Login
              </button>
            </form>
            <div className="">
              <h3 className="text-xl font-light">
                You have no account?{" "}
                <Link to="/register" className="text-accent">
                  Register
                </Link>
              </h3>
            </div>
            <div className="divider">OR</div>
            <SocialAuthentication />
          </div>
          {<ForgotPass />}
        </div>
      </div>
    </div>
  );
};

export default Login;
