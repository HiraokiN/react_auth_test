import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

//history
import { history } from './helpers/history';

//pages
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/Login"

function hasJWT() {
  let flag = false;

  //check user has JWT token
  localStorage.getItem("token") ? flag = true : flag = false

  return flag
}

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={hasJWT() ? <HomePage /> : <Navigate replace to="/login" />} />
    </Routes>
  );
}

export default Router
