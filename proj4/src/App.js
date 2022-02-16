import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homesm from './Container/Pages/Homesm';
import About from './Container/Pages/About';
import Edu from './Container/Pages/Edu';
import Resumesm from './Container/Pages/Resumesm';
import Contactsm from './Container/Pages/Contactsm';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
       <Route path='/' exact  element={<Homesm/>}></Route>
       <Route path='About' element={<About/>} />
       <Route path='Edu' element={<Edu/>} />
       <Route path='Resumesm' element={<Resumesm/>} />
       <Route path='Contactsm' element={<Contactsm/>} />
     </Routes>
    </BrowserRouter>
      
  );
}
export default App;
