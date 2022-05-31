import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './login';
import Register from './register';
import Reset from './reset';
import Home from './home';
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import React from 'react';


function App() {
  const [user, loading] = useAuthState(auth);




  if (loading) {
    return <div>Loading...</div>;
  } 
    
  if (user) {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      );
  }
  




  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/reset" element={<Reset/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

