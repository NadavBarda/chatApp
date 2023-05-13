import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import LoginScreen from './loginScreen/LoginScreen';
import RegisterScreen from "./registerScreen/RegisterScreen";
import ChatScreen from './chatScreen/ChatScreen';

const PrivateRoute = () => {
  const isAuth = !!localStorage.getItem('userToken');
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/chat" element={<ChatScreen />} />
        </Route>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
