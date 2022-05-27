import React from "react";
import sadface from "../../../Assets/sadface.gif";

const ErrorPage = () => {
  return (
    <div className="min-h-screen">
      <div className="grid justify-center items-center grid-flow-col">
        <img src={sadface} alt="" />
        <div className="font-mono text-6xl">Error Occurred</div>
      </div>
      <div>
          <h2 className="text-5xl text-center font-sans text-primary">Please Go Back or Contact Admin for Error Support</h2>
      </div>
    </div>
  );
};

export default ErrorPage;
