
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface SectorCardProps {
  title: string;
  icon: React.ReactNode;
  desc: string;
  color: string;
  image?: string;
  className?: string;
}

const SectorCard: React.FC<SectorCardProps> = ({ title, icon, desc, color, image, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`glass rounded-[3.5rem] border border-white/10 hover:border-amber-600/40 transition-all cursor-pointer group relative overflow-hidden h-full flex flex-col min-h-[400px] shadow-2xl ${className}`}
    >
      {/* Background Image with Blending */}
      {image && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover grayscale brightness-[0.2] group-hover:grayscale-0 group-hover:brightness-[0.4] transition-all duration-1000 scale-110 group-hover:scale-100" 
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${color} mix-blend-multiply opacity-50`}></div>
          <div className="absolute inset-0 vintage-paper opacity-5 mix-blend-overlay"></div>
          {/* Subtle noise overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10 pointer-events-none"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-12 flex flex-col h-full">
        <div className="flex items-start justify-between mb-10">
          <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform shadow-2xl border border-white/10 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
            {icon}
          </div>
          <Sparkles className="text-amber-500/0 group-hover:text-amber-500/40 transition-all duration-700" size={20} />
        </div>
        
        <div className="flex-grow">
          <h3 className="text-3xl md:text-4xl font-heading mb-6 text-white group-hover:text-amber-400 transition-colors leading-tight">
            {title}
          </h3>
          
          <p className="text-base text-gray-300 font-light italic leading-relaxed mb-10 opacity-70 group-hover:opacity-100 transition-opacity">
            {desc}
          </p>
        </div>
        
        <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.5em] text-amber-500 uppercase opacity-60 group-hover:opacity-100 transition-all group-hover:gap-6 border-b border-white/0 group-hover:border-amber-500/30 pb-2 w-fit">
          Access Lineage <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
      
      {/* Gloss Overlay */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none opacity-50"></div>
    </motion.div>
  );
};

export default SectorCard;
