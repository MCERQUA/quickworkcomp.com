import { Zap, CreditCard, FileCheck, HardHat, Building2, FileText, ShieldCheck, FileSearch } from "lucide-react";

export const SITE = {
  name: "Quick Work Comp",
  tagline: "Fast Workers' Comp Quotes for Contractors",
  description: "Same-day workers' compensation quotes for contractors — pay-as-you-go WC, ghost policies, instant certificates, PEO alternatives, and standard WC for all trades. Get covered today. All 50 states. Licensed agency.",
  url: "https://quickworkcomp.com",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  address: "12220 E Riggs Road, Suite #104, Chandler, AZ 85249",
  founded: 2005,
  npn: "8608479",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const STATS = [
  { value: "1,000+", label: "Contractors Covered" },
  { value: "20+", label: "Years in Business" },
  { value: "15 Min", label: "Average Quote Time" },
  { value: "50", label: "States Served" },
] as const;

export const SERVICES = [
  {
    slug: "same-day-quotes",
    title: "Same-Day WC Quotes & Certificates",
    icon: Zap,
    featured: true,
    shortDesc: "Get a workers' comp quote and certificate of insurance the same day you apply — often within 15 minutes.",
    description: "Same-day workers' comp quotes and certificates for contractors. We bind coverage and issue your ACORD 25 COI the same day — often within 15 minutes of your call.",
    keywords: ["same day workers comp quote", "same day certificate of insurance", "workers comp same day", "instant workers comp"],
  },
  {
    slug: "pay-as-you-go",
    title: "Pay-As-You-Go Workers' Comp",
    icon: CreditCard,
    featured: false,
    shortDesc: "Pay premiums based on actual payroll each period — no large down payment, no audit surprises.",
    description: "Pay-as-you-go workers' comp ties your premium to actual payroll — no big down payment, no audit surprises. Ideal for contractors with variable workloads.",
    keywords: ["pay as you go workers comp", "payroll based workers comp", "no down payment workers comp", "PAYG workers compensation"],
  },
  {
    slug: "ghost-policy",
    title: "Ghost Policy / Minimum WC",
    icon: FileCheck,
    featured: false,
    shortDesc: "A minimum-premium WC policy for exempt owner-operators who need a certificate of insurance for GC requirements.",
    description: "A ghost policy (minimum-premium WC) lets exempt owner-operators get a legitimate workers' comp certificate to satisfy general contractor requirements.",
    keywords: ["ghost policy workers comp", "minimum premium workers comp", "owner exclusion workers comp", "sole proprietor workers comp certificate"],
  },
  {
    slug: "contractor-wc",
    title: "Contractor Workers' Comp",
    icon: HardHat,
    featured: false,
    shortDesc: "Standard workers' compensation coverage for all contractor trades — roofing, framing, plumbing, electrical, and more.",
    description: "Standard workers' comp for all contractor trades — roofing, framing, plumbing, electrical, HVAC, drywall, and more. All states, all experience levels.",
    keywords: ["contractor workers comp", "workers compensation contractors", "roofing workers comp", "construction workers comp"],
  },
  {
    slug: "peo-alternative",
    title: "PEO Alternative Coverage",
    icon: Building2,
    featured: false,
    shortDesc: "Skip the PEO and get your own WC policy — more control, better rates, and no co-employment.",
    description: "Avoid PEO co-employment with your own standalone workers' comp policy. More control, no PEO markup, and better long-term rates for growing contractors.",
    keywords: ["PEO alternative workers comp", "skip PEO workers comp", "own workers comp policy", "no co-employment workers comp"],
  },
  {
    slug: "certificate-of-insurance",
    title: "Same-Day COI",
    icon: FileText,
    featured: false,
    shortDesc: "Need a certificate of insurance today? We can issue your ACORD 25 COI the same day coverage is bound.",
    description: "Need a workers' comp certificate of insurance today? We bind coverage and issue your ACORD 25 COI same day — including waiver of subrogation endorsements.",
    keywords: ["same day COI", "certificate of insurance same day", "ACORD 25 same day", "workers comp certificate today"],
  },
  {
    slug: "annual-wc-policy",
    title: "Standard Annual WC Policy",
    icon: ShieldCheck,
    featured: false,
    shortDesc: "Traditional annual workers' comp policies from top-rated carriers — all trades, all experience levels.",
    description: "Traditional annual workers' comp policies from A-rated carriers. All trades, all experience levels, including high-mod and hard-to-place risks.",
    keywords: ["annual workers comp policy", "standard workers comp", "workers comp insurance", "yearly workers compensation"],
  },
  {
    slug: "wc-audit-defense",
    title: "WC Premium Audit Defense",
    icon: FileSearch,
    featured: false,
    shortDesc: "Facing a large audit bill? We help contractors dispute misclassifications and reduce audit premiums.",
    description: "Workers' comp audit bill too high? We help contractors dispute class code misclassifications, review payroll allocation, and reduce audit premiums.",
    keywords: ["workers comp audit defense", "workers comp audit dispute", "WC audit bill too high", "premium audit workers comp"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas", name: "Texas", state: "Texas", region: "TX", blurb: "Texas has the largest contractor WC market in the country. Non-subscriber option, fast-quote demand, and a growing construction market make same-day WC essential for Texas contractors.", note: "Largest contractor WC market — non-subscriber option, fast-quote demand" },
  { slug: "florida", name: "Florida", state: "Florida", region: "FL", blurb: "Florida's construction boom creates tight certificate deadlines for contractors. Ghost policies and same-day COIs are in constant demand. We bind same-day for Florida contractors.", note: "Construction boom — tight certificate deadlines, ghost policy common" },
  { slug: "california", name: "California", state: "California", region: "CA", blurb: "California DIR enforcement means contractors need compliant WC and a valid certificate before any licensed work. We get California contractors covered fast.", note: "DIR enforcement — certificate of insurance required for licensing, strict compliance" },
  { slug: "arizona", name: "Arizona", state: "Arizona", region: "AZ", blurb: "Arizona's growing contractor market moves fast. General contractors demand COIs same day and we deliver — binding and issuing Arizona WC certificates within hours.", note: "Growing contractor market — fast turnaround needed for GC requirements" },
  { slug: "georgia", name: "Georgia", state: "Georgia", region: "GA", blurb: "Georgia's Southeast construction surge has GCs demanding COIs the same day. We place WC for Georgia contractors of all trades and experience levels.", note: "Southeast construction surge — GCs demanding COIs same day" },
  { slug: "north-carolina", name: "North Carolina", state: "North Carolina", region: "NC", blurb: "North Carolina's fast-growing construction market requires sub compliance — contractors need certificates fast. We issue same-day for NC contractors.", note: "Fast-growing construction market — sub compliance requirements" },
  { slug: "ohio", name: "Ohio", state: "Ohio", region: "OH", blurb: "Ohio contractors can choose between the state fund and private market. Pay-as-you-go is popular for small Ohio contractors. We shop both options same day.", note: "State WC fund vs private — pay-as-you-go popular for small contractors" },
  { slug: "illinois", name: "Illinois", state: "Illinois", region: "IL", blurb: "Illinois has a large union and open shop contractor market with strict certificate requirements. We bind WC for Illinois contractors across all trades and issue COIs same day.", note: "Large union and open shop contractor market — certificate requirements" },
] as const;


export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Contractor-specialist agents", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "Same-day certificate issuance", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;
