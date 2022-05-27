import React, { useEffect } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Spinner from "../common/Spinner";

const ForgotPass = () => {
  const navigator = useNavigate();
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleForgotPass = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    await sendPasswordResetEmail(email);
    toast.success("Password Reset email send");
    navigator("/login");
  };

  useEffect(() => {
    if (error) {
      toast.error(error.message);
      navigator("/login");
    }
  }, [error, navigator]);

  if (sending) {
    return <Spinner />;
  }

  return (
    <div>
      <input type="checkbox" id="forgotPass-Modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="forgotPass-Modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Forgot your password</h3>
          <form onSubmit={handleForgotPass} className="py-4">
            <div className="form-control">
              <input
                type="text"
                name="email"
                className="input input-primary"
                placeholder="Please Enter Your Email here"
              />
            </div>
            <div className="mt-5">
              <button type="submit" className="btn btn-outline btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
