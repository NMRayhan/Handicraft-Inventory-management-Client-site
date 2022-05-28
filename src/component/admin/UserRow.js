import React from "react";

const UserRow = ({ details }) => {
  const { email } = details;
  return (
    <tr className="hover">
      <td>{email}</td>
      <td>
        <button className="btn btn-primary btn-xs">Make Admin</button>
      </td>
      <td>
        <button className="btn btn-secondary btn-xs">Remove Admin</button>
      </td>
    </tr>
  );
};

export default UserRow;
