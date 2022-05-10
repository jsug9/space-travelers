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

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <header>
      <Navbar />
      <hr />
    </header>
    <Routes>
      <Route path="/" element={<RocketsContainer />} />
      <Route path="/missions" element={<MissionsContainer />} />
      <Route path="/profile" element={<ProfileContainer />} />
    </Routes>
  </Router>
);

export default App;
