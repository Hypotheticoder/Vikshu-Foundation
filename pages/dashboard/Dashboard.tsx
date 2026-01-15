
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { BadgeCheck, Scroll, History, Settings, Globe, HeartHandshake } from 'lucide-react';

const Dashboard: React.FC = () => {
  const data = [
    { name: 'Education', val: 400 },
    { name: 'Health', val: 300 },
    { name: 'Shelter', val: 200 },
    { name: 'Spiritual', val: 278 },
    { name: 'Innov.', val: 189 },
  ];

  const COLORS = ['#d4af37', '#92400e', '#78350f', '#451a03', '#b45309'];

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Profile Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <div className="glass p-8 rounded-[2.5rem] relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4">
               <span className="bg-amber-600/20 text-amber-500 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest">Core Member</span>
             </div>
             <div className="text-center">
               <div className="w-24 h-24 rounded-full mx-auto mb-6 border-2 border-amber-600 p-1">
                 <img src="https://picsum.photos/200?u=1" className="w-full h-full rounded-full object-cover" alt="Profile" />
               </div>
               <h2 className="text-2xl font-heading mb-1">Aarya Vardhan</h2>
               <p className="text-gray-400 text-sm italic font-light">Individual Contributor</p>
               <div className="mt-6 flex justify-center gap-4">
                 <div className="text-center">
                    <p className="text-xl font-bold text-amber-500">42</p>
                    <p className="text-[10px] uppercase text-gray-500 font-bold">Karma Pts</p>
                 </div>
                 <div className="w-px bg-white/10"></div>
                 <div className="text-center">
                    <p className="text-xl font-bold text-amber-500">12</p>
                    <p className="text-[10px] uppercase text-gray-500 font-bold">Projects</p>
                 </div>
               </div>
             </div>

             <div className="mt-10 space-y-3">
               <button className="w-full text-left p-4 hover:bg-white/5 rounded-2xl flex items-center gap-3 transition-colors text-sm">
                 <BadgeCheck className="text-amber-500" size={18} /> Membership Details
               </button>
               <button className="w-full text-left p-4 hover:bg-white/5 rounded-2xl flex items-center gap-3 transition-colors text-sm">
                 <Scroll className="text-amber-500" size={18} /> Donation Records
               </button>
               <button className="w-full text-left p-4 hover:bg-white/5 rounded-2xl flex items-center gap-3 transition-colors text-sm">
                 <Globe className="text-amber-500" size={18} /> Cultural Logs
               </button>
               <button className="w-full text-left p-4 hover:bg-white/5 rounded-2xl flex items-center gap-3 transition-colors text-sm">
                 <Settings className="text-amber-500" size={18} /> Settings
               </button>
             </div>
          </div>

          <div className="vintage-paper p-8 rounded-2xl shadow-xl text-amber-950">
             <h3 className="font-heading text-lg mb-4 border-b border-amber-900/10 pb-2 italic underline">Spiritual Outlook</h3>
             <p className="text-sm font-serif-vintage italic leading-relaxed">
               "The stars align when the intent is pure. Your current Saturn transit suggests a time for great foundation building."
             </p>
             <div className="mt-4 text-[10px] font-bold tracking-widest uppercase opacity-50">Monthly Horoscope</div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-8 rounded-[2.5rem]">
              <h3 className="font-heading text-sm uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                <HeartHandshake size={16} /> Impact Contribution
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 10}} />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#1a1a1a', border: 'none', borderRadius: '12px'}} />
                    <Bar dataKey="val" radius={[10, 10, 0, 0]}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass p-8 rounded-[2.5rem] flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-sm uppercase tracking-widest text-gray-500 mb-2">Latest Milestone</h3>
                <h2 className="text-3xl font-serif-vintage italic text-amber-500 leading-snug">The 100th Shelter in Kashi</h2>
              </div>
              <div className="mt-8">
                <p className="text-sm text-gray-400 font-light italic mb-4">
                  "Building bricks not just for walls, but for dreams that have been cold for too long."
                </p>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-amber-600 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                </div>
                <p className="text-[10px] uppercase text-gray-500 mt-2 font-bold tracking-tighter">75% of funding goals reached</p>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-[2.5rem]">
            <h3 className="font-heading text-lg mb-8">Recent Contributions</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl transition-all border border-transparent hover:border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-amber-500">
                      <History size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Corpus Donation - Kashi Trust</p>
                      <p className="text-xs text-gray-500">Nov 12, 2024 • Transaction ID: #VK992{i}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-amber-500 font-bold">$1,200.00</p>
                    <p className="text-[10px] text-green-500 uppercase font-bold">Verified</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
