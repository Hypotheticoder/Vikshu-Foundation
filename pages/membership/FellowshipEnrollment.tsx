
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Scroll, PenTool, Globe, ArrowRight, CheckCircle2, Heart } from 'lucide-react';
import QuoteBlock from '../../components/ui/QuoteBlock';

const FellowshipEnrollment: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  if (submitted) {
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
          <h2 className="text-4xl font-serif-vintage italic mb-6">Petition <span className="text-amber-500">Received</span></h2>
          <p className="text-gray-400 italic mb-8 leading-relaxed">
            "Your intent has rippled through the cosmic archives. The Council of Elders shall review thy lineage and resonance. Expect a whisper in thy inbox soon."
          </p>
          
          <div className="mb-10 py-6 border-y border-white/5">
             <p className="text-xl md:text-2xl font-serif-vintage italic text-amber-500/90 leading-snug">
               "To seek truth in the company of the wise is to invite the dawn into one's soul."
             </p>
          </div>

          <button 
            onClick={() => navigate('/')}
            className="px-10 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-2xl font-heading tracking-widest text-xs uppercase transition-all shadow-xl shadow-amber-900/20"
          >
            Return to Sanctuary
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 px-6 max-w-5xl mx-auto pb-40 relative">
      <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <span className="text-[30rem] font-serif-vintage italic">Induction</span>
      </div>

      <div className="text-center mb-20 relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-amber-500 font-heading text-[10px] tracking-[0.5em] mb-4 block uppercase"
        >
          Sacred Enrollment
        </motion.span>
        <h1 className="text-5xl md:text-8xl font-serif-vintage italic mb-6">Request for <span className="text-amber-600">Induction</span></h1>
        <p className="text-gray-400 italic max-w-2xl mx-auto">
          "Step forward, seeker. To join the Vikshu Fellowship is to commit thy breath to the preservation of truth and the service of humanity."
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
        {/* Section 1: The Seeker's Identity */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-10 md:p-16 rounded-[4rem] border border-white/10"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-amber-500">
              <Scroll size={20} />
            </div>
            <h3 className="text-2xl font-serif-vintage italic">The Seeker's <span className="text-amber-500">Identity</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Legal Nomenclature</label>
              <input type="text" required placeholder="As recognized by the state..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-amber-500/50 transition-all text-sm italic" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Spiritual / Pen Name</label>
              <input type="text" placeholder="As recognized by the soul..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-amber-500/50 transition-all text-sm italic" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Primary Resonance (Email)</label>
              <input type="email" required placeholder="scribe@lineage.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-amber-500/50 transition-all text-sm" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Chosen Fellowship Tier</label>
              <select required className="w-full bg-[#111] border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-amber-500/50 transition-all text-sm appearance-none cursor-pointer">
                <option>Ordinary Member (Voting)</option>
                <option>Associate Member (Non-Voting)</option>
                <option>Institutional Partner</option>
                <option>Honorary Delegate Request</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Section 2: Sphere of Influence */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-10 md:p-16 rounded-[4rem] border border-white/10"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-amber-500">
              <Globe size={20} />
            </div>
            <h3 className="text-2xl font-serif-vintage italic">Sphere of <span className="text-amber-500">Influence</span></h3>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Primary Pillars of Interest</label>
              <div className="flex flex-wrap gap-4">
                {['Education', 'Shelter', 'Health', 'Innovation', 'Spiritual Life', 'Self Empowerment'].map((pillar) => (
                  <label key={pillar} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="hidden" />
                    <div className="w-5 h-5 border border-white/20 rounded-md flex items-center justify-center group-hover:border-amber-500 transition-colors">
                      <div className="w-2.5 h-2.5 bg-amber-600 rounded-sm opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </div>
                    <span className="text-xs text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">{pillar}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">The Alms of Talent (Skills)</label>
              <input type="text" placeholder="e.g. Sanskrit Translation, Structural Engineering, Financial Auditing..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-amber-500/50 transition-all text-sm italic" />
            </div>
          </div>
        </motion.div>

        {/* Section 3: Statement of Intent */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-10 md:p-16 rounded-[4rem] border border-white/10"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-amber-500">
              <PenTool size={20} />
            </div>
            <h3 className="text-2xl font-serif-vintage italic">Statement of <span className="text-amber-500">Dharma</span></h3>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Thy Motivation</label>
              <textarea 
                rows={6} 
                required
                placeholder="Why do you seek induction into the Vikshu lineage? What legacy do you wish to build with us?"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-amber-500/50 transition-all text-sm italic resize-none"
              ></textarea>
            </div>
            
            <div className="flex items-start gap-4 p-6 rounded-3xl bg-amber-600/5 border border-amber-600/20 text-xs text-gray-400 italic leading-relaxed">
              <div className="shrink-0 text-amber-500 mt-1"><Sparkles size={18} /></div>
              <p>By submitting this petition, you affirm your commitment to the foundation's core principles: the preservation of ancient wisdom, the upliftment of the marginalized, and the ethical pursuit of human innovation.</p>
            </div>
          </div>
        </motion.div>

        <div className="pt-8">
          <button 
            type="submit"
            className="w-full py-8 bg-amber-600 hover:bg-amber-500 text-white rounded-[2rem] font-heading tracking-[0.3em] text-xs uppercase flex items-center justify-center gap-4 transition-all shadow-2xl shadow-amber-900/30 group"
          >
            Dispatch Petition for Review <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </form>

      <div className="mt-40">
        <QuoteBlock 
          sanskrit="सत्यं वद धर्मं चर"
          quote="Induction is not an arrival. It is consent to live with greater responsibility."
          author="From the Vikshu Induction"
          image="/assets/induction.png"
          variant="paper"
        />
      </div>
    </div>
  );
};

export default FellowshipEnrollment;
