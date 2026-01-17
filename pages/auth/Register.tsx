
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { User, ShieldCheck, Mail, Lock, ArrowRight, Building } from 'lucide-react';

const Register: React.FC = () => {
  const [userType, setUserType] = useState<'individual' | 'ngo'>('individual');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-28 md:pt-40 pb-32 px-4 sm:px-6 flex items-start md:items-center justify-center relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-900/10 rounded-full blur-[120px]"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl glass p-10 md:p-16 rounded-[4rem] relative z-10 border border-white/10"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif-vintage italic mb-4">Request <span className="text-amber-500">Induction</span></h1>
          <p className="text-gray-400 font-light italic">"A single drop of intent creates an ocean of change."</p>
        </div>

        <div className="flex gap-4 mb-10">
          <button 
            onClick={() => setUserType('individual')}
            className={`flex-1 py-5 rounded-2xl border transition-all flex items-center justify-center gap-3 font-heading text-[10px] tracking-widest uppercase ${userType === 'individual' ? 'bg-amber-600 border-amber-600 text-white shadow-xl shadow-amber-900/20' : 'border-white/10 text-gray-500 hover:bg-white/5'}`}
          >
            <User size={16} /> Individual Seeker
          </button>
          <button 
            onClick={() => setUserType('ngo')}
            className={`flex-1 py-5 rounded-2xl border transition-all flex items-center justify-center gap-3 font-heading text-[10px] tracking-widest uppercase ${userType === 'ngo' ? 'bg-amber-600 border-amber-600 text-white shadow-xl shadow-amber-900/20' : 'border-white/10 text-gray-500 hover:bg-white/5'}`}
          >
            <Building size={16} /> Partner NGO
          </button>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Legal Name / Title</label>
            <input type="text" placeholder="e.g. Aarya Vardhan" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500/50 transition-all text-sm italic" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Email Essence</label>
            <input type="email" placeholder="seeker@vikshu.org" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500/50 transition-all text-sm" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Desired Fellowship Category</label>
            <select className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500/50 transition-all text-sm appearance-none cursor-pointer">
              <option>Ordinary Member (Voting)</option>
              <option>Associate Member (Non-Voting)</option>
              {userType === 'ngo' && <option>Institutional Member (Partner)</option>}
              <option>Core Fellowship Application</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Cipher Key</label>
            <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500/50 transition-all text-sm" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Confirm Cipher</label>
            <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500/50 transition-all text-sm" />
          </div>

          <div className="md:col-span-2 pt-8">
            <button type="button" onClick={() => navigate('/auth/login')} className="w-full py-6 bg-amber-600 hover:bg-amber-500 text-white rounded-2xl font-heading tracking-[0.2em] text-[10px] uppercase flex items-center justify-center gap-3 transition-all shadow-xl shadow-amber-900/20">
              Submit Request for Induction <ArrowRight size={18} />
            </button>
          </div>
        </form>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm font-light italic">
            Already part of the lineage? <Link to="/auth/login" className="text-amber-500 hover:underline">Sign In</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
