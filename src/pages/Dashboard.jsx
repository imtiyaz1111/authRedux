import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <div className="text-center mb-4">
          <img
            src={user?.avatar || "https://via.placeholder.com/120"}
            className="rounded-circle"
            width="120"
            height="120"
          />
          <h3 className="mt-3">{user?.name}</h3>
          <p className="text-muted">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
