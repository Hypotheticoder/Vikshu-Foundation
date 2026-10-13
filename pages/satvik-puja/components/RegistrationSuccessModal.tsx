import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Award } from "lucide-react";
import { SatvikPujaFormData } from "../types";

interface RegistrationSuccessModalProps {
  formData: SatvikPujaFormData;
  registrationNumber?: string;
  onReset: () => void;
}

export const RegistrationSuccessModal: React.FC<RegistrationSuccessModalProps> = ({
  formData,
  registrationNumber,
  onReset,
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-xl w-full glass p-8 sm:p-12 rounded-[3rem] text-center border border-amber-500/30 shadow-2xl relative overflow-hidden bg-[#0e0e0e]/95"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-amber-600/10 via-transparent to-red-950/20 -z-10 blur-3xl pointer-events-none" />

        <div className="w-20 h-20 bg-gradient-to-tr from-[#931b2c] to-amber-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-900/40">
          <CheckCircle2 size={44} strokeWidth={2.2} />
        </div>

        <span className="text-amber-500 font-heading text-[10px] tracking-[0.35em] uppercase block mb-2">
          VIKSHU FOUNDATION • SATVIK PUJA SAMMAN 2026
        </span>

        <h2 className="text-3xl sm:text-4xl font-serif-vintage italic text-white mb-2">
          নিবন্ধন সফলভাবে সম্পন্ন হয়েছে
        </h2>
        <p className="text-amber-200/90 font-medium text-xs sm:text-sm mb-6">
          Registration Recorded on Backend!
        </p>

        {/* Backend Registration Code Badge */}
        {registrationNumber && (
          <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/40 inline-flex flex-col items-center justify-center gap-1">
            <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
              <Award size={14} /> Official Reference Number
            </span>
            <span className="text-lg sm:text-xl font-heading tracking-wider font-bold text-white">
              {registrationNumber}
            </span>
          </div>
        )}

        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
          ধন্যবাদ! আপনার পূজা কমিটি{" "}
          <span className="text-amber-400 font-semibold">
            {formData.clubName || "মণ্ডপ"}
          </span>
          -এর তথ্য সংরক্ষিত হয়েছে। আমাদের বিচারক ও সমন্বয়কারী দল শীঘ্রই যোগাযোগ করবে।
        </p>

        {/* Verification Summary Card */}
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-left mb-8 text-xs space-y-2 text-gray-300">
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-gray-400">Club Name:</span>
            <span className="font-semibold text-white">{formData.clubName}</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-gray-400">Club Reg. Number:</span>
            <span className="font-medium text-amber-300">{formData.clubRegistrationNumber}</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-gray-400">Pandal Name:</span>
            <span className="text-white">{formData.pandalName}</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-gray-400">Contact:</span>
            <span className="text-white">{formData.contactPerson} ({formData.mobileNumber})</span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-gray-400">Address / Locality:</span>
            <span className="text-white">{formData.pandalAddress}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3.5 bg-[#931b2c] hover:bg-[#7e1726] text-white rounded-xl font-heading tracking-widest text-xs uppercase transition-all shadow-lg"
          >
            Back to Home
          </button>
          <button
            onClick={onReset}
            className="px-6 py-3.5 glass hover:bg-white/10 text-white rounded-xl font-heading tracking-widest text-xs uppercase transition-all border border-white/10"
          >
            New Registration
          </button>
        </div>
      </motion.div>
    </div>
  );
};
