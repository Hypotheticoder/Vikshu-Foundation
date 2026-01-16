
import React from 'react';
import { motion } from 'framer-motion';


interface QuoteBlockProps {
  quote: string;
  author: string;
  image?: string;
  sanskrit?: string;
  variant?: 'paper' | 'glass';
  className?: string;
  imagePosition?: 'left' | 'right';
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({ 
  quote, 
  author, 
  image, 
  sanskrit, 
  variant = 'paper', 
  className = '',
  imagePosition = 'right'
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1], // Smooth quintic ease
        opacity: { duration: 0.8 }
      }}
      className={`${variant === 'paper' ? 'vintage-paper text-amber-950 border-amber-900/20' : 'glass text-white border-white/10'} p-8 md:p-20 rounded-[3rem] border shadow-2xl relative overflow-hidden ${className}`}
      style={variant === 'paper' ? { backgroundImage: `url(/assets/background.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : undefined}
    >
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[12rem] font-serif-vintage italic">"</span>
      </div>
      
      <div className={`flex flex-col ${imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center relative z-10`}>
        <div className="flex-1">
          {sanskrit && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mb-8"
            >
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] mb-4 block opacity-60">The Ancient Resonance</span>
              <h3 className="text-2xl md:text-3xl font-heading tracking-widest leading-relaxed">
                {sanskrit}
              </h3>
              <div className="h-px w-20 bg-current opacity-20 my-8"></div>
            </motion.div>
          )}

          <div className="relative">
            {!sanskrit && <span className="text-[10px] uppercase font-bold tracking-[0.4em] mb-6 block opacity-60">Whispers of Wisdom</span>}
            <p className="text-2xl md:text-4xl font-serif-vintage italic leading-snug mb-8">
              "{quote}"
            </p>
            <p className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase opacity-70">
              — {author}
            </p>
          </div>
        </div>

        {image && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="shrink-0 relative group"
          >
            <div className="absolute inset-0 bg-amber-900/20 blur-2xl rounded-full group-hover:bg-amber-600/20 transition-colors"></div>
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-current/10 relative">
              <img 
                src={image} 
                alt={author} 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-current/20 to-transparent"></div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default QuoteBlock;
