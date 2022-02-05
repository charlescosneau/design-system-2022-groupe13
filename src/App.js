import { Routes, Route } from "react-router-dom";
import ForgotPassword from './screens/ForgotPassword/ForgotPassword'
import Login from './screens/Login/Login'
import Register from './screens/Register/Register'
import './styles/colors/mainColors.css'
import './styles/fonts/mainFonts.css'
import './styles/components/inputlabel.css'
import './styles/mainClass.css'


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
