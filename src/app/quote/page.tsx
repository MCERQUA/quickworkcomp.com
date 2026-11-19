"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { US_STATES, QUOTE_SERVICE_TYPES, YEARS_OPTIONS, COPY } from "@/lib/content";
import { CheckCircle2, ShieldCheck, ArrowRight, Phone, Clock, Zap, MapPin } from "lucide-react";
import { OwnersFieldset } from "@/components/forms/OwnersFieldset";
import { submitLead } from "@/lib/submit-lead";


const trustItems = [
  { icon: ShieldCheck, title: COPY.quote.trustNicheTitle, desc: COPY.quote.trustNicheDesc },
  { icon: Zap, title: "~15-minute quotes", desc: "Real quotes from real markets, fast." },
  { icon: Clock, title: "2-hour claims response", desc: "When a loss hits, you reach a person." },
  { icon: MapPin, title: "All 50 states", desc: "Licensed nationwide — NPN #8608479." },
];

export default function QuotePage() {
  const [ownerFields, setOwnerFields] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "", businessName: "", email: "", phone: "", state: "", serviceType: "", yearsInBusiness: "", notes: "", "bot-field": "",
    streetAddress: "", city: "", zip: "", priorYearRevenue: "", priorYearSubcontractorExpenses: "", priorYearEmployeeCount: "", priorYearEmployeePayroll: "", estimatedGrossSales: "", estimatedSubcontractorExpenses: "", estimatedEmployeeCount: "", estimatedEmployeePayroll: "", estimatedMaterialCosts: "", subsCarryInsurance: "", percentSubcontractorsInsured: "", coverageForUninsuredSubcontractors: "", annualRevenue: "", yearBusinessStarted: "", businessDescription: "", classCode1: "", classCode2: "", classCode3: "", classCode4: "", classCode5: "", residentialVsCommercial: "", newVsExistingConstruction: "", largestProjectValue: "", largestProjectDescription: "", currentCarrier: "", currentPolicyExpiration: "", ownerNames: "", ownerDateOfBirth: "", ownerOwnershipPct: "", numberOfEmployees: "", amountOfPayroll: "", hasClericalStaff: "", clericalStaffCount: "", hasSalesStaff: "", salesStaffCount: "", officeVsFieldSplit: "",
    // ACORD-125/126 gap-fix additions (josh-desk-2, 2026-11-12 — see commit message for the spec audit)
    fein: "", entityType: "", firstName: "", lastName: "", desiredEffectiveDate: "", currentlyInsured: "", usesSubcontractors: "", lossesLast3Years: "", lossCount: "", lossDescription: "", fullTimeEmployees: "", partTimeEmployees: "",
    // ACORD intake additions (josh-desk-1, 2026-11-18) — all optional
    dba: "", entityTypeOther: "", experienceMod: "", physicalCounty: "", mailingSameAsPhysical: "", mailingAddress: "", mailingCity: "", mailingState: "", mailingZip: "", classPayroll1: "", classPayroll2: "", classPayroll3: "", classPayroll4: "", classPayroll5: "", percentSubcontracted: "", subsProvideCOI: "", coverageTerminated: "", carrierNonRenewing: "", lossDate: "", lossLineOfBusiness: "", lossAmountPaid: "", lossAmountReserved: "", lossHistoryStatus: "", lossAdditional: "", certificateHolderName: "", certificateHolderAddress: "", additionalInsuredNeeded: "", additionalInsuredName: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData["bot-field"]) return;
    setSubmitting(true);
    setError("");
    try {
      const ok = await submitLead("quote", { ...formData, ...ownerFields });
      if (ok) setSubmitted(true);
      else setError(COPY.quote.errorMessage);
    } catch {
      setError(COPY.quote.errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-adobe bg-cream/50 text-espresso placeholder-mocha/60 focus:outline-none focus:border-clay focus:ring-2 focus:ring-clay/20 transition-all text-sm";
  const labelClass = "block text-sm font-heading font-semibold text-espresso mb-1.5";

  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-wide">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <span className="pill-clay"><ShieldCheck className="h-3.5 w-3.5" /> Free quote</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                {COPY.quote.h1Lead}{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-gold-dark bg-clip-text text-transparent">{COPY.quote.h1Highlight}</span>
              </h1>
              <p className="mt-5 lead">{COPY.quote.lead}</p>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                {trustItems.map((item) => (
                  <FadeIn key={item.title}>
                    <div className="flex gap-3 p-5 rounded-2xl bg-white border border-adobe shadow-card">
                      <span className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-clay/10 text-clay"><item.icon className="h-5 w-5" strokeWidth={2.2} /></span>
                      <div>
                        <p className="font-heading font-bold text-espresso text-sm">{item.title}</p>
                        <p className="text-mocha text-xs leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
                <FadeIn>
                  <div className="p-5 rounded-2xl bg-espresso text-cream text-center">
                    <p className="text-xs font-heading font-bold uppercase tracking-wider text-gold mb-2">Prefer to call?</p>
                    <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 text-cream font-heading font-extrabold text-xl hover:text-gold-light transition-colors"><Phone className="h-5 w-5" />{SITE.phone}</a>
                    <p className="text-xs text-cream/60 mt-1">Mon–Fri 8am–5pm (MST)</p>
                  </div>
                </FadeIn>
              </div>

              <div className="lg:col-span-2">
                {submitted ? (
                  <FadeIn>
                    <div className="p-10 md:p-12 rounded-3xl bg-white border border-adobe shadow-card text-center">
                      <div className="w-16 h-16 rounded-full bg-sage/15 flex items-center justify-center mx-auto mb-4"><CheckCircle2 className="h-8 w-8 text-sage" /></div>
                      <h2 className="font-heading font-extrabold text-espresso text-2xl mb-3">Quote request received</h2>
                      <p className="text-mocha mb-2">Thank you! We'll review your operation and reach out within one business day with personalized quotes.</p>
                      <p className="text-sm text-mocha">Need it sooner? Call <a href={SITE.phoneHref} className="text-clay font-heading font-semibold">{SITE.phone}</a>.</p>
                      <Link href="/" className="btn-secondary mt-6 inline-flex">Back to home</Link>
                    </div>
                  </FadeIn>
                ) : (
                  <FadeIn>
                    <form name="quote" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="rounded-3xl bg-white border border-adobe shadow-card p-7 md:p-9 space-y-5">
                      <input type="hidden" name="form-name" value="quote" />
                      <input name="bot-field" type="hidden" value={formData["bot-field"]} onChange={handleChange} className="hidden" />

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div><label htmlFor="name" className={labelClass}>Full name *</label><input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} /></div>
                        <div><label htmlFor="businessName" className={labelClass}>Business name *</label><input id="businessName" name="businessName" type="text" required value={formData.businessName} onChange={handleChange} placeholder={COPY.quote.businessPlaceholder} className={inputClass} /></div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div><label htmlFor="firstName" className={labelClass}>First name *</label><input id="firstName" name="firstName" type="text" required value={formData.firstName} onChange={handleChange} placeholder="Jane" className={inputClass} /></div>
                        <div><label htmlFor="lastName" className={labelClass}>Last name *</label><input id="lastName" name="lastName" type="text" required value={formData.lastName} onChange={handleChange} placeholder="Smith" className={inputClass} /></div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div><label htmlFor="entityType" className={labelClass}>Business entity type *</label>
                          <select id="entityType" name="entityType" required value={formData.entityType} onChange={handleChange} className={inputClass}>
                            <option value="">Select…</option>
                            <option value="Individual/Sole prop">Individual / Sole prop</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Corporation">Corporation</option>
                            <option value="LLC">LLC</option>
                            <option value="Joint venture">Joint venture</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div><label htmlFor="fein" className={labelClass}>FEIN (business tax ID) *</label><input id="fein" name="fein" type="text" required value={formData.fein} onChange={handleChange} placeholder="12-3456789" className={inputClass} /></div>
                      </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="entityTypeOther" className={labelClass}>If Other, describe entity type</label><input id="entityTypeOther" name="entityTypeOther" type="text" value={formData.entityTypeOther} onChange={handleChange} placeholder="Describe" className={inputClass} /></div>
                          <div><label htmlFor="dba" className={labelClass}>DBA / trade name (optional)</label><input id="dba" name="dba" type="text" value={formData.dba} onChange={handleChange} className={inputClass} /></div>
                        </div>
                        <div><label htmlFor="experienceMod" className={labelClass}>Experience mod (if known)</label><input id="experienceMod" name="experienceMod" type="text" inputMode="decimal" value={formData.experienceMod} onChange={handleChange} placeholder="e.g. 1.05" className={inputClass} /></div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div><label htmlFor="email" className={labelClass}>Email *</label><input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder={COPY.quote.emailPlaceholder} className={inputClass} /></div>
                        <div><label htmlFor="phone" className={labelClass}>Phone *</label><input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder={COPY.quote.phonePlaceholder} className={inputClass} /></div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div><label htmlFor="state" className={labelClass}>Primary state *</label>
                          <select id="state" name="state" required value={formData.state} onChange={handleChange} className={inputClass}><option value="">Select a state…</option>{US_STATES.map((s) => (<option key={s.value} value={s.value}>{s.label}</option>))}</select>
                        </div>
                        <div><label htmlFor="yearsInBusiness" className={labelClass}>Years in business</label>
                          <select id="yearsInBusiness" name="yearsInBusiness" value={formData.yearsInBusiness} onChange={handleChange} className={inputClass}><option value="">Select…</option>{YEARS_OPTIONS.map((y) => (<option key={y.value} value={y.value}>{y.label}</option>))}</select>
                        </div>
                      </div>

                      <div><label htmlFor="serviceType" className={labelClass}>What do you need? *</label>
                        <select id="serviceType" name="serviceType" required value={formData.serviceType} onChange={handleChange} className={inputClass}><option value="">Select coverage…</option>{QUOTE_SERVICE_TYPES.map((s) => (<option key={s.value} value={s.value}>{s.label}</option>))}</select>
                      </div>

                      <div className="space-y-4 pt-5 border-t border-adobe">
                        <div>
                          <h3 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">Business details</h3>
                          <p className="text-xs text-mocha/70 mt-0.5">What the business does and how long it has been running.</p>
                        </div>
                        <div><label htmlFor="yearBusinessStarted" className={labelClass}>Year business started *</label><input id="yearBusinessStarted" name="yearBusinessStarted" type="text" inputMode="numeric" required value={formData.yearBusinessStarted} onChange={handleChange} placeholder="2015" className={inputClass} /></div>
                        <div><label htmlFor="businessDescription" className={labelClass}>Description of the business *</label><textarea id="businessDescription" name="businessDescription" rows={3} required value={formData.businessDescription} onChange={handleChange} placeholder="What the business does, day to day" className={`${inputClass} resize-none`} /></div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="annualRevenue" className={labelClass}>Annual gross sales (annual revenue) *</label><input id="annualRevenue" name="annualRevenue" type="text" inputMode="numeric" required value={formData.annualRevenue} onChange={handleChange} placeholder="$1,200,000" className={inputClass} /></div>
                          <div><label htmlFor="residentialVsCommercial" className={labelClass}>Residential vs commercial split</label><input id="residentialVsCommercial" name="residentialVsCommercial" type="text" value={formData.residentialVsCommercial} onChange={handleChange} placeholder="70% residential / 30% commercial" className={inputClass} /></div>
                        </div>
                        <div><label htmlFor="newVsExistingConstruction" className={labelClass}>New vs existing construction</label><input id="newVsExistingConstruction" name="newVsExistingConstruction" type="text" value={formData.newVsExistingConstruction} onChange={handleChange} placeholder="Mostly existing structures" className={inputClass} /></div>
                        <div><label htmlFor="largestProjectValue" className={labelClass}>Largest project value *</label><input id="largestProjectValue" name="largestProjectValue" type="text" inputMode="numeric" required value={formData.largestProjectValue} onChange={handleChange} placeholder="$450,000" className={inputClass} /></div>
                        <div><label htmlFor="largestProjectDescription" className={labelClass}>Largest projects</label><textarea id="largestProjectDescription" name="largestProjectDescription" rows={3} value={formData.largestProjectDescription} onChange={handleChange} placeholder="Three largest jobs in the last year — value and scope" className={`${inputClass} resize-none`} /></div>
                      </div>

                      <div className="space-y-4 pt-5 border-t border-adobe">
                        <div>
                          <h3 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">Business address</h3>
                          <p className="text-xs text-mocha/70 mt-0.5">Where your operation is based.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="streetAddress" className={labelClass}>Street address *</label><input id="streetAddress" name="streetAddress" type="text" required value={formData.streetAddress} onChange={handleChange} placeholder="123 Main St, Suite 200" className={inputClass} /></div>
                          <div><label htmlFor="city" className={labelClass}>City *</label><input id="city" name="city" type="text" required value={formData.city} onChange={handleChange} placeholder="Phoenix" className={inputClass} /></div>
                        </div>
                        <div><label htmlFor="zip" className={labelClass}>ZIP code *</label><input id="zip" name="zip" type="text" required value={formData.zip} onChange={handleChange} placeholder="85001" className={inputClass} /></div>
                        <div><label htmlFor="physicalCounty" className={labelClass}>County</label><input id="physicalCounty" name="physicalCounty" type="text" value={formData.physicalCounty} onChange={handleChange} placeholder="Maricopa" className={inputClass} /></div>
                        <div><label htmlFor="mailingSameAsPhysical" className={labelClass}>Is the mailing address the same as the business address?</label><select id="mailingSameAsPhysical" name="mailingSameAsPhysical" value={formData.mailingSameAsPhysical} onChange={handleChange} className={inputClass}><option value="">Select…</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
                        <div><label htmlFor="mailingAddress" className={labelClass}>Mailing street address (if different)</label><input id="mailingAddress" name="mailingAddress" type="text" value={formData.mailingAddress} onChange={handleChange} className={inputClass} /></div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="mailingCity" className={labelClass}>Mailing city</label><input id="mailingCity" name="mailingCity" type="text" value={formData.mailingCity} onChange={handleChange} className={inputClass} /></div>
                          <div><label htmlFor="mailingState" className={labelClass}>Mailing state</label><select id="mailingState" name="mailingState" value={formData.mailingState} onChange={handleChange} className={inputClass}><option value="">Select a state…</option>{US_STATES.map((s) => (<option key={s.value} value={s.value}>{s.label}</option>))}</select></div>
                        </div>
                        <div><label htmlFor="mailingZip" className={labelClass}>Mailing ZIP code</label><input id="mailingZip" name="mailingZip" type="text" value={formData.mailingZip} onChange={handleChange} className={inputClass} /></div>
                      </div>

                      <div className="space-y-4 pt-5 border-t border-adobe">
                        <div>
                          <h3 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">Payroll and class codes</h3>
                          <p className="text-xs text-mocha/70 mt-0.5">Employees, payroll and how the work is classified.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="numberOfEmployees" className={labelClass}>Number of employees</label><input id="numberOfEmployees" name="numberOfEmployees" type="text" inputMode="numeric" value={formData.numberOfEmployees} onChange={handleChange} placeholder="8" className={inputClass} /></div>
                          <div><label htmlFor="amountOfPayroll" className={labelClass}>Amount of payroll</label><input id="amountOfPayroll" name="amountOfPayroll" type="text" inputMode="numeric" value={formData.amountOfPayroll} onChange={handleChange} placeholder="$420,000" className={inputClass} /></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="fullTimeEmployees" className={labelClass}>Full-time employees *</label><input id="fullTimeEmployees" name="fullTimeEmployees" type="text" inputMode="numeric" required value={formData.fullTimeEmployees} onChange={handleChange} placeholder="6" className={inputClass} /></div>
                          <div><label htmlFor="partTimeEmployees" className={labelClass}>Part-time employees</label><input id="partTimeEmployees" name="partTimeEmployees" type="text" inputMode="numeric" value={formData.partTimeEmployees} onChange={handleChange} placeholder="2" className={inputClass} /></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="classCode1" className={labelClass}>Class code 1</label><input id="classCode1" name="classCode1" type="text" value={formData.classCode1} onChange={handleChange} placeholder="5403" className={inputClass} /></div>
                          <div><label htmlFor="classCode2" className={labelClass}>Class code 2</label><input id="classCode2" name="classCode2" type="text" value={formData.classCode2} onChange={handleChange} placeholder="5645" className={inputClass} /></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="classCode3" className={labelClass}>Class code 3</label><input id="classCode3" name="classCode3" type="text" value={formData.classCode3} onChange={handleChange} className={inputClass} /></div>
                          <div><label htmlFor="classCode4" className={labelClass}>Class code 4</label><input id="classCode4" name="classCode4" type="text" value={formData.classCode4} onChange={handleChange} className={inputClass} /></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="classCode5" className={labelClass}>Class code 5</label><input id="classCode5" name="classCode5" type="text" value={formData.classCode5} onChange={handleChange} className={inputClass} /></div>
                          <div><label htmlFor="officeVsFieldSplit" className={labelClass}>Office vs field split</label><input id="officeVsFieldSplit" name="officeVsFieldSplit" type="text" value={formData.officeVsFieldSplit} onChange={handleChange} placeholder="2 office / 6 field" className={inputClass} /></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="classPayroll1" className={labelClass}>Payroll for class code 1</label><input id="classPayroll1" name="classPayroll1" type="text" inputMode="numeric" value={formData.classPayroll1} onChange={handleChange} className={inputClass} /></div>
                          <div><label htmlFor="classPayroll2" className={labelClass}>Payroll for class code 2</label><input id="classPayroll2" name="classPayroll2" type="text" inputMode="numeric" value={formData.classPayroll2} onChange={handleChange} className={inputClass} /></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="classPayroll3" className={labelClass}>Payroll for class code 3</label><input id="classPayroll3" name="classPayroll3" type="text" inputMode="numeric" value={formData.classPayroll3} onChange={handleChange} className={inputClass} /></div>
                          <div><label htmlFor="classPayroll4" className={labelClass}>Payroll for class code 4</label><input id="classPayroll4" name="classPayroll4" type="text" inputMode="numeric" value={formData.classPayroll4} onChange={handleChange} className={inputClass} /></div>
                        </div>
                        <div><label htmlFor="classPayroll5" className={labelClass}>Payroll for class code 5</label><input id="classPayroll5" name="classPayroll5" type="text" inputMode="numeric" value={formData.classPayroll5} onChange={handleChange} className={inputClass} /></div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="hasClericalStaff" className={labelClass}>Any clerical staff?</label><select id="hasClericalStaff" name="hasClericalStaff" value={formData.hasClericalStaff} onChange={handleChange} className={inputClass}><option value="">Select…</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
                          <div><label htmlFor="clericalStaffCount" className={labelClass}>Clerical staff — count and payroll</label><input id="clericalStaffCount" name="clericalStaffCount" type="text" value={formData.clericalStaffCount} onChange={handleChange} placeholder="2 clerical, $90,000 payroll" className={inputClass} /></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="hasSalesStaff" className={labelClass}>Any outside sales staff?</label><select id="hasSalesStaff" name="hasSalesStaff" value={formData.hasSalesStaff} onChange={handleChange} className={inputClass}><option value="">Select…</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
                          <div><label htmlFor="salesStaffCount" className={labelClass}>Sales staff — count and payroll</label><input id="salesStaffCount" name="salesStaffCount" type="text" value={formData.salesStaffCount} onChange={handleChange} placeholder="1 outside sales, $60,000 payroll" className={inputClass} /></div>
                        </div>
                      </div>

                      <div className="space-y-4 pt-5 border-t border-adobe">
                        <div>
                          <h3 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">Prior year</h3>
                          <p className="text-xs text-mocha/70 mt-0.5">Your last completed 12 months. Best estimates are fine.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="priorYearRevenue" className={labelClass}>Prior year gross sales</label><input id="priorYearRevenue" name="priorYearRevenue" type="text" inputMode="numeric" value={formData.priorYearRevenue} onChange={handleChange} placeholder="$1,200,000" className={inputClass} /></div>
                          <div><label htmlFor="priorYearSubcontractorExpenses" className={labelClass}>Prior year subcontractor expenses</label><input id="priorYearSubcontractorExpenses" name="priorYearSubcontractorExpenses" type="text" inputMode="numeric" value={formData.priorYearSubcontractorExpenses} onChange={handleChange} placeholder="$250,000" className={inputClass} /></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="priorYearEmployeeCount" className={labelClass}>Prior year employee count</label><input id="priorYearEmployeeCount" name="priorYearEmployeeCount" type="text" inputMode="numeric" value={formData.priorYearEmployeeCount} onChange={handleChange} placeholder="8" className={inputClass} /></div>
                          <div><label htmlFor="priorYearEmployeePayroll" className={labelClass}>Prior year employee payroll</label><input id="priorYearEmployeePayroll" name="priorYearEmployeePayroll" type="text" inputMode="numeric" value={formData.priorYearEmployeePayroll} onChange={handleChange} placeholder="$400,000" className={inputClass} /></div>
                        </div>
                      </div>

                      <div className="space-y-4 pt-5 border-t border-adobe">
                        <div>
                          <h3 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">Next twelve months — estimates</h3>
                          <p className="text-xs text-mocha/70 mt-0.5">Projected figures for the coming policy period.</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="estimatedGrossSales" className={labelClass}>Estimated gross sales</label><input id="estimatedGrossSales" name="estimatedGrossSales" type="text" inputMode="numeric" value={formData.estimatedGrossSales} onChange={handleChange} placeholder="$1,400,000" className={inputClass} /></div>
                          <div><label htmlFor="estimatedSubcontractorExpenses" className={labelClass}>Estimated subcontractor expenses</label><input id="estimatedSubcontractorExpenses" name="estimatedSubcontractorExpenses" type="text" inputMode="numeric" value={formData.estimatedSubcontractorExpenses} onChange={handleChange} placeholder="$300,000" className={inputClass} /></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="estimatedEmployeeCount" className={labelClass}>Estimated employee count</label><input id="estimatedEmployeeCount" name="estimatedEmployeeCount" type="text" inputMode="numeric" value={formData.estimatedEmployeeCount} onChange={handleChange} placeholder="10" className={inputClass} /></div>
                          <div><label htmlFor="estimatedEmployeePayroll" className={labelClass}>Estimated employee payroll</label><input id="estimatedEmployeePayroll" name="estimatedEmployeePayroll" type="text" inputMode="numeric" value={formData.estimatedEmployeePayroll} onChange={handleChange} placeholder="$500,000" className={inputClass} /></div>
                        </div>
                        <div><label htmlFor="estimatedMaterialCosts" className={labelClass}>Estimated material costs</label><input id="estimatedMaterialCosts" name="estimatedMaterialCosts" type="text" inputMode="numeric" value={formData.estimatedMaterialCosts} onChange={handleChange} placeholder="$180,000" className={inputClass} /></div>
                      </div>

                      <div className="space-y-4 pt-5 border-t border-adobe">
                        <div>
                          <h3 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">Subcontractor insurance</h3>
                          <p className="text-xs text-mocha/70 mt-0.5">How subcontracted work is covered.</p>
                        </div>
                        <div><label htmlFor="usesSubcontractors" className={labelClass}>Do you use subcontractors? *</label><select id="usesSubcontractors" name="usesSubcontractors" required value={formData.usesSubcontractors} onChange={handleChange} className={inputClass}><option value="">Select…</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="subsCarryInsurance" className={labelClass}>Do your subcontractors carry their own insurance?</label><select id="subsCarryInsurance" name="subsCarryInsurance" value={formData.subsCarryInsurance} onChange={handleChange} className={inputClass}><option value="">Select…</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
                          <div><label htmlFor="percentSubcontractorsInsured" className={labelClass}>Percentage of subcontractors insured</label><input id="percentSubcontractorsInsured" name="percentSubcontractorsInsured" type="text" inputMode="numeric" value={formData.percentSubcontractorsInsured} onChange={handleChange} placeholder="100" className={inputClass} /></div>
                        </div>
                        <div><label htmlFor="coverageForUninsuredSubcontractors" className={labelClass}>Do you need coverage for uninsured subcontractors?</label><select id="coverageForUninsuredSubcontractors" name="coverageForUninsuredSubcontractors" value={formData.coverageForUninsuredSubcontractors} onChange={handleChange} className={inputClass}><option value="">Select…</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="percentSubcontracted" className={labelClass}>Percent of work subcontracted</label><input id="percentSubcontracted" name="percentSubcontracted" type="text" inputMode="numeric" value={formData.percentSubcontracted} onChange={handleChange} className={inputClass} /></div>
                          <div><label htmlFor="subsProvideCOI" className={labelClass}>Do you require subcontractors to provide certificates of insurance?</label><select id="subsProvideCOI" name="subsProvideCOI" value={formData.subsProvideCOI} onChange={handleChange} className={inputClass}><option value="">Select…</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
                        </div>
                      </div>

                      <div className="space-y-4 pt-5 border-t border-adobe">
                        <div>
                          <h3 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">Current or prior coverage</h3>
                          <p className="text-xs text-mocha/70 mt-0.5">Who covers you today, if anyone.</p>
                        </div>
                        <div><label htmlFor="currentlyInsured" className={labelClass}>Are you currently insured? *</label><select id="currentlyInsured" name="currentlyInsured" required value={formData.currentlyInsured} onChange={handleChange} className={inputClass}><option value="">Select…</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="currentCarrier" className={labelClass}>Current or prior carrier</label><input id="currentCarrier" name="currentCarrier" type="text" value={formData.currentCarrier} onChange={handleChange} placeholder="Carrier name" className={inputClass} /></div>
                        </div>
                        <div><label htmlFor="currentPolicyExpiration" className={labelClass}>Policy expiration date</label><input id="currentPolicyExpiration" name="currentPolicyExpiration" type="date" value={formData.currentPolicyExpiration} onChange={handleChange} className={inputClass} /></div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="coverageTerminated" className={labelClass}>Was coverage ever cancelled or terminated?</label><select id="coverageTerminated" name="coverageTerminated" value={formData.coverageTerminated} onChange={handleChange} className={inputClass}><option value="">Select…</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
                          <div><label htmlFor="carrierNonRenewing" className={labelClass}>Is the current carrier non-renewing?</label><select id="carrierNonRenewing" name="carrierNonRenewing" value={formData.carrierNonRenewing} onChange={handleChange} className={inputClass}><option value="">Select…</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
                        </div>
                      </div>

                      <div className="space-y-4 pt-5 border-t border-adobe">
                        <div>
                          <h3 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">Loss history</h3>
                          <p className="text-xs text-mocha/70 mt-0.5">Claims in the last three years, if any.</p>
                        </div>
                        <div><label htmlFor="lossesLast3Years" className={labelClass}>Any losses/claims in the last 3 years? *</label><select id="lossesLast3Years" name="lossesLast3Years" required value={formData.lossesLast3Years} onChange={handleChange} className={inputClass}><option value="">Select…</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="lossCount" className={labelClass}>Number of losses</label><input id="lossCount" name="lossCount" type="text" inputMode="numeric" value={formData.lossCount} onChange={handleChange} placeholder="1" className={inputClass} /></div>
                          <div><label htmlFor="lossDescription" className={labelClass}>Loss description</label><input id="lossDescription" name="lossDescription" type="text" value={formData.lossDescription} onChange={handleChange} placeholder="Date, type, amount, status" className={inputClass} /></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="lossDate" className={labelClass}>Most recent loss date</label><input id="lossDate" name="lossDate" type="date" value={formData.lossDate} onChange={handleChange} className={inputClass} /></div>
                          <div><label htmlFor="lossLineOfBusiness" className={labelClass}>Line of business of the loss</label><select id="lossLineOfBusiness" name="lossLineOfBusiness" value={formData.lossLineOfBusiness} onChange={handleChange} className={inputClass}><option value="">Select…</option><option value="Workers compensation">Workers compensation</option><option value="General liability">General liability</option><option value="Commercial auto">Commercial auto</option><option value="Property">Property</option><option value="Other">Other</option></select></div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div><label htmlFor="lossAmountPaid" className={labelClass}>Amount paid</label><input id="lossAmountPaid" name="lossAmountPaid" type="text" inputMode="numeric" value={formData.lossAmountPaid} onChange={handleChange} className={inputClass} /></div>
                          <div><label htmlFor="lossAmountReserved" className={labelClass}>Amount reserved</label><input id="lossAmountReserved" name="lossAmountReserved" type="text" inputMode="numeric" value={formData.lossAmountReserved} onChange={handleChange} className={inputClass} /></div>
                        </div>
                        <div><label htmlFor="lossHistoryStatus" className={labelClass}>Loss history status</label><select id="lossHistoryStatus" name="lossHistoryStatus" value={formData.lossHistoryStatus} onChange={handleChange} className={inputClass}><option value="">Select…</option><option value="No losses">No losses</option><option value="All claims closed">All claims closed</option><option value="One or more claims open">One or more claims open</option></select></div>
                        <div><label htmlFor="lossAdditional" className={labelClass}>Additional loss detail (other claims, dates, amounts)</label><textarea id="lossAdditional" name="lossAdditional" rows={2} value={formData.lossAdditional} onChange={handleChange} className={inputClass} /></div>
                      </div>

                      <div className="space-y-4 pt-5 border-t border-adobe">
                        <div>
                          <h3 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">Coverage requested</h3>
                          <p className="text-xs text-mocha/70 mt-0.5">When you need this policy to start.</p>
                        </div>
                        <div><label htmlFor="desiredEffectiveDate" className={labelClass}>Desired effective date *</label><input id="desiredEffectiveDate" name="desiredEffectiveDate" type="date" required value={formData.desiredEffectiveDate} onChange={handleChange} className={inputClass} /></div>
                        <div><label htmlFor="certificateHolderName" className={labelClass}>Certificate holder name</label><input id="certificateHolderName" name="certificateHolderName" type="text" value={formData.certificateHolderName} onChange={handleChange} className={inputClass} /></div>
                        <div><label htmlFor="certificateHolderAddress" className={labelClass}>Certificate holder address</label><textarea id="certificateHolderAddress" name="certificateHolderAddress" rows={2} value={formData.certificateHolderAddress} onChange={handleChange} className={inputClass} /></div>
                        <div><label htmlFor="additionalInsuredNeeded" className={labelClass}>Is an additional insured needed?</label><select id="additionalInsuredNeeded" name="additionalInsuredNeeded" value={formData.additionalInsuredNeeded} onChange={handleChange} className={inputClass}><option value="">Select…</option><option value="Yes">Yes</option><option value="No">No</option></select></div>
                        <div><label htmlFor="additionalInsuredName" className={labelClass}>Additional insured name</label><input id="additionalInsuredName" name="additionalInsuredName" type="text" value={formData.additionalInsuredName} onChange={handleChange} className={inputClass} /></div>
                      </div>

                      <div className="space-y-4 pt-5 border-t border-adobe">
                        <div>
                          <h3 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">Owners and officers</h3>
                          <p className="text-xs text-mocha/70 mt-0.5">Each owner or officer to be included or excluded.</p>
                        </div>
                        <OwnersFieldset
                          inputClass={inputClass}
                          labelClass={labelClass}
                          buttonClass="btn-secondary min-h-[44px]"
                          accentTextClass="text-clay"
                          mutedTextClass="text-mocha"
                          borderClass="border-adobe"
                          onFieldsChange={setOwnerFields}
                        />
                      </div>

                      <div>
                        <label htmlFor="notes" className={labelClass}>Tell us about your operation <span className="text-mocha/60 font-normal">(optional)</span></label>
                        <textarea id="notes" name="notes" rows={4} value={formData.notes} onChange={handleChange} placeholder={COPY.quote.messagePlaceholder} className={`${inputClass} resize-none`} />
                      </div>

                      {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

                      <button type="submit" disabled={submitting} className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-clay-gradient text-white font-heading font-bold rounded-full shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                        {submitting ? "Sending…" : "Request my free quote"}{!submitting && <ArrowRight className="h-5 w-5" />}
                      </button>
                      <p className="text-xs text-center text-mocha/70">No spam. No commitment. We'll only contact you about your quote.</p>
                    </form>
                  </FadeIn>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
