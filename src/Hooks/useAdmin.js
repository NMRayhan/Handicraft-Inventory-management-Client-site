import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, isAdmin] = useState(false);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`http://localhost:5000/admin/${email}`, {
        method: "get",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          isAdmin(data.admin);
        });
    }
  }, [user]);
  return [admin];
};

export default useAdmin;
