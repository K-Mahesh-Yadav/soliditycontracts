import './App.css';
import { Route, Routes } from 'react-router-dom';


import Login from "./Pages/Login";
import ADSTDashboard from "./Pages/ADST/Adst";
import Dashboard from "./Pages/ADST/Adrr";
import DDSTDashboard from "./Pages/DDST/Ddst";
import RequestReceived from "./Pages/DDST/Ddrr";
import RequestForm from "./Pages/ADST/req";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/ADSTdashboard' element={<ADSTDashboard />}></Route>
      <Route path='/AdrrRequests' element={<Dashboard  />}></Route>
      <Route path='/request' element={<RequestForm />}></Route>
      <Route path='/DDSTDashboard' element={<DDSTDashboard />}></Route>
      <Route path='/DdrrRequests' element={<RequestReceived />}></Route>
    </Routes>
  );
}

export default App;
