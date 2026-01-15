
import React from 'react';
import QuoteBlock from '../../components/ui/QuoteBlock';
import { Gavel, TrendingUp, Users, Building2 } from 'lucide-react';

const Consultancy: React.FC = () => {
  const supports = [
    { title: "Legal Support", desc: "Navigating the complexities of global non-profit regulations.", icon: <Gavel /> },
    { title: "Financial Strategy", desc: "Ensuring the longevity of humanitarian capital through ethical growth.", icon: <TrendingUp /> },
    { title: "Infrastructural", desc: "Mentoring and management related consultancy for scale.", icon: <Building2 /> },
    { title: "Mentorship", desc: "Management related and financial consultancy for seekers.", icon: <Users /> }
  ];

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto pb-40">
      <div className="max-w-3xl mb-24">
        <span className="text-amber-500 font-heading text-[10px] tracking-[0.5em] mb-4 block uppercase">Advisory Board</span>
        <h1 className="text-5xl md:text-7xl font-serif-vintage mb-8 italic">Consultancy & <span className="text-amber-600">Support</span></h1>
        <p className="text-xl text-gray-400 font-light italic leading-relaxed">
          The foundation offers a range of consultancy services for individuals and partner organizations to ensure systematic progress.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {supports.map((s, i) => (
            <div key={i} className="glass p-10 rounded-[3rem] border border-white/5 hover:border-amber-600/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-600/10 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-heading mb-3">{s.title}</h3>
              <p className="text-sm text-gray-500 italic leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        
        <QuoteBlock 
          quote="Evolution is the greatest force in the universe. If you don't fail, you're not even trying. Pain plus reflection equals progress."
          author="Ray Dalio"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Ray_Dalio_World_Economic_Forum_2013.jpg/800px-Ray_Dalio_World_Economic_Forum_2013.jpg"
          sanskrit="तत्त्वमसि"
          className="h-full flex items-center"
        />
      </div>
    </div>
  );
};

export default Consultancy;
