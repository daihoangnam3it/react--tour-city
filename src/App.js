import React from 'react';
import './App.scss';
import Navbar from "./components/navbar/Navbar"
import Tourlist from "./components/TourList"
function App() {
  return (
   <React.Fragment>
     <Navbar/>
     <Tourlist/>
   </React.Fragment>
  );
}

export default App;
