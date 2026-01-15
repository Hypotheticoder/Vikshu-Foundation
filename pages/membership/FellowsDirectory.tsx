
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Shield, Star, Award, Users, Globe, ExternalLink } from 'lucide-react';
import QuoteBlock from '../../components/ui/QuoteBlock';

interface Fellow {
  id: string;
  name: string;
  tier: string;
  karma: number;
  expertise: string;
  location: string;
  avatar: string;
  joined: string;
}

const FellowsDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const fellows: Fellow[] = [
    { id: '1', name: 'Aarya Vardhan', tier: 'Core Fellowship', karma: 420, expertise: 'Vedic Philosophy', location: 'Varanasi', avatar: 'https://picsum.photos/200?u=1', joined: '1890 (Lineage)' },
    { id: '2', name: 'Elena Sterling', tier: 'Honorary Member', karma: 350, expertise: 'Victorian History', location: 'London', avatar: 'https://picsum.photos/200?u=2', joined: '2018' },
    { id: '3', name: 'Ishaan Sharma', tier: 'Ordinary Member', karma: 280, expertise: 'Sanskrit AI', location: 'Bengaluru', avatar: 'https://picsum.photos/200?u=3', joined: '2021' },
    { id: '4', name: 'Julian Thorne', tier: 'Associate Member', karma: 150, expertise: 'Ethics & Law', location: 'Oxford', avatar: 'https://picsum.photos/200?u=4', joined: '2023' },
    { id: '5', name: 'Sadhvi Ananya', tier: 'Core Fellowship', karma: 500, expertise: 'Meditation Arts', location: 'Rishikesh', avatar: 'https://picsum.photos/200?u=5', joined: '1902 (Lineage)' },
    { id: '6', name: 'Marcus Aurel', tier: 'Ordinary Member', karma: 190, expertise: 'Civic Shelter', location: 'Rome', avatar: 'https://picsum.photos/200?u=6', joined: '2022' },
  ];

  const filteredFellows = fellows.filter(f => 
    (activeTab === 'All' || f.tier.includes(activeTab)) &&
    (f.name.toLowerCase().includes(searchTerm.toLowerCase()) || f.expertise.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getTierIcon = (tier: string) => {
    if (tier.includes('Core')) return <Star className="text-amber-500" size={16} />;
    if (tier.includes('Honorary')) return <Award className="text-amber-400" size={16} />;
    if (tier.includes('Ordinary')) return <Shield className="text-gray-300" size={16} />;
    return <Users className="text-gray-500" size={16} />;
  };

  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto pb-40 relative">
      <div className="absolute top-0 left-0 p-20 opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <span className="text-[30rem] font-serif-vintage italic">Sajjana</span>
      </div>

      <div className="text-center mb-24 relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-amber-500 font-heading text-[10px] tracking-[0.5em] mb-4 block uppercase"
        >
          Registry of Souls
        </motion.span>
        <h1 className="text-6xl md:text-8xl font-serif-vintage italic mb-6">The <span className="text-amber-600">Lineage</span></h1>
        <p className="text-gray-400 italic max-w-2xl mx-auto text-lg">
          "A gathering of seekers, a fellowship of intent. Behold the stewards of our global heritage."
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col lg:flex-row gap-8 mb-20 relative z-10">
        <div className="flex-grow relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-900 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <div className="relative flex glass rounded-2xl border border-white/10 overflow-hidden">
            <div className="flex items-center justify-center pl-6 text-amber-500">
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search by name or expertise..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent px-6 py-5 focus:outline-none text-sm italic text-gray-200 placeholder:text-gray-600"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          {['All', 'Core', 'Ordinary', 'Honorary', 'Associate'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full text-[10px] uppercase font-bold tracking-widest border transition-all ${
                activeTab === tab 
                  ? 'bg-amber-600 border-amber-600 text-white shadow-xl shadow-amber-900/30' 
                  : 'border-white/10 text-gray-500 hover:border-amber-500/30 hover:text-amber-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        <AnimatePresence mode="popLayout">
          {filteredFellows.map((fellow) => (
            <motion.div
              layout
              key={fellow.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-[3rem] border border-white/5 hover:border-amber-600/30 transition-all group flex flex-col"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="relative">
                  <div className="absolute -inset-1 bg-amber-600 rounded-full blur-[4px] opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <img src={fellow.avatar} alt={fellow.name} className="w-20 h-20 rounded-full border border-amber-600/20 p-1 relative z-10 object-cover" />
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2 text-amber-500 mb-1">
                    {getTierIcon(fellow.tier)}
                    <span className="text-[9px] uppercase font-bold tracking-widest">{fellow.tier}</span>
                  </div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Joined {fellow.joined}</div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-heading mb-1 group-hover:text-amber-500 transition-colors">{fellow.name}</h3>
                <p className="text-xs text-amber-600/60 font-medium tracking-widest uppercase mb-4">{fellow.expertise}</p>
                <div className="flex items-center gap-2 text-[10px] text-gray-500 italic">
                  <Globe size={12} className="text-amber-900/50" /> {fellow.location}
                </div>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-amber-500 font-heading">{fellow.karma}</span>
                  <span className="text-[9px] text-gray-500 uppercase font-bold tracking-tighter ml-2">Karma Pts</span>
                </div>
                <button className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-600 hover:text-amber-500 hover:border-amber-500 transition-all">
                  <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredFellows.length === 0 && (
        <div className="text-center py-40">
          <p className="text-gray-600 italic font-serif-vintage text-2xl">"No such seeker found in the current archives."</p>
        </div>
      )}

      <div className="mt-40">
        <QuoteBlock 
          sanskrit="विद्या ददाति विनयं"
          quote="Specific knowledge is found by pursuing your genuine curiosity and passion rather than whatever is hot right now. Find what feels like play to you, but looks like work to others."
          author="Naval Ravikant"
          variant="glass"
        />
      </div>
    </div>
  );
};

export default FellowsDirectory;
