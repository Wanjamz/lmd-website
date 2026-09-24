# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: programme, MEL, and communications leads at international NGOs, UN agencies, foundations, government partners, and donor-funded consortia working in the Horn of Africa. They arrive while shortlisting consultants, preparing a tender or EOI, or following a referral. Their job is to check that LMD is credible, competent in the specific discipline, and procurement-ready (compliant, credentialed, with real prior work) before inviting a bid or starting a conversation.

Secondary (confirmed as welcome, not the core): private-sector organisations and clients outside the Horn of Africa, mainly for Digital and Communication work.

## Product Purpose

The marketing and credibility website for LMD Consulting Group, a Kenya-registered consultancy based in Nairobi. It explains what LMD does, proves it with case studies and credentials, and turns qualified visitors into enquiries: the contact form, a Calendly booking, WhatsApp, phone, or email.

Success: a qualified procurement or programme lead leaves confident enough to shortlist LMD or get in touch.

## Positioning

One integrated team covers the whole chain, from evidence to communication to digital delivery, under a single engagement. The research, the technical sector depth, and the publication-grade design stay in one voice, instead of being split across several firms whose narrative drifts apart. The team is named and accountable:

- **Sarah Ng'ondi Kaia**, MEL Specialist, 14 years
- **George Mutuku Mulatya**, Agricultural Economist and Market Systems Advisor, 28 years
- **Benson Wanjama**, Communications and Design Specialist and Founder, 10 years, under an active UNICEF Long-Term Agreement

The firm is candid about its capability envelope and refers out work it would not do well.

## Operating Context

- Visitors evaluate LMD alongside TORs, RFPs, EOIs, and procurement checklists. Compliance documents and donor co-branding literacy matter to them.
- Active countries: Kenya and Somalia (concentrated), plus Djibouti, Ethiopia, and South Sudan.
- Thematic strengths:
  - women's economic empowerment and gender
  - adolescent SRHR and GBV prevention
  - agriculture, livelihoods, and market systems
  - humanitarian communications and displacement
- Delivery process: Discover → Design → Deliver → Measure → Improve. Weekly written check-ins, evidence-traceable outputs, and editable source files at close-out.

## Capabilities and Constraints

- **Three practice areas (current truth):**
  - **Evidence**: research, MEAL, data collection and analysis, data visualisation and GIS
  - **Communication**: brand, publications, strategic comms, creative design, storytelling and content
  - **Digital**: websites, hosting and infrastructure, AI solutions, automation
- **Scope is now wider than some existing copy says.** NGOs and development clients stay first, but private-sector work and work outside the Horn of Africa are welcome. Copy that says otherwise is stale and needs a copy decision before a surface relies on it. That covers `whereWeWork.clients` and `differentiator.limits` in `src/data/siteData.js`.
- **Mapped** (`/mapped`) is LMD's spatial-intelligence insight series on East African climate, land, and resource issues.
- **Stack:** React 19 + Vite + react-router, deployed with Vercel Analytics. Content lives in `src/data/siteData.js`, with optional Supabase-backed case studies and Mapped insights that fall back to static data.
- **Routes:** `/`, `/about`, `/work`, `/work/:id`, `/mapped`, `/contact`, `/services/:id` (off-menu). Legacy `/case-studies` paths redirect.
- **Enquiries** from both contact forms are saved to the Supabase `contact_messages` table (`supabase/contact_messages.sql`).
- **Contact:** partnerships@lmdconsulting.co, +254 723 539 332, Calendly (`lmd-consulting`), and a floating WhatsApp button.
- **Open decision:** whether the packages (Foundation / Catalyst / Transform) are still offered publicly.

## Brand Commitments

- **Name:** LMD Consulting Group (short form: LMD).
- **Voice:** plain, direct, candid, and specific. No vaporware and no thought-leadership padding. The firm states limits honestly and promises only what it delivers ("We do what we say we will do, when we said we would do it, at the price we quoted"). The hero uses verbs for what the firm does, not claims about outcomes.
- **Logo assets:** `public/Clients/LMD Logo.png`, `V2/LMD logo.png`, `V2/Main logo.png`, `public/favicon.svg`.

## Evidence on Hand

- **Case studies** (`caseStudies` in `src/data/siteData.js`):
  - UNICEF Zambia parliamentary advocacy (2025)
  - AEA Strategic Plan mid-term review (2024)
  - READO Somalia communications (2024)
  - Mother Esther Project baseline (2024)
  - La Banque Agricole GCF gender assessment (2023)
  - Secplus brand identity (2018)
- **Selected work named in the pillars:** IOM Somalia DTM products, NIRAS Africa, ACWICT, CBI, STS International Solidarity.
- **Portfolio imagery:** `public/Portfolio/` (UNICEF Zambia 1–4, READO website), `V2/Unicef Booklet.png`, `Portfolio work/`.
- **Client logos:** `public/Clients/` (ACWICT, CGA, DAI, ESF, IOM, NIRAS, PMWDO, READO, UNFPA).
- **Credentials:** active UNICEF LTA (individual graphic-design consultancy, held by the Founder). CR12, KRA PIN, current Tax Compliance Certificate, and current Single Business Permit, all available on request. The founding consultants have 40+ combined years of experience.
- **Testimonials (confirmed genuine and approved):** Ken Martin Gitari, Managing Director, SecPlus Kenya; and a Senior Programme Officer, UNICEF Zambia. Both appear on the homepage.
- **Absences (must not be fabricated):** no other testimonials, no press coverage, and no quantified outcome benchmarks beyond what the case studies state.
- **Mapped research:** the Athi River insight is now based on LMD's desk research paper *Will Athi River Flood Again?* (September 2026), rendered in full inside the insight view from `src/content/research/athi-river-flood-2026.html` (figures in `V2/public/research/athi-river-flood-2026/`). It rates every claim and explicitly withdrew some figures (6.7 m/s velocity, 11 m depths, 162 missing, the Greatwall Gardens flood link, clear skies on 24 April); never reuse them. The other Mapped insights (e.g. northern Kenya drought) still use sample figures and stand-in images and must not be presented as verified.

## Product Principles

1. **Proof over promise.** Every claim should trace to a named project, credential, or person. Rely on specificity, not adjectives.
2. **Procurement-ready at a glance.** A shortlisting reviewer should find the disciplines, the relevant past work, the team, and compliance status quickly.
3. **One team, one voice.** Present Evidence, Communication, and Digital as one connected practice, not a catalogue of unrelated services.
4. **Honest about the envelope.** State what LMD does well and where it refers out. Never overclaim reach, scale, or results.
5. **Context-rooted.** Lead with Horn of Africa depth and field reality, while leaving room for the wider client base the firm now welcomes.
