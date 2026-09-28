
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../pages/auth/Login'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const Profile = React.lazy(() => import('../pages/profile/Profile'));
const Sectors = React.lazy(() => import('../pages/sectors/Sectors'));
const Support = React.lazy(() => import('../pages/support/Support'));
const Donations = React.lazy(() => import('../pages/donations/Donations'));
const Membership = React.lazy(() => import('../pages/membership/Membership'));
const FellowshipEnrollment = React.lazy(() => import('../pages/membership/FellowshipEnrollment'));
const FellowsDirectory = React.lazy(() => import('../pages/membership/FellowsDirectory'));
const WisdomSearch = React.lazy(() => import('../pages/heritage/WisdomSearch'));
const RestorationLab = React.lazy(() => import('../pages/heritage/RestorationLab'));
const SpiritualLineage = React.lazy(() => import('../pages/spiritual/SpiritualLineage'));
import { useStore } from './store/useStore';

const AppRoutes: React.FC = () => {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/sectors" element={<Sectors />} />
      <Route path="/support" element={<Support />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/membership/enroll" element={<FellowshipEnrollment />} />
      <Route path="/lineage" element={<FellowsDirectory />} />
      <Route path="/donations" element={<Donations />} />
      <Route path="/archives" element={<WisdomSearch />} />
      <Route path="/lab" element={<RestorationLab />} />
      <Route path="/spiritual-life" element={<SpiritualLineage />} />
      <Route 
        path="/profile" 
        element={isAuthenticated ? <Profile /> : <Navigate to="/auth/login" />} 
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
