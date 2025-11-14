// src/components/Features.tsx
import React from "react";

type Feature = {
  id: number;
  title: string;
  short?: string;
  description: React.ReactNode;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Voice & Text Commands",
    short: "Talk or type — Lumora listens.",
    description: (
      <>
        <p className="mb-2">
          Say things like:
        </p>
        <div className="space-y-2 mb-3">
          <div className="rounded-md bg-slate-50 p-3 font-mono text-sm text-slate-700">
            “Add new lead: FinCore Lending, processing $30M annually.”
          </div>
          <div className="rounded-md bg-slate-50 p-3 font-mono text-sm text-slate-700">
            “Schedule demo with TechBank next Tuesday.”
          </div>
        </div>
        <p>
          Lumora instantly creates the lead profile, gathers company insights, and schedules tasks automatically. No typing, no searching, no switching apps.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "AI-Powered Task Automation",
    short: "Your digital co-pilot — automates repetitive work.",
    description: (
      <>
        <p className="mb-2">
          Lumora handles recurring work behind the scenes so you can focus on high-value tasks. It still keeps you in control — you review and approve.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Generates and sends follow-up emails</li>
          <li>Schedules client callbacks</li>
          <li>Updates CRM records automatically</li>
          <li>Prepares proposals and compliance packets</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "Meeting Recording & Transcription",
    short: "Capture every client conversation.",
    description: (
      <>
        <p className="mb-2">
          Lumora transcribes meetings, identifies key pain points, extracts action items, and logs everything neatly into the client record.
        </p>
        <p className="italic text-sm text-slate-600">Eg. “Send proposal by Friday” or “Needs updated PCI certificate” — never slips through the cracks again.</p>
      </>
    ),
  },
  {
    id: 4,
    title: "Smart Document Management",
    short: "Snap, categorize, attach.",
    description: (
      <>
        <p className="mb-2">
          Snap a photo of a business card or compliance document — Lumora automatically categorizes and attaches it to the right client.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Tracks expiration dates</li>
          <li>Sends renewal reminders</li>
          <li>Keeps all KYC/AML documents audit-ready</li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    title: "Predictive Lead Scoring",
    short: "Rank and prioritize automatically.",
    description: (
      <p>
        Using behavior signals and public data, Lumora predicts which prospects are most likely to convert so you can focus time where it matters most.
      </p>
    ),
  },
  {
    id: 6,
    title: "Compliance Automation",
    short: "Never miss regulatory work.",
    description: (
      <>
        <p className="mb-2">
          Lumora tracks compliance tasks — KYC checks, policy renewals, AML verifications — and color-codes status (Green / Amber / Red).
        </p>
        <p className="text-sm text-slate-600">You’ll know exactly what needs action, and when.</p>
      </>
    ),
  },
  {
    id: 7,
    title: "Seamless Integrations",
    short: "Plugs into the tools you already use.",
    description: (
      <>
        <p className="mb-2">Connect Lumora to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>CRM: Salesforce, HubSpot, Pipedrive</li>
          <li>Communication: Email, WhatsApp, SMS</li>
          <li>Calendar: Google, Outlook</li>
          <li>Compliance: KYC/AML verification platforms</li>
        </ul>
        <p className="mt-2">Lumora fits into your workflow — not the other way around.</p>
      </>
    ),
  },
  {
    id: 8,
    title: "24/7 Lead Capture",
    short: "Leads captured while you sleep.",
    description: (
      <>
        <p className="mb-2">
          If a prospect fills a form or calls after hours, Lumora creates the profile, asks qualifying questions, calculates ROI, and schedules next steps — all before your morning.
        </p>
      </>
    ),
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#fbfdff] to-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-2xl font-extrabold text-[#0066d6] mb-2">Features</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Built to accelerate FinTech sales & compliance
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            Powerful features designed to automate workflows, keep you audit-ready, and free your team to focus on deals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.id}
              className="group relative rounded-2xl bg-white shadow-[0_8px_30px_rgba(2,6,23,0.06)] border border-slate-100 p-6 hover:shadow-lg transition"
            >
              <header className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  {/* Accent marker */}
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0480e6] to-[#0066d6] flex items-center justify-center text-white font-bold">
                    {f.id}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                  {f.short && <p className="text-sm text-slate-600 mt-1">{f.short}</p>}
                </div>
              </header>

              <div className="mt-4 text-sm text-slate-700">{f.description}</div>

              {/* subtle footer / CTA */}
              <div className="mt-6 flex items-center gap-3">
                <span className="text-xs text-slate-500">Ready to try?</span>
                <a
                  href="#demo"
                  className="ml-auto inline-flex items-center gap-2 rounded-full bg-[#0066d6] px-3 py-1 text-xs font-semibold text-white shadow-sm hover:bg-[#004ea8] transition"
                >
                  Request demo
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA row at bottom */}
        <div className="mt-10 flex justify-center">
          <a
            href="#demo"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#0480e6] to-[#0066d6] text-white font-semibold shadow-lg hover:scale-[1.02] transform transition"
          >
            Request a demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;


// // Define the structure for a single feature item
// interface Feature {
//   id: number;
//   title: string;
//   description: string;
// }


// const Features = () => {
//   const features: Feature[] = [
//     {
//       id: 1,
//       title: 'Voice & Text Commands',
//       description:
//         'Talk or type — Lumora listens. Say things like: “Add new lead: FinCore Lending, processing $30M annually.” or “Schedule demo with TechBank next Tuesday.” Lumora instantly creates the lead profile, gathers company insights, and schedules tasks automatically. No typing, no searching, no switching apps.',
//     },
//     {
//       id: 2,
//       title: 'AI-Powered Task Automation',
//       description:
//         'Lumora acts like your digital co-pilot — handling repetitive tasks behind the scenes: Generates and sends follow-up emails, schedules client callbacks, updates CRM records automatically, and prepares proposals and compliance packets. You stay in control — just review and approve.',
//     },
//     {
//       id: 3,
//       title: 'Meeting Recording & Transcription',
//       description:
//         'Capture every client conversation — online or in person. Lumora transcribes meetings, identifies key pain points, extracts action items, and logs everything neatly into your client record. “Send proposal by Friday” or “Needs updated PCI certificate” — never slips through the cracks again.',
//     },
//     {
//       id: 4,
//       title: 'Smart Document Management',
//       description:
//         'Snap a photo of a business card or compliance document — Lumora automatically categorizes and attaches it to the right client. It tracks expiration dates, sends renewal reminders, and ensures all your KYC/AML documents stay audit-ready.',
//     },
//     {
//       id: 5,
//       title: 'Predictive Lead Scoring',
//       description:
//         'Lumora doesn’t just organize leads — it ranks them. Using behavior signals and public data, it predicts which prospects are most likely to convert, helping you focus your time where it matters most.',
//     },
//     {
//       id: 6,
//       title: 'Compliance Automation',
//       description:
//         'Never miss another regulatory requirement. Lumora tracks all compliance tasks — KYC checks, policy renewals, AML verifications — and color-codes their status (Green / Amber / Red). You’ll know exactly what needs action, and when.',
//     },
//     {
//       id: 7,
//       title: 'Seamless Integrations',
//       description:
//         'Connect Lumora to tools you already use: CRM (Salesforce, HubSpot, Pipedrive), Communication (Email, WhatsApp, SMS), Calendar (Google, Outlook), and Compliance (KYC/AML verification platforms). Lumora fits into your workflow — not the other way around.',
//     },
//     {
//       id: 8,
//       title: '24/7 Lead Capture',
//       description:
//         'Even while you’re offline, Lumora works. If a prospect fills a form or calls after hours, Lumora creates their profile, asks qualifying questions, calculates ROI, and schedules next steps — all before you start your morning.',
//     },
//   ];

//   return (
//     <section id="features" className="py-16 sm:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
//             Features
//           </h2>
//           <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
//             Everything You Need to Automate FinTech Sales
//           </p>
//           <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
//             Lumora AI provides a comprehensive suite of tools to eliminate administrative burden and ensure 100% audit readiness.
//           </p>
//         </div>

//         <div className="mt-16">
//           <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
//             {features.map((feature) => (
//               <div key={feature.id} className="relative">
//                 <dt>
//                   {/* Icon Placeholder - Use a simple circle for now, or replace with an actual icon library like Heroicons */}
//                   <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
//                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//                     </svg>
//                   </div>
//                   <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
//                     {feature.title}
//                   </p>
//                 </dt>
//                 <dd className="mt-2 ml-16 text-base text-gray-500">
//                   {feature.description}
//                 </dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;