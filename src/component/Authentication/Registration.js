import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialAuthentication from "./SocialAuthentication";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

const Registration = () => {
  // use form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   firebase hooks
  const [createUserWithEmailAndPassword, user, loading, error1] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error2] = useUpdateProfile(auth);

  //   react router dom
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  if (loading || updating) {
    return <Spinner />;
  }

  if (error1 || error2) {
    toast.error(error1.message || error2.message);
  }

  console.log(user);
  const onSubmit = async (data) => {
    const displayName = data.name;
    const email = data.email;
    const password = data.password;
    console.log(displayName, email, password);
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
  };

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
                  placeholder="Name"
                  name="name"
                  {...register("name", {
                    required: true,
                  })}
                />
              </div>
              <div className="form-control mt-5">
                <input
                  className="input input-bordered"
                  type="text"
                  name="email"
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
                  name="password"
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    min: 6,
                    maxLength: 12,
                  })}
                />
              </div>

              <button className="btn btn-primary w-4/12 mt-5" type="submit">
                Registration
              </button>
            </form>
            <div className="">
              <h3 className="text-xl font-light">
                Already have no account?{" "}
                <Link to="/login" className="text-accent">
                  Login
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

export default Registration;
