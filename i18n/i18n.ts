import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import bnHome from "./bn/home.json";
import enHome from "./en/home.json";
import hiHome from "./hi/home.json";
import asHome from "./as/home.json";

import bnSectors from "./bn/sectors.json";
import enSectors from "./en/sectors.json";
import hiSectors from "./hi/sectors.json";
import asSectors from "./as/sectors.json";

import bnMembership from "./bn/membership.json";
import enMembership from "./en/membership.json";
import hiMembership from "./hi/membership.json";
import asMembership from "./as/membership.json";

import bnEnrollment from "./bn/enrollment.json";
import enEnrollment from "./en/enrollment.json";
import hiEnrollment from "./hi/enrollment.json";
import asEnrollment from "./as/enrollment.json";

import bnSupport from "./bn/support.json";
import enSupport from "./en/support.json";
import hiSupport from "./hi/support.json";
import asSupport from "./as/support.json";

import bnDonations from "./bn/donations.json";
import enDonations from "./en/donations.json";
import hiDonations from "./hi/donations.json";
import asDonations from "./as/donations.json";

// Heuristic to pick one of four supported languages: en, bn, hi, as.
// Order of precedence:
// 1) explicit querystring (?lang=...)
// 2) localStorage preference (`i18nextLng`)
// 3) navigator.languages / navigator.language (language subtags)
// 4) Intl.Locale language hint (if available)
// 5) timezone heuristic as a last fallback for India-region (prefer bn when not explicit)
const SUPPORTED = ['en', 'bn', 'hi', 'as'];

const getInitialLang = () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('lang');
    if (q && SUPPORTED.includes(q)) return q;

    const stored = window.localStorage.getItem('i18nextLng');
    if (stored && SUPPORTED.includes(stored)) return stored;

    const nav = (navigator.languages || [navigator.language || '']).map((l) => String(l).toLowerCase());
    // check primary language subtags
    for (const l of nav) {
      if (l.startsWith('bn')) return 'bn';
      if (l.startsWith('as')) return 'as';
      if (l.startsWith('hi')) return 'hi';
      if (l.startsWith('en')) return 'en';
    }

    // Try Intl.Locale if available (provides clearer language subtag parsing)
    try {
      // @ts-ignore - Intl.Locale may not exist in all runtimes
      const locale = typeof Intl !== 'undefined' && (Intl as any).Locale ? new (Intl as any).Locale(navigator.language) : null;
      if (locale && locale.language) {
        if (locale.language === 'bn') return 'bn';
        if (locale.language === 'as') return 'as';
        if (locale.language === 'hi') return 'hi';
        if (locale.language === 'en') return 'en';
      }
    } catch (e) {
      // ignore
    }

    // timezone heuristic for India-region: prefer Bengali when user doesn't explicitly prefer English
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz.toLowerCase().includes('kolkata')) {
      if (!nav.some((l) => l.startsWith('en'))) return 'bn';
    }
  } catch (e) {
    // ignore and let detector fall back
  }
  return undefined;
};

const initialLang = getInitialLang();

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { home: enHome, sectors: enSectors, membership: enMembership, enrollment: enEnrollment, support: enSupport, donations: enDonations },
      bn: { home: bnHome, sectors: bnSectors, membership: bnMembership, enrollment: bnEnrollment, support: bnSupport, donations: bnDonations },
      hi: { home: hiHome, sectors: hiSectors, membership: hiMembership, enrollment: hiEnrollment, support: hiSupport, donations: hiDonations },
      as: { home: asHome, sectors: asSectors, membership: asMembership, enrollment: asEnrollment, support: asSupport, donations: asDonations }
    },
    fallbackLng: 'en',
    supportedLngs: SUPPORTED,
    ns: ['home', 'sectors', 'membership', 'enrollment', 'support', 'donations'],
    defaultNS: 'home',
    lng: initialLang,
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
