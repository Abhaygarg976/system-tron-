import React from 'react';
import './App.css';
import LoginPage from './components/loginpage/LoginPage';
import SignupPage from './components/signuppage/SignupPage';
import {BrowserRouter,Routes,Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
    {/* <LoginPage/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
    </Routes>
    </BrowserRouter>
    {/* <SignupPage/> */}
    </div>
  );
}

export default App;
