import React from 'react'
import LandigPage from './Components/LandingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderForm from './Components/Order'

function App() {
  return (
    <Router>
    {/* <div >
    
      <LandigPage/>
    </div> */}
    <div>
    <Routes>
    <Route exact path="/" element={<LandigPage/>}/>
      <Route exact path="/order" element={<OrderForm/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
