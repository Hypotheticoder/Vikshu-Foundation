import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  Shield,
  Sparkles,
  ArrowRight,
  Zap,
  Compass,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import NGOPost from "../components/ui/NGOPost";
import QuoteBlock from "../components/ui/QuoteBlock";
import WelcomePopup from "../components/ui/WelcomePopup";
import AboutUs from "../components/ui/AboutUs";

const Home: React.FC = () => {
  const { t } = useTranslation("home");

  const partnerPosts = [
    {
      ngo: "Atman Rescue",
      tag: "Shelter",
      title: "Rescuing Heritage Structures",
      excerpt:
        "In collaboration with Vikshu, we have identified 12 ancient ghats requiring immediate structural support to preserve the spirit of the ancestors.",
    },
    {
      ngo: "Vedantic Labs",
      tag: "Innovation",
      title: "The Digitization of Palm Leaves",
      excerpt:
        "Our new AI model, trained with Vikshu's archival assistance, is now translating rare manuscripts into accessible digital volumes.",
    },
  ];

  return (
    <>
      <WelcomePopup />

      <div className="relative px-6 pb-20 overflow-hidden">
        {/* Background Ambience */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-amber-900/10 rounded-full blur-[200px] animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-amber-600/5 rounded-full blur-[200px] animate-pulse"></div>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto pt-24 md:pt-40 mb-32 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-4 px-6 py-2 glass rounded-full border border-amber-600/20 mb-10">
              <Sparkles
                size={14}
                className="text-amber-500 animate-spin-slow"
              />
              <div className="flex flex-col">
                <span className="text-amber-500 font-heading text-[10px]">
                  {t("tagline_sanskrit")}
                </span>
                <span className="text-amber-300 text-[10px] italic">
                  {t("tagline_description")}
                </span>
              </div>
            </div>
            <p className="text-sm md:text-lg text-amber-400 italic mb-6">
              {t("intro")}
            </p>

            <h1 className="text-4xl sm:text-7xl md:text-[14rem] font-serif-vintage italic mb-12 leading-[0.85] sm:leading-[0.8] tracking-tighter">
              The <span className="text-amber-600">{t("hero.line1")}</span>
              <br />
              <span className="text-white/10">{t("hero.internal")}</span>{" "}
              <span className="text-white/40">{t("hero.line2")}</span>
            </h1>

            <div className="max-w-4xl mx-auto relative px-4 sm:px-10">
              <p className="text-base sm:text-xl md:text-3xl text-gray-400 font-light leading-relaxed italic mb-12 sm:mb-16">
                "{t("hero_quote")}"
              </p>
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 justify-center">
                <Link
                  to="/sectors"
                  className="px-8 sm:px-12 py-4 sm:py-5 bg-amber-600 text-white rounded-2xl font-heading tracking-widest text-xs uppercase shadow-2xl shadow-amber-900/40 hover:bg-amber-500 transition-all flex items-center justify-center gap-3 group"
                >
                  {t("cta_explore")}{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </Link>
                <Link
                  to="/membership/enroll"
                  className="px-8 sm:px-12 py-4 sm:py-5 glass border border-white/10 text-white rounded-2xl font-heading tracking-widest text-xs uppercase hover:bg-white/5 transition-all"
                >
                  {t("cta_request")}
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Floating Metrics */}
          <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              {
                label: t("metrics.ghats"),
                val: "12",
                icon: <Compass size={16} />,
              },
              {
                label: t("metrics.scholars"),
                val: "142",
                icon: <Zap size={16} />,
              },
              {
                label: t("metrics.archives"),
                val: "4k+",
                icon: <Shield size={16} />,
              },
              {
                label: t("metrics.chapters"),
                val: "08",
                icon: <Globe size={16} />,
              },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-[2rem] border border-white/5 group hover:border-amber-500/30 transition-all"
              >
                <div className="text-amber-500 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  {m.icon}
                </div>
                <h4 className="text-3xl font-serif-vintage italic text-white mb-1">
                  {m.val}
                </h4>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>

          <AboutUs />

          <QuoteBlock
            className="mt-40"
            sanskrit="सत्यमेव जयते"
            quote="Truth does not need noise to prevail. It endures, quietly, until it is remembered."
            author="A Vikshu Heritage Reflection"
            image="/assets/netaji.png"
          />

          {/* Manifesto Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-60 relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-amber-600/[0.03] -z-10 blur-[120px] rounded-full"></div>
            <div className="max-w-4xl mx-auto text-left">
              <span className="text-amber-500 font-heading text-[10px] tracking-[0.6em] mb-12 block uppercase text-center md:text-left">
                {t("manifesto_title")}
              </span>
              <div className="space-y-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                  <div className="md:col-span-1 text-amber-500/20 font-serif-vintage text-6xl italic leading-none">
                    01
                  </div>
                  <div className="md:col-span-11">
                    <h3 className="text-4xl md:text-5xl font-serif-vintage italic mb-6">
                      {t("manifesto.p1_title")}
                    </h3>
                    <p className="text-xl text-gray-400 font-light leading-relaxed italic">
                      {t("manifesto.p1_text")}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                  <div className="md:col-span-1 text-amber-500/20 font-serif-vintage text-6xl italic leading-none">
                    02
                  </div>
                  <div className="md:col-span-11">
                    <h3 className="text-4xl md:text-5xl font-serif-vintage italic mb-6">
                      {t("manifesto.p2_title")}
                    </h3>
                    <p className="text-xl text-gray-400 font-light leading-relaxed italic">
                      {t("manifesto.p2_text")}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                  <div className="md:col-span-1 text-amber-500/20 font-serif-vintage text-6xl italic leading-none">
                    03
                  </div>
                  <div className="md:col-span-11">
                    <h3 className="text-4xl md:text-5xl font-serif-vintage italic mb-6">
                      {t("manifesto.p3_title")}
                    </h3>
                    <p className="text-xl text-gray-400 font-light leading-relaxed italic">
                      {t("manifesto.p3_text")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Community Feed Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-60 glass p-8 md:p-24 rounded-[4rem] text-left grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 relative overflow-hidden shadow-2xl border border-white/10"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-[120px] -z-10"></div>

            <div>
              <h2 className="text-4xl md:text-5xl font-serif-vintage mb-10 italic">
                {t("archive_title")}
              </h2>
              <p className="text-lg text-gray-400 mb-12 font-light italic leading-relaxed">
                {t("archive_subtitle")}
              </p>
              <div className="space-y-8 flex flex-col gap-6 pt-4">
                {partnerPosts.map((post, i) => (
                  <NGOPost key={i} {...post} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-fit">
              <div className="glass p-10 rounded-[3.5rem] flex flex-col justify-between hover:bg-white/5 transition-all group border border-white/5 aspect-square">
                <Globe
                  className="text-amber-500 mb-6 group-hover:scale-110 transition-transform"
                  size={40}
                />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-500 mb-2">
                    {t("fellowship.global")}
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    {t("fellowship.global_desc")}
                  </p>
                </div>
              </div>
              <div className="glass p-10 rounded-[3.5rem] flex flex-col justify-between hover:bg-white/5 transition-all group border border-white/5 aspect-square">
                <Shield
                  className="text-amber-500 mb-6 group-hover:scale-110 transition-transform"
                  size={40}
                />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-500 mb-2">
                    {t("fellowship.integrity")}
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    {t("fellowship.integrity_desc")}
                  </p>
                </div>
              </div>
              <div className="sm:col-span-2 glass p-12 rounded-[4rem] flex items-center justify-between hover:bg-amber-600/10 transition-all border border-amber-600/20 group">
                <div>
                  <Sparkles
                    className="text-amber-500 mb-4 group-hover:rotate-12 transition-transform"
                    size={32}
                  />
                  <h4 className="font-heading text-xl tracking-[0.2em]">
                    {t("fellowship.title").toUpperCase()}
                  </h4>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest mt-2">
                    {t("fellowship.subtitle")}
                  </p>
                </div>
                <Link
                  to="/auth/register"
                  className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-xl shadow-amber-900/30"
                >
                  <ArrowRight size={24} />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Home;
