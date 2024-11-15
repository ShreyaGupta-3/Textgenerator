import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from "react-router-dom";
import Signup from './components/Signup';
import Contacts from './Contacts/Contacts';
import { Toaster } from 'react-hot-toast';
import About from './components/About';
// import { useAuth } from './context/AuthProvider';



function App() {
//   const [authUser, setAuthUser] = useAuth();
//  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>

    </>
  );
}

export default App
