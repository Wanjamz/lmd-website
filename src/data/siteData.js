
// ─── LMD CONSULTING — SITE DATA ───────────────────────────────────────────────────

export const CALENDLY_URL = 'https://calendly.com/lmd-consulting';

// ─── FIRM DETAILS ──────────────────────────────────────────────────────────────
export const firm = {
  name: 'LMD Consulting Group',
  email: 'info@lmdconsulting.co',
  phone: '+254 788 850 900',
  phoneHref: '+254788850900',
  website: 'www.lmdconsulting.co',
  location: 'Nairobi, Kenya',
  countries: ['Kenya', 'Somalia', 'Djibouti', 'Ethiopia', 'South Sudan'],
};

// ─── ABOUT, VISION, MISSION ────────────────────────────────────────────────────
export const about = {
  intro: `LMD Consulting Group is a Kenya-registered consultancy firm supporting local and international NGOs, foundations, and donor-funded programmes across Kenya, Somalia, Djibouti, Ethiopia, and South Sudan.`,
  credentials: `Our founding consultants bring a combined 40+ years of monitoring and evaluation, agricultural and market-systems programming, and strategic communications and design work across FAO, WFP, UNICEF, UNFPA, IOM, USAID, GIZ, SIDA, CBI, and READO Somalia. LMD is Kenya-registered (CR12), KRA-PIN registered, and holds a current Tax Compliance Certificate and a current Single Business Permit. Our Founder operates under an active UNICEF Long-Term Agreement for individual graphic-design consultancy.`,
  vision: `To be the evidence and communications partner every serious NGO and foundation in the Horn of Africa calls first.`,
  mission: `To turn programme work into the evidence and communications donors will fund — with rigour, clarity, and respect for the people the work is meant to serve.`,
};

// ─── WHAT MAKES US DIFFERENT ───────────────────────────────────────────────────
export const differentiator = {
  problem: `Most consulting relationships fragment. One firm designs the baseline. Another writes the report. A third designs the publication. A fourth builds the donor deck. By the time everything is stitched together, the narrative has drifted, the evidence has been softened, and the client has spent more than the sum of the parts.`,
  answer: `We work differently. Sarah Ng'ondi Kaia leads the research. George Mutuku Mulatya brings the sector-specific technical depth where it's needed — agriculture, livelihoods, market systems. Benson Wanjama turns the findings into publication-grade communication products under UNICEF LTA standards. One team, one voice, one project number.`,
  limits: `We also know what we don't do. We don't run construction supervision. We don't do multi-camera film production. We don't operate outside the Horn of Africa. When you need those things, we'll refer you to someone who does them better than we would.`,
  // Homepage uses this shorter line; `answer` (which names the team) still
  // runs on the About page.
  teamLine: `At LMD we work cohesively as a team delivering synchronized and seamless outputs.`,
};

// ─── TEAM ──────────────────────────────────────────────────────────────────────
export const team = [
  {
    id: 'sarah-ngondi-kaia',
    name: "Sarah Ng'ondi Kaia",
    role: 'MEL Specialist',
    years: '14 years',
    focus: 'Leads the research on every engagement.',
  },
  {
    id: 'george-mutuku-mulatya',
    name: 'George Mutuku Mulatya',
    role: 'Agricultural Economist & Market Systems Advisor',
    years: '28 years',
    focus: 'Named for agriculture, livelihoods, market-systems, and cooperative-strengthening assignments.',
  },
  {
    id: 'benson-wanjama',
    name: 'Benson Wanjama',
    role: 'Communications & Design Specialist, LMD Founder',
    years: '10 years',
    focus: 'Operates under an active UNICEF Long-Term Agreement. Supported by junior designers and field videographers as project load requires.',
  },
];

// ─── OUR EXPERTISE ─────────────────────────────────────────────────────────────
export const expertise = {
  intro: `At LMD Consulting, we bring together evidence, communication, and technology to help organizations make informed decisions, communicate their impact, and build systems that support long-term growth.`,
  note: `Our services are organized into three core practice areas.`,
};

// ─── SERVICES — THREE PILLARS ──────────────────────────────────────────────────
// Each pillar carries grouped service lists. The homepage cards show the group
// headings only; the full inventory lives on the pillar detail page.
export const services = [
  {
    id: 'evidence',
    pillar: '01',
    icon: 'Target',
    title: 'Evidence',
    kicker: 'Research. Monitoring. Evaluation. Learning.',
    short: 'Strong decisions begin with reliable evidence.',
    description: `Strong decisions begin with reliable evidence.

We support governments, development partners, NGOs, humanitarian organizations, and private sector institutions to generate, analyze, and use data for planning, accountability, and learning.`,
    valueLine: 'Evidence helps organizations understand what is happening.',
    groups: [
      {
        title: 'Monitoring, Evaluation & Learning (MEAL)',
        items: [
          'MEAL Framework Design',
          'Performance Monitoring Systems',
          'Indicator Development',
          'Results Frameworks',
          'Theory of Change Development',
          'Logical Framework (Logframe) Design',
          'Learning Agenda Development',
        ],
      },
      {
        title: 'Research & Assessments',
        items: [
          'Baseline Studies',
          'Midline Studies',
          'Endline Evaluations',
          'Needs Assessments',
          'Feasibility Studies',
          'Market Assessments',
          'Perception Studies',
          'Knowledge, Attitudes & Practices (KAP) Surveys',
          'Organizational Assessments',
        ],
      },
      {
        title: 'Data Collection & Analysis',
        items: [
          'Quantitative Data Collection',
          'Qualitative Research',
          'Survey Design',
          'Mobile Data Collection',
          'Data Cleaning & Quality Assurance',
          'Statistical Analysis',
          'Data Interpretation',
        ],
      },
      {
        title: 'Data Visualization & Insights',
        items: [
          'Interactive Dashboards',
          'GIS Mapping',
          'Infographics',
          'Data Storytelling',
          'Learning Reports',
          'Evaluation Reports',
          'Research Publications',
        ],
      },
    ],
    tools: ['SurveyCTO', 'KoboCollect', 'ODK'],
    frameworks: [
      'Market Systems Development',
      'Adopt-Adapt-Expand-Respond (AAER)',
      'OECD DAC evaluation criteria',
      'Gender-responsive evaluation',
    ],
    tags: ['MEAL', 'Baselines', 'Research', 'Data Visualisation'],
    callout: 'Strong decisions begin with reliable evidence.',
    selectedWork: [
      { client: 'Mother Esther Project', detail: 'Baseline on FGM and early marriages, Kajiado West.' },
      { client: 'ACWICT', detail: 'M&E SOPs review and development.' },
      { client: 'AEA', detail: 'Strategic Plan Midterm Review.' },
      { client: 'CBI', detail: "MEL framework for Women's Economic Empowerment programme in the macadamia value chain." },
      { client: 'STS International Solidarity', detail: 'MEL for FAO, WFP and SIDA-funded resilience and livelihoods programmes in Somalia.' },
    ],
    teamIds: ['sarah-ngondi-kaia', 'george-mutuku-mulatya'],
    category: 'M&E',
    examples: ['mother-esther-baseline', 'aea-midterm-review', 'lba-gender-assessment'],
  },
  {
    id: 'communication',
    pillar: '02',
    icon: 'Megaphone',
    title: 'Communication',
    kicker: 'Stories that build trust. Design that creates impact.',
    short: 'Communication that is clear, professional, and strategic.',
    description: `Stories that build trust. Design that creates impact.

We help organizations communicate clearly, professionally, and strategically through compelling visual identity, publications, storytelling, and digital communications.`,
    valueLine: 'Communication transforms evidence into meaningful stories, engagement, and influence.',
    groups: [
      {
        title: 'Brand & Identity',
        items: [
          'Brand Strategy',
          'Visual Identity Design',
          'Logo Design',
          'Brand Guidelines',
          'Corporate Identity Systems',
        ],
      },
      {
        title: 'Publications & Reports',
        items: [
          'Annual Reports',
          'Donor Reports',
          'Impact Reports',
          'Policy Briefs',
          'Research Publications',
          'White Papers',
          'Company Profiles',
          'Capability Statements',
          'Brochures',
          'Newsletters',
        ],
      },
      {
        title: 'Strategic Communications',
        items: [
          'Communication Strategies',
          'Campaign Development',
          'Knowledge Management',
          'Stakeholder Communications',
          'Internal Communications',
          'Media & Public Relations Support',
        ],
      },
      {
        title: 'Creative Design',
        items: [
          'Graphic Design',
          'Presentation Design',
          'Infographics',
          'Data Visualization',
          'Social Media Design',
          'Marketing Materials',
          'Exhibition & Event Branding',
          'Print & Digital Publications',
        ],
      },
      {
        title: 'Storytelling & Content',
        items: [
          'Success Stories',
          'Case Studies',
          'Photography',
          'Videography',
          'Documentary Production',
          'Motion Graphics',
          'Animation',
          'Social Media Content',
          'Website Content Development',
        ],
      },
    ],
    tools: ['Adobe InDesign', 'Illustrator', 'Photoshop'],
    frameworks: [
      'UNICEF Long-Term Agreement standards',
      'USAID, UKAID and AFDB co-branding compliance',
    ],
    tags: ['Annual Reports', 'Policy Briefs', 'Brand Identity', 'Storytelling'],
    callout: 'Stories that build trust. Design that creates impact.',
    selectedWork: [
      { client: 'UNICEF Zambia', detail: '2026 Social Sector Budget Brief; 2025 State of Children Infographic Booklet for MP advocacy.' },
      { client: 'IOM Somalia', detail: 'Displacement Tracking Matrix information products under USAID / UKAID / AFDB co-branding.' },
      { client: 'READO Somalia', detail: 'Ongoing communications and donor visibility since 2022, FAO / SHF-funded.' },
      { client: 'NIRAS Africa', detail: 'Multi-country visual communications across seven African offices.' },
    ],
    teamIds: ['benson-wanjama'],
    category: 'Communications',
    examples: ['unicef-zambia-advocacy', 'reado-somalia-communications', 'secplus-brand-identity'],
  },
  {
    id: 'digital',
    pillar: '03',
    icon: 'Database',
    title: 'Digital',
    kicker: 'Digital experiences designed for growth.',
    short: 'Platforms and systems that help organizations work smarter.',
    description: `Technology should help organizations work smarter, connect better, and deliver greater impact.

We build digital platforms and intelligent systems that improve organizational performance and strengthen engagement.`,
    valueLine: 'Digital provides the technology and systems that enable organizations to operate more effectively and scale their impact.',
    groups: [
      {
        title: 'Websites & Digital Platforms',
        items: [
          'Website Design',
          'Website Development',
          'Website Redesign',
          'Website Audits',
          'Website Maintenance',
          'Website Care Plans',
          'Landing Pages',
          'Client Portals',
          'Knowledge Platforms',
        ],
      },
      {
        title: 'Hosting & Infrastructure',
        items: [
          'Domain Registration',
          'Website Hosting',
          'Business Email Solutions',
          'SSL Certificates',
          'Website Migration',
          'Website Backups',
          'Security Monitoring',
          'Performance Optimization',
        ],
      },
      {
        title: 'AI Solutions',
        items: [
          'AI Readiness Assessments',
          'AI Strategy',
          'AI Assistants',
          'AI Chatbots',
          'AI Knowledge Bases',
          'Proposal Support Systems',
          'Content Automation',
          'Document Intelligence',
        ],
      },
      {
        title: 'Automation & Productivity',
        items: [
          'Workflow Automation',
          'Microsoft 365 Automation',
          'CRM Setup & Integration',
          'Process Digitization',
          'Form Development',
          'Approval Workflows',
          'Digital Document Management',
        ],
      },
      {
        title: 'Digital Growth',
        items: [
          'Search Engine Optimization (SEO)',
          'Website Analytics',
          'User Experience (UX) Reviews',
          'Conversion Optimization',
          'Accessibility Reviews',
          'Website Performance Monitoring',
        ],
      },
    ],
    tools: [],
    frameworks: [],
    tags: ['Websites', 'AI Solutions', 'Automation', 'Digital Growth'],
    callout: 'Digital experiences designed for growth.',
    // ⚠️ No named digital engagements supplied yet — add them here so this
    // pillar carries the same evidence as the other two.
    selectedWork: [],
    teamIds: ['benson-wanjama'],
    category: 'Digital Systems',
    examples: ['ai4dev-platform'],
  },
];

// ─── HOW WE DELIVER VALUE ──────────────────────────────────────────────────────
export const howWeDeliverValue = {
  intro: 'Every project combines our three core disciplines:',
  close: `Together, these three pillars enable us to deliver integrated solutions that move beyond individual services to create measurable, lasting value.`,
};

// ─── WHERE WE WORK ─────────────────────────────────────────────────────────────
export const whereWeWork = {
  intro: `Geographically, our clients are concentrated in Kenya and Somalia, with active engagements extending into Djibouti, Ethiopia, and South Sudan. Thematically, our work is concentrated where our team is strongest:`,
  themes: [
    "Women's economic empowerment and gender-responsive programming — including macadamia and dairy value chains, women's cooperatives, and adolescent SRHR programming.",
    'Adolescent sexual and reproductive health, and gender-based violence prevention — including community-level baselines, contribution analysis, and knowledge products for advocacy.',
    'Agriculture, livelihoods, and market systems — smallholder farmer strengthening, cooperative development, value chain analysis, and post-harvest resilience programming.',
    'Humanitarian communications and displacement — donor visibility, field documentation, and information products for emergency and protracted-crisis contexts.',
  ],
  clients: `We work with international NGOs, UN agencies, foundations, government partners, and donor-funded consortia. We do not chase private sector or SME work — it is not what we are set up for.`,
};

// ─── HOW WE WORK ───────────────────────────────────────────────────────────────
export const process = [
  {
    num: '1',
    title: 'Discover',
    body: 'We start by reading the TOR, your programme documents, and any prior evaluations closely. We ask the questions others do not ask up front — the ones that surface the real constraints before scope is locked.',
  },
  {
    num: '2',
    title: 'Design',
    body: 'We propose a methodology grounded in what is actually possible in the field, not what is theoretically ideal. Every method we propose is one we have deployed on comparable assignments. We are explicit about assumptions and about what we will not be able to deliver at the proposed budget.',
  },
  {
    num: '3',
    title: 'Deliver',
    body: 'Sarah leads the research. George anchors sector depth when needed. Benson turns findings into publication-grade outputs. Weekly written check-ins with the client. Transparent progress. No surprises at deadline.',
  },
  {
    num: '4',
    title: 'Measure',
    body: 'We hand over evidence-traceable products. Every claim tracks to a source in the register. Editable source files at close-out. Your donors can audit our work, and so can we.',
  },
  {
    num: '5',
    title: 'Improve',
    body: 'We are built for repeat engagements. The majority of our strongest client relationships are second-year, third-year, or longer. We treat the first engagement as the start of a relationship, not the end of a transaction.',
  },
];

// ─── WHY ORGANISATIONS CHOOSE LMD ──────────────────────────────────────────────
export const whyChooseLMD = [
  'We deliver three services exceptionally well — MEL, donor-grade communications, and digital presence — instead of ten services adequately.',
  'We know the Horn of Africa. Our clients are here. Our work has been here for a decade. We do not parachute in.',
  'We are honest about our capability envelope. Ask us to do something outside it and we will tell you and recommend someone better.',
  'We are UNICEF-credentialed. Active Long-Term Agreement for graphic design; publications certified by UNICEF Zambia programme leads.',
  'We are fully compliant. CR12, KRA PIN, current Tax Compliance Certificate, and current Single Business Permit — all held and available on request.',
  'We do what we say we will do, when we said we would do it, at the price we quoted.',
];

// ─── INSIGHTS ──────────────────────────────────────────────────────────────────
export const insights = {
  intro: `We publish practical guidance — no vaporware, no thought-leadership padding — on the questions our clients actually ask us. Topics include:`,
  topics: [
    'Contribution analysis for donor-funded programmes — how to attribute change credibly without overclaiming.',
    'Designing baselines that survive scope changes — the design decisions that matter most.',
    "What UNICEF-standard publication design actually looks like — a practitioner's field guide.",
    'MEL for adolescent SRHR and gender-transformative programming — what donors are actually looking for in 2026.',
    'Building donor-ready websites for NGOs in the Horn of Africa — payment integration, accessibility, and credibility.',
  ],
  subscribeNote: 'Subscribe to receive one useful piece a month.',
};

// ─── CAREERS ───────────────────────────────────────────────────────────────────
export const careers = {
  intro: `We hire slowly and deliberately. When we do hire, we are looking for three profiles:`,
  profiles: [
    'Junior researchers with mixed-methods training and East Africa fieldwork experience — comfortable with KoboCollect / SurveyCTO, and with qualitative coding.',
    'Publication designers with InDesign fluency and donor-branding experience — UNICEF, FCDO, USAID or equivalent.',
    'Sector advisors with senior credibility in agriculture, livelihoods, health, WASH, or education — available on a named-associate basis for specific bids.',
  ],
  howToApply: `If that is you, write to info@lmdconsulting.co with a CV and two work samples. We reply to every application within two weeks.`,
};

// ─── COMPLIANCE ────────────────────────────────────────────────────────────────
export const compliance = {
  items: ['CR12', 'KRA PIN', 'Tax Compliance Certificate', 'Single Business Permit'],
  note: 'Compliance documents available on request.',
};

// ─── CASE STUDIES ──────────────────────────────────────────────────────────────────
export const caseStudies = [
  // ── 2025 ──────────────────────────────────────────────────────────────────
  {
    id: 'unicef-zambia-advocacy',
    category: 'Communications',
    client: 'UNICEF Zambia',
    year: '2025',
    duration: '11 days',
    location: 'Zambia',
    title: 'Parliamentary Advocacy Communications',
    excerpt: 'Translating complex child welfare and public finance data into a clear, credible, and persuasive advocacy tool for Members of Parliament.',
    fullContent: [
      {
        type: 'text',
        label: 'Overview',
        title: 'Advocacy Communications',
        content: `UNICEF Zambia's Social Policy & Public Finance Unit needed a high-quality advocacy communications product to support a major engagement with Members of Parliament. The objective was to translate complex child welfare data into a clear, credible, and persuasive communication tool that could influence discussion around children's wellbeing and public financing.`
      },
      {
        type: 'text',
        label: 'The Challenge',
        title: 'What the client wanted',
        content: `UNICEF Zambia needed a product that could make national child welfare data understandable for a parliamentary audience. The assignment required turning 20–30 indicators from multiple national sources into a visually coherent, print-ready booklet that MPs could engage with quickly and confidently. It had to meet global brand requirements and be delivered within a very tight 11-day production window.`
      },
      {
        type: 'image',
        src: '/images/Unicef Booklet.png',
        alt: 'UNICEF Advocacy Booklet Design',
        caption: 'Visualizing child welfare indicators for policy influence'
      },
      {
        type: 'text',
        label: 'Our Approach',
        title: 'What we did',
        content: `We functioned as the bridge between technical data and strategic communication. Our process involved:
        • Editorial refinement of complex data points into "bite-sized" advocacy messages.
        • Design and layout of a 16-page high-quality booklet.
        • Creation of custom infographics for 20+ child indicators.
        • End-to-end production management including coordination with high-quality printers.
        • Strict adherence to UNICEF global brand and visibility guidelines.`
      },
      {
        type: 'image',
        src: '/images/UNICEF booklet11.png',
        alt: 'Final Printed Product',
        caption: '400 copies produced for parliamentary distribution'
      },
      {
        type: 'text',
        label: 'Results',
        title: 'Key results',
        content: `We delivered the full project—from initial data receipt to 400 finished physical copies—in exactly 11 days. The booklet harmonized data from multiple national sources into a single, authoritative narrative that was used during the parliamentary engagement session on 12 September 2025.`
      }
    ],
    impact: 'The project equipped UNICEF with an advocacy-ready tool that made the state of children in Zambia visible and understandable. It bridged the gap between raw data and decision-making, supporting parliamentary dialogue on public finance and child policy. (Delivered by Benson Wanjama.)',
    tags: ['Advocacy', 'Data Visualization', 'Infographics', 'Brand Management'],
    image: '/images/Unicef Booklet.png',
  },
  {
    id: 'ai4dev-platform',
    category: 'Capacity Building',
    client: 'East African NGOs',
    year: '2025',
    duration: 'Ongoing',
    location: 'East Africa (Remote & Blended)',
    title: 'AI for Development — Building an AI Capacity Platform for East African NGOs',
    excerpt: 'A purpose-built AI capacity-building platform for NGO staff and leadership in East Africa — tackling donor pressure, compliance risk, and the gap between generic AI tools and real development workflows.',
    fullContent: [
      {
        type: 'text',
        label: 'Overview',
        title: 'The problem with generic AI training',
        content: `Across East Africa's development sector, NGO leaders and their teams were feeling a mounting tension. Donors — including major institutional funders like USAID, DANIDA, and FCDO — were increasingly expecting AI integration to appear in proposals, reporting frameworks, and operational workflows. The pressure was real, but the resources to respond to it were not.

The core problem wasn't a lack of willingness. It was a lack of relevant, context-aware training. Generic AI courses built for Western corporate audiences consistently failed to address the realities on the ground: tools like KoboCollect for data collection, M-Changa for community fundraising, and SMS-based communication gateways were the backbone of field operations — yet no existing curriculum addressed them.

Standard AI prompt techniques broke down when applied to the strict logframe and reporting formats required by international donors. And perhaps most critically, staff had no guidance on how to use AI tools in compliance with the Kenya Data Protection Act 2019, putting beneficiary data at genuine legal risk.`
      },
      {
        type: 'image',
        src: '/images/Evaluation.png',
        alt: 'AI capacity building for East African NGOs',
        caption: 'Purpose-built for the tools, donors, and compliance environment of East African development work'
      },
      {
        type: 'text',
        label: 'Our Approach',
        title: 'Built from the ground up — for East Africa',
        content: `LMD Consulting Group developed AI4Dev — a dedicated capacity-building platform purpose-built for NGO staff and leadership in the East African development context. Rather than adapting an existing curriculum, we built from the ground up with our clients' operational realities at the center of every design decision.

We designed four specialized role-specific learning tracks:
• Resource Mobilisation — AI tools for grant writing, donor mapping, and proposal drafting calibrated to USAID and EU standards.
• Programme & MEAL — Automating data cleaning from KoboCollect, generating field insights, and drafting impact reports faster.
• Leadership — AI policy development, organizational change management, and KE-DPA compliance at the institutional level.
• Communications — Scaling impact storytelling and managing content localization for diverse communities across the region.`
      },
      {
        type: 'text',
        label: 'Platform Design',
        title: 'Flexible, verified, and compliance-first',
        content: `Every module was designed with East African workflows in mind — not theoretical overviews, but real case studies and exercises drawn directly from the development sector.

AI4Dev offers both self-paced and blended/facilitated delivery modes, accommodating the reality of NGO staffing where senior management have limited time and field officers benefit from extended self-paced learning.

The platform issues verifiable certificates upon programme completion, recognized by major development partners, alongside micro-credential badges for specific competencies such as Data Privacy and Grant Automation — tangible assets organizations can include in donor reports and proposals.

Rather than treating the Kenya Data Protection Act as a footnote, we embedded KE-DPA compliance throughout the curriculum. The platform also offers a free NGO Data Protection Guide covering consent management for AI, safe prompt engineering, and a vendor assessment checklist.`
      },
      {
        type: 'image',
        src: '/images/Baseline 1.png',
        alt: 'AI4Dev learning tracks and platform interface',
        caption: 'Visit the platform at ai4development.co'
      },
      {
        type: 'text',
        label: 'Results & Impact',
        title: 'Early outcomes from the platform',
        content: `The platform has begun delivering measurable outcomes for its early cohort of users:

• MEAL teams integrating KoboCollect-specific training reported significant time savings in data processing workflows.
• Programme managers cited the Kenya Data Protection Act module as a critical differentiator — providing the institutional confidence to begin using AI tools without exposing beneficiary data to risk.
• Senior leadership teams used the blended delivery model to get executive staff up to speed rapidly while field officers completed self-paced tracks on their own schedules.

The pricing model — offered in both USD and KES, with individual track access, full programme enrollment, and organizational volume pricing — was designed to make the platform genuinely accessible to the development sector rather than reserved for well-funded institutions.`
      },
      {
        type: 'text',
        label: 'Why It Worked',
        title: 'Context is not a detail — it\'s the product',
        content: `The success of AI4Dev stems from a simple insight: by designing for East African NGOs specifically — their tools, their donors, their compliance environment, their team structures — LMD Consulting Group built something that generic platforms cannot replicate.

Our clients didn't just learn about AI. They learned how to use AI in their organizations, starting on day one.

🔗 Visit the platform: https://www.ai4development.co/`
      }
    ],
    impact: 'AI4Dev is now an active platform serving East African NGOs with role-specific AI training that is KE-DPA 2019 compliant, donor-aligned, and built around the tools development teams actually use. It represents LMD\'s commitment to not just advising on AI — but building the infrastructure to make responsible AI adoption real across the sector.',
    tags: ['AI', 'Capacity Building', 'Digital Learning', 'KE-DPA', 'NGO', 'East Africa'],
    image: '/images/Evaluation.png',
    externalLink: 'https://www.ai4development.co/',
  },
  // ── 2024 ──────────────────────────────────────────────────────────────────
  {
    id: 'aea-midterm-review',
    category: 'M&E',
    client: 'Association of Evangelicals in Africa (AEA)',
    year: '2024',
    duration: '2 months',
    location: 'Pan-Africa',
    title: 'AEA Strategic Plan Mid-Term Review',
    excerpt: 'An independent mid-term review of AEA\'s 2020–2024 Strategic Plan to assess achievement, gather stakeholder insights, and recommend practical priorities.',
    fullContent: [
      {
        type: 'text',
        label: 'Overview',
        title: 'Project Background',
        content: `The Association of Evangelicals in Africa (AEA), a continental umbrella body representing evangelical fellowships and para-church organizations across Africa, needed an independent mid-term review of its 2020–2024 Strategic Plan. The purpose was to assess what had been achieved so far, identify gaps, gather stakeholder insights, and recommend practical priorities for the remaining implementation period.`
      },
      {
        type: 'text',
        label: 'The Challenge',
        title: 'What the client wanted',
        content: `AEA needed a review process that would do more than just report progress. They wanted to understand whether the strategy was still relevant in a changing context shaped by leadership transition, post-COVID shifts, regional conflict, and economic pressures. They also needed clear recommendations on how to strengthen implementation, improve stakeholder ownership, and ensure institutional sustainability.`
      },
      {
        type: 'image',
        src: '/images/Evaluation.png',
        alt: 'Strategic Review Workshop',
        caption: 'Facilitating stakeholder consultation sessions'
      },
      {
        type: 'text',
        label: 'Our Approach',
        title: 'How we worked',
        content: `We designed a participatory mixed-methods evaluation that prioritized continental representation. Our work included:
        • Comprehensive desk review of strategic documents and progress reports.
        • Online surveys distributed to National Evangelical Fellowships (NEFs) across the continent.
        • Key Informant Interviews (KIIs) with AEA leadership, board members, and commissions.
        • Focus Group Discussions (FGDs) with youth and women representatives.
        • A SWOT and PESTEL analysis to map the current operating environment.
        • A sense-making workshop to validate preliminary findings with the AEA executive team.`
      },
      {
        type: 'image',
        src: '/images/Baseline 1.png',
        alt: 'Data Analysis results',
        caption: 'Synthesizing stakeholder insights across 40+ countries'
      },
      {
        type: 'text',
        label: 'Findings',
        title: 'Key findings',
        content: `The review highlighted significant progress in humanitarian advocacy and leadership development. However, it also identified a need for more robust internal communication and stronger resource mobilization strategies to sustain the plan's ambitious goals.`
      }
    ],
    impact: 'The final review provided a practical evidence base for defining priorities in the remaining strategy phase. It produced a clear roadmap for strengthening governance, advocacy, and institutional development, helping the client move from broad ambition to sharp organizational focus. (Assignment led by Sarah Ngondi Kaia.)',
    tags: ['Strategic Review', 'Mid-Term Evaluation', 'Stakeholder Consultation', 'M&E'],
    image: '/images/Evaluation.png',
  },
  {
    id: 'reado-somalia-communications',
    category: 'Communications',
    client: 'READO (Rural Education and Agriculture Development Organization)',
    year: '2024',
    duration: 'Ongoing',
    location: 'Somalia',
    title: 'READO Somalia Communications and Visibility Support',
    excerpt: 'Strategic communications leadership and donor visibility support for a Somali NGO working across health, nutrition, education, WASH, and food security in Southwest Somalia.',
    fullContent: [
      {
        type: 'text',
        label: 'Overview',
        title: 'Communications in a humanitarian context',
        content: `READO (Rural Education and Agriculture Development Organization) is a Somali NGO working across health, nutrition, education, child protection, WASH, and food security in Southwest Somalia. Operating in a highly complex humanitarian context, the organization works with major international partners including Plan International, Welthungerhilfe (WHH), and ECHO.

Within this environment, strong communications is not a side function. It is part of how the organization builds credibility, meets donor requirements, and presents itself as a reliable implementation partner.`
      },
      {
        type: 'text',
        label: 'What the client needed',
        title: 'Strategic communications leadership',
        content: `READO needed communications leadership that could go beyond content production and support the organization at a more strategic level. This included managing brand assets, coordinating donor visibility, supporting high-stakes documentation, responding quickly to partner requests, and ensuring the organization was represented professionally across external engagements.

In practice, the role required working across programmes, partnerships, operations, and field teams to keep communications aligned with organizational and donor expectations.`
      },
      {
        type: 'image',
        src: '/images/Evaluation.png',
        alt: 'Humanitarian communications in the field',
        caption: 'Embedding communications into programme delivery across Southwest Somalia'
      },
      {
        type: 'text',
        label: 'What we did',
        title: 'Core areas of communications support',
        content: `The engagement covered several interconnected areas:

• Brand management and organizational representation — READO's brand assets were managed and deployed across external engagements, including supplying high-resolution logos for a joint Anticipatory Action Plan prepared for the Anticipation Hub by Plan International Germany.
• Visibility and field branding coordination — Communications support extended into field visibility for health facilities and mobile teams in Baidoa, including Kulmis Health Center and Buulijimac Health Facility.
• Donor visibility and compliance support — Under READO's ECHO-funded humanitarian project with Plan International, communications and visibility requirements were integrated from project inception rather than treated as an afterthought.
• Project documentation and publication support — Including READO's Anticipatory Action Programme with Plan International and Welthungerhilfe, which was recommended for professional layout and published on the Anticipation Hub and ReliefWeb.
• Rapid-response communications — During a Crisis Modifier activation in Baidoa, communications support contributed to the production of a Multi-cluster/Sectoral Initial Rapid Needs Assessment (MIRA) report, drawing direct praise from senior leadership.`
      },
      {
        type: 'image',
        src: '/images/Baseline 1.png',
        alt: 'Donor visibility and field branding coordination',
        caption: 'Supporting brand compliance and partner publication workflows'
      },
      {
        type: 'text',
        label: 'Key results',
        title: 'Tangible outcomes',
        content: `• Support to a €1.25 million ECHO-funded project implemented with Plan International, with communications integrated from project inception.
• Official representation in multi-stakeholder publication processes — including provision of high-resolution brand assets for partner-led publication and submission to the Anticipation Hub.
• Improved field visibility for health facilities and mobile teams in Baidoa.
• Rapid turnaround support for crisis reporting, helping reinforce READO's image as an agile and responsive implementing partner.`
      }
    ],
    impact: 'The value of this work was not just in creating materials. It was in helping READO present itself as organized, responsive, and donor-ready across multiple touchpoints. In a humanitarian setting where partner trust and institutional perception matter enormously, communications played a direct role in reinforcing organizational credibility. (Delivered by Benson Wanjama as Lead Communications Consultant for READO Somalia.)',
    tags: ['Communications', 'Donor Visibility', 'Humanitarian', 'Brand Management', 'Somalia'],
    image: '/images/Evaluation.png',
  },
  {
    id: 'mother-esther-baseline',
    category: 'Research',
    client: 'Mother Esther Project (PCEA)',
    year: '2024',
    duration: '6 weeks',
    location: 'Kajiado West, Kenya',
    title: 'Baseline Needs Assessment — Mother Esther Project',
    excerpt: 'A community-centred mixed-methods baseline needs assessment to understand the realities facing girls, women, and vulnerable households in Kajiado West, guiding a PCEA-supported rescue and education initiative.',
    fullContent: [
      {
        type: 'text',
        label: 'Overview',
        title: 'Evidence for girls\' empowerment programming',
        content: `Mother Esther Project, a PCEA-supported girls' rescue and education initiative in Kajiado West, needed a baseline needs assessment to understand the realities facing girls, women, and vulnerable households in its target communities. The purpose was to generate evidence that could guide programme design, strengthen safeguarding interventions, and help the organization respond more effectively to issues affecting the Maasai community — especially girls at risk.`
      },
      {
        type: 'text',
        label: 'What the client needed',
        title: 'Structured evidence from the field',
        content: `Mother Esther Project needed more than anecdotal understanding of the community. The organization wanted a structured assessment that could establish the baseline situation across key issues including child marriage, FGM, teenage pregnancy, women's economic opportunities, gender inequality, disability inclusion, and other significant community needs. The findings were intended to shape future interventions and provide a credible starting point for measuring change over time.`
      },
      {
        type: 'image',
        src: '/images/Baseline 1.png',
        alt: 'Community field assessment in Kajiado West',
        caption: 'Reaching households across Elangata Wuas, Shompole, and Oloika'
      },
      {
        type: 'text',
        label: 'Our Approach',
        title: 'Community-centred mixed methods',
        content: `We approached the assignment as a community-centred mixed-methods assessment. The aim was not only to collect statistics, but also to understand the deeper cultural, social, and economic drivers behind the issues affecting girls and families in Kajiado West.

The study combined quantitative household surveys with qualitative inquiry through key informant interviews and focus group discussions covering three target locations: Elangata Wuas, Shompole, and Oloika.`
      },
      {
        type: 'text',
        label: 'What we did',
        title: 'Research design and field execution',
        content: `The assignment included development of data collection tools, field planning, enumerator training, digital data collection using Kobo, qualitative interviews, analysis, and final reporting. The team conducted:

• Household surveys across the three target villages
• 20 Key informant interviews with chiefs, education officers, children's officers, faith leaders, school leadership, and other local actors
• 8 Focus group discussions with men, women, teen mothers, and teaching staff

The methodology included data quality controls, informed consent procedures, and a full audit trail to support the integrity of the assessment.`
      },
      {
        type: 'image',
        src: '/images/Evaluation.png',
        alt: 'Data analysis and synthesis for community assessment',
        caption: 'Translating community findings into actionable programme recommendations'
      },
      {
        type: 'text',
        label: 'Key Findings',
        title: 'What the evidence showed',
        content: `The assessment found that harmful practices affecting girls remained deeply rooted despite awareness of their negative effects and despite the existence of laws prohibiting them:

• 194 households reached across the three target communities (out of a target of 199)
• 59.8% of respondents had no formal education — a major structural barrier to empowerment
• Mean age of marriage: 21.5 years; mean age of first pregnancy: 19.7 years; youngest reported age of pregnancy: 10 years
• 18% of households reported having a person with disability, with mobility-related disability most commonly reported
• Men were significantly more likely to engage in economic activity than women, showing clear gender gaps in livelihoods
• FGM was perceived to be decreasing but was still being practiced in secrecy`
      },
      {
        type: 'text',
        label: 'Results',
        title: 'A stronger foundation for programming',
        content: `The final output gave Mother Esther Project a strong evidence base for future programming. The report provided actionable direction in areas such as:

• Awareness and sensitization on FGM, child marriage, and teenage pregnancy
• Stronger engagement of men and community leaders
• Livelihood and savings interventions for women and households
• Education access and rescue infrastructure
• Disability inclusion
• Closer coordination with county and national government actors`
      }
    ],
    impact: 'This work helped Mother Esther Project move from a mission-driven response to a more evidence-led approach to community programming. Instead of relying only on observed cases, the organization gained a clearer picture of the scale, drivers, and interconnected nature of the issues affecting girls and vulnerable households. The findings created a stronger foundation for designing interventions that are protective, relevant, and grounded in local realities.',
    tags: ['Baseline Assessment', 'Gender', 'Safeguarding', 'FGM', 'Mixed Methods', 'Kenya'],
    image: '/images/Baseline 1.png',
  },
  // ── 2023 ──────────────────────────────────────────────────────────────────
  {
    id: 'lba-gender-assessment',
    category: 'Research',
    client: 'La Banque Agricole (LBA)',
    year: '2023',
    duration: '6 weeks',
    location: 'Senegal',
    title: 'Gender Assessment for Green Climate Fund Submission',
    excerpt: 'A strategic gender research and advisory engagement supporting climate-smart agriculture programme preparation and Green Climate Fund documentation for La Banque Agricole in Senegal.',
    fullContent: [
      {
        type: 'text',
        label: 'Overview',
        title: 'Climate finance meets gender research',
        content: `La Banque Agricole (LBA), under the Green Climate Finance Facility for fostering Climate-Smart Agriculture in Senegal, required a comprehensive gender assessment to support programme design and strengthen the gender responsiveness of documentation being prepared for submission to the Green Climate Fund (GCF). The assignment was research-intensive and strategic in nature.`
      },
      {
        type: 'text',
        label: 'What the client wanted',
        title: 'More than a compliance section',
        content: `LBA needed a gender assessment that could provide a credible evidence base for a climate-smart agriculture financing programme, identify the structural barriers affecting women's participation and benefit, and recommend practical ways to integrate gender into programme design, implementation, and monitoring. The assessment also needed to reflect institutional realities, national policy frameworks, and sector-specific constraints in agriculture and finance.`
      },
      {
        type: 'image',
        src: '/images/work/lba-gcf-1.webp',
        alt: 'Women working together in a smallholder vegetable field in rural Senegal',
        caption: 'Women do much of the work in Senegalese agriculture while men control 93.6% of cultivated land'
      },
      {
        type: 'text',
        label: 'Our Approach',
        title: 'Gender as a strategic programme lens',
        content: `We approached the assignment as a strategic gender research and programme advisory engagement. Rather than treating gender as a compliance section, the work was developed to support stronger programme framing and more credible inclusion of gender considerations in a climate finance context.

The methodology relied on an extensive literature and document review covering gender, climate change, agriculture, finance, policy, and institutional practice in Senegal. It also examined LBA's own gender-related actions and relevant previous assessments.`
      },
      {
        type: 'text',
        label: 'What We Delivered',
        title: 'A full gender assessment report',
        content: `The report examined:
• The broader gender situation in Senegal
• Key national and international legal and policy frameworks
• Barriers affecting women in agriculture, finance, education, health, and decision-making
• Institutional considerations relevant to LBA
• Prior studies and assessments related to gender in Senegal
• Recommended strategies for integrating gender into the proposed climate-smart agriculture programme

The report also outlined practical approaches for gender-responsive funding allocation, women-focused capacity building, financial inclusion, inclusive governance, and M&E with a gender lens.`
      },
      {
        type: 'image',
        src: '/images/work/lba-gcf-2.webp',
        alt: 'Analysts reviewing gender and agriculture data, draft report pages and a regional map of Senegal',
        caption: 'Literature, policy and institutional review turned into recommendations LBA could act on'
      },
      {
        type: 'text',
        label: 'Key Findings',
        title: 'What the data showed',
        content: `Women in Senegal play a major role in agriculture and food production but remain constrained by structural inequalities:

• Men control 93.6% of cultivated land — a major structural barrier in productive agriculture.
• Agriculture accounts for ~17% of GDP and employs around 70% of the population, making gender disparities highly significant for climate resilience outcomes.
• The assessment confirmed that gender inclusion in climate-smart agriculture cannot be treated as an add-on — it has to be built into programme design, financing mechanisms, institutional arrangements, and performance tracking.`
      },
      {
        type: 'text',
        label: 'Results',
        title: 'What was delivered',
        content: `The final output provided LBA with a structured, evidence-based gender assessment supporting stronger programme preparation and more credible integration of gender considerations for GCF processes.

Core outputs:
• A comprehensive gender assessment report tailored to climate-smart agriculture and finance in Senegal
• Cross-sector analysis linking gender inequality to agriculture, climate vulnerability, finance, and public policy
• Actionable recommendations for programme design, implementation, and monitoring
• Institutional insight relevant to LBA's role in supporting women's access to agricultural finance`
      }
    ],
    impact: 'This work strengthened the gender foundation of a proposed climate finance intervention — ensuring the programme could be informed by real structural constraints rather than generic inclusion statements. It positioned gender as central to resilience, access, productivity, and finance. Fine print: Sarah was contracted by ESF Consultants to prepare this assessment for LBA as part of GCF documentation. (Delivered by Sarah Ngondi Kaia and Benson Wanjama.)',
    tags: ['Gender Assessment', 'Climate Finance', 'Research', 'GCF', 'Agriculture'],
    image: '/images/work/lba-gcf-1.webp',
  },
  // ── 2018 ──────────────────────────────────────────────────────────────────
  {
    id: 'secplus-brand-identity',
    category: 'Communications',
    client: 'Secplus Consulting',
    year: '2018',
    duration: '4 months',
    location: 'Kenya',
    title: 'Brand Identity Development for Secplus Consulting',
    excerpt: 'Full brand identity developed from scratch for a Nairobi-based governance and compliance advisory firm — covering profile, letterhead, business cards, email signatures, and complimentary slips.',
    fullContent: [
      {
        type: 'text',
        label: 'Background',
        title: 'A compliance firm with a blank slate',
        content: `Secplus Consulting is a Nairobi-based governance, compliance, and advisory firm founded by Ken Martin Gitari, a seasoned company secretarial and compliance professional. The firm was built on a deliberate philosophy: to provide personalised, customised governance and compliance support in an industry that had defaulted to a one-size-fits-all approach.

As the firm was newly registered and preparing to formally engage clients, Ken reached out to Benson Wanjama at LMD Print & Design to develop a complete brand identity from the ground up.`
      },
      {
        type: 'text',
        label: 'The Brief',
        title: 'What the client needed',
        content: `The client's initial brief was clear in ambition but open in execution: "I need to build an entire brand out of this — this is where you come in." Alongside the firm's business registration certificate and a preliminary logo concept document, Ken outlined the core requirements: a company profile, business cards, and shareable communications assets. The engagement grew to encompass a full suite of branded materials.`
      },
      {
        type: 'image',
        src: '/images/work/secplus-1.webp',
        alt: 'The Secplus Consulting logo printed in white on a navy company profile cover',
        caption: 'The mark: a soft lowercase wordmark with the plus lifted out as its own counter'
      },
      {
        type: 'text',
        label: 'The Challenge',
        title: 'Design constraints and strategic complexity',
        content: `The project presented several interlocking challenges:

• Brand positioning in a trust-based industry — governance and compliance is a sector where credibility is signalled visually before a word is read. The brand had to communicate precision, expertise, and trustworthiness at first glance.
• Building from scratch with limited assets — no physical address, no finalised staff designations, and only a nascent logo concept to start with.
• Functional usability requirements — the letterhead needed to be usable in soft/digital format so Ken could type, e-sign, and send client communications without printing. The email signature needed to be embeddable directly into email clients.
• Scalability for a growing team — mid-project, a new partner (Louisiana Kayika) was added, requiring the brand system to be extended seamlessly.`
      },
      {
        type: 'text',
        label: 'What Was Delivered',
        title: 'The full brand suite',
        content: `The project delivered a complete branded communications toolkit:

• Company Profile — a designed document communicating the firm's vision, mission, services, and leadership credentials, revised through iterative rounds of tracked-changes feedback.
• Letterhead (Print & Digital) — a professionally designed A4 letterhead in both print-ready PDF and functional editable soft copy, enabling the client to draft and send branded communications digitally.
• Business Cards — double-sided cards for both the founding Lead Consultant and the incoming partner, using the established brand template.
• Email Signature — a branded HTML-compatible email signature developed for both team members, embeddable directly into email clients.
• Complimentary Slip — completing the full physical stationery suite.
• Brand Extension — when Louisiana Kayika joined in November 2018, her matching email signature and business card were delivered without rebuilding the visual system.`
      },
      {
        type: 'image',
        src: '/images/work/secplus-2.webp',
        alt: 'Double-sided Secplus business cards laid out in navy and white',
        caption: 'Double-sided cards for the Lead Consultant, built on a template the incoming partner reused'
      },
      {
        type: 'image',
        src: '/images/work/secplus-3.webp',
        alt: 'The Secplus logo shown in its positive and reversed versions, on white and on navy',
        caption: 'Positive and reversed lock-ups, so the mark holds on print, digital and stationery'
      },
      {
        type: 'text',
        label: 'Results',
        title: 'Key outcomes',
        content: `Secplus launched with a complete, professional communications toolkit in place. The project demonstrated that a governance firm's brand can be built quickly, cost-effectively, and with enough flexibility to scale. Importantly, the quality of the branding work led directly to a second mandate: the client engaged LMD for company secretarial services just one month later — formalised through an Engagement Letter in September 2018.`
      }
    ],
    impact: 'Full brand identity established from scratch. Functional digital workflows enabled through an editable letterhead and embeddable email signature. The brand scaled seamlessly when a second partner joined within months. The trust built through branding converted directly into a broader retainer engagement. (Delivered by Benson Wanjama.)',
    tags: ['Brand Identity', 'Corporate Communications', 'Design', 'Print'],
    image: '/images/work/secplus-1.webp',
  },
];

// ─── TICKER ITEMS ──────────────────────────────────────────────────────────────────
export const tickerItems = [
  { type: 'client', label: 'UNICEF' },
  { type: 'service', label: 'Monitoring, Evaluation & Learning' },
  { type: 'client', label: 'FAO' },
  { type: 'service', label: 'Donor-Grade Communications' },
  { type: 'client', label: 'WFP' },
  { type: 'service', label: 'Baselines & Endlines' },
  { type: 'client', label: 'IOM' },
  { type: 'service', label: 'Contribution Analysis' },
  { type: 'client', label: 'UNFPA' },
  { type: 'service', label: 'Annual Reports' },
  { type: 'client', label: 'USAID' },
  { type: 'service', label: 'Policy Briefs' },
  { type: 'client', label: 'GIZ' },
  { type: 'client', label: 'SIDA' },
  { type: 'client', label: 'UKAID' },
  { type: 'client', label: 'AFDB' },
  { type: 'client', label: 'CBI' },
  { type: 'client', label: 'NIRAS Africa' },
  { type: 'client', label: 'READO Somalia' },
  { type: 'client', label: 'ACWICT' },
  { type: 'client', label: 'AEA' },
  { type: 'client', label: 'STS International Solidarity' },
];

// ─── PACKAGES ──────────────────────────────────────────────────────────────────
export const packages = [
  {
    id: 'foundation',
    icon: 'Box',
    title: 'Foundation',
    description: 'Essential M&E and communications support for smaller programmes and project phases.',
    timeline: '2–4 week delivery',
    featured: false,
    features: [
      'Results Framework or MEAL Plan',
      'Indicator Development & Tracking Sheet',
      'One Knowledge Product (brief or report)',
      'Data Collection Tool Design',
      'Up to 3 revision rounds',
    ],
  },
  {
    id: 'catalyst',
    icon: 'Flame',
    title: 'Catalyst',
    description: 'Comprehensive M&E, communications, and analytics support for mid-size programmes.',
    timeline: '4–8 week delivery',
    featured: true,
    features: [
      'Full MEAL Plan & Results Framework',
      'Baseline or Evaluation Study',
      'Digital Data Collection System',
      'Three Knowledge Products',
      'Staff Capacity Building Session',
      'Dashboard Setup (PowerBI or equivalent)',
      'Donor Reporting Support',
    ],
  },
  {
    id: 'transform',
    icon: 'Globe',
    title: 'Transform',
    description: 'Full-service strategic partnership for multi-programme organisations and institutional donors.',
    timeline: 'Ongoing partnership',
    featured: false,
    features: [
      'Embedded MEAL & Comms Capacity',
      'Quarterly Evaluation & Reporting',
      'Digital MIS Design & Management',
      'Full Communications Strategy',
      'Research & Analytics on Demand',
      'Knowledge Management System',
      'Board-Level Reporting Support',
      'Priority Access & Dedicated Team',
    ],
  },
];

// ─── STATS ──────────────────────────────────────────────────────────────────
export const stats = [
  { number: '40', suffix: '+', label: 'Combined Years' },
  { number: '5', suffix: '', label: 'Countries' },
  { number: '3', suffix: '', label: 'Core Services' },
];

// ─── CONTACT SUBJECTS ──────────────────────────────────────────────────────
export const contactSubjects = [
  'Monitoring, Evaluation & Learning',
  'Donor-Grade Communications, Design & Digital',
  'Both — an integrated engagement',
  'Careers / Associate Enquiry',
  'General Enquiry',
];

// ─── ROTATING HERO WORDS ────────────────────────────────────────────────────
// These fill the slot in "We ___ development work in the Horn of Africa."
// Keep them verbs describing what we actually do — not claims about what it
// does for the client. The work makes that case on its own.
export const heroWords = [
  'evaluate',
  'measure',
  'document',
  'map',
  'strengthen',
];

// ─── MAPPED INSIGHTS ───────────────────────────────────────────────────────────
// ✏️ TO UPDATE: Add or edit insights here. Each insight has:
//   id          – URL-friendly slug (no spaces, use hyphens)
//   title       – Headline of the insight
//   date        – Publication date string
//   region      – Geographic focus area
//   mapEmbed    – (optional) iframe src URL for an embedded map, or leave empty ''
//   mapImage    – (optional) path to a static map image, e.g. '/images/athi-flood-map.png'
//   summary     – One-paragraph plain-language explanation of what happened
//   insights    – Array of exactly 3 bullet-point strings (key insights)
//   implications – (optional) Short paragraph on implications, or leave empty ''
//   reportUrl   – (optional) link to a full research paper in V2/public, e.g. '/research/paper.html'
//   reportNote  – (optional) one line describing that paper

export const mappedInsights = [
  {
    id: 'athi-river-flooding-2024',
    title: 'Will Athi River Flood Again? The 2024 Disaster and the 2026 El Niño',
    date: 'September 2026',
    region: 'Mavoko, Machakos County, Kenya',
    mapImage: '/research/athi-river-flood-2026/cover.png',
    mapEmbed: '',
    summary:
      "Before dawn on 24 April 2024 the Athi River broke its banks and flooded Kwa Mang'eli, Graceland Estate, Kicheko, Kasuitu and neighbouring settlements in Mavoko. Around 2,000 residents of Athi River sub-county were displaced, two people died and rescue teams used boats to reach families on rooftops. Two and a half years later, a very strong El Niño is building and Kenya's forecasters expect an unusually wet October to December 2026. This desk review of 30+ sources asks whether Athi River could flood again, and whether anything has changed to prevent it.",
    insights: [
      "The 2026 hazard is real and near: NOAA gives a greater than 90% chance of a very strong El Niño, and ICPAC and KMSA both forecast above-normal short rains, with Nairobi, Machakos and Kajiado named.",
      "The flood comes from upstream. The river drains the Ngong Hills and Kajiado North, falling roughly 470 m to the town, while Mavoko's built-up area rose from 24.6% to 37.0% between 1989 and 2018 and more of its rain now becomes runoff.",
      "The vulnerabilities were still active in 2026: floods hit Githunguri, Syokimau, Mlolongo, 360 Estate and Kicheko in April and May 2026, and we found no public evidence that river-corridor flood protection for the 2024 hotspots has been completed.",
    ],
    implications:
      "A damaging flood during the 2026 short rains is plausible and the risk is elevated, but not certain. The most likely outcome is repeated local flooding, with a serious chance of a 2024-scale river flood if an extreme overnight storm hits the upper catchment. County authorities should publish the status of drainage and riparian works, pre-position rescue capacity in the 2024 hotspots, and set up an upstream-to-downstream warning so residents are not relying on a whistle again.",
  },
  {
    id: 'drought-northern-kenya',
    title: 'Why Drought Persists in Northern Kenya',
    date: 'October 2024',
    region: 'Turkana, Marsabit & Mandera Counties, Kenya',
    mapImage: '/images/Evaluation.png',   // replace with actual map image
    mapEmbed: '',
    summary:
      'Northern Kenya has experienced near-continuous drought conditions since 2020. While short rainfall seasons have occasionally improved vegetation cover temporarily, structural drivers — degraded rangelands, groundwater depletion, and conflict-disrupted pastoral mobility — keep communities in a persistent state of food insecurity. This analysis maps the spatial overlap between drought severity, population density, and existing humanitarian response coverage.',
    insights: [
      'Turkana County recorded below-average rainfall in 14 of the last 18 seasonal rainfall periods, pointing to a structural rather than cyclical drought pattern.',
      'Rangeland degradation — visible in NDVI satellite data — has reduced carrying capacity by an estimated 30%, compressing the livelihood base of pastoral communities.',
      'Water point mapping shows that 62% of boreholes in Marsabit North sub-county are non-functional or seasonal, creating dependency on trucked water at 5x the per-litre cost of piped supply.',
    ],
    implications:
      'Drought response in Northern Kenya must move beyond emergency food transfers toward investments in permanent water infrastructure, rangeland rehabilitation, and climate-adaptive livelihood diversification. Spatial data can help prioritise where permanent infrastructure will have the highest impact per shilling invested.',
  },
  {
    id: 'aid-coverage-gaps',
    title: 'Where Aid Is Missing in the Horn of Africa',
    date: 'September 2024',
    region: 'Horn of Africa',
    mapImage: '/images/Unicef Booklet.png',   // replace with actual map image
    mapEmbed: '',
    summary:
      'Using 3W (Who does What Where) data from humanitarian information portals, this analysis maps the spatial distribution of active humanitarian programming against population need indicators in the Horn of Africa. The gaps are striking: areas with high vulnerability scores and low programme density often sit at the intersection of insecurity, administrative complexity, and donor risk aversion — not actual inaccessibility.',
    insights: [
      'Sub-districts in the Jubbaland/Hiiraan border corridor in Somalia score in the top quartile for humanitarian need but appear in fewer than 5% of active programme footprints.',
      "In South Sudan's Greater Equatoria region, recent programme withdrawals following security incidents left an estimated 180,000 people without active service providers for WASH and health.",
      'Cross-referencing population displacement data with programme locations reveals that the majority of newly displaced people in 2024 were located outside existing programme catchment areas at the point of displacement.',
    ],
    implications:
      'Coverage gap analysis is only useful if it translates into coordination action. Mapping unmet need is not the same as reaching it — but it is a necessary first step for advocacy, resource allocation decisions, and the design of flexible, rapid-response programme modalities.',
  },
];
