import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import MissionsContainer from './pages/MissionsContainer';
import RocketsContainer from './pages/RocketsContainer';
import ProfileContainer from './pages/ProfileContainer';
import './App.scss';

const App = () => (
  <main>
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<RocketsContainer />} />
        <Route path="/missions" element={<MissionsContainer />} />
        <Route path="/profile" element={<ProfileContainer />} />
      </Routes>
    </Router>
  </main>
);

export default App;
