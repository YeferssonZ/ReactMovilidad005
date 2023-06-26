import Index from './pages/Index';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import Parentesco from './pages/apoderados/Parentesco';
import Apoderado from './pages/apoderados/Apoderado';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Movilidad from './pages/movilidad/Movilidad';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/parentesco" element={<Parentesco/>}/>
        <Route path="/apoderado" element={<Apoderado/>}/>
        <Route path="/movilidad" element={<Movilidad/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;