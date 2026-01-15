
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Profile from '../pages/profile/Profile';
import Sectors from '../pages/sectors/Sectors';
import Support from '../pages/support/Support';
import Donations from '../pages/donations/Donations';
import Membership from '../pages/membership/Membership';
import FellowshipEnrollment from '../pages/membership/FellowshipEnrollment';
import FellowsDirectory from '../pages/membership/FellowsDirectory';
import WisdomSearch from '../pages/heritage/WisdomSearch';
import RestorationLab from '../pages/heritage/RestorationLab';

interface AppRoutesProps {
  isAuthenticated: boolean;
  onLogin: () => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ isAuthenticated, onLogin }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login onLogin={onLogin} />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/sectors" element={<Sectors />} />
      <Route path="/support" element={<Support />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/membership/enroll" element={<FellowshipEnrollment />} />
      <Route path="/lineage" element={<FellowsDirectory />} />
      <Route path="/donations" element={<Donations />} />
      <Route path="/archives" element={<WisdomSearch />} />
      <Route path="/lab" element={<RestorationLab />} />
      <Route 
        path="/profile" 
        element={isAuthenticated ? <Profile /> : <Navigate to="/auth/login" />} 
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
