import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  FileText,
  Download,
  Sparkles,
} from "lucide-react";

interface SatvikPujaBannerProps {
  className?: string;
  registrationUrl?: string;
}

const SatvikPujaBanner: React.FC<SatvikPujaBannerProps> = ({
  className = "",
  registrationUrl = "/satvik-puja/register",
}) => {
  const { t } = useTranslation("home");

  return (
    <section
      className={`w-full max-w-4xl mx-auto my-20 px-4 sm:px-6 relative ${className}`}
    >
      {/* Ambient glows matching site design language */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-600/8 blur-[140px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#931b2c]/8 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* Main Card — dark glassmorphic matching site design */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden border border-amber-600/20"
      >
        {/* Subtle inner gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 via-transparent to-[#931b2c]/5 pointer-events-none rounded-[2.5rem]" />

        {/* Header: Logos + Badge + Titles */}
        <div className="relative z-10 flex flex-col items-center text-center gap-5 pb-8 border-b border-white/10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full border border-amber-600/30 bg-black/40">
            <Sparkles size={12} className="text-amber-500" />
            <span className="text-amber-400 font-heading text-[9px] sm:text-[10px] tracking-[0.3em] uppercase">
              {t("satvikPuja.badge", "VIKSHU FOUNDATION PRESENTS")}
            </span>
          </div>

          {/* Dual logos */}
          <div className="flex items-center justify-center gap-6 sm:gap-10">
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-white/90 p-1.5 shadow-xl border border-amber-500/30 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300 shrink-0">
              <img
                src="/assets/swattik puja sanman.png"
                alt="Satvik Puja Samman Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-white/90 p-1.5 shadow-xl border border-amber-500/30 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300 shrink-0">
              <img
                src="/assets/LOGO (1).png"
                alt="Vikshu Foundation Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Title stack */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-vintage italic text-white tracking-tight leading-snug mb-1">
              {t("satvikPuja.titleBengali", "সাত্ত্বিক পূজা সম্মান ২০২৬")}
            </h2>
            <p className="text-xs sm:text-sm text-amber-300/80 italic font-medium">
              {t("satvikPuja.titleEnglish", "Satvik Puja Samman 2026")}
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative z-10 mt-8 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl group border border-white/10 aspect-[16/10] sm:aspect-[16/9] bg-black">
          <img
            src="/assets/satvik-puja.jpg"
            alt="Satvik Puja Celebration"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 glass px-3.5 py-1 rounded-full text-[11px] text-white/80 backdrop-blur-md border border-white/15 select-none">
            {t("satvikPuja.sourceUrl", "panchangbodh.com")}
          </div>
        </div>

        {/* Content body — centred */}
        <div className="relative z-10 mt-8 text-center flex flex-col items-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif-vintage italic text-white mb-3 leading-snug">
            {t("satvikPuja.headline", "আপনার পূজা মণ্ডপকে নিবন্ধন করুন")}
          </h3>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8 font-normal max-w-2xl mx-auto">
            {t(
              "satvikPuja.description",
              "সাত্ত্বিকতা, শুদ্ধতা, শৃঙ্খলা ও সমাজসেবার উদযাপনে অংশ নিন। আপনার পূজা কমিটিকে সাত্তিক পূজা সম্মান ২০২৬-এর জন্য নিবন্ধন করুন।"
            )}
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-8">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-amber-200/90 font-medium">
              <span className="w-5 h-5 rounded-full border border-amber-500/60 flex items-center justify-center text-amber-400 shrink-0">
                <CheckCircle2 size={13} strokeWidth={2.5} />
              </span>
              <span>{t("satvikPuja.featureJudging", "Online & Offline Judging")}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-amber-200/90 font-medium">
              <span className="w-5 h-5 rounded-full border border-amber-500/60 flex items-center justify-center text-amber-400 shrink-0">
                <CheckCircle2 size={13} strokeWidth={2.5} />
              </span>
              <span>{t("satvikPuja.featureRegistration", "Club Registration & Recognition")}</span>
            </div>
          </div>

          {/* Rules & PDF Download box */}
          <div className="w-full mb-8 p-5 sm:p-6 rounded-2xl glass border border-amber-500/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-left bg-amber-600/5">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#931b2c]/20 text-[#f87171] border border-[#931b2c]/30 flex items-center justify-center shrink-0 shadow-sm">
                <FileText size={22} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                  {t("satvikPuja.rulesTitle", "নিয়মাবলী ও নির্দেশিকা")}
                  <span className="text-gray-400 font-normal"> (Rules &amp; Guidelines)</span>
                </h4>
                <p className="text-xs text-gray-400 mt-0.5">
                  {t(
                    "satvikPuja.rulesDesc",
                    "বিশদ নিয়মাবলী জানতে অফিসিয়াল পিডিএফ ডাউনলোড করুন।"
                  )}
                </p>
              </div>
            </div>

            <a
              href="/assets/pdf/swattik%20puja%20sanman.pdf"
              download="swattik_puja_sanman_rules_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#931b2c] to-red-800 hover:from-[#7e1726] hover:to-[#7e1726] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg hover:shadow-red-950/60 transition-all duration-300 shrink-0 group active:scale-95 border border-red-500/30"
            >
              <Download
                size={15}
                className="group-hover:translate-y-0.5 transition-transform"
              />
              <span>{t("satvikPuja.downloadBtn", "Download Rules PDF")}</span>
            </a>
          </div>

          {/* CTA Button */}
          <Link
            to={registrationUrl}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#931b2c] via-red-800 to-[#931b2c] hover:from-[#7e1726] hover:to-[#7e1726] text-white font-heading tracking-[0.15em] text-xs sm:text-sm uppercase shadow-xl shadow-red-950/40 hover:shadow-2xl hover:shadow-red-900/50 transition-all duration-300 flex items-center justify-center gap-3 group active:scale-[0.99] border border-red-500/30"
          >
            <span>📋</span>
            <span>{t("satvikPuja.buttonText", "Register Your Puja Club")}</span>
            <ArrowRight
              size={17}
              className="group-hover:translate-x-1.5 transition-transform"
            />
          </Link>

          <p className="mt-5 text-xs text-gray-500 italic">
            {t("satvikPuja.subtext", "Registration form opens on the next page")}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default SatvikPujaBanner;
