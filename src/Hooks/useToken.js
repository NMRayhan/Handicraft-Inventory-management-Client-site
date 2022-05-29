import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  console.log(user);
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://rocky-peak-58572.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((response) => response.json())
        .then((data) => {
          const accessToken = data.token
          localStorage.setItem('accessToken', accessToken)
          setToken(accessToken)
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
