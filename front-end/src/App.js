import { Routes, Route } from "react-router-dom";
import { HomePage} from './pages/Home-page';
import { Login} from './pages/Log-in';
import { Signup} from './pages/Sign-up';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Signup" element={<Signup />}/>    
    </Routes>
  );
}

export default App;

