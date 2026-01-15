
import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Award, History, Wand2, Sparkles, LogOut } from 'lucide-react';
import QuoteBlock from '../../components/ui/QuoteBlock';

const Profile: React.FC = () => {
  const karmaLogs = [
    { title: "Ghat Image Restoration", type: "Alchemist Lab", date: "2 mins ago", pts: "+15" },
    { title: "Vedic Philosophy Search", type: "Archives", date: "1 hour ago", pts: "+5" },
    { title: "Corpus Contribution", type: "Offerings", date: "Yesterday", pts: "+100" },
  ];

  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto pb-40">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Sidebar: Membership Details */}
        <aside className="lg:col-span-1 space-y-8">
          <div className="glass p-12 rounded-[3.5rem] text-center border border-white/10 h-fit sticky top-32">
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-1 bg-gradient-to-tr from-amber-600 to-amber-900 rounded-full blur opacity-25"></div>
              <img src="https://picsum.photos/200?u=1" className="w-32 h-32 rounded-full mx-auto relative border-2 border-amber-600/50 p-1 object-cover" alt="Avatar" />
            </div>
            <h2 className="text-3xl font-heading mb-2">Seeker Vardhan</h2>
            <p className="text-[10px] text-amber-500 uppercase font-bold tracking-[0.3em] mb-8 block">Ordinary Member (Voting)</p>
            
            <div className="grid grid-cols-2 gap-4 mb-10 pt-8 border-t border-white/5">
              <div className="text-center">
                <span className="block text-2xl font-bold text-amber-500">420</span>
                <span className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Karma Score</span>
              </div>
              <div className="text-center border-l border-white/5">
                <span className="block text-2xl font-bold text-amber-500">12</span>
                <span className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Offerings</span>
              </div>
            </div>

            <div className="space-y-3 text-left">
              <div className="p-4 rounded-2xl bg-white/5 flex items-center gap-4 text-xs group cursor-pointer hover:bg-white/10 transition-all">
                <Shield className="text-amber-500" size={16} />
                <div>
                  <p className="font-bold text-gray-300">Identity Verified</p>
                  <p className="text-[9px] text-gray-500 uppercase">Legacy Holder</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 flex items-center gap-4 text-xs group cursor-pointer hover:bg-white/10 transition-all">
                <Award className="text-amber-500" size={16} />
                <div>
                  <p className="font-bold text-gray-300">Voting Privileges</p>
                  <p className="text-[9px] text-gray-500 uppercase">Active Seeker</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-10 py-4 rounded-2xl border border-white/5 text-[10px] uppercase font-bold tracking-[0.3em] text-gray-500 hover:text-red-500 hover:border-red-500/30 transition-all flex items-center justify-center gap-2">
              <LogOut size={14} /> Exit Sanctuary
            </button>
          </div>
        </aside>
        
        {/* Main Content: Karma Logs and Legacy */}
        <main className="lg:col-span-2 space-y-12">
          <QuoteBlock 
            quote="Without commitment, you'll never start. But more importantly, without consistency, you'll never finish. Keep moving, keep growing."
            author="Denzel Washington"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Denzel_Washington_2018.jpg/800px-Denzel_Washington_2018.jpg"
            variant="glass"
          />
          
          <div className="glass p-12 rounded-[3.5rem] border border-white/5">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-3xl font-serif-vintage italic">Karma <span className="text-amber-600">Lineage</span></h3>
              <Sparkles className="text-amber-600 opacity-30" />
            </div>
            
            <div className="space-y-4">
              {karmaLogs.map((log, i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all group">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                            {log.type === "Alchemist Lab" ? <Wand2 size={20} /> : <History size={20} />}
                        </div>
                        <div>
                            <h4 className="font-heading text-sm text-gray-300">{log.title}</h4>
                            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 italic">{log.type} • {log.date}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-amber-500 font-bold font-heading">{log.pts}</span>
                        <p className="text-[9px] text-gray-600 uppercase font-bold tracking-tighter">Verified</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
