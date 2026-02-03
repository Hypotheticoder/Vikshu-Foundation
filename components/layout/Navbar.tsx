import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  User,
  Menu,
  X,
  Heart,
  Globe,
  ChevronDown,
  Search,
  Wand2,
  Users,
  FileText,
} from "lucide-react";
import i18n from "../../i18n/i18n";

interface NavbarProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (val: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isAuthenticated,
  setIsAuthenticated,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close language dropdown on outside click
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const navLinks = [
    { name: "Heritage", path: "/" },
    { name: "Pillars", path: "/sectors" },
    // { name: 'Archives', path: '/archives' }, // Removed as per request
    { name: "Fellowship", path: "/membership" },
    { name: "Induction", path: "/membership/enroll" },
    { name: "Lineage", path: "/lineage" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-4 md:px-8 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ease-in-out ${
          scrolled
            ? "glass rounded-full shadow-2xl px-6 md:px-10 py-3"
            : "bg-transparent px-4 py-0"
        } flex items-center justify-between relative`}
      >
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-black font-bold text-xl font-heading transition-transform group-hover:scale-110">
            V
          </div>
          <span className="font-heading text-sm sm:text-lg md:text-xl tracking-[0.25em] block">
            VIKSHU
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[9px] xl:text-[10px] uppercase tracking-[0.2em] font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-amber-500 transition-colors relative group ${
                location.pathname === link.path
                  ? "text-amber-500"
                  : "text-gray-300"
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 ${location.pathname === link.path ? "w-full" : "group-hover:w-full"}`}
              ></span>
            </Link>
          ))}

          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            {/* Language selector */}
            <div className="relative" ref={langRef}>
              <button
                aria-expanded={langOpen}
                onClick={() => setLangOpen((s) => !s)}
                className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-white/5 transition-colors text-sm text-gray-200"
              >
                <Globe size={14} />
                <span className="hidden sm:inline-block">
                  {i18n.language === "en"
                    ? "English"
                    : i18n.language === "bn"
                      ? "বাংলা"
                      : i18n.language === "hi"
                        ? "हिन্দी"
                        : "অসমীয়া"}
                </span>
                <ChevronDown size={14} />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#0c0c0c] border border-white/10 glass rounded-xl shadow-xl overflow-hidden z-50">
                  <button
                    className="w-full text-left px-4 py-3 hover:bg-white/5"
                    onClick={() => {
                      i18n.changeLanguage("en");
                      setLangOpen(false);
                    }}
                  >
                    English
                  </button>
                  <button
                    className="w-full text-left px-4 py-3 hover:bg-white/5"
                    onClick={() => {
                      i18n.changeLanguage("bn");
                      setLangOpen(false);
                    }}
                  >
                    বাংলা
                  </button>
                  <button
                    className="w-full text-left px-4 py-3 hover:bg-white/5"
                    onClick={() => {
                      i18n.changeLanguage("hi");
                      setLangOpen(false);
                    }}
                  >
                    हिन्दी
                  </button>
                  <button
                    className="w-full text-left px-4 py-3 hover:bg-white/5"
                    onClick={() => {
                      i18n.changeLanguage("as");
                      setLangOpen(false);
                    }}
                  >
                    অসমীয়া
                  </button>
                </div>
              )}
            </div>
            <Link
              to="/donations"
              className="flex items-center gap-2 px-5 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-500 transition-all shadow-lg shadow-amber-900/20 whitespace-nowrap"
            >
              <Heart size={12} /> Offerings
            </Link>

            {isAuthenticated ? (
              <Link
                to="/profile"
                className={`flex items-center gap-2 transition-colors ${location.pathname === "/profile" ? "text-amber-500" : "text-gray-300 hover:text-white"}`}
              >
                <User size={16} /> Account
              </Link>
            ) : (
              <Link
                to="/auth/login"
                className="px-5 py-2 border border-white/20 rounded-full hover:bg-white/5 transition-all text-gray-300 whitespace-nowrap"
              >
                Join Us
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-4 glass p-8 rounded-[2.5rem] animate-fade-in-down border border-white/10 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col gap-6 text-center text-sm font-bold tracking-widest">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={
                  location.pathname === link.path
                    ? "text-amber-500"
                    : "text-gray-300"
                }
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/donations"
              onClick={() => setIsOpen(false)}
              className="text-amber-500 border-t border-white/5 pt-4"
            >
              Donations
            </Link>
            {/* Mobile language selector */}
            <div className="flex justify-center gap-3 pt-6">
              <button
                onClick={() => {
                  i18n.changeLanguage("en");
                  setIsOpen(false);
                }}
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10"
              >
                EN
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage("bn");
                  setIsOpen(false);
                }}
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10"
              >
                বাংলা
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage("hi");
                  setIsOpen(false);
                }}
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10"
              >
                हिन्दी
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage("as");
                  setIsOpen(false);
                }}
                className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10"
              >
                অসমীয়া
              </button>
            </div>
            {isAuthenticated ? (
              <Link
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="text-gray-300"
              >
                My Profile
              </Link>
            ) : (
              <Link
                to="/auth/login"
                onClick={() => setIsOpen(false)}
                className="bg-amber-600 py-4 rounded-2xl text-white shadow-xl shadow-amber-900/20"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
