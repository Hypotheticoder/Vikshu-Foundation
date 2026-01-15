
import React from 'react';
import { motion } from 'framer-motion';

interface NGOPostProps {
  ngo: string;
  tag: string;
  title: string;
  excerpt: string;
}

const NGOPost: React.FC<NGOPostProps> = ({ ngo, tag, title, excerpt }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer p-6 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5"
    >
      <div className="flex items-center gap-4 mb-3">
        <span className="text-[10px] font-bold tracking-widest text-amber-600 uppercase bg-amber-600/10 px-2 py-0.5 rounded-sm">{ngo}</span>
        <span className="text-[10px] text-gray-600">•</span>
        <span className="text-[10px] text-gray-500 uppercase tracking-tighter">{tag}</span>
      </div>
      <h4 className="text-xl font-heading mb-3 text-white group-hover:text-amber-500 transition-colors leading-tight">{title}</h4>
      <p className="text-sm text-gray-400 font-light italic leading-relaxed line-clamp-3">{excerpt}</p>
    </motion.div>
  );
};

export default NGOPost;
