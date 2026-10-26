# DOS3.AI — Enterprise Company Website

Official production-ready corporate website for **DOS3.AI**, an independent technology company focused on software engineering, data systems, computing infrastructure, digital services, and artificial intelligence.

Headquartered in Dallas, Texas, USA.

---

## 1. Complete Site Architecture (Strictly Aligned with Playbook)

Every page, table, and checklist requirement from [DOS3AI_Website_Playbook.pdf](file:///d:/DOS3.AI/DOS3AI_Website_Playbook.pdf) has been systematically implemented:

```text
d:\DOS3.AI\
├── brand-and-reference-assets/ # Organized original repository assets
│   ├── logos-and-banners/      # Original logos, icons, and LinkedIn banners
│   └── reference-screenshots/  # Inspiration & benchmark screenshots
├── dist/                       # Static production bundle (Vite + Three.js code-split)
├── public/
│   ├── favicon.png             # Official DOS3.AI square icon
│   ├── _redirects              # Cloudflare Pages SPA rewrite rules
│   ├── robots.txt              # Search & AI crawler directives
│   ├── sitemap.xml             # XML sitemap indexing all 12 core pages
│   ├── llms.txt                # Generative Engine Optimization (GEO) summary
│   └── images/
│       ├── icon-square.png     # Square brand icon
│       ├── icon-transparent.png# Transparent icon variant
│       ├── logo-dark.png       # Dark theme horizontal logo lockup
│       ├── logo-light.png      # Light theme horizontal logo lockup
│       └── banner.png          # Social / Open Graph Preview Banner
├── src/
│   ├── components/
│   │   ├── ThreeCanvas.tsx     # 3D WebGL core with orbital rings and particle cloud
│   │   ├── TiltCard.tsx        # Interactive 3D perspective cards with dynamic glare sheen
│   │   ├── NetworkCanvas.tsx   # 2D computational particle mesh background
│   │   ├── CookieBanner.tsx    # Granular cookie consent & preference modal
│   │   ├── Navbar.tsx          # Responsive sticky glass navigation with mobile drawer
│   │   ├── Footer.tsx          # 4-column footer with legal and compliance links
│   │   ├── Button.tsx          # Reusable accessible button (primary/secondary/outline)
│   │   ├── SectionHeading.tsx  # Consistent section header with pill badges
│   │   ├── PillarCard.tsx      # Technology pillar presentation card
│   │   └── ContactForm.tsx     # Validated accessible inquiry form
│   ├── pages/
│   │   ├── Home.tsx            # Complete 13-section Playbook homepage blueprint
│   │   ├── About.tsx           # Purpose, Vision, Approach & Focus Areas
│   │   ├── Technology.tsx      # 5 deep-dive technical domains & engineering principles
│   │   ├── Solutions.tsx       # Solutions by Persona (ML/CTO/CISO) and Industry
│   │   ├── Research.tsx        # Topic filters, search, and working paper catalog
│   │   ├── Pricing.tsx         # Engagement models (Pilot, Production, Enterprise)
│   │   ├── Security.tsx        # Security by design, privacy, and trust disclosures
│   │   ├── ResponsibleAI.tsx   # Model evaluation, human oversight, safety gates policy
│   │   ├── Contact.tsx         # Verified contact channels & interactive form
│   │   ├── Privacy.tsx         # Privacy policy (CCPA/CPRA, Texas, GDPR readiness)
│   │   ├── Terms.tsx           # Terms of Service & Acceptable Use Policy (AI-specific)
│   │   └── Accessibility.tsx   # WCAG 2.2 Level AA Accessibility statement
│   ├── types/
│   │   └── index.ts            # Type-safe TypeScript interfaces
│   ├── App.tsx                 # Route coordinator & 404 fallback
│   ├── main.tsx                # React 18 DOM root
│   └── index.css               # Tailwind directives and custom tokens
├── index.html                  # SEO, Google Ranking (Schema.org JSON-LD), and Google Fonts
├── vercel.json                 # Vercel hosting config (SPA rewrites, security headers, caching)
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Design system color and typography tokens
├── tsconfig.json               # TypeScript compiler configuration
├── vite.config.ts              # Vite server, code-splitting (Three.js & Vendor)
└── README.md                   # Setup & deployment manual
```

---

## 2. 3D Animations & Visual Effects

* **3D WebGL Core ([ThreeCanvas.tsx](file:///d:/DOS3.AI/src/components/ThreeCanvas.tsx)):**
  * Powered by Three.js with hardware-accelerated WebGL.
  * Features a central icosahedron wireframe core rotating in 3D space, surrounded by orbital concentric data rings and a 3D particle constellation.
  * Dynamically reacts to mouse movements with smooth camera parallax.
  * Automatically respects user accessibility settings (`prefers-reduced-motion`).
* **3D Tilt Perspective Cards ([TiltCard.tsx](file:///d:/DOS3.AI/src/components/TiltCard.tsx)):**
  * Cards dynamically tilt in 3D space tracking mouse cursor position (`perspective: 1000px`, `transform: rotateX(...) rotateY(...)`).
  * Features an organic cursor-following glare sheen that illuminates the card surface.
* **Interactive Code Terminal:** Multi-tab developer teaser with syntax-highlighted TypeScript, Python, and cURL snippets with one-click copy.
* **5-Layer Architecture Inspector:** Interactive live layer switcher exploring Data, Operating Systems, Servers, Services, and AI.

---

## 3. Technology Stack & Design System Verification

All styles, fonts, and colors conform directly to [DOS3AI_Website_Playbook.pdf](file:///d:/DOS3.AI/DOS3AI_Website_Playbook.pdf):

* **Color Tokens:**
  * **Void Navy** (`#04050F`) — Page background (dark theme)
  * **Midnight** (`#0A1030`) & **Deep Surface** (`#0B1339`) — Cards, headers, and container surfaces
  * **Electric Cyan** (`#22E6FF`) — Highlights, links on dark, data accents
  * **Azure** (`#2F6BFF`) — Primary buttons and key UI
  * **Indigo** (`#3A2BFF`) — Gradient mid-tones and hover states
  * **Violet** (`#9B4DFF`) — Secondary accent
  * **Magenta** (`#E23CFF`) — Restrained accent
  * **Mist** (`#C9D4F5`) — Secondary text on dark
  * **Cloud White** (`#F4F7FF`) — Primary text on dark
* **Typography:**
  * **Headings:** `Sora` (Weights: 600, 700, 800)
  * **Body & UI:** `Inter` (Weights: 400, 500, 600)
* **Tagline:** *"Data • Operating Systems • Servers • Services • AI"*
* **Compliance:** Zero mention of unreleased product names or confidential roadmaps.

---

## 4. Google Ranking & Search Engine Optimization

* **JSON-LD Structured Data (`index.html`):**
  * `Organization` Schema: Official logo, legal name, Dallas TX headquarters, verified contact points.
  * `WebSite` Schema: Canonical URL indexing and publisher relationship.
  * `FAQPage` Schema: Direct, answer-first definitions of *"What is DOS3.AI?"*, the naming breakdown, and company location, optimized for Google rich snippets and AI Answer Engines (ChatGPT, Claude, Perplexity).
* **Generative Engine Optimization (GEO):** Dedicated [`public/llms.txt`](./public/llms.txt) summarizing architecture and principles for LLM search crawlers.
* **Indexing:** [`public/robots.txt`](./public/robots.txt) and [`public/sitemap.xml`](./public/sitemap.xml) indexing all 12 core pages.

---

## 5. Hosting & Deployment

### Option A: Vercel Hosting (via `vercel.json`)
The project includes a pre-configured [`vercel.json`](./vercel.json):
* **Rewrites:** Automatically handles client-side SPA routing (`/(.*)` $\rightarrow$ `/index.html`).
* **Security Headers:** Enforces `nosniff`, `DENY` clickjacking, cross-site scripting protection, strict referrer policy, and permissions policy.
* **Asset Caching:** Implements `Cache-Control: public, max-age=31536000, immutable` on static assets.
* **Deploy Command:**
  ```bash
  npx vercel
  ```

### Option B: Cloudflare Pages (via `public/_redirects`)
* **Framework Preset:** Vite
* **Build Command:** `npm run build`
* **Build Output Directory:** `dist`
* **SPA Routing:** Handled automatically via `public/_redirects` (`/* /index.html 200`).

---

## 6. Local Development Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Compile production build
npm run build

# Preview production build locally
npm run preview
```
