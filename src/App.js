import { Routes, Route, Link } from "react-router-dom";
import FormLogIn from './components/FormLogIn'
import FormRegister from './components/FormRegister'
import FormForgotPassword from './components/FormForgotPassword'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormLogIn />} />
        <Route path="/register" element={<FormRegister />} />
        <Route path="/forgotpassword" element={<FormForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
