import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import UserRow from "./UserRow";

const ManageUser = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => {
        console.log(response);
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
      .then((data) => setUsers(data));
  }, [navigate]);
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
              <UserRow key={user._id} details={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
