import React, { useRef, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import LoginScreen from './Pages/Login/LoginScreen';
import RegisterScreen from './Pages/Register/RegisterScreen';
import ChatScreen from './Pages/Chat/ChatScreen';

const PrivateRoute = ({ isLoggedIn, ...props }) => {
  return isLoggedIn ? (
    <Outlet {...props} />) : (<Navigate to="/login" replace={true} />);
};

const App = () => {
  const registrationDataRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setLoginData = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/chat" /> : <Navigate to="/login" />} />
        <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}   >
          <Route path="/chat" element={<ChatScreen />} />
        </Route>
        <Route path="/login" element={<LoginScreen registrationDataRef={registrationDataRef} setLoginData={setLoginData} />} />
        <Route path="/register" element={<RegisterScreen registrationDataRef={registrationDataRef} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
