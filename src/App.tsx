
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Component/Dashboard';
import Signup from './Component/Signup';
import Login from './Component/loginup';
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
     
     <Route path="/" element={<Dashboard />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/login" element={<Login />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
