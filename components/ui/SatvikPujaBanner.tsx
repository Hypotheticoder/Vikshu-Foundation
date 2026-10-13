import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CheckCircle2, Video, ArrowRight, ArrowDown } from "lucide-react";

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
    <section className={`w-full max-w-4xl mx-auto my-20 px-4 sm:px-6 relative ${className}`}>
      {/* Ambient background glow adhering to design architecture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* Main Card with soft border and warm ivory/dark luxury styling */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden transition-all border border-[#d2b48c]/30 text-[#1a2b49] bg-[#fbf8f1]"
      >
        {/* Header: Logo + Presentation Header */}
        <div className="flex items-center gap-4 sm:gap-6 pb-6 border-b border-[#c89d5b]/30">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/90 p-2 shadow-md flex items-center justify-center border border-[#d2b48c]/40 shrink-0">
            {/* Sacred Om Yantra Emblem */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-red-700"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="50" cy="50" r="44" stroke="#c89d5b" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="39" stroke="#b91c1c" strokeWidth="1.5" strokeDasharray="3 2" />
              <polygon
                points="50,15 62,35 85,38 68,55 72,78 50,67 28,78 32,55 15,38 38,35"
                stroke="#c89d5b"
                strokeWidth="1.2"
                fill="#fef2f2"
              />
              {/* Om symbol glyph */}
              <text
                x="50"
                y="59"
                fontSize="34"
                textAnchor="middle"
                fontWeight="bold"
                fill="#991b1b"
                className="font-serif select-none"
              >
                ॐ
              </text>
            </svg>
          </div>

          <div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-[#9e763b] block mb-0.5">
              {t("satvikPuja.badge", "VIKSHU FOUNDATION PRESENTS")}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#142952] tracking-tight leading-snug">
              {t("satvikPuja.titleBengali", "সাত্ত্বিক পূজা সম্মান ২০২৬")}
            </h2>
            <p className="text-xs sm:text-sm text-[#4b5563] italic">
              {t("satvikPuja.titleEnglish", "Satvik Puja Samman 2026")}
            </p>
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div className="mt-6 rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-lg group border border-[#142952]/10 aspect-[16/10] sm:aspect-[16/9] bg-black">
          <img
            src="/assets/satvik-puja.jpg"
            alt="Satvik Puja Celebration"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Subtle bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Watermark / Domain badge pill */}
          <div className="absolute bottom-4 left-4 glass px-3.5 py-1 rounded-full text-[11px] text-white/90 bg-black/40 backdrop-blur-md border border-white/20 select-none">
            {t("satvikPuja.sourceUrl", "panchangbodh.com")}
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#142952] mb-3 leading-snug">
            {t("satvikPuja.headline", "আপনার পূজা মণ্ডপকে নিবন্ধন করুন")}
          </h3>

          <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6 font-normal">
            {t("satvikPuja.description", "সাত্ত্বিকতা, শুদ্ধতা, শৃঙ্খলা ও সমাজসেবার উদযাপনে অংশ নিন। আপনার পূজা কমিটিকে সাত্তিক পূজা সম্মান ২০২৬-এর জন্য নিবন্ধন করুন।")}
          </p>

          {/* Feature Badges */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#334155] font-medium">
              <span className="w-5 h-5 rounded-full border border-[#9e763b] flex items-center justify-center text-[#9e763b] shrink-0">
                <CheckCircle2 size={13} strokeWidth={2.5} />
              </span>
              <span>{t("satvikPuja.featureJudging", "Online & Offline Judging")}</span>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#334155] font-medium">
              <span className="w-5 h-5 rounded border border-[#9e763b] flex items-center justify-center text-[#9e763b] shrink-0">
                <Video size={13} strokeWidth={2} />
              </span>
              <span>{t("satvikPuja.featureRegistration", "Club Registration & Video Submission")}</span>
            </div>
          </div>

          {/* CTA Action Button */}
          <Link
            to={registrationUrl}
            className="w-full py-4 px-6 rounded-2xl bg-[#931b2c] hover:bg-[#7e1726] text-white font-medium text-sm sm:text-base shadow-xl shadow-[#931b2c]/25 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group active:scale-[0.99]"
          >
            <span className="w-5 h-5 rounded flex items-center justify-center text-white/90">
              📋
            </span>
            <span>{t("satvikPuja.buttonText", "Register Your Puja Club")}</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1.5 transition-transform"
            />
          </Link>

          {/* Subtle subtext with pulsing arrow */}
          <div className="mt-5 flex flex-col items-center justify-center gap-1.5 text-center">
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center animate-bounce shadow-md">
              <ArrowDown size={14} />
            </div>
            <p className="text-xs text-[#64748b] italic">
              {t("satvikPuja.subtext", "Registration form opens on the next page")}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SatvikPujaBanner;
