import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

// Pages
import AdminDashboard from './Pages/Admin-Dashboard/admin-dashboard';
import Cause from './Pages/Cause/cause';
import Causes from './Pages/Causes/causes';
import Collection from './Pages/Collection/collection';
import CollectionElement from './Pages/Collection-Element/collection-element';
import Home from './Pages/Home/home';
import Mint from './Pages/Mint/mint'
import UserDashboard from './Pages/User-Dashboard/user-dashboard';

//components
import Navbar from "./Components/Navbar/navbar"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/admin-dashboard" element={<AdminDashboard />}/>
        <Route exact path="/cause/:id" element={<Cause />}/>
        <Route exact path="/cause" element={<Causes />}/>
        <Route exact path="/collection" element={<Collection />}/>
        <Route exact path="/collection/:id" element={<CollectionElement />}/>
        <Route exact path="/mint/:id" element={<Mint />}/>
        <Route exact path="/user-dashboard" element={<UserDashboard />}/>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </>
  );
}

export default App;
