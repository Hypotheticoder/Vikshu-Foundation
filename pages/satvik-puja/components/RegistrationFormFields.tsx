import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Building2 } from "lucide-react";
import { SatvikPujaFormData } from "../schema";

interface RegistrationFormFieldsProps {
  register: UseFormRegister<SatvikPujaFormData>;
  errors: FieldErrors<SatvikPujaFormData>;
}

export const RegistrationFormFields: React.FC<RegistrationFormFieldsProps> = ({
  register,
  errors,
}) => {
  return (
    <>
      {/* Section Heading */}
      <div className="flex items-center gap-3 pb-4 border-b border-white/10">
        <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-amber-400 bg-amber-600/10 border border-amber-500/20">
          <Building2 size={20} />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-serif-vintage italic text-white">
            Required Details
          </h2>
          <p className="text-[11px] text-gray-400">
            Please provide the basic details of your puja committee and pandal.
          </p>
        </div>
      </div>

      {/* 1. Puja Committee / Club Name & Reg Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1">
            Puja Committee / Club Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            {...register("clubName")}
            placeholder="e.g. Bagbazar Sarbojanin Durgotsav Committee"
            className={`w-full bg-white/5 border rounded-xl px-5 py-3.5 focus:outline-none transition-all text-sm text-white placeholder-gray-500 ${
              errors.clubName
                ? "border-red-500/80 focus:border-red-500"
                : "border-white/10 focus:border-amber-500/60"
            }`}
          />
          {errors.clubName && (
            <p className="text-[11px] text-red-400 font-medium">
              {errors.clubName.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1">
            Club Registration Number <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            {...register("clubRegistrationNumber")}
            placeholder="e.g. S/IL/12345 or Govt. Society Reg No."
            className={`w-full bg-white/5 border rounded-xl px-5 py-3.5 focus:outline-none transition-all text-sm text-white placeholder-gray-500 ${
              errors.clubRegistrationNumber
                ? "border-red-500/80 focus:border-red-500"
                : "border-white/10 focus:border-amber-500/60"
            }`}
          />
          {errors.clubRegistrationNumber && (
            <p className="text-[11px] text-red-400 font-medium">
              {errors.clubRegistrationNumber.message}
            </p>
          )}
        </div>
      </div>

      {/* 2. Puja Pandal Name */}
      <div className="space-y-1.5">
        <label className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1">
          Puja Pandal Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          {...register("pandalName")}
          placeholder="e.g. Bagbazar Sarbojanin Pandal"
          className={`w-full bg-white/5 border rounded-xl px-5 py-3.5 focus:outline-none transition-all text-sm text-white placeholder-gray-500 ${
            errors.pandalName
              ? "border-red-500/80 focus:border-red-500"
              : "border-white/10 focus:border-amber-500/60"
          }`}
        />
        {errors.pandalName && (
          <p className="text-[11px] text-red-400 font-medium">
            {errors.pandalName.message}
          </p>
        )}
      </div>

      {/* 3 & 4. Contact Person Name & Mobile Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1">
            Contact Person Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            {...register("contactPerson")}
            placeholder="Full name of representative"
            className={`w-full bg-white/5 border rounded-xl px-5 py-3.5 focus:outline-none transition-all text-sm text-white placeholder-gray-500 ${
              errors.contactPerson
                ? "border-red-500/80 focus:border-red-500"
                : "border-white/10 focus:border-amber-500/60"
            }`}
          />
          {errors.contactPerson && (
            <p className="text-[11px] text-red-400 font-medium">
              {errors.contactPerson.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1">
            Mobile Number <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            maxLength={13}
            {...register("mobileNumber")}
            placeholder="e.g. 9830012345 (10 digits)"
            className={`w-full bg-white/5 border rounded-xl px-5 py-3.5 focus:outline-none transition-all text-sm text-white placeholder-gray-500 ${
              errors.mobileNumber
                ? "border-red-500/80 focus:border-red-500"
                : "border-white/10 focus:border-amber-500/60"
            }`}
          />
          {errors.mobileNumber ? (
            <p className="text-[11px] text-red-400 font-medium">
              {errors.mobileNumber.message}
            </p>
          ) : (
            <p className="text-[10px] text-gray-500">
              10-digit Indian number starting with 6-9 (without leading 0)
            </p>
          )}
        </div>
      </div>

      {/* 5. Email Address (optional) */}
      <div className="space-y-1.5">
        <label className="text-xs uppercase tracking-wider text-gray-300 font-semibold flex items-center gap-1.5">
          Email Address <span className="text-gray-500 text-[10px] lowercase">(optional)</span>
        </label>
        <input
          type="email"
          {...register("emailAddress")}
          placeholder="committee@example.com"
          className={`w-full bg-white/5 border rounded-xl px-5 py-3.5 focus:outline-none transition-all text-sm text-white placeholder-gray-500 ${
            errors.emailAddress
              ? "border-red-500/80 focus:border-red-500"
              : "border-white/10 focus:border-amber-500/60"
          }`}
        />
        {errors.emailAddress && (
          <p className="text-[11px] text-red-400 font-medium">
            {errors.emailAddress.message}
          </p>
        )}
      </div>

      {/* 6. Pandal Address / Locality */}
      <div className="space-y-1.5">
        <label className="text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1">
          Pandal Address / Locality <span className="text-red-400">*</span>
        </label>
        <textarea
          rows={3}
          {...register("pandalAddress")}
          placeholder="Complete pandal address, street/ground, and area/locality..."
          className={`w-full bg-white/5 border rounded-xl px-5 py-3.5 focus:outline-none transition-all text-sm text-white placeholder-gray-500 resize-none ${
            errors.pandalAddress
              ? "border-red-500/80 focus:border-red-500"
              : "border-white/10 focus:border-amber-500/60"
          }`}
        />
        {errors.pandalAddress && (
          <p className="text-[11px] text-red-400 font-medium">
            {errors.pandalAddress.message}
          </p>
        )}
      </div>

      {/* 7. Google Maps Location Link (optional) */}
      <div className="space-y-1.5">
        <label className="text-xs uppercase tracking-wider text-gray-300 font-semibold flex items-center gap-1.5">
          Google Maps Location Link <span className="text-gray-500 text-[10px] lowercase">(optional)</span>
        </label>
        <input
          type="url"
          {...register("mapsLink")}
          placeholder="https://maps.app.goo.gl/..."
          className={`w-full bg-white/5 border rounded-xl px-5 py-3.5 focus:outline-none transition-all text-sm text-white placeholder-gray-500 ${
            errors.mapsLink
              ? "border-red-500/80 focus:border-red-500"
              : "border-white/10 focus:border-amber-500/60"
          }`}
        />
        {errors.mapsLink && (
          <p className="text-[11px] text-red-400 font-medium">
            {errors.mapsLink.message}
          </p>
        )}
      </div>

      {/* 8. Puja Pandal Video Link (optional, can be submitted later) - Temporarily commented out
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="text-xs uppercase tracking-wider text-gray-300 font-semibold flex items-center gap-1.5">
            Puja Pandal Video Link <span className="text-gray-500 text-[10px] lowercase">(optional)</span>
          </label>
          <span className="text-[10px] text-amber-400 italic">
            can be submitted later
          </span>
        </div>
        <input
          type="url"
          {...register("videoLink")}
          placeholder="Google Drive, YouTube, or video link (optional)"
          className={`w-full bg-white/5 border rounded-xl px-5 py-3.5 focus:outline-none transition-all text-sm text-white placeholder-gray-500 ${
            errors.videoLink
              ? "border-red-500/80 focus:border-red-500"
              : "border-white/10 focus:border-amber-500/60"
          }`}
        />
        {errors.videoLink && (
          <p className="text-[11px] text-red-400 font-medium">
            {errors.videoLink.message}
          </p>
        )}
      </div>
      */}

      {/* 9. Declaration (Required) */}
      <div className="pt-2">
        <label
          className={`flex items-start gap-3.5 p-4 rounded-2xl border transition-all cursor-pointer group select-none ${
            errors.agreedToRules
              ? "bg-red-950/20 border-red-500/60"
              : "bg-amber-600/10 border-amber-500/30 hover:border-amber-500/50"
          }`}
        >
          <input
            type="checkbox"
            {...register("agreedToRules")}
            className="w-5 h-5 mt-0.5 rounded border-amber-500/50 text-[#931b2c] focus:ring-0 bg-white/10 accent-[#931b2c] shrink-0 cursor-pointer"
          />
          <div className="text-xs sm:text-sm">
            <span className="text-white font-medium group-hover:text-amber-200 transition-colors">
              Declaration <span className="text-red-400">*</span>
            </span>
            <p className="text-amber-200/90 font-normal mt-1 leading-relaxed">
              We agree to follow the Satvik Puja Samman 2026 rules and cooperate with the judging team.
            </p>
            <p className="text-gray-400 text-[11px] italic mt-0.5">
              আমরা সাত্তিক পূজা সম্মান ২০২৬-এর সমস্ত নিয়ম মেনে চলতে এবং বিচারক দলের সঙ্গে সহযোগিতা করতে সম্মত।
            </p>
            {errors.agreedToRules && (
              <p className="text-[11px] text-red-400 font-semibold mt-1">
                {errors.agreedToRules.message}
              </p>
            )}
          </div>
        </label>
      </div>
    </>
  );
};
