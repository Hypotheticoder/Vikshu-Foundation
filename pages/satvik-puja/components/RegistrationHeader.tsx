import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft, FileText, Download } from "lucide-react";

export const RegistrationHeader: React.FC = () => {
  return (
    <>
      {/* Navigation Link */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-500 hover:text-amber-400 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Homepage
        </Link>
      </div>

      {/* Header Titles, Logos & Badges */}
      <div className="text-center mb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logos Display */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-2 shadow-xl border border-amber-500/30 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src="/assets/swattik puja sanman.png"
                alt="Satvik Puja Samman Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-2 shadow-xl border border-amber-500/30 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src="/assets/LOGO (1).png"
                alt="Vikshu Foundation / Hindu Mission Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full border border-amber-600/30 mb-4 bg-black/40">
            <Sparkles size={13} className="text-amber-500" />
            <span className="text-amber-400 font-heading text-[10px] tracking-[0.25em] uppercase">
              VIKSHU FOUNDATION PRESENTS
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-vintage italic mb-3 text-white">
            সাত্ত্বিক পূজা সম্মান <span className="text-amber-500">২০২৬</span>
          </h1>

          <p className="text-sm sm:text-lg text-amber-200/90 font-medium italic mb-2">
            Satvik Puja Samman 2026 — Registration Form
          </p>

          <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed mb-6">
            আপনার পূজা মণ্ডপকে সাত্তিক পূজা সম্মানের জন্য দ্রুত ও সহজে নিবন্ধন করুন।
          </p>

          {/* Quick PDF Rules Download Banner */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl glass border border-amber-500/30 hover:border-amber-500/60 bg-amber-600/10 text-xs transition-all shadow-lg group">
            <FileText size={16} className="text-amber-400 shrink-0" />
            <span className="text-gray-200">
              নিয়মাবলী ও নির্দেশিকা ডাউনলোড করুন:
            </span>
            <a
              href="/assets/pdf/swattik%20puja%20sanman.pdf"
              download="swattik_puja_sanman_rules_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              <Download size={13} />
              <span>Rules PDF</span>
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};
