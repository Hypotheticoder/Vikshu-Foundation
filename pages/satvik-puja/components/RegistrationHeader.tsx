import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft } from "lucide-react";

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

      {/* Header Titles & Badges */}
      <div className="text-center mb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
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

          <p className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
            আপনার পূজা মণ্ডপকে সাত্তিক পূজা সম্মানের জন্য দ্রুত ও সহজে নিবন্ধন করুন।
          </p>
        </motion.div>
      </div>
    </>
  );
};
