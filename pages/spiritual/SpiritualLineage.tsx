import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronDown, BookOpen, Globe, Microscope, Tv2, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import QuoteBlock from "../../components/ui/QuoteBlock";

const MILESTONE_KEYS = ["lineage", "academia", "media", "initiation", "titles", "global", "service"] as const;

const iconMap: Record<string, React.ReactNode> = {
  lineage: <Star size={16} />,
  academia: <Microscope size={16} />,
  media: <Tv2 size={16} />,
  initiation: <BookOpen size={16} />,
  titles: <Sparkles size={16} />,
  global: <Globe size={16} />,
  service: <Star size={16} />,
};

const LEADER_IMAGES = [
  { image: "/assets/vaisnav acharya.png", objectPosition: "50% 10%" },
  { image: "/assets/dharma1.jpeg", objectPosition: "50% 20%" },
];

const SpiritualLineage: React.FC = () => {
  const { t } = useTranslation("spiritual");
  const [expanded, setExpanded] = useState(false);

  const leaders = (
    t("leaders", { returnObjects: true }) as Array<{
      name: string;
      title: string;
      description: string;
    }>
  ).map((l, i) => ({ ...l, ...LEADER_IMAGES[i] }));

  const visibleKeys = expanded ? MILESTONE_KEYS : MILESTONE_KEYS.slice(0, 3);

  return (
    <div className="pt-24 px-4 sm:px-6 max-w-7xl mx-auto pb-40 relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-900/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-600/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Hero Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-10 relative"
        >
          <div className="absolute inset-0 bg-amber-500/30 blur-3xl rounded-full scale-150"></div>
          <img
            src="/assets/dharma bharat.jpeg"
            alt="Dharma Bharat Logo"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 object-cover rounded-full border-4 border-amber-500/50 shadow-2xl relative z-10"
          />
        </motion.div>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-amber-500 font-heading text-[10px] tracking-[0.5em] mb-4 block uppercase"
        >
          {t("header.badge")}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-[5rem] font-serif-vintage italic mb-5 leading-tight"
        >
          {t("header.title")} <span className="text-amber-600">{t("header.titleHighlight")}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 italic max-w-xl mx-auto text-sm leading-relaxed px-4"
        >
          {t("header.subtitle")}
        </motion.p>
      </div>

      {/* ── Leader Cards ── Natural-height portrait cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 relative z-10 mb-20">
        {leaders.map((leader, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 hover:border-amber-500/40 transition-all duration-500 flex flex-col"
          >
            {/* Portrait image — natural aspect ratio, not clipped */}
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                style={{ objectPosition: leader.objectPosition }}
              />
              {/* Light-to-dark overlay only at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              {/* Amber hover overlay */}
              <div className="absolute inset-0 bg-amber-600/0 group-hover:bg-amber-600/8 transition-all duration-700"></div>

              {/* Title badge */}
              <div className="absolute top-5 left-5">
                <div className="px-3 py-1.5 rounded-full bg-amber-600/90 backdrop-blur-sm border border-amber-400/40 flex items-center gap-2 shadow-lg">
                  <Sparkles size={10} className="text-white" />
                  <span className="text-white text-[9px] uppercase tracking-[0.3em] font-bold">
                    {leader.title}
                  </span>
                </div>
              </div>
            </div>

            {/* Text content below the image — not overlapping */}
            <div className="glass border-t border-amber-500/15 p-6 md:p-8 flex flex-col gap-3 flex-1">
              <h2 className="text-lg sm:text-xl md:text-2xl font-serif-vintage italic text-white leading-snug">
                {leader.name}
              </h2>
              <p className="text-gray-400 italic text-sm leading-relaxed">
                {leader.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ─── Biography Section ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 mb-32"
      >
        <div className="mb-10">
          <span className="text-amber-500 text-[10px] tracking-[0.5em] uppercase font-heading block mb-2">
            {t("biography.sectionBadge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-vintage italic">
            {t("biography.heading")}{" "}
            <span className="text-amber-600">{t("biography.headingHighlight")}</span>
          </h2>
        </div>

        {/* Intro block */}
        <div className="glass rounded-[2rem] border border-amber-500/20 p-6 md:p-10 mb-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute top-0 left-6 w-0.5 h-full bg-gradient-to-b from-amber-500 to-transparent opacity-40"></div>
          <p className="pl-8 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed italic font-light">
            {t("biography.intro")}
          </p>
        </div>

        {/* Milestone cards */}
        <AnimatePresence mode="popLayout">
          {visibleKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: i * 0.06 }}
              className="glass rounded-[1.5rem] border border-white/5 hover:border-amber-500/30 p-5 md:p-7 mb-3 flex gap-4 items-start group transition-all duration-300"
            >
              <div className="w-10 h-10 shrink-0 rounded-2xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-500 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 mt-0.5">
                {iconMap[key]}
              </div>
              <div>
                <h4 className="text-amber-400 text-[10px] uppercase tracking-[0.4em] font-heading mb-2">
                  {t(`biography.milestones.${key}.title`)}
                </h4>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed italic">
                  {t(`biography.milestones.${key}.text`)}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Expand / collapse */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full mt-3 py-5 glass rounded-2xl border border-white/10 hover:border-amber-500/40 text-[10px] uppercase tracking-[0.4em] font-bold text-amber-500 flex items-center justify-center gap-3 transition-all hover:bg-amber-600/10"
        >
          {expanded ? t("biography.readLess") : t("biography.readMore")}
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      </motion.div>

      <QuoteBlock
        sanskrit="तारा न भाग्यं निर्णेतुं। ते चिंतनं आमंत्रयन्ति।"
        quote="Stars do not decide fate. They invite reflection."
        author="Spiritual Lineage"
        variant="glass"
      />
    </div>
  );
};

export default SpiritualLineage;
