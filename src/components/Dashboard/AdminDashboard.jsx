import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full p-6">
      <Header />
      <CreateTask />
    </div>
  );
};

export default AdminDashboard;
