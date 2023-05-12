import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatScreen from './chatScreen/ChatScreen';
import LoginScreen from './loginScreen/LoginScreen';
import RegisterScreen from './registerScreen/RegisterScreen';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginScreen />}  />  //"/login"
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/chat" element={<ChatScreen />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
