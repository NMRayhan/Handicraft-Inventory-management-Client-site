import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../common/Spinner";
import UserRow from "./UserRow";

const ManageUser = () => {
  const navigate = useNavigate();
  const { data: users, isLoading, refetch } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        if (response.status === 403 || response.status === 401) {
          navigate("/home");
          localStorage.removeItem("accessToken");
          signOut(auth);
        }
      }
    })
  );
  if (isLoading) {
    return <Spinner/>
  }
  return (
    <div>
      <h2>All user</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user._id} refetch={refetch} details={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
