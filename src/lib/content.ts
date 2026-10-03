// Rich, niche-accurate content blocks + centralized COPY for Quick Work Comp.

import {
  PhoneCall, FileSearch, FileSignature, Zap, CreditCard, FileCheck,
  HardHat, Building2, FileText, ShieldCheck,
} from "lucide-react";

/* ============================================================
   COPY — centralized display strings consumed by components/pages.
   ============================================================ */
export const COPY = {
  hero: {
    headline: "Workers' Comp Coverage in 15 Minutes",
    subheadline: "Same-day workers' comp quotes and certificates for contractors — pay-as-you-go, ghost policies, annual policies, and same-day COIs. All trades. All 50 states.",
    heroCta: "Get a Same-Day Quote",
    heroCtaSecondary: "Call 844-967-5247",
    h1Lead: "Workers' comp coverage",
    h1Highlight: "in 15 minutes",
    subcopy: "Same-day workers' comp quotes and certificates for contractors — pay-as-you-go, ghost policies, annual policies, and same-day COIs. All trades. All 50 states.",
    statValue: "1,000+",
    statLabel: "Contractors covered — roofers, framers, plumbers, electricians, and general contractors",
    imageAlt: "Contractor receiving same-day workers comp certificate on a smartphone at a job site",
  },
  nav: { ariaLabel: "Quick Work Comp home" },
  footer: {
    ctaTitle: "Need workers' comp today?",
    ctaSubcopy: "15-minute quotes. Same-day certificates. Workers' comp for contractors in all 50 states.",
    description:
      "Same-day workers' compensation quotes and certificates for contractors — pay-as-you-go WC, ghost policies, PEO alternatives, and standard annual policies. A division of Contractors Choice Agency — founded 2005, licensed all 50 states.",
  },
  servicesGrid: {
    h2Lead: "Coverage built specifically for",
    h2Highlight: "contractors",
    lead: "Whether you need a ghost policy, pay-as-you-go WC, or a standard annual policy with a same-day certificate — we get it done fast.",
  },
  why: {
    eyebrow: "Why contractors choose us",
    h2Lead: "The workers' comp agency built for",
    h2Highlight: "contractor speed",
    lead: "Most agencies take days. We quote, bind, and issue certificates the same day. Here's what makes us different.",
    sidebarTitle: "Run by people who know the trades",
    sidebarBody:
      "Contractors Choice Agency was founded in 2005 by Josh Cotner, who came from the contractor world. We've placed workers' comp for roofers, framers, plumbers, electricians, and general contractors for over 20 years.",
  },
  coverage: {
    eyebrow: "Where we write",
    h2Lead: "Contractor WC coverage.",
    h2Highlight: "All 50 states.",
    lead: "From Texas and Florida to California and Ohio, Contractors Choice Agency writes workers' comp for contractors in every state.",
    imageAlt: "Contractor receiving workers comp certificate at a construction job site — national coverage",
    badgeTitle: "National coverage for contractors.",
    badgeSub: "Writing contractor WC programs in all 50 states since 2005.",
  },
  process: {
    lead: "No two-week wait. Tell us about your trade and payroll, we shop the market, and you get a quote and certificate the same day.",
  },
  finalCta: {
    h2Lead: "Get Your Workers' Comp",
    h2Highlight: "quote and certificate today.",
    lead: "Whether you need a ghost policy in 20 minutes or a full annual policy with pay-as-you-go — one call gets you quotes from top-rated carriers. Same-day certificates guaranteed.",
  },
  ctaBand: {
    defaultTitle: "Need workers' comp today?",
    defaultDescription:
      "Get a same-day workers' comp quote from specialists who understand the contractor market — ghost policies, pay-as-you-go, annual policies, and same-day COIs.",
  },
  faq: {
    defaultTitleLead: "Workers' comp for contractors,",
    defaultTitleHighlight: "answered",
  },
  servicesPage: {
    metaTitle: "Workers' Comp Services for Contractors | Quick Work Comp",
    metaDescription:
      "Eight workers' comp solutions for contractors: same-day quotes, pay-as-you-go, ghost policies, COIs, PEO alternatives, annual policies, and audit defense. Licensed all 50 states.",
    h1Lead: "Workers' comp solutions built for",
    h1Highlight: "contractors",
    lead: "Every service below addresses a specific need contractors face — from a ghost policy to satisfy a GC requirement to a full pay-as-you-go program for a growing crew.",
    ogTitle: "Workers' Comp for Contractors | Contractors Choice Agency",
    ogDescription:
      "Same-day WC quotes, pay-as-you-go, ghost policies, COIs, PEO alternatives, annual policies, and audit defense — built for contractors.",
    ctaTitle: "Not sure which program you need?",
    ctaDescription:
      "Call us and describe your situation. We'll tell you exactly which coverage option fits your trade, crew size, and certificate timeline.",
  },
  blogPage: {
    metaTitle: "Workers' Comp Blog for Contractors | Quick Work Comp",
    metaDescription:
      "Practical workers' comp guidance for contractors: ghost policies, pay-as-you-go, class codes, certificates of insurance, audit defense, and same-day coverage.",
    h1Lead: "Workers' comp for contractors,",
    h1Highlight: "decoded",
    lead: "Plain-English guides on workers' comp for contractors — ghost policies, pay-as-you-go, certificates of insurance, class codes, and how to get covered the same day you need it.",
    ogTitle: "Workers' Comp Blog for Contractors | Contractors Choice Agency",
    ogDescription:
      "Practical workers' comp guidance for contractors: ghost policies, pay-as-you-go, class codes, certificates of insurance, audit defense, and same-day coverage.",
  },
  serviceDetail: {
    h1Suffix: "for contractors",
    imageAltSuffix: "contractor workers compensation",
    category: "Workers' Compensation Insurance",
  },
  about: {
    metaTitle: "About Quick Work Comp | Contractors Choice Agency",
    metaDescription:
      "Quick Work Comp is the contractor-focused workers' comp division of Contractors Choice Agency, founded in 2005. Same-day quotes, ghost policies, pay-as-you-go WC, and instant COIs for contractors. Licensed all 50 states.",
    h1Lead: "Built for contractors who need",
    h1Highlight: "coverage today",
    lead: "Quick Work Comp is the contractor-focused workers' comp division of Contractors Choice Agency — founded in 2005 by Josh Cotner, who knows exactly what happens when a contractor loses a job because they couldn't get a COI in time.",
    imageAlt: "An insurance agent ready to issue same-day workers comp for contractors",
    storyEyebrow: "Our story",
    storyTitle: "From the jobsite to the agency.",
    storyLead:
      "Josh Cotner ran equipment, read specs, and filed certificates before founding CCA in 2005. That background is why we understand what's at stake when a contractor needs workers' comp today — not next week.",
    valuesTitle: "Four things we won't compromise on.",
    timeline: [
      { year: "2005", title: "Contractors Choice Agency founded", desc: "Josh Cotner opens CCA in Chandler, AZ, after years working in the trades — built to insure contractors the right way." },
      { year: "15 yrs", title: "Expanded to specialty contractor markets", desc: "After placing programs for dozens of contractor categories, CCA develops deep expertise in fast-turnaround workers' comp for all trades." },
      { year: "Today", title: "Quick Work Comp division launched", desc: "Quick Work Comp focuses CCA's expertise on same-day workers' comp — the one thing contractors need most when a GC requires a COI." },
    ],
    values: [
      { icon: "HardHat", title: "Contractor-first, always", desc: "Josh spent years in the trades before starting the agency. We understand what it means to lose a job because coverage wasn't in place." },
      { icon: "ShieldCheck", title: "Speed without shortcuts", desc: "Same-day means same-day — not 'we'll try.' We've built our process around getting contractors covered before end of business." },
      { icon: "Award", title: "A-rated markets only", desc: "We shop carriers with the financial strength and contractor experience to be there when a claim happens." },
      { icon: "Handshake", title: "Honest, no-pressure advice", desc: "If a ghost policy isn't right for your situation, we'll tell you. We earn trust by being straight about what you actually need." },
    ],
  },
  quote: {
    h1Lead: "Get your",
    h1Highlight: "workers' comp quote",
    lead: "Tell us about your trade and payroll. We'll shop top-rated carriers and come back with a quote in about 15 minutes — no obligation.",
    businessPlaceholder: "ABC Roofing LLC",
    emailPlaceholder: "mike@abcroofing.com",
    phonePlaceholder: "(602) 555-0100",
    messagePlaceholder:
      "Trade type, payroll size, number of employees, states where you operate, coverage needed (ghost policy, pay-as-you-go, annual), current insurer, loss history, or anything else that helps us quote accurately…",
    errorMessage: "Something went wrong. Please call us at 844-967-5247 or try again.",
    trustNicheTitle: "Built for contractors",
    trustNicheDesc: "Workers' comp written for contractors — not generic business policies.",
  },
  contact: {
    h1Lead: "Let's talk about your",
    h1Highlight: "workers' comp coverage",
    lead: "Questions, a quote, or an audit dispute — reach a person who knows contractor workers' comp, not a queue.",
    errorMessage: "Something went wrong. Please call us at 844-967-5247.",
  },
  coveragePage: {
    metaTitle: "Contractor Workers' Comp — National Coverage, All 50 States",
    metaDescription:
      "Contractors Choice Agency writes workers' comp for contractors in all 50 states — Texas, Florida, California, Arizona, Georgia, North Carolina, Ohio, Illinois, and everywhere contractors work.",
    h1Lead: "National reach.",
    h1Highlight: "All 50 states, every contractor market.",
    lead: "Contractors Choice Agency places workers' comp for contractors in all 50 states — from Texas and Florida to California and the Pacific Northwest.",
    sectionTitle: "Key contractor markets we serve.",
    nationwideLead:
      "Whether you're a roofer in Texas, a framer in Florida, a plumber in California, or a general contractor in Ohio — one agent, one same-day quote. NPN #8608479.",
    faqs: [
      { q: "Do you write workers' comp for contractors in all states?", a: "Yes. Contractors Choice Agency is licensed in all 50 states and writes workers' comp for contractors anywhere in the country — Texas, Florida, California, Ohio, Georgia, and everywhere in between." },
      { q: "Can you issue a workers' comp certificate across state lines?", a: "Yes. Many contractors work across state lines. We structure programs so your workers' comp covers operations in multiple states and the certificate holders you specify." },
      { q: "Do you understand state-specific WC rules?", a: "Yes. Workers' comp rules vary significantly by state — Texas non-subscriber, California DIR enforcement, Ohio state fund vs. private market. We know the rules in every state we write." },
      { q: "Can you cover a contractor with crews in multiple states?", a: "Yes. If you work in multiple states, we build a program that covers all of them with one coordinated policy and same-day certificate issuance." },
    ],
  },
} as const;

/* ============================================================
   PROCESS
   ============================================================ */
export const PROCESS = [
  { step: "01", icon: PhoneCall, title: "Tell us about your trade", description: "Quick call or form. Trade type, payroll, number of employees, states where you work, and whether you need a ghost policy, pay-as-you-go, or annual coverage." },
  { step: "02", icon: FileSearch, title: "We shop the WC market", description: "We have appointments with multiple carriers and access to real-time rating systems. Most contractor trades quote in under 10 minutes." },
  { step: "03", icon: FileSignature, title: "Approve the quote and bind", description: "You approve the quote, make your first payment, and coverage binds immediately. We issue your ACORD 25 certificate the same day." },
  { step: "04", icon: Zap, title: "Certificate delivered instantly", description: "Your workers' comp certificate is emailed to you and any certificate holders — usually within minutes of binding. Same day, guaranteed." },
] as const;

/* ============================================================
   WHY CHOOSE US
   ============================================================ */
export const WHY_CHOOSE = [
  { icon: Zap, title: "Same-day quotes and certificates", description: "We quote, bind, and issue your ACORD 25 COI the same day — often within 15 minutes. When a GC needs a certificate today, we deliver." },
  { icon: CreditCard, title: "Pay-as-you-go options available", description: "Tie your premium to actual payroll — no large down payment, no audit surprises. Available for most trades with compatible payroll systems." },
  { icon: FileCheck, title: "Ghost policy specialists", description: "Sole proprietors and exempt owner-operators who need a COI without a crew — we place ghost policies same day in most states." },
  { icon: Building2, title: "PEO alternative coverage", description: "Get out of the PEO model and own your workers' comp policy. More control, no co-employment, and better long-term rates." },
  { icon: HardHat, title: "All trades, all experience levels", description: "Roofing, framing, plumbing, electrical, HVAC, drywall — including high-mod and hard-to-place contractors other agencies turn away." },
  { icon: ShieldCheck, title: "Licensed in all 50 states", description: "One agency, all 50 states. Whether you work in Texas, Florida, California, or any other state, we have markets for your trade." },
] as const;

/* ============================================================
   HOMEPAGE FAQ — 20 questions
   ============================================================ */
export const HOME_FAQS = [
  { q: "Can I get workers' comp coverage today?", a: "Yes. For most contractor trades, we can quote, bind, and issue a certificate of insurance the same day you call — often within 15 minutes. Have your trade type, estimated payroll, and business information ready and we'll get started immediately." },
  { q: "What is a ghost policy for workers' comp?", a: "A ghost policy (also called a minimum-premium policy) is a workers' comp policy where the owner is listed but excluded from coverage. It produces a real, legitimate certificate of insurance that general contractors accept — without the cost of full payroll-based coverage. It's designed for sole proprietors with no employees who need a COI to satisfy GC requirements." },
  { q: "How does pay-as-you-go workers' comp work?", a: "Pay-as-you-go workers' comp ties your premium to actual payroll each pay period instead of requiring a large upfront payment based on estimated annual payroll. After each payroll run, your premium is calculated on what you actually paid in wages and debited automatically. It eliminates audit surprises and is easier on cash flow for contractors with variable workloads." },
  { q: "How much does workers' comp cost for a contractor?", a: "Workers' comp rates for contractors vary by trade, state, payroll size, and loss history. Roofing is the most expensive (often $10–$25 per $100 of payroll); electrical and plumbing are moderate ($4–$12). Ghost policies typically cost $800–$2,500 per year. The only way to know your exact rate is to get a quote — which takes about 15 minutes." },
  { q: "Do I need workers' comp if I'm a sole proprietor?", a: "It depends on your state and your work situation. Most states exempt sole proprietors with no employees from mandatory workers' comp — but if a general contractor requires proof of insurance before you can work on their job site, you'll need a ghost policy or a real WC policy. We help sole proprietors figure out the right option for their specific situation." },
  { q: "What's the difference between a ghost policy and a regular workers' comp policy?", a: "A regular workers' comp policy covers your employees for on-the-job injuries. A ghost policy covers no one — the owner is listed on the policy but excluded from benefits. The ghost policy exists solely to produce a certificate of insurance that satisfies GC requirements. If you have actual employees, they need real workers' comp coverage." },
  { q: "How do I get a certificate of insurance same day?", a: "Call us with your business information, trade, and payroll details. We'll get you a quote in about 15 minutes, and once you approve it and make your first payment, coverage binds and we issue your ACORD 25 certificate immediately. The certificate is emailed to you and any certificate holders you specify." },
  { q: "What is an experience mod (EMR) and how does it affect my rate?", a: "Your experience modification rate (EMR or X-mod) compares your actual loss history to the expected losses for your trade and payroll size. An EMR of 1.00 is average. Below 1.00 means lower losses and a discount; above 1.00 means higher losses and a surcharge. A high mod increases your premium. We work with contractors at all mod levels, including high-mod and hard-to-place risks." },
  { q: "Can I get workers' comp with a high experience mod?", a: "Yes. We have access to specialty carriers, surplus lines markets, and state assigned risk plans for contractors with high experience mods. A high mod means higher rates, but it doesn't mean you can't get coverage. Call us and we'll find a market for your situation." },
  { q: "What's the assigned risk plan and should I avoid it?", a: "Every state has an assigned risk pool — a market of last resort where coverage is guaranteed but rates are set by the state (usually higher than the standard market). If the standard market won't write you, assigned risk ensures you can still get coverage. We place contractors in assigned risk when necessary, but always shop the standard market first." },
  { q: "Do I need workers' comp to get a contractor's license?", a: "In many states, yes. States like California require proof of workers' comp as part of the contractor licensing process through the CSLB. We help contractors get the right coverage to meet their licensing board's requirements." },
  { q: "What does a PEO do and why might I want an alternative?", a: "A Professional Employer Organization (PEO) co-employs your workers and places them under the PEO's master workers' comp policy. This can provide access to coverage for high-risk trades, but comes with co-employment, PEO markup on rates, and loss of control over your own WC policy. A PEO alternative is a standalone WC policy in your own name — more control, no markup, and you own your loss history." },
  { q: "What class codes apply to my trade?", a: "Workers' comp class codes vary by trade and state. Common contractor codes include 5551 (roofing), 5645 (framing/carpentry), 5183 (plumbing), 5190 (electrical), 5445 (drywall), 5474 (painting), and 5537 (HVAC). Using the wrong code can mean overpayment or an audit surprise. We verify your class codes as part of the quoting process." },
  { q: "How does a workers' comp audit work?", a: "At the end of your policy year, the carrier audits your actual payroll against the estimate you gave when the policy started. If you paid more in wages than estimated, you owe additional premium. If you paid less, you get a refund. Pay-as-you-go eliminates most audit surprises because the carrier gets real payroll data after each pay period." },
  { q: "Can you help me dispute a workers' comp audit bill?", a: "Yes. Our audit defense service helps contractors review their audit for misclassified employees, incorrectly allocated payroll, missing subcontractor certificates, and other issues that inflate the audit bill. If you've received a large audit bill, call us before you pay it." },
  { q: "Will a general contractor accept a ghost policy COI?", a: "Most do. The ACORD 25 certificate from a ghost policy shows active workers' comp coverage — which is what most GCs require. Occasionally a GC's own insurance carrier will require documentation showing actual employee coverage, but this is uncommon. We can help you evaluate whether a ghost policy will satisfy your specific GC's requirements." },
  { q: "What is a waiver of subrogation and do I need it?", a: "A waiver of subrogation is a workers' comp endorsement that prevents your carrier from seeking reimbursement from the general contractor if a worker is injured and the GC is partly at fault. Many GCs require a waiver of subrogation endorsement on your workers' comp certificate. We add this endorsement same day when required." },
  { q: "How many states do you write workers' comp in?", a: "All 50 states. Contractors Choice Agency is licensed in every state and has markets for contractor workers' comp regardless of your state, trade, or experience level." },
  { q: "How long does it take to get a workers' comp quote?", a: "About 15 minutes for most contractor trades. Have your trade type, estimated annual payroll, number of employees, and states where you work ready when you call. For hard-to-place risks or very large payrolls, we may need a day or two to involve the right markets." },
  { q: "What information do I need to get a quote?", a: "Trade type, business name and FEIN (or SSN for sole props), estimated annual payroll, number of employees, states where you operate, and loss runs from the past 3–5 years if available. Loss runs aren't always required for smaller accounts, but they help us find you the best rate." },
];

/* ============================================================
   GENERAL FAQ — pads service & location pages
   ============================================================ */
export const GENERAL_FAQS = [
  { q: "How much does workers' comp cost for a contractor?", a: "Cost varies by trade, state, payroll size, and loss history. Ghost policies typically run $800–$2,500/year. Standard policies are rated per $100 of payroll at rates that vary by class code. We quote your specific situation in about 15 minutes." },
  { q: "Do you write workers' comp in all 50 states?", a: "Yes. Contractors Choice Agency is licensed in all 50 states and writes workers' comp for contractors anywhere in the country." },
  { q: "How fast can I get a workers' comp quote?", a: "About 15 minutes for most trades. Have your trade type, payroll estimate, and employee count ready. Hard-to-place risks may take a day or two to place with the right markets." },
  { q: "Can you insure contractors who've been declined or have high mods?", a: "Often yes. We have admitted and surplus lines markets for contractors with high experience mods, prior losses, OSHA citations, and other issues standard carriers won't write." },
  { q: "Should I get a ghost policy or a real workers' comp policy?", a: "If you have employees, you need a real policy. If you're a sole proprietor with no employees who simply needs a certificate for a GC, a ghost policy is the right fit. We'll help you figure out which one applies to your situation." },
  { q: "What does an A-rated carrier mean?", a: "A.M. Best ratings reflect a carrier's financial strength. We place coverage with A-rated carriers so you can be confident the policy will pay if a claim happens." },
  { q: "Do you write workers' comp for high-hazard trades like roofing?", a: "Yes. Roofing, demolition, framing, and other high-hazard trades are our specialty. We have markets that write these trades where other agencies can't help." },
  { q: "How does a waiver of subrogation work on workers' comp?", a: "A waiver of subrogation prevents your WC carrier from suing the general contractor after paying a claim. Most GCs require this endorsement. We add it to your certificate same day." },
  { q: "What information do I need to get a quote?", a: "Trade type, payroll estimate, employee count, states where you work, and any loss history. More detail means a more accurate quote, but we can start with the basics." },
  { q: "Can I get workers' comp for a single short-term project?", a: "Yes. Short-term or project-based workers' comp policies are available for contractors who need coverage for a specific job rather than a full year. Call us and describe your project." },
  { q: "What's the difference between pay-as-you-go and a lump-sum annual policy?", a: "A lump-sum policy requires a large down payment at the start of the year. Pay-as-you-go spreads your premium across each payroll cycle based on actual wages. PAYG is better for contractors with variable workloads; lump-sum is simpler for stable payrolls." },
  { q: "How do subcontractors affect my workers' comp audit?", a: "If your subcontractors can't provide certificates of insurance, the carrier may add their payroll to your audit. Always collect certificates from every sub. We help contractors understand audit exposure before the audit happens." },
  { q: "Can I get workers' comp if I just started my business?", a: "Yes. We write new ventures and startups. Without loss history, you'll be rated on industry averages, but coverage is available for day one." },
  { q: "What happens if I miss a workers' comp payment?", a: "A missed payment can result in a lapse in coverage and loss of your certificate. If this happens, call us immediately — we can help reinstate or replace coverage quickly." },
];

/* ============================================================
   SERVICE DETAIL
   ============================================================ */
export interface ServiceDetail {
  heroBlurb: string;
  whatsCovered: string[];
  whoItsFor: string[];
  whyCca: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_DETAIL: Record<string, ServiceDetail> = {
  "same-day-quotes": {
    heroBlurb: "We quote, bind, and issue your workers' comp certificate of insurance the same day you call — most trades in about 15 minutes. When a GC needs a COI before Monday morning, we deliver.",
    whatsCovered: ["Workers' comp quote in approximately 15 minutes", "Same-day binding of coverage", "ACORD 25 certificate issued immediately after binding", "Certificate delivered to you and any specified certificate holders", "Waiver of subrogation endorsement same day when required", "Available for most contractor trades in all 50 states"],
    whoItsFor: ["Contractors who need a COI before a job can start", "Subcontractors facing GC certificate deadlines", "Contractors whose current policy lapsed or was cancelled", "Any contractor who needs proof of workers' comp today"],
    whyCca: ["Same-day binding and certificate issuance as standard practice", "Appointments with multiple carriers for fast competitive quotes", "Dedicated agents who know the contractor WC market"],
    faqs: [
      { q: "How fast can I get a workers' comp certificate?", a: "For most contractor trades, we can quote, bind, and issue your ACORD 25 certificate the same day — often within 15–30 minutes of your initial call. Have your trade, payroll estimate, and business information ready." },
      { q: "What do I need to provide to get a same-day quote?", a: "Trade type, business name and FEIN (or SSN for sole props), estimated annual payroll, number of employees, and the state(s) where you work. Loss history helps but isn't always required for smaller accounts." },
      { q: "Can I get a certificate emailed directly to my GC?", a: "Yes. When we issue your ACORD 25, we email it to you and can send it directly to any certificate holders or additional insureds you specify." },
      { q: "Is same-day binding available for high-hazard trades like roofing?", a: "Often yes, but some high-hazard trades require manual carrier underwriting that can add a few hours. Call us and we'll tell you upfront what the timeline is for your specific trade." },
      { q: "What if I need coverage outside business hours?", a: "Call us during business hours for same-day service. For urgent after-hours needs, leave a message and we'll prioritize your quote first thing in the morning." },
    ],
  },
  "pay-as-you-go": {
    heroBlurb: "Pay-as-you-go workers' comp ties your premium to actual payroll each period — no large down payment, no audit surprises. Ideal for contractors with variable or seasonal workloads.",
    whatsCovered: ["Workers' comp premium calculated on actual payroll each period", "Automatic premium deduction after each payroll run", "No large upfront down payment required", "Minimal year-end audit exposure", "Integration with common payroll platforms", "Available for most contractor trades"],
    whoItsFor: ["Contractors with seasonal or variable workloads", "Growing contractors whose payroll changes month to month", "Contractors who've been burned by large audit bills", "Any contractor who wants better cash flow management"],
    whyCca: ["We match you with the right PAYG program for your trade and payroll platform", "Transparent pricing — you always know what you're paying and why", "Switch from lump-sum to PAYG without gaps in coverage"],
    faqs: [
      { q: "How does pay-as-you-go workers' comp work?", a: "After each payroll run, your payroll processor reports wages to the WC carrier. The carrier calculates your premium based on actual wages paid and debits it automatically. You pay for coverage based on what you actually spent on labor — not an estimate from the beginning of the year." },
      { q: "Does pay-as-you-go eliminate the audit?", a: "It significantly reduces audit exposure because the carrier already has accurate payroll data. Year-end audits under PAYG are typically minimal — just a reconciliation of any remaining differences." },
      { q: "What payroll systems are compatible with pay-as-you-go?", a: "Common platforms like Gusto, QuickBooks Payroll, ADP, and Paychex are typically compatible. We'll confirm which carriers offer PAYG programs compatible with your specific payroll system." },
      { q: "Is pay-as-you-go more expensive than a standard annual policy?", a: "Not necessarily — the underlying rate is the same. The difference is in how you pay it. PAYG spreads cost across the year and eliminates the upfront down payment, which improves cash flow." },
      { q: "Can I switch from my current annual policy to pay-as-you-go?", a: "Yes, typically at renewal. In some cases we can move you mid-term. Call us to discuss your timeline." },
    ],
  },
  "ghost-policy": {
    heroBlurb: "A ghost policy is a minimum-premium workers' comp policy where the owner is excluded from coverage. It produces a legitimate ACORD 25 certificate that most GCs accept — without the cost of full payroll-based coverage.",
    whatsCovered: ["Active workers' comp policy in your business name", "ACORD 25 certificate of insurance issued same day", "Owner listed on policy but excluded from coverage benefits", "Waiver of subrogation endorsement when required", "Certificate delivery to GC or certificate holder", "Annual or short-term policy options"],
    whoItsFor: ["Sole proprietors with no employees who need a COI for GC work", "Exempt owner-operators required to show proof of WC", "Independent contractors whose state allows owner exclusion", "Any owner-operator who needs a certificate but not full employee coverage"],
    whyCca: ["Ghost policies placed same day in most states", "We confirm whether your state and trade allow owner exclusion", "Transparent pricing — we tell you exactly what you'll pay and why"],
    faqs: [
      { q: "Does a ghost policy actually provide coverage?", a: "A ghost policy with an owner exclusion does not cover the owner for on-the-job injuries. It exists to satisfy certificate requirements. If you have employees, they need real workers' comp coverage — a ghost policy doesn't cover them either." },
      { q: "Will a GC accept a ghost policy COI?", a: "Most do. The ACORD 25 from a ghost policy shows active workers' comp coverage. Occasionally a GC or their insurance carrier will require documentation of actual employee coverage. We can tell you upfront whether your specific situation is likely to be accepted." },
      { q: "How much does a ghost policy cost?", a: "Ghost policy pricing varies by state and trade, but typically falls between $800 and $2,500 per year. Roofing and other high-hazard trades trend toward the higher end; lower-hazard trades are often closer to $800–$1,200." },
      { q: "What happens if I hire employees after getting a ghost policy?", a: "You need to contact your agent immediately. A ghost policy doesn't cover employees. As soon as you hire, you need to convert to a payroll-based policy. Failure to do so exposes you to significant liability." },
      { q: "Is a ghost policy available in all states?", a: "Owner exclusion rules vary by state. Most states allow sole proprietors to exclude themselves from WC, but the rules differ. We confirm what's available in your state before placing the policy." },
    ],
  },
  "contractor-wc": {
    heroBlurb: "Standard workers' comp for all contractor trades — roofing, framing, plumbing, electrical, HVAC, drywall, and more. All states. All experience levels. Same-day quotes and certificates.",
    whatsCovered: ["Medical treatment for on-the-job injuries", "Disability and lost-wage benefits for injured workers", "Employers' liability (Part Two) protection", "All contractor trades including high-hazard", "All experience levels including high-mod risks", "Certificate of insurance issued same day"],
    whoItsFor: ["Contractors with W-2 employees in any trade", "General contractors managing subcontractor compliance", "Contractors in all states and at all experience levels", "Growing contractors who need coverage that scales with payroll"],
    whyCca: ["Deep contractor WC market access across all 50 states", "Proper class codes for every contractor trade", "Same-day binding and certificate issuance as standard"],
    faqs: [
      { q: "Is workers' comp required for contractors?", a: "In most states, yes — once you have employees. Requirements vary by state, number of employees, and trade type. Some states exempt certain sole proprietors; others require coverage from day one. We know the rules for every state." },
      { q: "What class code does my trade use?", a: "Common codes include 5551 (roofing), 5645 (framing), 5183 (plumbing), 5190 (electrical), 5445 (drywall), 5474 (painting exterior), 5537 (HVAC). We verify your code during quoting so you're not overpaying or underinsured." },
      { q: "Can you cover my subcontractors?", a: "Your policy covers your employees. Subcontractors should have their own workers' comp and provide you with certificates. If they can't, their payroll may be added to your audit. We help contractors set up proper subcontractor certificate collection." },
      { q: "What if I've had workers' comp claims in the past?", a: "Prior claims raise your experience mod and your rate, but they don't disqualify you from coverage. We work with contractors at all loss levels, including those with significant prior claims." },
      { q: "How do I handle seasonal employees?", a: "Seasonal employees need to be included in your workers' comp policy when they're on payroll. We structure policies to handle seasonal payroll swings — including pay-as-you-go for contractors with high-season / off-season patterns." },
    ],
  },
  "peo-alternative": {
    heroBlurb: "Skip the PEO and get your own workers' comp policy. More control, no co-employment, no PEO markup, and you own your own loss history. We place standalone contractor WC same day.",
    whatsCovered: ["Standalone workers' comp policy in your business name", "No co-employment arrangement with a PEO", "Your own loss history and experience mod", "Pay-as-you-go options available", "Same-day certificate issuance", "All trades including high-hazard"],
    whoItsFor: ["Contractors currently in a PEO who want to exit", "Contractors exploring alternatives to PEO co-employment", "Growing contractors who want to own their WC policy", "Any contractor paying PEO markup on their WC premium"],
    whyCca: ["We place standalone WC for contractors leaving PEOs same day", "We compare PEO vs. standalone costs transparently", "Transition from PEO to standalone without coverage gaps"],
    faqs: [
      { q: "What's wrong with using a PEO for workers' comp?", a: "PEOs can provide access to workers' comp for hard-to-place contractors, but come with co-employment, PEO markup on rates, loss of control over your claims, and the fact that you're building loss history for the PEO — not yourself. Once you exit the PEO, you may have no experience mod history of your own." },
      { q: "Can I leave a PEO mid-contract?", a: "It depends on your PEO agreement. Some allow early exit; others have penalties. We help contractors evaluate their exit options and can usually have standalone coverage in place to replace the PEO same day." },
      { q: "Will standalone WC be cheaper than the PEO?", a: "Often yes, especially for contractors with good loss history. The PEO charges a markup on top of the WC rate. A standalone policy eliminates that markup. We quote both options and let the numbers speak." },
      { q: "What experience mod will I start with if I've never had my own policy?", a: "New entities start with a 1.00 (average) mod for the first few years until enough payroll and loss history exists for the NCCI to calculate an actual mod. This is often better than the high mod some contractors carry from their own history." },
      { q: "Can high-hazard contractors get standalone WC instead of using a PEO?", a: "Often yes. We have specialty markets for high-hazard trades — roofing, framing, demolition — that write standalone WC. Call us to see if the standard or specialty market is the right fit." },
    ],
  },
  "certificate-of-insurance": {
    heroBlurb: "Need a workers' comp COI today? We bind coverage and issue your ACORD 25 certificate immediately — including waivers of subrogation. Most contractors receive their certificate within 15–30 minutes.",
    whatsCovered: ["ACORD 25 certificate of insurance issued same day", "Certificate delivered via email to you and certificate holders", "Waiver of subrogation endorsement same day", "Additional insured designations when required", "Applies to ghost policies, pay-as-you-go, and annual WC", "All trades and all states"],
    whoItsFor: ["Contractors who need a certificate today to start a job", "Subcontractors whose certificate expired or lapsed", "Any contractor facing a GC certificate deadline"],
    whyCca: ["Certificate issuance is part of our standard binding process — not an extra step", "We can email certificates directly to your GC and any other holders", "We know what GCs typically require and make sure your certificate is compliant"],
    faqs: [
      { q: "What is an ACORD 25 certificate of insurance?", a: "The ACORD 25 is the standard certificate of insurance form used across the construction industry. It shows your business name, carrier, policy number, coverage dates, and limits. Most GCs, project owners, and licensing boards accept the ACORD 25 as proof of workers' comp." },
      { q: "What is a waiver of subrogation?", a: "A waiver of subrogation is an endorsement that prevents your WC carrier from suing the general contractor if a worker is injured and the GC is partly at fault. Many GCs require this endorsement on your COI. We add it same day." },
      { q: "Can you send the certificate directly to my GC?", a: "Yes. Just provide the certificate holder's name, address, and email when you request your quote. We'll email the certificate directly to them as well as to you." },
      { q: "What if my current policy is active but I need a new certificate holder added?", a: "If you already have a policy with us, call and we'll issue an updated certificate with the new holder same day at no charge. If you have a policy with another carrier, call us — we may be able to issue an endorsement through them." },
      { q: "How long is a certificate of insurance valid?", a: "A workers' comp COI is valid through the policy expiration date. When your policy renews, we issue an updated certificate. If a GC requires proof of ongoing coverage, we can set up automatic certificate renewals." },
    ],
  },
  "annual-wc-policy": {
    heroBlurb: "Traditional annual workers' comp policies from A-rated carriers. All contractor trades, all experience levels — including high-mod and hard-to-place risks. Same-day quotes and certificates.",
    whatsCovered: ["Full workers' comp coverage for all employees", "Employer's liability (Part Two) protection", "Medical treatment and lost wages for injured workers", "All contractor trades including high-hazard", "High-mod and hard-to-place risks", "Same-day certificate issuance"],
    whoItsFor: ["Contractors with stable, predictable payrolls", "Any contractor who wants the simplicity of an annual policy", "High-mod contractors who need specialty market access", "Contractors who've been declined elsewhere"],
    whyCca: ["Access to standard and specialty WC markets for all contractor risks", "Proper class codes verified at quoting to prevent audit surprises", "Same-day binding and certificate issuance standard"],
    faqs: [
      { q: "How does an annual workers' comp policy work?", a: "You pay a deposit premium at the start of the year based on your estimated payroll. The carrier audits your actual payroll at year-end and bills you for any difference (or refunds if you overpaid). Pay-as-you-go is an alternative that eliminates the upfront deposit and reduces audit surprises." },
      { q: "What carriers do you use for annual WC?", a: "We have appointments with multiple standard and specialty markets — including carriers that focus on contractor risks. We shop multiple options and present you with the best combination of price, coverage, and carrier rating." },
      { q: "Can I get an annual policy if my mod is over 1.50?", a: "Often yes through specialty or surplus lines markets. The assigned risk pool is always available as a last resort. Call us with your situation and we'll find a path to coverage." },
      { q: "What's the difference between admitted and surplus lines carriers?", a: "Admitted carriers are licensed in your state and regulated by the state insurance department. Surplus lines carriers operate under different rules and can write risks admitted carriers won't touch, but they are still legitimate, rated carriers. We use both depending on your risk profile." },
      { q: "How do I switch carriers at renewal?", a: "Contact us 30–60 days before your renewal date. We'll shop the market and present alternatives. If we find a better option, we time the new policy to start when the old one expires — no gap in coverage." },
    ],
  },
  "wc-audit-defense": {
    heroBlurb: "Received a large workers' comp audit bill? We help contractors review misclassifications, payroll allocation errors, missing sub certificates, and other issues that inflate the audit — and dispute them with the carrier.",
    whatsCovered: ["Review of audit for class code misclassifications", "Payroll allocation analysis across multiple class codes", "Subcontractor certificate verification and exclusion", "Dispute preparation and carrier negotiation", "Premium reduction strategies for future policy years", "Guidance on proper record-keeping to reduce future audit exposure"],
    whoItsFor: ["Contractors who've received a large unexpected audit bill", "Contractors whose payroll was misclassified during auditing", "Any contractor who believes their audit was calculated incorrectly"],
    whyCca: ["We know the audit process and what carriers can and can't do", "We've helped contractors reduce audit bills by thousands of dollars", "We help you build better records so future audits are cleaner"],
    faqs: [
      { q: "Can a workers' comp audit bill be disputed?", a: "Yes. If the auditor misclassified employees, improperly allocated payroll, or failed to exclude subcontractors with their own certificates, you have grounds to dispute the audit. The dispute process varies by carrier, but we know how to navigate it." },
      { q: "What are the most common audit errors?", a: "The most common errors are: payroll assigned to the wrong (higher-rated) class code, subcontractor payroll included when certificates were available to exclude it, owner payroll included when the owner was excluded, and field versus office payroll not properly split." },
      { q: "How long do I have to dispute an audit?", a: "Dispute timelines vary by carrier and state, but generally you have 60–120 days from receiving the audit statement. Don't wait — call us as soon as you receive an audit bill you believe is incorrect." },
      { q: "What records should I keep to protect myself at audit?", a: "Keep time records by employee and by type of work, collect and file certificates of insurance from every subcontractor, document owner payroll separately, and maintain clear payroll records by class code if your crew does multiple types of work." },
      { q: "Can you help me get a better rate going forward after a dispute?", a: "Yes. If an audit is corrected, it can affect your experience mod in future years. We help you understand how the audit result feeds into your mod and what steps can reduce your rate at renewal." },
    ],
  },
};

/* ============================================================
   COVERAGE REGIONS — coverage page
   ============================================================ */
export const AZ_REGIONS = [
  { slug: "texas", state: "Texas", headline: "Workers' Comp for Texas Contractors", description: "Texas has the largest contractor WC market in the country — and the unique non-subscriber option. We write WC for Texas contractors same day.", note: "Largest contractor WC market — non-subscriber option, fast-quote demand" },
  { slug: "florida", state: "Florida", headline: "Workers' Comp for Florida Contractors", description: "Florida's construction boom creates same-day COI demand. Ghost policies and pay-as-you-go are common for Florida contractors.", note: "Construction boom — tight certificate deadlines, ghost policy common" },
  { slug: "california", state: "California", headline: "Workers' Comp for California Contractors", description: "California DIR enforcement means contractors need compliant WC before any licensed work. We get California contractors covered fast.", note: "DIR enforcement — certificate of insurance required for licensing, strict compliance" },
  { slug: "arizona", state: "Arizona", headline: "Workers' Comp for Arizona Contractors", description: "Arizona's growing contractor market moves fast. We bind and issue Arizona WC certificates same day for all trades.", note: "Growing contractor market — fast turnaround needed for GC requirements" },
  { slug: "georgia", state: "Georgia", headline: "Workers' Comp for Georgia Contractors", description: "Georgia's Southeast construction surge has GCs demanding COIs same day. We place WC for Georgia contractors of all trades.", note: "Southeast construction surge — GCs demanding COIs same day" },
  { slug: "north-carolina", state: "North Carolina", headline: "Workers' Comp for North Carolina Contractors", description: "North Carolina's fast-growing construction market requires sub compliance fast. We issue same-day WC and COIs for NC contractors.", note: "Fast-growing construction market — sub compliance requirements" },
  { slug: "ohio", state: "Ohio", headline: "Workers' Comp for Ohio Contractors", description: "Ohio contractors can choose the state fund or private market. We shop both and offer pay-as-you-go for Ohio contractors same day.", note: "State WC fund vs private — pay-as-you-go popular for small contractors" },
  { slug: "illinois", state: "Illinois", headline: "Workers' Comp for Illinois Contractors", description: "Illinois has a large union and open shop contractor market. We bind WC for Illinois contractors across all trades and issue COIs same day.", note: "Large union and open shop contractor market — certificate requirements" },
];

export const US_STATES = [
  { value: "Alabama", label: "Alabama" },
  { value: "Alaska", label: "Alaska" },
  { value: "Arizona", label: "Arizona" },
  { value: "Arkansas", label: "Arkansas" },
  { value: "California", label: "California" },
  { value: "Colorado", label: "Colorado" },
  { value: "Connecticut", label: "Connecticut" },
  { value: "Delaware", label: "Delaware" },
  { value: "Florida", label: "Florida" },
  { value: "Georgia", label: "Georgia" },
  { value: "Hawaii", label: "Hawaii" },
  { value: "Idaho", label: "Idaho" },
  { value: "Illinois", label: "Illinois" },
  { value: "Indiana", label: "Indiana" },
  { value: "Iowa", label: "Iowa" },
  { value: "Kansas", label: "Kansas" },
  { value: "Kentucky", label: "Kentucky" },
  { value: "Louisiana", label: "Louisiana" },
  { value: "Maine", label: "Maine" },
  { value: "Maryland", label: "Maryland" },
  { value: "Massachusetts", label: "Massachusetts" },
  { value: "Michigan", label: "Michigan" },
  { value: "Minnesota", label: "Minnesota" },
  { value: "Mississippi", label: "Mississippi" },
  { value: "Missouri", label: "Missouri" },
  { value: "Montana", label: "Montana" },
  { value: "Nebraska", label: "Nebraska" },
  { value: "Nevada", label: "Nevada" },
  { value: "New Hampshire", label: "New Hampshire" },
  { value: "New Jersey", label: "New Jersey" },
  { value: "New Mexico", label: "New Mexico" },
  { value: "New York", label: "New York" },
  { value: "North Carolina", label: "North Carolina" },
  { value: "North Dakota", label: "North Dakota" },
  { value: "Ohio", label: "Ohio" },
  { value: "Oklahoma", label: "Oklahoma" },
  { value: "Oregon", label: "Oregon" },
  { value: "Pennsylvania", label: "Pennsylvania" },
  { value: "Rhode Island", label: "Rhode Island" },
  { value: "South Carolina", label: "South Carolina" },
  { value: "South Dakota", label: "South Dakota" },
  { value: "Tennessee", label: "Tennessee" },
  { value: "Texas", label: "Texas" },
  { value: "Utah", label: "Utah" },
  { value: "Vermont", label: "Vermont" },
  { value: "Virginia", label: "Virginia" },
  { value: "Washington", label: "Washington" },
  { value: "West Virginia", label: "West Virginia" },
  { value: "Wisconsin", label: "Wisconsin" },
  { value: "Wyoming", label: "Wyoming" },
];

export const QUOTE_SERVICE_TYPES = [
  { value: "same-day-quotes", label: "Same-Day WC Quote & Certificate" },
  { value: "pay-as-you-go", label: "Pay-As-You-Go Workers' Comp" },
  { value: "ghost-policy", label: "Ghost Policy / Minimum WC" },
  { value: "contractor-wc", label: "Contractor Workers' Comp (Standard)" },
  { value: "peo-alternative", label: "PEO Alternative Coverage" },
  { value: "certificate-of-insurance", label: "Same-Day COI" },
  { value: "annual-wc-policy", label: "Standard Annual WC Policy" },
  { value: "wc-audit-defense", label: "WC Premium Audit Defense" },
];

export const YEARS_OPTIONS = Array.from({ length: 50 }, (_, i) => {
  const year = new Date().getFullYear() - i;
  return { value: String(year), label: String(year) };
});
