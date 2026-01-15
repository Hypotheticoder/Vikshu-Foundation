
import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/utils/ScrollToTop';
import AppRoutes from './routes';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0c0c0c] text-white selection:bg-amber-600/30 selection:text-amber-500">
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        
        <main className="flex-grow pt-20 md:pt-28">
          <AppRoutes 
            isAuthenticated={isAuthenticated} 
            onLogin={() => setIsAuthenticated(true)} 
          />
        </main>
        
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
