import React from 'react';
import './App.css';
import Authentication from './pages/Authentication/Authentication';
import { Route, Routes } from 'react-router-dom';
import Message from './pages/Message/Message';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
      <div className="">

        <Routes>
          
          <Route path='/HomePage' element={<HomePage/>}/>
          <Route path='/message' element={<Message/>}/>
          <Route path='/*' element={<Authentication/>}/>

        </Routes>

         
      </div>
  );
}


export default App;
