import {
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const CustomerSupport = () => {
    const navigate = useNavigate()
  return (
    <div className="bg-base-200">
      <h3 className="text-center text-primary text-4xl font-medium mt-10">24/7 Online customer service</h3>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/L6zMmMP/ecomdash-support-chat.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Customer support Chat"
          />
          <div>
            <h1 className="text-5xl font-bold">Outstanding Customer Service</h1>
            <p className="py-6">
              No matter how much you pay, ecomdash provides outstanding customer
              service to all our users. We also offer many resources to help you
              get started.
            </p>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-primary text-2xl mx-2"
                />
                Support guides and videos present step-by-step instructions on
                how to use our features, along with common workflows.
              </li>
              <li className="my-5">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-primary text-2xl mx-2"
                />
                Optional professional services help with onboarding, FTP feed
                setup, and more.
              </li>
            </ul>
            <button className="btn btn-primary" onClick={()=> navigate('/products')}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
