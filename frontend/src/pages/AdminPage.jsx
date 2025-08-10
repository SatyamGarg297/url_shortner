import React from "react";
import UrlTable from "../components/UrlTable";
import "./AdminPage.css";

const AdminPage = () => {
  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <UrlTable />
    </div>
  );
};

export default AdminPage;
