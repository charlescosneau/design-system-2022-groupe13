import { Routes, Route } from "react-router-dom";
import ForgotPassword from './screens/ForgotPassword/ForgotPassword'
import Login from './screens/Login/Login'
import Register from './screens/Register/Register'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
