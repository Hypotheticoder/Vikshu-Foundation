import React, { useState, Suspense } from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/utils/ScrollToTop";
import AppRoutes from "./routes";

// Loading component for i18n
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0c0c0c]">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-amber-500 font-heading text-sm tracking-wider">
        Loading...
      </p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Suspense fallback={<LoadingFallback />}>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#0c0c0c] text-white selection:bg-amber-600/30 selection:text-amber-500">
          <Navbar
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />

          <main className="flex-grow pt-20 md:pt-28">
            <AppRoutes
              isAuthenticated={isAuthenticated}
              onLogin={() => setIsAuthenticated(true)}
            />
          </main>

          <Footer />
        </div>
      </HashRouter>
    </Suspense>
  );
};

export default App;
