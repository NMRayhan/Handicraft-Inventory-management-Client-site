import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ details, refetch }) => {
  const { email, role } = details;
  const makeUserAdmin = () => {
    const url = `http://localhost:5000/user/admin/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => {
          if (response.status === 403) {
              toast.error("You are not an admin to create admin role in user")
          }
        return response.json();
      })
      .then((data) => {
        if (data.modifiedCount > 1) {
          toast.success("User Make Admin Successfully");
          refetch();
        }
      });
  };

  const removeAdmin = () => {
    const url = `http://localhost:5000/user/removeAdmin/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        toast.warning("Remove User admin");
        refetch();
      });
  };
  return (
    <tr className="hover">
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button className="btn btn-primary btn-xs" onClick={makeUserAdmin}>
            Make Admin
          </button>
        )}
        {role === "admin" && (
          <button className="btn btn-primary btn-xs" disabled>
            Already Admin
          </button>
        )}
      </td>
      <td>
        {role === "admin" && (
          <button className="btn btn-secondary btn-xs" onClick={removeAdmin}>
            Remove Admin
          </button>
        )}
        {role !== "admin" && (
          <button className="btn btn-secondary btn-xs" disabled>
            Remove Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
