import React, { useRef, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import LoginScreen from './Pages/Login/LoginScreen';
import RegisterScreen from './Pages/Register/RegisterScreen';
import ChatScreen from './Pages/Chat/ChatScreen';

const PrivateRoute = ({ isLoggedIn, ...props }) => {
  const getToken = localStorage.getItem('userLogin');
  return getToken ? (
    <Outlet {...props} />) : (<Navigate to="/login" replace={true} />);
};

const App = () => {

  const myUserRef = useRef(null);
  const registrationDataRef = useRef(null);


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}   >
          <Route path="/chat" element={<ChatScreen myUserRef={myUserRef} />} />
          <Route path="*" element={<Navigate to="/chat" replace={true} />} />
        </Route>
        <Route path="/login" element={<LoginScreen myUserRef={myUserRef} />} />
        <Route path="/register" element={<RegisterScreen registrationDataRef={registrationDataRef} />} />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;