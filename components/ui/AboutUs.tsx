import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Sparkles, Quote } from "lucide-react";

const AboutUs: React.FC = () => {
  const { t } = useTranslation("home");

  return (
    <section className="max-w-7xl mx-auto py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full bg-amber-600/[0.02] blur-[100px] -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 font-heading text-[10px] tracking-[0.6em] mb-4 block uppercase"
          >
            {t("about.subtitle")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif-vintage italic mb-6"
          >
            {t("about.title")}
          </motion.h2>
        </div>

        {/* Leadership team grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Aheli - Global Head */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-600/20 to-amber-900/10 rounded-[3rem] blur-2xl"></div>

            <div className="relative glass p-8 rounded-[3rem] border border-amber-500/20 shadow-2xl h-full flex flex-col">
              {/* Image container */}
              <div className="relative mb-8 group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] border-4 border-amber-500/30 shadow-xl"
                >
                  <img
                    src="/assets/leader3.jpeg"
                    alt="Aheli - Global Head"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src =
                        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Cdefs%3E%3ClinearGradient id="g" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23d4af37"/%3E%3Cstop offset="100%25" style="stop-color:%23704214"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23g)" width="200" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="serif" font-size="60" fill="%230c0c0c" font-weight="bold"%3EAP%3C/text%3E%3C/svg%3E';
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Sparkle decoration */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 right-4"
                  >
                    <Sparkles className="text-amber-500" size={24} />
                  </motion.div>
                </motion.div>
              </div>

              {/* Leader info */}
              <div className="text-center space-y-4 mt-auto">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-6"
                ></motion.div>

                <h3 className="text-3xl md:text-4xl font-serif-vintage italic text-amber-500">
                  Aheli
                </h3>
                <p className="text-sm uppercase tracking-[0.4em] font-heading text-gray-400">
                  Global Head
                </p>

                {/* Quote decoration */}
                <div className="pt-6 flex items-center justify-center gap-4 opacity-50">
                  <div className="h-px w-12 bg-amber-500/30"></div>
                  <Quote size={16} className="text-amber-500" />
                  <div className="h-px w-12 bg-amber-500/30"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Satabadi - Director & Chief Advisor */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-600/20 to-amber-900/10 rounded-[3rem] blur-2xl"></div>

            <div className="relative glass p-8 rounded-[3rem] border border-amber-500/20 shadow-2xl h-full flex flex-col">
              {/* Image container */}
              <div className="relative mb-8 group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] border-4 border-amber-500/30 shadow-xl"
                >
                  <img
                    src="/assets/satabdi.jpeg"
                    alt="Satabadi - Director & Chief Advisor"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src =
                        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"%3E%3Cdefs%3E%3ClinearGradient id="g2" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23d4af37"/%3E%3Cstop offset="100%25" style="stop-color:%23704214"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill="url(%23g2)" width="200" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="serif" font-size="60" fill="%230c0c0c" font-weight="bold"%3ES%3C/text%3E%3C/svg%3E';
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                  {/* Sparkle decoration */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    className="absolute top-4 right-4"
                  >
                    <Sparkles className="text-amber-500" size={24} />
                  </motion.div>
                </motion.div>
              </div>

              {/* Leader info */}
              <div className="text-center space-y-4 mt-auto">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-6"
                ></motion.div>

                <h3 className="text-3xl md:text-4xl font-serif-vintage italic text-amber-500">
                  Satabadi
                </h3>
                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-[0.4em] font-heading text-gray-400">
                    Director
                  </p>
                  <div className="flex items-center justify-center gap-2 opacity-60">
                    <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] font-heading text-gray-500">
                    Chief Advisor
                  </p>
                </div>

                {/* Quote decoration */}
                <div className="pt-6 flex items-center justify-center gap-4 opacity-50">
                  <div className="h-px w-12 bg-amber-500/30"></div>
                  <Quote size={16} className="text-amber-500" />
                  <div className="h-px w-12 bg-amber-500/30"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main content section */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 items-center">
          {/* Content moved below leadership cards */}

          {/* About content - full width */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8 max-w-5xl mx-auto"
          >
            {/* Philosophy */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-2 glass rounded-full border border-amber-600/20">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                <span className="text-amber-500 text-xs uppercase tracking-widest font-heading">
                  {t("about.philosophy_label")}
                </span>
              </div>

              <p className="text-xl md:text-2xl font-serif-vintage italic text-gray-300 leading-relaxed">
                {t("about.philosophy")}
              </p>
            </div>

            {/* Mission statements */}
            <div className="space-y-6 pt-6">
              {[1, 2, 3].map((num) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + num * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl glass border border-amber-500/20 flex items-center justify-center text-amber-500 font-heading group-hover:bg-amber-600/20 transition-all">
                    {num}
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-lg font-heading tracking-wider text-white mb-2">
                      {t(`about.mission_${num}_title`)}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {t(`about.mission_${num}_text`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Closing statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="glass p-8 rounded-[2rem] border border-amber-500/20 mt-12"
            >
              <p className="text-base md:text-lg text-gray-300 italic leading-relaxed">
                "{t("about.closing")}"
              </p>
              <p className="text-sm text-amber-500 font-heading tracking-widest mt-4">
                — {t("about.signature")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
