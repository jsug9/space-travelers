import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MissionsContainer from './pages/MissionsContainer'
import RocketsContainer from './pages/RocketsContainer'
import ProfileContainer from './pages/ProfileContainer'
import './App.scss';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<RocketsContainer />} />
          <Route path="/missions" element={<MissionsContainer />} />
          <Route path="/profile" element={<ProfileContainer />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
