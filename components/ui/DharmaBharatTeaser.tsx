import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Sparkles, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DharmaBharatTeaser: React.FC = () => {
  const { t } = useTranslation("spiritual");

  const leaders = t("leaders", { returnObjects: true }) as Array<{
    name: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="max-w-7xl mx-auto py-32 relative mt-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full bg-amber-600/[0.02] blur-[100px] -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Section header */}
        <div className="text-center mb-16 relative">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-500 font-heading text-[10px] tracking-[0.6em] mb-4 block uppercase flex items-center justify-center gap-2"
          >
            <Sparkles size={12} />
            {t("homeCard.badge")}
            <Sparkles size={12} />
          </motion.span>

          {/* Logo integration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-amber-500/30 shadow-2xl p-1 bg-black/40 backdrop-blur-md">
              <img src="/assets/dharma bharat.jpeg" alt="Dharma Bharat Logo" className="w-full h-full object-cover rounded-full" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif-vintage italic mb-6 text-white"
          >
            {t("homeCard.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 italic max-w-2xl mx-auto"
          >
            {t("homeCard.subtitle")}
          </motion.p>
        </div>

        {/* Leadership team grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Vaisnav Acharya */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-600/20 to-amber-900/10 rounded-[3rem] blur-2xl"></div>

            <div className="relative glass p-8 rounded-[3rem] border border-amber-500/20 shadow-2xl h-full flex flex-col">
              <div className="relative mb-8 group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] border-4 border-amber-500/30 shadow-xl"
                >
                  <img
                    src="/assets/vaisnav acharya.png"
                    alt="Vaisnav Acharya"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: "50% 10%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  
                  {/* Decorative corner */}
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 right-4"
                  >
                    <Sparkles className="text-amber-500" size={24} />
                  </motion.div>
                </motion.div>
              </div>

              <div className="text-center space-y-4 mt-auto">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-6"></div>
                <h3 className="text-2xl md:text-3xl font-serif-vintage italic text-amber-500">
                  {leaders[0]?.name || "Vaisnav Acharya Chinmayanand Dashji Maharaj"}
                </h3>
                <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-heading text-gray-400">
                  {leaders[0]?.title || "Vaisnav Acharya"}
                </p>
                <div className="pt-4 flex items-center justify-center gap-4 opacity-50">
                  <div className="h-px w-8 bg-amber-500/30"></div>
                  <Quote size={14} className="text-amber-500" />
                  <div className="h-px w-8 bg-amber-500/30"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Jagatguru */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-600/20 to-amber-900/10 rounded-[3rem] blur-2xl"></div>

            <div className="relative glass p-8 rounded-[3rem] border border-amber-500/20 shadow-2xl h-full flex flex-col">
              <div className="relative mb-8 group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] border-4 border-amber-500/30 shadow-xl"
                >
                  <img
                    src="/assets/dharma1.jpeg"
                    alt="Jagatguru"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: "50% 20%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  
                  {/* Decorative corner */}
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    className="absolute top-4 right-4"
                  >
                    <Sparkles className="text-amber-500" size={24} />
                  </motion.div>
                </motion.div>
              </div>

              <div className="text-center space-y-4 mt-auto">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-6"></div>
                <h3 className="text-2xl md:text-3xl font-serif-vintage italic text-amber-500">
                  {leaders[1]?.name || "Shrimat Jagadguru Avadhutacharya Swami Dr. Sundar Giri Maharaj"}
                </h3>
                <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-heading text-gray-400">
                  {leaders[1]?.title || "Jagatguru"}
                </p>
                <div className="pt-4 flex items-center justify-center gap-4 opacity-50">
                  <div className="h-px w-8 bg-amber-500/30"></div>
                  <Quote size={14} className="text-amber-500" />
                  <div className="h-px w-8 bg-amber-500/30"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Link 
            to="/spiritual-life" 
            className="group flex items-center gap-4 px-8 py-4 glass rounded-full border border-amber-500/30 hover:border-amber-500/60 hover:bg-amber-500/10 transition-all duration-500"
          >
            <span className="text-amber-500 text-sm uppercase tracking-[0.3em] font-bold">
              {t("homeCard.cta")}
            </span>
            <ArrowRight size={18} className="text-amber-500 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default DharmaBharatTeaser;
