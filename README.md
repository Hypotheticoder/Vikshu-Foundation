<div align="center">
  <!-- <img width="1200" height="475" alt="Vikshu Foundation Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" /> -->

  # Vikshu Foundation — Frontend Architecture & Developer Guide
  
  **A cultural NGO platform blending Victorian aesthetics with modern glassmorphism, dedicated to education, heritage preservation, healthcare, and spiritual empowerment.**

  [![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Zustand](https://img.shields.io/badge/Zustand-5.0-brown)](https://github.com/pmndrs/zustand)
  [![Google GenAI](https://img.shields.io/badge/Google%20GenAI-1.35-4285F4?logo=google&logoColor=white)](https://ai.google.dev/)
  [![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)

</div>

---

## 📖 Table of Contents
1. [Project Overview & Philosophy](#-project-overview--philosophy)
2. [Tech Stack & Library Justifications](#-tech-stack--library-justifications)
3. [Repository Directory Structure](#-repository-directory-structure)
4. [Design System & Styling Architecture](#-design-system--styling-architecture)
5. [Routing & Code Splitting Strategy](#-routing--code-splitting-strategy)
6. [State Management (Zustand)](#-state-management-zustand)
7. [Internationalization & Localization (i18n)](#-internationalization--localization-i18n)
8. [AI Integrations (Google Gemini)](#-ai-integrations-google-gemini)
9. [Getting Started & Local Development](#-getting-started--local-development)
10. [Docker & Production Deployment](#-docker--production-deployment)
11. [Architectural Best Practices for Future Developers](#-architectural-best-practices-for-future-developers)

---

## 🏛 Project Overview & Philosophy

**Vikshu Foundation** is an NGO platform crafted with a unique visual language: **Victorian classicism meets contemporary glassmorphism**. The platform provides public access to:
- **Heritage & Wisdom Archives**: Ancient manuscript restoration and semantic search powered by Google Gemini AI.
- **Fellowship & Membership Programs**: Multi-tiered scholastic fellowships and a public directory of scholars.
- **Philanthropic Donations**: Transparent donation portals with tax-exemption records and cause-driven funding.
- **Spiritual Lineage**: Interactive historical records of Vedic and Indian philosophical lineages.
- **Impact Metrics**: Data-backed transparency dashboards for financial audits and community impact.

---

## 🛠 Tech Stack & Library Justifications

Every library in this repository was deliberately chosen for performance, developer velocity, and bundle efficiency:

| Technology / Library | Version | Role in Project | Why We Chose It |
| :--- | :--- | :--- | :--- |
| **React** | `^19.2.3` | Core UI Library | Cutting-edge concurrent rendering, seamless transition management, and forward compatibility. |
| **TypeScript** | `~5.8.2` | Type Safety | Strict type enforcement across complex domain models (users, donations, fellowships, translations). |
| **Vite** | `^6.2.0` | Build Tool & Dev Server | Sub-millisecond Hot Module Replacement (HMR) and highly optimized Rollup-based tree-shaking production builds. |
| **Tailwind CSS** | `^3.4.19` | Utility Styling Engine | Rapid UI prototyping without CSS specificity wars; purgeable CSS ensures minimal production payload. |
| **Zustand** | `^5.0.15` | Global State Management | Zero-boilerplate atomic state store. Components only re-render when their selected slice updates, outperforming React Context and avoiding Redux complexity. |
| **React Router DOM** | `^7.12.0` | Client-Side Routing | Robust declarative navigation, dynamic route-level code splitting via `React.lazy`, and protected route guards. |
| **@google/genai** | `^1.35.0` | Gemini Generative AI SDK | Powers semantic wisdom search and ancient manuscript preservation/translation directly within the client interface. |
| **Framer Motion** | `^12.25.0` | Animations & Gestures | Hardware-accelerated entrance animations, modal transitions, and smooth interactive elements. |
| **Recharts** | `^3.6.0` | Data Visualization | Composable, responsive SVG charts in `Dashboard.tsx` for NGO transparency and fund allocation metrics. |
| **i18next & react-i18next** | `^25.8.0` / `^16.5.4` | Multi-lingual Support | Production-grade localization supporting 4 languages (English, Bengali, Hindi, Assamese) with regional fallback heuristics. |
| **Lucide React** | `^0.562.0` | Iconography | High-performance, clean, and tree-shakeable SVG icon set. |

---

## 📂 Repository Directory Structure

```text
Vikshu-Foundation/
├── app/                        # Application Wiring & Root Context
│   ├── App.tsx                 # App scaffolding, Navbar/Footer layout, Suspense boundary
│   ├── routes.tsx              # Declarative routes, React.lazy code-splitting, route guards
│   └── store/                  # Global Zustand store
│       └── useStore.ts         # User auth, token, UI language states & actions
├── components/                 # Reusable UI & Layout Components
│   ├── layout/                 # Global structural components
│   │   ├── Navbar.tsx          # Responsive navigation, language switcher, auth status
│   │   └── Footer.tsx          # Cultural footer, newsletter, social links, legal
│   ├── ui/                     # Presentation components
│   │   ├── AboutUs.tsx         # Foundation background and philosophy story
│   │   ├── DharmaBharatTeaser.tsx # Cultural initiatives teaser block
│   │   ├── NGOPost.tsx         # Social updates and community announcements
│   │   ├── QuoteBlock.tsx      # Vintage styled philosophical quotations
│   │   ├── SectorCard.tsx      # Modular card displaying foundation initiatives
│   │   └── WelcomePopup.tsx    # Modal dialog for first-time visitors
│   └── utils/                  # Functional utility components
│       └── ScrollToTop.tsx     # Window scroll reset hook on route transition
├── pages/                      # Feature-Centric Route Views
│   ├── Home.tsx                # Hero section, mission, sector highlights, stats
│   ├── auth/                   # Authentication domain
│   │   ├── Login.tsx           # Member login portal
│   │   └── Register.tsx        # Registration and volunteer onboarding
│   ├── consultancy/            # Advisory & cultural consulting services
│   │   └── Consultancy.tsx
│   ├── dashboard/              # Transparency metrics & impact charts
│   │   └── Dashboard.tsx
│   ├── donations/              # Philanthropy & funding
│   │   └── Donations.tsx       # Donation tiers, causes, and payment modal
│   ├── heritage/               # Archives & AI restoration labs
│   │   ├── RestorationLab.tsx  # Gemini-powered manuscript analysis & translation
│   │   └── WisdomSearch.tsx    # Semantic AI archive retrieval engine
│   ├── membership/             # Fellowship & patron community
│   │   ├── Membership.tsx      # Tiers (Fellow, Patron, Scholar)
│   │   ├── FellowshipEnrollment.tsx # Detailed application form
│   │   └── FellowsDirectory.tsx # Public directory of active fellows
│   ├── profile/                # Protected user dashboard
│   │   └── Profile.tsx         # Member stats, donation history, credentials
│   ├── sectors/                # Core foundation initiatives
│   │   └── Sectors.tsx         # Health, education, heritage, rural upliftment
│   ├── spiritual/              # Lineage and philosophical roots
│   │   └── SpiritualLineage.tsx# Parampara lineage graph and philosophical texts
│   └── support/                # Grievance redressal & contact
│       └── Support.tsx
├── i18n/                       # Localization & Multi-language Bundles
│   ├── i18n.ts                 # i18next configuration and region-aware detector
│   ├── en/                     # English namespace files
│   ├── bn/                     # Bengali (বাংলা) namespace files
│   ├── hi/                     # Hindi (हिन्दी) namespace files
│   └── as/                     # Assamese (অসমীয়া) namespace files
├── theme/                      # Centralized Design Tokens
│   └── theme.ts                # Color palettes, transitions, card variants
├── public/                     # Static assets, favicons, illustrations
├── Dockerfile.frontend         # Multi-stage production container build
├── docker-compose.yml          # Container orchestration (port 3007)
├── index.html                  # HTML5 entry with Google Fonts
├── index.tsx                   # React root entry point
├── index.css                   # Tailwind directives, custom fonts, glassmorphism utilities
├── tailwind.config.js          # Tailwind theme extensions (Cinzel, Playfair Display)
├── tsconfig.json               # TypeScript compiler rules
└── vite.config.ts              # Vite server settings, API aliases, env injection
```

---

## 🎨 Design System & Styling Architecture

The project pairs a **Victorian Antiquarian** motif with modern **Glassmorphism**:

### 1. Typography
Declared in `tailwind.config.js` and loaded via Google Fonts in `index.html`:
*   **`font-heading` (`Cinzel`, serif)**: Used for major titles, royal flourishes, and hero statements.
*   **`font-serif-vintage` (`Playfair Display`, serif)**: Used for subtitles, quotes, and philosophical passages.
*   **`font-sans` (`Inter`, sans-serif)**: Used for body text, form controls, and high-readability UI components.

### 2. Color Palette & Design Tokens (`theme/theme.ts`)
```typescript
export const colors = {
  primary: '#d4af37',    // Antique Gold
  secondary: '#704214',  // Sepia / Deep Ochre
  background: '#0c0c0c', // Obsidian Deep Black
  paper: '#f4ecd8',      // Aged Parchment
  text: '#f5f5f5',       // Alabaster White
  glass: 'rgba(255, 255, 255, 0.05)',
};
```

### 3. Glassmorphism & Vintage Paper (`index.css`)
*   **`.glass`**: Background `rgba(255, 255, 255, 0.05)` with `backdrop-filter: blur(12px)` and subtle 1px white border.
*   **`.vintage-paper`**: Textured parchment look utilizing seamless paper patterns over sepia backgrounds (`#d2b48c`).
*   **`.floating`**: 6-second vertical sine-wave keyframe animation for ethereal badges and teasers.

---

## 🗺 Routing & Code Splitting Strategy

Routing is centrally defined in [`app/routes.tsx`](file:///Users/hypothticoder/Vikshu-Foundation/app/routes.tsx) and managed by React Router v7:

### 1. Route-Level Code Splitting (`React.lazy`)
To prevent the client from downloading all page bundles on first visit, **every single page is lazy-loaded**:
```tsx
const Home = React.lazy(() => import('../pages/Home'));
const WisdomSearch = React.lazy(() => import('../pages/heritage/WisdomSearch'));
const Donations = React.lazy(() => import('../pages/donations/Donations'));
// ... other routes
```
When compiled, Vite creates independent chunk files. Users downloading the homepage do not download the heavy AI restoration or Recharts code until they actually navigate to those routes.

### 2. Suspense & Branded Fallback
In [`app/App.tsx`](file:///Users/hypothticoder/Vikshu-Foundation/app/App.tsx), the entire route tree is wrapped inside:
```tsx
<Suspense fallback={<LoadingFallback />}>
  <AppRoutes />
</Suspense>
```
The `LoadingFallback` renders an amber-accented spinner (`border-amber-600`) ensuring a smooth transition during chunk downloads.

### 3. Protected Route Guards
The `/profile` route dynamically verifies session authentication from Zustand:
```tsx
<Route 
  path="/profile" 
  element={isAuthenticated ? <Profile /> : <Navigate to="/auth/login" />} 
/>
```
Unauthenticated users are automatically bounced to `/auth/login`.

### 4. Route Map Reference

| URL Path | Component | Auth Required? | Purpose |
| :--- | :--- | :--- | :--- |
| `/` | `pages/Home.tsx` | No | Public landing page, mission, statistics |
| `/auth/login` | `pages/auth/Login.tsx` | No | Member login portal |
| `/auth/register` | `pages/auth/Register.tsx` | No | Account registration & volunteer sign-up |
| `/sectors` | `pages/sectors/Sectors.tsx` | No | Healthcare, education, culture sectors |
| `/donations` | `pages/donations/Donations.tsx` | No | Philanthropy portal with tax exemption info |
| `/membership` | `pages/membership/Membership.tsx` | No | Fellowship tiers, community benefits |
| `/membership/enroll` | `pages/membership/FellowshipEnrollment.tsx` | No | Application form for prospective fellows |
| `/lineage` | `pages/membership/FellowsDirectory.tsx` | No | Public scholar directory |
| `/spiritual-life` | `pages/spiritual/SpiritualLineage.tsx` | No | Lineage history, Vedic knowledge |
| `/archives` | `pages/heritage/WisdomSearch.tsx` | No | Gemini AI semantic wisdom search |
| `/lab` | `pages/heritage/RestorationLab.tsx` | No | Gemini AI manuscript restoration laboratory |
| `/support` | `pages/support/Support.tsx` | No | FAQs, support ticketing, contact form |
| `/profile` | `pages/profile/Profile.tsx` | **Yes** | Personal donation history and fellow ID |
| `*` | Redirection | No | Wildcard redirect to `/` |

---

## ⚡ State Management (Zustand)

Global state is orchestrated via **Zustand** in [`app/store/useStore.ts`](file:///Users/hypothticoder/Vikshu-Foundation/app/store/useStore.ts):

### Store Interface
```typescript
interface User {
  id: string;
  name: string;
  email: string;
}

interface AppState {
  // Authentication
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (userData: User, token: string) => void;
  logout: () => void;
  
  // UI States
  language: string;
  setLanguage: (lang: string) => void;
}
```

### How to Consume the Store in Components
Always use selective subscription to prevent unnecessary component re-renders:
```tsx
import { useStore } from '../app/store/useStore';

// ✅ GOOD: Only re-renders if isAuthenticated changes
const isAuthenticated = useStore((state) => state.isAuthenticated);
const login = useStore((state) => state.login);

// ❌ AVOID: Re-renders on any store update
const store = useStore();
```

---

## 🌐 Internationalization & Localization (i18n)

The foundation supports 4 major languages: **English (`en`)**, **Bengali (`bn`)**, **Hindi (`hi`)**, and **Assamese (`as`)**.

Configured in [`i18n/i18n.ts`](file:///Users/hypothticoder/Vikshu-Foundation/i18n/i18n.ts), language resolution follows a 5-step heuristic:
1. **Explicit URL Parameter**: e.g., `https://vikshu.org/?lang=bn`
2. **Local Storage**: Saved preference under `i18nextLng`.
3. **Browser Language Header**: `navigator.languages` (matches subtag prefixes `bn`, `as`, `hi`, `en`).
4. **`Intl.Locale` API**: Deeper inspection of operating system locale.
5. **Regional Timezone Heuristic**: If a user is located in the Indian subcontinent (`Asia/Kolkata` timezone) and has no explicit language preference, it defaults contextually to regional languages.

### How to use translations in pages
```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation('home'); // specifies namespace
  return <h1>{t('hero_title')}</h1>;
};
```

---

## 🤖 AI Integrations (Google Gemini)

The application incorporates Google's `@google/genai` SDK for two unique features in the `pages/heritage/` module:

1. **Wisdom Search (`WisdomSearch.tsx`)**:
   - Queries historical records, spiritual scriptures, and philosophical archives using natural language semantic matching.
2. **Restoration Lab (`RestorationLab.tsx`)**:
   - Takes corrupted, faded, or ancient manuscript fragments, parses text variants, and applies Gemini models to deduce missing terms and provide English/regional translations.

### Configuration
In `vite.config.ts`, the environment variable `GEMINI_API_KEY` is mapped into `process.env.API_KEY`:
```typescript
define: {
  'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
  'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
}
```

---

## 🚀 Getting Started & Local Development

### Prerequisites
*   **Node.js**: `v20.x` or higher
*   **npm**: `v10.x` or higher

### Step-by-Step Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Hypotheticoder/Vikshu-Foundation.git
   cd Vikshu-Foundation
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_actual_google_gemini_api_key_here
   ```

4. **Launch the development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000` (or `http://0.0.0.0:3000`).

5. **Type Checking & Production Build**:
   ```bash
   npm run build
   ```
   To test the production build locally:
   ```bash
   npm run preview
   ```

---

## 🐳 Docker & Production Deployment

The project includes an optimized Docker workflow configured for preview and production serving.

### Dockerfile (`Dockerfile.frontend`)
Uses `node:20-alpine` to build the app and execute the Vite preview server:
```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3007
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3007"]
```

### Running with Docker Compose
To build and run the containerized frontend on port `3007`:
```bash
docker compose up -d --build
```
Access the application at `http://localhost:3007`.

To stop the containers:
```bash
docker compose down
```

---

## 🛡 Architectural Best Practices for Future Developers

When extending or maintaining this codebase, please uphold the following conventions:

1. **Keep Pages Lean (Container / Presentation Pattern)**:
   - Pages in `pages/` should orchestrate logic, state hooks, and high-level structure.
   - Reusable layout elements should be placed in `components/ui/` or `components/layout/`.
2. **Always Lazy-Load New Pages**:
   - When adding a new view, never import it statically in `app/routes.tsx`. Use `React.lazy(() => import('../pages/...'))`.
3. **Persist Zustand State**:
   - When connecting real backend authentication, wrap the Zustand store in `persist` middleware to ensure tokens persist across page reloads.
4. **Use Namespaced i18n**:
   - Avoid creating a massive monolithic JSON file for translations. Keep JSON keys segregated by feature (`i18n/{lang}/{feature}.json`).
5. **Protect API Keys**:
   - Never commit raw API keys to source control. Always read from `import.meta.env` or `process.env.API_KEY` defined via Vite.
