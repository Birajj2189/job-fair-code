
import './App.css';
import { useEffect } from 'react';
import MainPage from './component/MainPage';
import CompanyData from './component/CompanyData';
import HiringInfo from './component/HiringInfo';
import HrInfo from './component/HrInfo';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"; 

function App() {
  useEffect(() => {
    window.scrollTo({top:0,left:0,behavior:'smooth'});
  },[]);
    

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/Company-Data" element={<CompanyData/>}/>
          <Route path="/Hiring-Info" element={<HiringInfo/>}/>
          <Route path="/Hr-Info" element={<HrInfo/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
