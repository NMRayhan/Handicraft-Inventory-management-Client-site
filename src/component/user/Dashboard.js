import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../common/Spinner";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    console.log(error);
  }
  const dashboardNavItem = (
    <React.Fragment>
      <li>
        <Link to="/dashboard">My Order</Link>
      </li>
      <li>
        <Link to="/dashboard/review">My Review</Link>
      </li>
      <li>
        <Link to="/dashboard/profile">My Profile</Link>
      </li>
      <li>
        <Link to="/dashboard/users">Manage User</Link>
      </li>
    </React.Fragment>
  );
  return (
    <div className="px-28">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <div className="flex flex-row justify-between items-center">
            <span className="text-accent my-4 font-semibold text-4xl">
              Welcome to Dashboard Mr{" "}
              <span className="text-teal-500">{user?.displayName}</span>
            </span>
            <span>
              <label
                htmlFor="dashboard-drawer"
                className="btn btn-sm btn-primary drawer-button lg:hidden"
              >
                Open drawer
              </label>
            </span>
          </div>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {dashboardNavItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
