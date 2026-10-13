import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import QuoteBlock from "../../components/ui/QuoteBlock";
import {
  satvikPujaSchema,
  SatvikPujaFormData,
  initialSatvikPujaFormData,
} from "./schema";
import { submitPujaRegistration } from "./api";
import {
  RegistrationHeader,
  RegistrationFormFields,
  RegistrationSuccessModal,
} from "./components";

const SatvikPujaRegistration: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<SatvikPujaFormData | null>(
    null
  );
  const [registrationNumber, setRegistrationNumber] = useState<string | undefined>(undefined);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SatvikPujaFormData>({
    resolver: zodResolver(satvikPujaSchema),
    defaultValues: initialSatvikPujaFormData,
    mode: "onBlur",
  });

  const onSubmit = async (data: SatvikPujaFormData) => {
    setServerError(null);
    try {
      const response = await submitPujaRegistration(data);
      if (response.success) {
        setSubmittedData(data);
        setRegistrationNumber(response.registrationNumber);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setServerError(response.message || "Failed to submit registration");
      }
    } catch (err: any) {
      setServerError(err.message || "An unexpected error occurred");
    }
  };

  const handleReset = () => {
    reset(initialSatvikPujaFormData);
    setSubmittedData(null);
    setRegistrationNumber(undefined);
    setServerError(null);
  };

  if (submittedData) {
    return (
      <RegistrationSuccessModal
        formData={submittedData}
        registrationNumber={registrationNumber}
        onReset={handleReset}
      />
    );
  }

  return (
    <div className="pt-8 px-4 sm:px-6 max-w-3xl mx-auto pb-32 relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-amber-900/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[#931b2c]/10 rounded-full blur-[180px]" />
      </div>

      {/* Header with back navigation */}
      <RegistrationHeader />

      {/* Main Registration Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="glass p-6 sm:p-10 rounded-[2.5rem] border border-amber-600/25 bg-[#0e0e0e]/90 shadow-2xl relative"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {serverError && (
            <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs sm:text-sm">
              {serverError}
            </div>
          )}

          <RegistrationFormFields
            register={register}
            errors={errors}
          />

          {/* Submit Action */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 sm:py-4.5 bg-gradient-to-r from-[#931b2c] via-red-800 to-[#931b2c] hover:from-[#7e1726] hover:to-[#7e1726] text-white rounded-2xl font-heading tracking-[0.2em] text-xs sm:text-sm uppercase flex items-center justify-center gap-3 transition-all shadow-xl shadow-red-950/50 hover:shadow-red-900/60 group active:scale-[0.99] border border-red-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Submitting to Server...</span>
                </>
              ) : (
                <>
                  <span>Submit Registration</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1.5 transition-transform"
                  />
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>

      {/* Sacred Quote Block */}
      <div className="mt-20">
        <QuoteBlock
          sanskrit="सत्यं शिवं सुन्दरम्"
          quote="Devotion finds its highest form in purity, compassion, and the preservation of sacred dharma."
          author="Satvik Puja Samman 2026 • Vikshu Heritage Reflection"
          image="/assets/satvik-puja.jpg"
          variant="default"
        />
      </div>
    </div>
  );
};

export default SatvikPujaRegistration;
