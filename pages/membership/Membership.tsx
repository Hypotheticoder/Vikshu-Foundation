
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Vote, Star, Building, Users, Shield, Award, Scroll, Scale, Briefcase, CheckSquare, Sparkles } from 'lucide-react';
import QuoteBlock from '../../components/ui/QuoteBlock';

const Membership: React.FC = () => {
  const tiers = [
    {
      name: "Core Fellowship",
      icon: <Star className="text-amber-500" />,
      desc: "The guardians of the foundation's innermost lineage. This is a lifetime appointment for those who have dedicated their existence to the preservation of universal wisdom.",
      voting: "Plenary Voting Rights (Council Seat)",
      benefits: [
        "Permanent Seat on the Grand Council",
        "Lifetime Access to the 'Sanctum of Silence' (Private Archives)",
        "Legacy Naming Rights for Heritage Restoration Projects",
        "Fully Funded Global Delegacy for Cultural Exchange",
        "Executive Oversight of Foundation Grants",
        "Direct Advisory Access to International Partners"
      ],
      duties: [
        "Mentorship of at least two Rising Seekers annually",
        "Strategic oversight of one primary Foundation Pillar",
        "Ethical stewardship of the Permanent Corpus Endowment",
        "Preservation and transmission of the Foundation's Oral History",
        "Final approval authority for New Induction petitions"
      ],
      criteria: [
        "Minimum 15 years of proven humanitarian or cultural service",
        "Validated scholarly or practical mastery in a Sanskrit or Victorian discipline",
        "Unanimous nomination by the existing Council of Elders",
        "Completion of the 'Sacred Vow of Stewardship'"
      ],
      color: "border-amber-500/50 bg-amber-500/5 shadow-amber-900/20"
    },
    {
      name: "Ordinary Member",
      icon: <Vote className="text-amber-500" />,
      desc: "The active heart of the Vikshu community. Ordinary members drive the foundation's progress through democratic participation and project leadership.",
      voting: "Full Voting Rights (General Assembly)",
      benefits: [
        "Voting power on all General Assembly resolutions",
        "Priority enrollment in Wisdom Retreats and Seminars",
        "Eligibility for Project Leadership and Grants",
        "Subscription to the quarterly 'Archival Resonance' Journal",
        "Full access to the Digital Wisdom Repository",
        "Member-exclusive networking at local chapters"
      ],
      duties: [
        "Active attendance at semi-annual General Assembly meets",
        "Participation in at least one 'Circle of Action' per year",
        "Contribution of annual membership dues for operational growth",
        "Advocacy for Vikshu values in local civic spaces",
        "Mentoring Associate Members in foundational ethics"
      ],
      criteria: [
        "Successful completion of a 12-month Associate Induction period",
        "Passing of the 'Cultural Resonance' foundational assessment",
        "Recommendation from one existing Ordinary or Core Fellow",
        "Commitment to at least 40 hours of annual service"
      ],
      color: "border-white/10"
    },
    {
      name: "Associate Member",
      icon: <Shield className="text-gray-400" />,
      desc: "An entry-level fellowship for those beginning their journey with Vikshu. Focuses on learning, absorption, and supportive contribution.",
      voting: "Observer Status (Non-voting)",
      benefits: [
        "Access to Public Lectures and Foundation Workshops",
        "Monthly 'Whispers of Wisdom' Digital Newsletter",
        "Discounted entry to Foundation Gala events",
        "Official Certificate of Association",
        "Pathways for transition to Ordinary Membership",
        "Participation in public volunteer programs"
      ],
      duties: [
        "Observation of foundation protocols and ethics",
        "Consistent self-study using provided foundation materials",
        "Supportive participation in local awareness campaigns",
        "Feedback contribution for public initiatives",
        "Annual renewal of associate status"
      ],
      criteria: [
        "Open induction application via the digital portal",
        "Resonance verification through a 1-on-1 counselor meet",
        "Agreement to the Foundation's 'Ethical Charter'",
        "Basic knowledge of Sanskrit and Victorian heritage concepts"
      ],
      color: "border-white/10"
    },
    {
      name: "Honorary Member",
      icon: <Award className="text-amber-400" />,
      desc: "Distinguished luminaries, scholars, and philanthropists whose life's work aligns with the Vikshu ethos. Invited to lend their wisdom to our collective mission.",
      voting: "Advisory Capacity (Non-voting)",
      benefits: [
        "Liaison status with the High Council",
        "Invitations to keynote foundation summits",
        "Recognition in the Permanent Hall of Honor",
        "Access to restricted research fellowships",
        "Honorary title of 'Distinguished Steward'",
        "Custom heritage seal for official correspondence"
      ],
      duties: [
        "One 'Masterclass' or lecture for the community annually",
        "Occasional consultation on specialized cultural research",
        "Representation of Vikshu at external international forums",
        "Validation of high-level archival translations"
      ],
      criteria: [
        "Exceptional global impact in arts, science, or humanities",
        "Direct Council Invitation based on lifetime achievement",
        "Acceptance of the role of 'Global Ambassador'",
        "Minimum age of 40 (waived for exceptional cases)"
      ],
      color: "border-amber-400/30"
    },
    {
      name: "Institutional Partner",
      icon: <Building className="text-blue-400" />,
      desc: "For organizations, NGOs, and corporations seeking deep alignment and shared resource management with the Vikshu network.",
      voting: "Stakeholder Status (Non-voting)",
      benefits: [
        "Joint project branding and public recognition",
        "Access to Vikshu's ethical auditing tools",
        "Resource sharing and collaborative grant opportunities",
        "Employee engagement and volunteer programs",
        "Direct portal for inter-organizational logistics",
        "Quarterly strategic partnership reviews"
      ],
      duties: [
        "Adherence to Vikshu's 'Partner Transparency Protocol'",
        "Shared reporting of impact metrics for joint ventures",
        "Logistical support for foundation field operations",
        "Co-hosting of at least one regional event annually",
        "Strict compliance with anti-corruption standards"
      ],
      criteria: [
        "Registered legal entity with at least 3 years of operation",
        "Passing of a comprehensive dual-organizational audit",
        "Proof of ethical financial standing and mission alignment",
        "Signing of the 'Long-term Mutual Support Treaty'"
      ],
      color: "border-blue-400/30"
    }
  ];

  return (
    <div className="pt-20 px-6 max-w-7xl mx-auto pb-40 relative">
      <div className="absolute top-0 right-0 p-20 opacity-[0.01] pointer-events-none select-none">
        <Scroll size={400} />
      </div>

      <div className="text-center mb-32 relative z-10">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-amber-500 font-heading text-[10px] tracking-[0.5em] mb-4 block uppercase"
        >
          Universal Fellowship
        </motion.span>
        <h1 className="text-6xl md:text-8xl font-serif-vintage italic mb-6">The <span className="text-amber-600">Lineage</span></h1>
        <p className="text-gray-400 italic max-w-2xl mx-auto text-lg leading-relaxed">
          "A covenant between the seeker and the universal truth. Each path holds distinct duties, specific requirements, and sacred privileges."
        </p>
      </div>

      <div className="space-y-20 mb-32">
        {tiers.map((tier, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className={`glass p-10 md:p-20 rounded-[4rem] border ${tier.color} hover:shadow-2xl transition-all group flex flex-col xl:flex-row gap-16`}
          >
            <div className="xl:w-1/3 space-y-8 flex flex-col items-center xl:items-start text-center xl:text-left">
              <div className="w-24 h-24 glass rounded-3xl flex items-center justify-center text-5xl mb-4 border border-white/10 group-hover:scale-110 transition-transform shadow-xl">
                {tier.icon}
              </div>
              <div>
                <h3 className="text-4xl font-heading mb-4 text-white group-hover:text-amber-500 transition-colors leading-tight">{tier.name}</h3>
                <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 rounded-full border border-white/5 mb-6">
                  <Scale size={14} className="text-amber-500" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-500">{tier.voting}</span>
                </div>
                <p className="text-lg text-gray-400 italic font-light leading-relaxed">
                  {tier.desc}
                </p>
              </div>
            </div>
            
            <div className="xl:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div>
                <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-amber-500 mb-6 flex items-center gap-2">
                  <Sparkles size={14} className="text-amber-600" /> Sacred Privileges
                </h4>
                <ul className="space-y-4">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs font-medium tracking-wide text-gray-300 leading-snug">
                      <Check size={14} className="text-amber-600 mt-0.5 shrink-0" /> {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-6 flex items-center gap-2">
                  <Briefcase size={14} className="text-amber-600" /> Sacred Duties
                </h4>
                <ul className="space-y-4">
                  {tier.duties.map((duty, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs font-medium tracking-wide text-gray-400 italic leading-snug">
                      <div className="w-1.5 h-1.5 bg-amber-900/60 rounded-full mt-2 shrink-0 border border-amber-600/30" /> {duty}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2 lg:col-span-1">
                <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-6 flex items-center gap-2">
                  <CheckSquare size={14} className="text-amber-600" /> Induction Criteria
                </h4>
                <ul className="space-y-4 mb-8">
                  {tier.criteria.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[10px] uppercase font-bold tracking-widest text-gray-500 leading-tight">
                      <span className="text-amber-900 font-serif-vintage italic text-base -mt-1">{idx + 1}.</span> {item}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/membership/enroll"
                  className="w-full py-5 bg-amber-600 text-white rounded-2xl text-[10px] uppercase tracking-[0.3em] font-bold shadow-xl shadow-amber-900/20 hover:bg-amber-500 hover:-translate-y-1 transition-all block text-center"
                >
                  Seek Induction
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <QuoteBlock 
        quote="Not to follow one voice, but to walk together without losing one’s own path, is the essence of true fellowship."
        author="A Vikshu Reflection"
        image="https://www.meisterdrucke.uk/kunstwerke/1260px/Chinese_School_-_Lao-Tzu_%28c604-531%29_on_his_buffalo_followed_by_a_disciple_%28wc_on_paper%29_-_%28MeisterDrucke-420939%29.jpg"
        sanskrit="संगच्छध्वं संवदध्वम्"
      />
    </div>
  );
};

export default Membership;
