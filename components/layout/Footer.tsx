
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 glass border-t border-white/5 mt-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-heading text-3xl text-amber-500 mb-8 tracking-widest uppercase">Vikshu</h3>
          <p className="text-gray-400 italic max-w-sm leading-relaxed font-light">
            "Preserving the sanctity of global heritage while innovating for the future of humanity."
          </p>
        </div>
        <div>
          <h4 className="font-heading text-[10px] tracking-[0.3em] text-white mb-8 uppercase">Consultancy</h4>
          <ul className="space-y-4 text-xs text-gray-500 font-bold tracking-widest uppercase italic">
            <li className="hover:text-amber-500 transition-colors cursor-pointer">Legal Aid</li>
            <li className="hover:text-amber-500 transition-colors cursor-pointer">Financial Strategy</li>
            <li className="hover:text-amber-500 transition-colors cursor-pointer">Infrastructural Mentoring</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-[10px] tracking-[0.3em] text-white mb-8 uppercase">Legacy</h4>
          <ul className="space-y-4 text-xs text-gray-500 font-bold tracking-widest uppercase italic">
            <li className="hover:text-amber-500 transition-colors cursor-pointer">Est. 1890</li>
            <li className="hover:text-amber-500 transition-colors cursor-pointer">Sanskrit-Victorian Roots</li>
            <li className="hover:text-amber-500 transition-colors cursor-pointer">Global Fellowship</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center text-[10px] text-gray-600 font-bold tracking-widest uppercase">
        © 2024 Vikshu Foundation. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
