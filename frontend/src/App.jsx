import React from "react";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
};

export default App;
