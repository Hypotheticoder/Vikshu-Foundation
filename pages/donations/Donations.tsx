
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldOff, Heart, Coins, Info, ArrowRight, CheckCircle2, Sparkles, HandHeart, Star, Vote, Shield, Award, Building, Check, Scale, Briefcase, CheckSquare } from 'lucide-react';
import QuoteBlock from '../../components/ui/QuoteBlock';

const Donations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'corpus' | 'anonymous'>('general');
  const [amount, setAmount] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const donationTypes = [
    { id: 'general', name: 'General', icon: <Heart size={18} />, desc: 'Flexible support for immediate humanitarian needs.' },
    { id: 'corpus', name: 'Corpus', icon: <Coins size={18} />, desc: 'Permanent endowment for eternal legacy projects.' },
    { id: 'anonymous', name: 'Anonymous', icon: <ShieldOff size={18} />, desc: 'Contribute in sacred silence, unknown to the world.' },
  ];

  const presets = ['50', '100', '500', '1000', '5000'];

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSelectType = (id: 'general' | 'corpus' | 'anonymous') => {
    setActiveTab(id);
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      // Allow layout/animations to start, then scroll with an offset
      setTimeout(() => {
        const el = formRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const navEl = document.querySelector('nav');
        const headerOffset = navEl ? Math.round(navEl.getBoundingClientRect().height) +  96 : 22; // dynamic header height fallback
        const target = window.scrollY + rect.top - headerOffset;
        window.scrollTo({ top: Math.max(0, target), behavior: 'smooth' });
      }, 120);
    }
  };

  const membershipTiers = [
    {
      name: "Core Fellowship",
      icon: <Star className="text-amber-500" />,
      desc: "The guardians of the foundation's innermost lineage. A lifetime appointment for the dedicated.",
      voting: "Plenary Voting Rights",
      benefits: ["Permanent Grand Council Seat", "Sanctum of Silence Access", "Legacy Naming Rights", "Global Delegacy Funding"],
      duties: ["Mentorship of Rising Seekers", "Strategic Oversight of a Pillar", "Endowment Stewardship"],
      criteria: ["15+ years of cultural service", "Mastery of Sanskrit/Victorian disciplines", "Council Unanimity"],
      color: "border-amber-500/50 bg-amber-500/5"
    },
    {
      name: "Ordinary Member",
      icon: <Vote className="text-amber-500" />,
      desc: "The active heart of Vikshu. Ordinary members drive progress through democratic participation.",
      voting: "Full Voting Rights",
      benefits: ["Resolution Voting Power", "Priority Retreat Enrollment", "Project Leadership Eligibility", "Archive Repository Access"],
      duties: ["Assembly Meet Attendance", "Annual Circle of Action", "Local Value Advocacy"],
      criteria: ["12-month Associate period", "Resonance Assessment Pass", "Fellow Recommendation"],
      color: "border-white/10 bg-white/[0.02]"
    },
    {
      name: "Associate Member",
      icon: <Shield className="text-gray-400" />,
      desc: "An entry-level fellowship for those beginning their journey. Focused on learning and support.",
      voting: "Observer Status",
      benefits: ["Public Lecture Access", "Digital Wisdom Repository", "Induction Pathway", "Volunteer Program Entry"],
      duties: ["Protocol Adherence", "Consistent Self-Study", "Awareness Support"],
      criteria: ["Digital Portal Application", "Counselor Meet Verification", "Ethical Charter Agreement"],
      color: "border-white/10 bg-white/[0.01]"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl glass p-16 rounded-[4rem] text-center border border-amber-500/30 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-amber-600/5 -z-10 blur-3xl"></div>
          <div className="w-24 h-24 bg-amber-600/20 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg shadow-amber-900/20">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-4xl font-serif-vintage italic mb-6">Offering <span className="text-amber-500">Accepted</span></h2>
          <p className="text-gray-400 italic mb-10 leading-relaxed">
            "Thy generosity has been etched into the lineage of the Vikshu Foundation. Like a ripple in a sacred lake, your contribution will touch lives far beyond the horizon."
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="px-10 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-2xl font-heading tracking-widest text-xs uppercase transition-all shadow-xl shadow-amber-900/20"
          >
            Peace be upon thee
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto pb-40 relative">
      <div className="absolute top-0 right-0 p-20 opacity-[0.01] pointer-events-none select-none">
        <HandHeart size={400} />
      </div>

      <div className="text-center mb-24 relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-amber-500 font-heading text-[10px] tracking-[0.5em] mb-4 block uppercase"
        >
          Manifesting Abundance
        </motion.span>
        <h1 className="text-6xl md:text-[8rem] font-serif-vintage italic mb-6 leading-none">Sacred <span className="text-amber-600">Offerings</span></h1>
        <p className="text-gray-400 italic max-w-2xl mx-auto text-lg leading-relaxed">
          "The act of giving is the highest form of self-illumination. Choose thy path of contribution to the universal welfare."
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 mb-32">
        {/* Selection Sidebar */}
          <div className="lg:col-span-4 space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500 mb-6 px-4">Offering Modality</h3>
          {donationTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleSelectType(type.id as any)}
              className={`w-full text-left p-8 rounded-[2.5rem] transition-all border flex flex-col gap-4 relative overflow-hidden group ${
                activeTab === type.id 
                  ? 'bg-amber-600/10 border-amber-600/50 shadow-2xl shadow-amber-900/10' 
                  : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${activeTab === type.id ? 'bg-amber-600 text-white' : 'bg-white/5 text-amber-500'}`}>
                {type.icon}
              </div>
              <div>
                <h4 className={`font-heading text-lg mb-2 ${activeTab === type.id ? 'text-white' : 'text-gray-300'}`}>{type.name}</h4>
                <p className="text-xs italic leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">{type.desc}</p>
              </div>
              {activeTab === type.id && (
                <motion.div layoutId="activeGlow" className="absolute -inset-1 border border-amber-500/20 rounded-[2.5rem] blur-sm"></motion.div>
              )}
            </button>
          ))}
        </div>

        {/* Form Area */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="glass p-10 md:p-16 rounded-[4rem] border border-white/10 h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif-vintage italic mb-2 capitalize">
                    {activeTab} <span className="text-amber-500">Offering</span>
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Resonance Level: High Sanctity</p>
                </div>
                <div className="w-16 h-16 rounded-3xl glass flex items-center justify-center text-amber-600 shadow-xl">
                  <Sparkles size={24} />
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-10 flex-grow">
                <div className="space-y-6">
                  <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Thy Bounty (USD)</label>
                  <div className="grid grid-cols-5 gap-3">
                    {presets.map((p) => (
                      <button 
                        key={p}
                        type="button"
                        onClick={() => setAmount(p)}
                        className={`py-4 rounded-2xl text-xs font-heading tracking-widest transition-all border ${amount === p ? 'bg-amber-600 border-amber-600 text-white' : 'bg-white/5 border-white/10 text-gray-500 hover:border-amber-500/30'}`}
                      >
                        ${p}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-8 top-1/2 -translate-y-1/2 text-amber-500 font-serif-vintage text-3xl">$</span>
                    <input 
                      type="number" 
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Custom Offering" 
                      className="w-full bg-white/5 border border-white/10 rounded-3xl pl-16 pr-8 py-8 focus:outline-none focus:border-amber-500/50 transition-all text-4xl font-serif-vintage text-amber-500 placeholder:text-gray-800" 
                    />
                  </div>
                </div>

                {activeTab !== 'anonymous' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Thy Nomenclature</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Aarya Vardhan" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-amber-500/50 transition-all text-sm italic" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Email Essence</label>
                      <input 
                        type="email" 
                        placeholder="scribe@lineage.org" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-amber-500/50 transition-all text-sm" 
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Sacred Intent</label>
                  <textarea 
                    rows={3} 
                    placeholder="Describe the soul of this contribution..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:outline-none focus:border-amber-500/50 transition-all text-sm italic resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={!amount}
                  className="w-full py-8 bg-amber-600 hover:bg-amber-500 disabled:opacity-30 text-white rounded-[2.5rem] font-heading tracking-[0.3em] text-xs uppercase flex items-center justify-center gap-4 transition-all shadow-2xl shadow-amber-900/30 group mt-auto"
                >
                  Commit Sacred Offering <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
                </button>
              </form>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Detailed Membership Tiers Section */}
      <section className="mb-40 relative z-10">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-heading text-[10px] tracking-[0.4em] mb-4 block uppercase">Fellowship Lineage</span>
          <h2 className="text-4xl md:text-6xl font-serif-vintage italic mb-6">Lineage <span className="text-amber-600">Pathways</span></h2>
          <p className="text-gray-500 italic max-w-2xl mx-auto text-lg leading-relaxed mb-12">
            "Every contribution is a step towards membership. Understand the specific duties and sacred privileges of thy future lineage."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {membershipTiers.map((tier, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`glass p-10 rounded-[3.5rem] border ${tier.color} flex flex-col h-full hover:shadow-2xl transition-all group`}
            >
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform">
                {tier.icon}
              </div>
              <h3 className="text-2xl font-heading mb-3 group-hover:text-amber-500 transition-colors">{tier.name}</h3>
              <p className="text-sm text-gray-500 italic mb-8 leading-relaxed line-clamp-2">{tier.desc}</p>
              
              <div className="space-y-8 flex-grow">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-600 mb-4 flex items-center gap-2">
                    <Sparkles size={12} /> Sacred Privileges
                  </h4>
                  <ul className="space-y-3">
                    {tier.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[11px] text-gray-300 font-medium">
                        <Check size={12} className="text-amber-600 mt-0.5 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-4 flex items-center gap-2">
                    <Briefcase size={12} /> Sacred Duties
                  </h4>
                  <ul className="space-y-3">
                    {tier.duties.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[11px] text-gray-400 italic">
                        <div className="w-1 h-1 bg-amber-600/40 rounded-full mt-1.5 shrink-0" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-600 mb-4 flex items-center gap-2">
                    <CheckSquare size={12} /> Induction Criteria
                  </h4>
                  <ul className="space-y-3">
                    {tier.criteria.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                        <span className="text-amber-900 font-serif-vintage italic text-xs -mt-0.5">{idx + 1}.</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5 w-fit">
                  <Scale size={12} className="text-amber-500" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-amber-500">{tier.voting}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <QuoteBlock 
          variant="glass"
          quote="If you're in the luckiest 1% of humanity, you owe it to the rest of humanity to think about the other 99%."
          author="Warren Buffett"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit.jpg/800px-Warren_Buffett_at_the_2015_SelectUSA_Investment_Summit.jpg"
        />
        <div className="glass p-12 rounded-[4rem] border border-white/10 flex flex-col justify-center">
          <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-amber-500 mb-8">Direct Endowment</h4>
          <div className="space-y-6">
            <div className="pb-6 border-b border-white/5">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Primary Trust Account</p>
              <p className="text-2xl font-heading text-white tracking-widest">VIKSHU-8899-2200-11</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">IFSC / Routing Essence</p>
              <p className="text-2xl font-heading text-white tracking-widest">VIKSHU0000042</p>
            </div>
          </div>
          <p className="mt-12 text-xs text-gray-500 italic leading-relaxed">
            For large scale heritage restorations or physical artifact endowments, please contact the High Council directly at <span className="text-amber-500">council@vikshu.org</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donations;
