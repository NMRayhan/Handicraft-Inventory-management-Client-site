import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="">
      <h2 className="text-primary text-3xl">My Profile</h2>
      <div className="avatar mt-10">
        <div className="w-full rounded-full">
          {user.photoURL !== null ? (
            <img src={user.photoURL} alt={user.displayName} />
          ) : (
            <img src="https://i.ibb.co/56d3Hfw/images.png" alt=""/>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default MyProfile;
