import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full p-6">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
