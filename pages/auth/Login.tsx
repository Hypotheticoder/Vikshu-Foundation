
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Mail, Lock, ArrowRight } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-900/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px]"></div>

      <div className="w-full max-w-md glass p-10 md:p-12 rounded-[2.5rem] relative z-10 border border-white/10 shadow-2xl">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-amber-600/20 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl font-heading mb-2">Welcome Seeker</h1>
          <p className="text-gray-400 text-sm italic font-light">Access your Vikshu portal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Email Essence</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seeker@wisdom.org" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 focus:outline-none focus:border-amber-500/50 transition-all text-sm placeholder:text-gray-700"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Cipher Key</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 focus:outline-none focus:border-amber-500/50 transition-all text-sm placeholder:text-gray-700"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-5 bg-amber-600 hover:bg-amber-500 text-white rounded-2xl font-heading tracking-widest text-xs uppercase flex items-center justify-center gap-2 transition-all shadow-xl shadow-amber-900/20 group"
          >
            Begin Journey <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm font-light italic">
            New to the foundation? <button onClick={() => navigate('/auth/register')} className="text-amber-500 hover:underline">Apply for Membership</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
