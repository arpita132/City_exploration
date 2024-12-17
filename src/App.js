// // Import the HomePage component from your components folder
// import HomePage from './components/HomePage/HomePage';
// // import City from './components/City/Citylist';
// import City from './components/City/Citydetails';

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* Render the HomePage component */}
//       <HomePage />
//       <City />
//     </div>

//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import HomePage from  '../../city-exploration-guide-app/src/components/HomePage/HomePage';
import Citylist from '../../city-exploration-guide-app/src/components/City/Citylist';
import Citydetails from '../../city-exploration-guide-app/src/components/City/Citylist';
import Login from '../../city-exploration-guide-app/src/components/LoginRegister/Login';
import Register from '../../city-exploration-guide-app/src/components/LoginRegister/Register';
import LoginNavbar from '../../city-exploration-guide-app/src/components/Navbars/LoginNavbar';
import NavbarMain from '../../city-exploration-guide-app/src/components/Navbars/NavbarMain';




import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define Routes for each component */}
          <Route path="/" element={<HomePage />} />
          <Route path="/city/citylist" element={<Citylist />} />
          <Route path="/city/citydetails" element={<Citydetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/navbar" element={<NavbarMain/>} />
          <Route path="/login" element={<LoginNavbar/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
