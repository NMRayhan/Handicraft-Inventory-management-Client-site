import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Spinner from "../common/Spinner";

const SocialAuthentication = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleSocialLogin = () => {
    signInWithGoogle();
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return toast.error(error.message);
  }

  return (
    <div>
      <button className="btn btn-ghost" onClick={() => handleSocialLogin()}>
        Continue With Google
      </button>
    </div>
  );
};

export default SocialAuthentication;
