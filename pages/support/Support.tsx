
import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, TrendingUp, Users, Building2, Phone, Mail, MessageSquare, Clock, ArrowRight, CheckCircle, ShieldCheck, FileText, Compass } from 'lucide-react';
import QuoteBlock from '../../components/ui/QuoteBlock';

const Support: React.FC = () => {
  const consultancyServices = [
    { 
      title: "Legal & Regulatory Aid", 
      desc: "Comprehensive navigation through the labyrinth of global NGO compliance, trust laws, and the complex preservation of architectural heritage rights. We protect thy legacy from modern bureaucratic erosion.", 
      icon: <Gavel />, 
      color: "from-amber-600/20",
      features: ["International Trust Compliance", "Heritage Property Rights", "Non-profit Charter Audits", "Dispute Resolution Advisory"]
    },
    { 
      title: "Strategic Financial Advisory", 
      desc: "Refined management of humanitarian capital and corpus endowments. We apply Victorian prudence and Vedic abundance principles to ensure thy capital grows ethically and eternally.", 
      icon: <TrendingUp />, 
      color: "from-emerald-600/20",
      features: ["Endowment Growth Strategy", "Ethical Investment Portfolios", "Impact Reinvestment Models", "Fiscal Transparency Reporting"]
    },
    { 
      title: "Infrastructural Mentoring", 
      desc: "Specialized support for building physical and digital foundations, from the structural restoration of ancient sanctuaries to the architecture of high-security digital archives.", 
      icon: <Building2 />, 
      color: "from-blue-600/20",
      features: ["Heritage Restoration Engineering", "Digital Archive Architecture", "Sanctuary Spatial Planning", "Sustainable Resource Management"]
    },
    { 
      title: "Management & Mentoring", 
      desc: "Strategic guidance for organization leaders and seekers, focusing on operational efficiency, team alignment, and the cultivation of cultural leadership across generations.", 
      icon: <Users />, 
      color: "from-purple-600/20",
      features: ["Lineage Succession Planning", "Operational Integrity Audits", "Cross-Cultural Team Alignment", "Dharmic Leadership Coaching"]
    }
  ];

  const engagementProcess = [
    { title: "Initial Inquiry", icon: <MessageSquare size={18} />, desc: "A formal petition detailing thy organizational challenge or personal quest." },
    { title: "Resonance Check", icon: <Compass size={18} />, desc: "A 1-on-1 session to ensure thy intent aligns with the Vikshu charter." },
    { title: "Strategy Drafting", icon: <FileText size={18} />, desc: "Development of a bespoke advisory blueprint tailored to thy heritage needs." },
    { title: "Active Stewardship", icon: <ShieldCheck size={18} />, desc: "Ongoing implementation support and monitoring by the Council of Elders." }
  ];

  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto pb-40 relative">
      <div className="max-w-3xl mb-24">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-amber-500 font-heading text-[10px] tracking-[0.5em] mb-4 block uppercase"
        >
          Seeker Sanctuary
        </motion.span>
        <h1 className="text-5xl md:text-8xl font-serif-vintage italic mb-8">Support & <span className="text-amber-600">Guidance</span></h1>
        <p className="text-xl text-gray-400 font-light italic leading-relaxed max-w-2xl border-l border-amber-600/30 pl-8">
          "For when a hand is extended in service, the heart of the universe beats as one. We provide the scaffolding for your noble intent."
        </p>
      </div>

      {/* Helpline & Quick Contact - Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-32">
        <motion.div 
          whileHover={{ y: -10 }}
          className="md:col-span-2 glass p-10 rounded-[3rem] border border-amber-600/20 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform">
            <Phone size={80} />
          </div>
          <div>
            <span className="text-amber-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block">Direct Helpline</span>
            <h3 className="text-3xl font-heading mb-4">Urgent Resonance</h3>
            <p className="text-gray-400 italic text-sm mb-8">For immediate infrastructural or legal emergencies in heritage projects.</p>
          </div>
          <a href="tel:+1800VIKSHU" className="text-2xl font-serif-vintage text-amber-500 hover:text-amber-400 transition-colors">
            1-800-VIKSHU-OFFER
          </a>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="glass p-8 rounded-[3rem] border border-white/5 flex flex-col items-center justify-center text-center group"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform">
            <Clock size={32} />
          </div>
          <h4 className="font-heading text-sm mb-2">Hours of Duty</h4>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest italic">Sunrise to Sunset</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="glass p-8 rounded-[3rem] border border-white/5 flex flex-col items-center justify-center text-center group"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform">
            <Mail size={32} />
          </div>
          <h4 className="font-heading text-sm mb-2">Epistolary</h4>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest italic">scribe@vikshu.org</p>
        </motion.div>
      </div>

      {/* Dedicated Consultancy Section */}
      <section className="mb-40 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-amber-600/[0.02] -z-10 rounded-[4rem] blur-3xl"></div>
        <div className="text-center mb-24">
          <span className="text-amber-500 font-heading text-[10px] tracking-[0.4em] mb-4 block uppercase">The Advisory Mandate</span>
          <h2 className="text-4xl md:text-6xl font-serif-vintage italic mb-6">Consultancy <span className="text-amber-600">Excellence</span></h2>
          <p className="text-gray-500 italic max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive suite of advisory services designed to fortify the foundations of global non-profits and individual legacy holders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {consultancyServices.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="glass p-12 md:p-16 rounded-[4rem] border border-white/5 hover:border-amber-600/30 transition-all group relative overflow-hidden flex flex-col h-full"
            >
              <div className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br ${s.color} rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000 opacity-40`}></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl glass flex items-center justify-center text-amber-500 mb-10 group-hover:scale-110 transition-transform border border-white/10 shadow-2xl">
                  {React.cloneElement(s.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-3xl md:text-4xl font-heading mb-6 group-hover:text-amber-500 transition-colors leading-tight">{s.title}</h3>
                <p className="text-lg text-gray-400 italic leading-relaxed mb-10 font-light">
                  {s.desc}
                </p>
                
                <div className="space-y-4 mb-12">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500">Service Facets:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {s.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                        <CheckCircle size={12} className="text-amber-600 shrink-0" />
                        <span className="tracking-wide font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <button className="mt-auto flex items-center gap-4 text-[11px] font-heading uppercase tracking-[0.3em] text-amber-500 group-hover:gap-6 transition-all relative z-10 w-fit border-b border-amber-600/20 pb-2">
                Begin Consultation <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Engagement Process */}
        <div className="mt-32 p-12 md:p-20 glass rounded-[4rem] border border-white/5">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-heading text-white uppercase tracking-widest mb-2">The Engagement Process</h3>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] font-bold">Four Steps to Alignment</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 -z-10"></div>
            {engagementProcess.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-xl">
                  {step.icon}
                </div>
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-2">Phase {idx + 1}</span>
                <h4 className="text-lg font-heading text-white mb-4">{step.title}</h4>
                <p className="text-xs text-gray-500 italic leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Quote */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass p-12 md:p-16 rounded-[4rem] border border-white/10"
        >
          <div className="mb-10">
            <h3 className="text-4xl font-serif-vintage italic mb-2">Send a <span className="text-amber-500">Query</span></h3>
            <p className="text-gray-500 text-xs italic">All communications are treated with absolute archival sanctity.</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Thy Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500/50 transition-all text-sm italic" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Email Essence</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500/50 transition-all text-sm" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Nature of Support</label>
              <select className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500/50 transition-all text-sm cursor-pointer appearance-none">
                <option>General Inquiry</option>
                <option>Legal Consultancy</option>
                <option>Financial Strategy</option>
                <option>Helpline Assistance</option>
                <option>Spiritual Counseling</option>
                <option>Infrastructural Support</option>
                <option>Management & Mentoring</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-amber-500 font-bold ml-1">Thy Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500/50 transition-all text-sm italic resize-none"></textarea>
            </div>
            <button className="w-full py-5 bg-amber-600 hover:bg-amber-500 text-white rounded-2xl font-heading tracking-widest text-xs uppercase flex items-center justify-center gap-3 transition-all shadow-xl shadow-amber-900/20 group">
              Dispatch Message <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
            </button>
          </form>
        </motion.div>

        <div className="space-y-12">
          <QuoteBlock 
            quote="Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough."
            author="Oprah Winfrey"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Oprah_Winfrey_at_2011_TCA.jpg/800px-Oprah_Winfrey_at_2011_TCA.jpg"
            variant="glass"
          />
          <QuoteBlock 
            quote="Be humble. Be hungry. And always be the hardest worker in the room. Success isn't always about greatness, it's about consistency."
            author="Dwayne Johnson"
            sanskrit="श्रम एव जयते"
            variant="paper"
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
