// --- Main Features Section Component ---
const FeaturesSection = () => {
  // All data arrays and map functions have been removed and replaced with static JSX

  return (
    <section className="py-16 sm:py-24 bg-gray-50 overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
            Lumora AI Features
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            The intelligent co-pilot for financial services professionals.
          </p>
        </div>

        {/* 1. Three-Column Layout (Features 5, 6, 8) - Hardcoded */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 5: Predictive Lead Scoring */}
          <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Predictive Lead Scoring</h3>
            <p className="text-sm font-semibold text-blue-600 mb-4">Lumora doesn’t just organize leads — it ranks them.</p>
            <p className="text-gray-600 text-base mb-3">Using behavior signals and public data, it predicts which prospects are most likely to convert, helping you focus your time where it matters most.</p>
          </div>

          {/* Feature 6: Compliance Automation */}
          <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Compliance Automation</h3>
            <p className="text-sm font-semibold text-blue-600 mb-4">Never miss another regulatory requirement.</p>
            <p className="text-gray-600 text-base mb-3">Lumora tracks all compliance tasks — KYC checks, policy renewals, AML verifications — and color-codes their status (Green / Amber / Red).</p>
            <p className="text-gray-600 text-base mb-3">You’ll know exactly what needs action, and when.</p>
          </div>

          {/* Feature 8: 24/7 Lead Capture */}
          <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Lead Capture</h3>
            <p className="text-sm font-semibold text-blue-600 mb-4">Even while you’re offline, Lumora works.</p>
            <p className="text-gray-600 text-base mb-3">If a prospect fills a form or calls after hours, Lumora creates their profile, asks qualifying questions, calculates ROI, and schedules next steps — all before you start your morning.</p>
          </div>

        </div>

        {/* 2. Alternating Layout (Remaining Features) - Hardcoded */}
        <div className="divide-y divide-gray-200">
          
          {/* Feature 1: Voice & Text Commands (Index 0 - Image Right) */}
          <div className="py-12 lg:py-20 border-b border-gray-100 last:border-b-0">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 lg:gap-16">
              
              {/* Image/Placeholder Column */}
              <div className="w-full md:w-1/2">
  <div className="h-3/4 w-3/4 rounded-xl overflow-hidden">
    <img
      src="/voice cmd.png"  // your image path
      alt="Feature 1"
      className="w-full h-full object-contain"
    />
  </div>
</div>

              {/* Content Column */}
              <div className="w-full md:w-1/2 ml-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Voice & Text Commands</h2>
                <p className="text-xl font-semibold text-blue-600 mb-6">Talk or type — Lumora listens.</p>
                
                <p className="text-lg text-gray-700 mb-4">Say things like: “Add new lead: FinCore Lending, processing $30M annually.” or “Schedule demo with TechBank next Tuesday.”</p>
                <p className="text-lg text-gray-700 mb-4">Lumora instantly creates the lead profile, gathers company insights, and schedules tasks automatically. No typing, no searching, no switching apps.</p>
              </div>
            </div>
          </div>

          {/* Feature 2: AI-Powered Task Automation (Index 1 - Image Left) */}
          <div className=" border-b border-gray-100 last:border-b-0">
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
              
              {/* Image/Placeholder Column */}
              <div className="w-full md:w-1/2 ml-20">
  <div className="rounded-xl overflow-hidden">
    <img
      src="/task auto.png"  // your image path
      alt="Feature 1"
      className="w-3/4 h-3/4 object-cover rounded-2xl"
    />
  </div>
</div>


              {/* Content Column */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">AI-Powered Task Automation</h2>
                <p className="text-xl font-semibold text-blue-600 mb-6">Lumora acts like your digital co-pilot — handling repetitive tasks behind the scenes.</p>
                
                <p className="text-lg text-gray-700 mb-4">You stay in control — just review and approve.</p>

                <ul className="space-y-3 mt-6 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span>Generates and sends follow-up emails</span>
                  </li>
                  <li className="flex items-start">
                    <span>Schedules client callbacks</span>
                  </li>
                  <li className="flex items-start">
                    <span>Updates CRM records automatically</span>
                  </li>
                  <li className="flex items-start">
                    <span>Prepares proposals and compliance packets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 3: Meeting Recording & Transcription (Index 2 - Image Right) */}
          <div className="py-12 lg:py-20 border-b border-gray-100 last:border-b-0">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 lg:gap-16">
              
              {/* Image/Placeholder Column */}
              <div className="w-full md:w-1/2">
  <div className="h-3/4 w-3/4 rounded-xl overflow-hidden">
    <img
      src="/recording.png"  // your image path
      alt="Feature 1"
      className="w-full h-full object-contain rounded-2xl"
    />
  </div>
</div>

              {/* Content Column */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Meeting Recording & Transcription</h2>
                <p className="text-xl font-semibold text-blue-600 mb-6">Capture every client conversation — online or in person.</p>
                
                <p className="text-lg text-gray-700 mb-4">Lumora transcribes meetings, identifies key pain points, extracts action items, and logs everything neatly into your client record.</p>
                <p className="text-lg text-gray-700 mb-4">Examples: “Send proposal by Friday” or “Needs updated PCI certificate” — never slips through the cracks again.</p>
              </div>
            </div>
          </div>

          

        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;



// import React from "react";

// /* ---------- FeaturesData (you can replace with an import) ---------- */
// const FeaturesData = [
//   { id: 1, title: "Voice & Text Commands", subtitle: "Talk or type — Lumora listens.", paragraphs: [ 'Say things like: “Add new lead: FinCore Lending, processing $30M annually.” or “Schedule demo with TechBank next Tuesday.”', "Lumora instantly creates the lead profile, gathers company insights, and schedules tasks automatically. No typing, no searching, no switching apps." ] },
//   { id: 2, title: "AI-Powered Task Automation", subtitle: "Lumora acts like your digital co-pilot — handling repetitive tasks behind the scenes.", paragraphs: [ "You stay in control — just review and approve." ], bullets: [ "Generates and sends follow-up emails", "Schedules client callbacks", "Updates CRM records automatically", "Prepares proposals and compliance packets" ] },
//   { id: 3, title: "Meeting Recording & Transcription", subtitle: "Capture every client conversation — online or in person.", paragraphs: [ "Lumora transcribes meetings, identifies key pain points, extracts action items, and logs everything neatly into your client record.", 'Examples: “Send proposal by Friday” or “Needs updated PCI certificate” — never slips through the cracks again.' ] },
//   { id: 4, title: "Smart Document Management", subtitle: "Snap a photo of a business card or compliance document — Lumora automatically categorizes and attaches it to the right client.", paragraphs: [ "It tracks expiration dates, sends renewal reminders, and ensures all your KYC/AML documents stay audit-ready." ] },
//   { id: 5, title: "Predictive Lead Scoring", subtitle: "Lumora doesn’t just organize leads — it ranks them.", paragraphs: [ "Using behavior signals and public data, it predicts which prospects are most likely to convert, helping you focus your time where it matters most." ] },
//   { id: 6, title: "Compliance Automation", subtitle: "Never miss another regulatory requirement.", paragraphs: [ "Lumora tracks all compliance tasks — KYC checks, policy renewals, AML verifications — and color-codes their status (Green / Amber / Red).", "You’ll know exactly what needs action, and when." ] },
//   { id: 7, title: "Seamless Integrations", subtitle: "Connect Lumora to tools you already use:", paragraphs: [ "Lumora fits into your workflow — not the other way around." ], bullets: [ "CRM: Salesforce, HubSpot, Pipedrive", "Communication: Email, WhatsApp, SMS", "Calendar: Google, Outlook", "Compliance: KYC/AML verification platforms" ] },
//   { id: 8, title: "24/7 Lead Capture", subtitle: "Even while you’re offline, Lumora works.", paragraphs: [ "If a prospect fills a form or calls after hours, Lumora creates their profile, asks qualifying questions, calculates ROI, and schedules next steps — all before you start your morning." ] }
// ];

// /* ---------- Types ---------- */
// type Feature = {
//   id: number;
//   title: string;
//   subtitle?: string;
//   paragraphs: string[];
//   bullets?: string[];
//   image?: string;
// };

// /* ---------- Three-column feature card ---------- */
// const ThreeColumnFeature: React.FC<{ feature: Feature }> = ({ feature }) => {
//   return (
//     <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col">
//       <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
//       {feature.subtitle && <p className="text-sm font-semibold text-blue-600 mb-4">{feature.subtitle}</p>}
//       {feature.paragraphs.map((p, i) => (
//         <p key={i} className="text-gray-600 text-base mb-3">{p}</p>
//       ))}
//       {feature.bullets && (
//         <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
//           {feature.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
//         </ul>
//       )}
//     </div>
//   );
// };

// /* ---------- Alternating feature row (image left/right alternating) ---------- */
// const AlternatingFeature: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
//   // first alternating row should have image on right (index 0 -> right)
//   const imageOnRight = index % 2 === 0;

//   // order classes for md+ screens
//   const textOrderClass = imageOnRight ? "md:order-1" : "md:order-2";
//   const imageOrderClass = imageOnRight ? "md:order-2" : "md:order-1";

//   return (
//     <section className="py-12 lg:py-20 border-b border-gray-100 last:border-b-0"
//     id="features">
//       <div className={`flex flex-col md:flex-row items-center gap-8 lg:gap-16`}>
//         {/* Text */}
//         <div className={`w-full md:w-1/2 ${textOrderClass}`}>
//           <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">{feature.title}</h2>
//           {feature.subtitle && <p className="text-lg font-semibold text-blue-600 mb-6">{feature.subtitle}</p>}

//           {feature.paragraphs.map((p, i) => (
//             <p key={i} className="text-lg text-gray-700 mb-4">{p}</p>
//           ))}

//           {feature.bullets && (
//             <ul className="mt-4 space-y-3 text-lg text-gray-700">
//               {feature.bullets.map((b, bi) => (
//                 <li key={bi} className="flex items-start gap-3">
//                   <svg className="flex-shrink-0 w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                   </svg>
//                   <span>{b}</span>
//                 </li>
//               ))}
//             </ul>
//           )}

//         </div>

//         {/* Image / Illustration */}
//         <div className={`w-full md:w-1/2 ${imageOrderClass} flex justify-center`}>
//           {feature.image ? (
//             <img src={feature.image} alt={feature.title} className="w-full max-w-md rounded-2xl shadow-lg object-cover" />
//           ) : (
//             <div className="w-full max-w-md rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-[#eef7ff] to-white border border-slate-100 p-6 flex items-center justify-center">
//               {/* Simple placeholder SVG */}
//               <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//                 <rect x="6" y="6" width="208" height="128" rx="12" fill="white" stroke="#e6f0ff"/>
//                 <circle cx="48" cy="48" r="28" fill="#eaf6ff"/>
//                 <rect x="86" y="26" width="110" height="18" rx="6" fill="#eef7ff"/>
//                 <rect x="86" y="54" width="78" height="12" rx="6" fill="#f7fbff"/>
//                 <rect x="86" y="74" width="100" height="12" rx="6" fill="#f7fbff"/>
//                 <rect x="20" y="92" width="84" height="18" rx="6" fill="#eef7ff"/>
//                 <path d="M0 138h220" stroke="#f0f6ff"/>
//               </svg>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// /* ---------- Main FeaturesSection component ---------- */
// const FeaturesSection: React.FC = () => {
//   // define which ids should be in the 3-column row
//   const threeColumnIds = [5, 6, 8];

//   // cast to Feature[]
//   const features = FeaturesData as unknown as Feature[];

//   const threeColumnFeatures = features.filter((f) => threeColumnIds.includes(f.id)).sort((a, b) => a.id - b.id);
//   const alternatingFeatures = features.filter((f) => !threeColumnIds.includes(f.id)).sort((a, b) => a.id - b.id);

//   return (
//     <section className="py-16 sm:py-24 bg-gray-50" id="features">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">Lumora AI Features</h1>
//           <p className="mt-4 text-xl text-gray-600">The intelligent co-pilot for financial services professionals.</p>
//         </div>

//         {/* 3-column row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//           {threeColumnFeatures.map((f) => <ThreeColumnFeature key={f.id} feature={f} />)}
//         </div>

//         {/* Alternating rows */}
//         <div className="divide-y divide-gray-200">
//           {alternatingFeatures.map((f, idx) => <AlternatingFeature key={f.id} feature={f} index={idx} />)}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;


// Assume this data is imported from the file the user provided

// type Feature = {
//   id: number;
//   title: string;
//   subtitle?: string;
//   paragraphs: string[];
//   bullets?: string[];
//   image?: string;
// };
// const FeaturesData = [
//   {
//     id: 1,
//     title: "Voice & Text Commands",
//     subtitle: "Talk or type — Lumora listens.",
//     paragraphs: [
//       'Say things like: “Add new lead: FinCore Lending, processing $30M annually.” or “Schedule demo with TechBank next Tuesday.”',
//       "Lumora instantly creates the lead profile, gathers company insights, and schedules tasks automatically. No typing, no searching, no switching apps."
//     ]
//   },
//   {
//     id: 2,
//     title: "AI-Powered Task Automation",
//     subtitle: "Lumora acts like your digital co-pilot — handling repetitive tasks behind the scenes.",
//     paragraphs: [
//       "You stay in control — just review and approve."
//     ],
//     bullets: [
//       "Generates and sends follow-up emails",
//       "Schedules client callbacks",
//       "Updates CRM records automatically",
//       "Prepares proposals and compliance packets"
//     ]
//   },
//   {
//     id: 3,
//     title: "Meeting Recording & Transcription",
//     subtitle: "Capture every client conversation — online or in person.",
//     paragraphs: [
//       "Lumora transcribes meetings, identifies key pain points, extracts action items, and logs everything neatly into your client record.",
//       'Examples: “Send proposal by Friday” or “Needs updated PCI certificate” — never slips through the cracks again.'
//     ]
//   },
//   {
//     id: 4,
//     title: "Smart Document Management",
//     subtitle: "Snap a photo of a business card or compliance document — Lumora automatically categorizes and attaches it to the right client.",
//     paragraphs: [
//       "It tracks expiration dates, sends renewal reminders, and ensures all your KYC/AML documents stay audit-ready."
//     ]
//   },
//   {
//     id: 5,
//     title: "Predictive Lead Scoring",
//     subtitle: "Lumora doesn’t just organize leads — it ranks them.",
//     paragraphs: [
//       "Using behavior signals and public data, it predicts which prospects are most likely to convert, helping you focus your time where it matters most."
//     ]
//   },
//   {
//     id: 6,
//     title: "Compliance Automation",
//     subtitle: "Never miss another regulatory requirement.",
//     paragraphs: [
//       "Lumora tracks all compliance tasks — KYC checks, policy renewals, AML verifications — and color-codes their status (Green / Amber / Red).",
//       "You’ll know exactly what needs action, and when."
//     ]
//   },
//   {
//     id: 7,
//     title: "Seamless Integrations",
//     subtitle: "Connect Lumora to tools you already use:",
//     paragraphs: [
//       "Lumora fits into your workflow — not the other way around."
//     ],
//     bullets: [
//       "CRM: Salesforce, HubSpot, Pipedrive",
//       "Communication: Email, WhatsApp, SMS",
//       "Calendar: Google, Outlook",
//       "Compliance: KYC/AML verification platforms"
//     ]
//   },
//   {
//     id: 8,
//     title: "24/7 Lead Capture",
//     subtitle: "Even while you’re offline, Lumora works.",
//     paragraphs: [
//       "If a prospect fills a form or calls after hours, Lumora creates their profile, asks qualifying questions, calculates ROI, and schedules next steps — all before you start your morning."
//     ]
//   }
// ];

// // --- Component for the 3-column layout (Features 5, 6, 8) ---
// const ThreeColumnFeature = ({ feature }: { feature: { id: number; title: string; subtitle?: string; paragraphs: string[]; bullets?: string[] } }) => (
//   <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col">
//     <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
//     <p className="text-sm font-semibold text-blue-600 mb-4">{feature.subtitle}</p>
//     {feature.paragraphs.map((p, i) => (
//       <p key={i} className="text-gray-600 text-base mb-3">{p}</p>
//     ))}
//   </div>
// );

// // --- Component for the alternating layout (Remaining Features) ---
// const AlternatingFeature = ({ feature, index }: { feature: Feature; index: number }) => {
//   // Determine if the image should be on the right (index is even) or left (index is odd)
//   const isImageRight = index % 2 === 0;

//   return (
//     <div className="py-12 lg:py-20 border-b border-gray-100 last:border-b-0">
//       <div className={`flex flex-col md:flex-row items-center gap-8 lg:gap-16 ${isImageRight ? 'md:flex-row-reverse' : ''}`}>
        
//         {/* Image/Placeholder Column (Always 1/2 width on medium screens and up) */}
//         <div className="w-full md:w-1/2">
//           {/* Placeholder for the image. In a real app, this would be an actual image component. */}
//           <div className="bg-gray-100 h-64 sm:h-80 lg:h-96 rounded-xl flex items-center justify-center text-gray-500 font-medium">
//             Image Placeholder for Feature {feature.id}
//           </div>
//         </div>

//         {/* Content Column (Always 1/2 width on medium screens and up) */}
//         <div className="w-full md:w-1/2">
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">{feature.title}</h2>
//           <p className="text-xl font-semibold text-blue-600 mb-6">{feature.subtitle}</p>
          
//           {feature.paragraphs.map((p, i) => (
//             <p key={i} className="text-lg text-gray-700 mb-4">{p}</p>
//           ))}

//           {feature.bullets && (
//             <ul className="space-y-3 mt-6 text-lg text-gray-700">
//               {feature.bullets.map((bullet, i) => (
//                 <li key={i} className="flex items-start">
//                   {/* Checkmark Icon */}
//                   <svg className="flex-shrink-0 w-6 h-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span>{bullet}</span>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- Main Features Section Component ---
// const FeaturesSection = () => {
//   // Filter the features based on the user's request
//   const threeColumnIds = [5, 6, 8];
//   const threeColumnFeatures = FeaturesData.filter(f => threeColumnIds.includes(f.id));
//   const alternatingFeatures = FeaturesData.filter(f => !threeColumnIds.includes(f.id));

//   return (
//     <section className="py-16 sm:py-24 bg-gray-50" id="features">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Main Heading */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
//             Lumora AI Features
//           </h1>
//           <p className="mt-4 text-xl text-gray-600">
//             The intelligent co-pilot for financial services professionals.
//           </p>
//         </div>

//         {/* 1. Three-Column Layout (Features 5, 6, 8) */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//           {threeColumnFeatures.map(feature => (
//             <ThreeColumnFeature key={feature.id} feature={feature} />
//           ))}
//         </div>

//         {/* 2. Alternating Layout (Remaining Features) */}
//         <div className="divide-y divide-gray-200">
//           {alternatingFeatures.map((feature, index) => (
//             <AlternatingFeature key={feature.id} feature={feature} index={index} />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;


// // src/components/FeaturesLayout.tsx
// import React from "react";
// import Features from "../features"; // <- adjust path if your data file is elsewhere

// type FeatureType = {
//   id: number;
//   title: string;
//   subtitle?: string;
//   paragraphs: string[];
//   bullets?: string[];
//   // optional image URL if you want per-feature images
//   image?: string;
// };

// const ThreeUpRow: React.FC<{ items: FeatureType[] }> = ({ items }) => (
//   <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-3">
//     {items.map((f) => (
//       <div
//         key={f.id}
//         className="rounded-2xl bg-white p-6 border border-slate-100 shadow-sm flex flex-col"
//       >
//         <div className="inline-flex items-center gap-3">
//           <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0480e6] to-[#0066d6] text-white font-bold flex items-center justify-center">
//             {f.id}
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
//             {f.subtitle && <p className="text-sm text-slate-600 mt-1">{f.subtitle}</p>}
//           </div>
//         </div>

//         <div className="mt-4 text-sm text-slate-700 flex-1">
//           {f.paragraphs.map((p, i) => (
//             <p key={i} className={i === 0 ? "mb-2" : "mb-1"}>
//               {p}
//             </p>
//           ))}
//           {f.bullets && (
//             <ul className="list-disc pl-5 mt-2 text-sm space-y-0.5">
//               {f.bullets.map((b,bi) => <li key={bi}>{b}</li>)}
//             </ul>
//           )}
//         </div>

//         {/* <div className="mt-4">
//           <a
//             href="#demo"
//             className="inline-flex items-center gap-2 rounded-full bg-[#0066d6] px-3 py-1 text-xs font-semibold text-white shadow-sm hover:bg-[#004ea8] transition"
//           >
//             Request demo
//           </a>
//         </div> */}
//       </div>
//     ))}
//   </div>
// );

// const AlternatingFeatureRow: React.FC<{ feature: FeatureType; index: number }> = ({ feature, index }) => {
//   // image on right for even (0) index per your request: first row image right => index 0 -> image right
//   const imageOnRight = index % 2 === 0;
//   return (
//     <div
//       className={`mt-10 grid gap-8 items-center ${
//         // two columns on md+, single column on small screens
//         "grid-cols-1 md:grid-cols-2"
//       } ${imageOnRight ? "" : "md:grid-flow-row-dense"}`}
//       // md:grid-flow-row-dense helps keep order control but we'll use order classes on children
//     >
//       {/* Text column */}
//       <div className={`${imageOnRight ? "md:order-1" : "md:order-2"}`}>
//         <div className="max-w-xl">
//           <div className="inline-flex items-center gap-3">
//             <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0480e6] to-[#0066d6] text-white font-bold flex items-center justify-center">
//               {feature.id}
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold text-slate-900">{feature.title}</h3>
//               {feature.subtitle && <p className="text-sm text-slate-600 mt-1">{feature.subtitle}</p>}
//             </div>
//           </div>

//           <div className="mt-4 text-slate-700 space-y-2">
//             {feature.paragraphs.map((p, i) => (
//               <p key={i}>{p}</p>
//             ))}

//             {feature.bullets && (
//               <ul className="list-disc pl-5 mt-1 space-y-1">
//                 {feature.bullets.map((b, bi) => (
//                   <li key={bi}>{b}</li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           <div className="mt-5">
//             <a className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0480e6] to-[#0066d6] px-4 py-2 text-sm font-semibold text-white shadow-md hover:scale-[1.02] transform transition" href="#demo">
//               Request demo
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Image / illustration column */}
//       <div className={`${imageOnRight ? "md:order-2" : "md:order-1"} flex justify-center`}>
//         {/* If feature.image is provided, show an <img>. Otherwise show a simple illustrative SVG/placeholder */}
//         {feature.image ? (
//           <img src={feature.image} alt={feature.title} className="w-full max-w-md rounded-2xl shadow-lg object-cover" />
//         ) : (
//           <div className="w-full max-w-md rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-[#eef7ff] to-white border border-slate-100 p-6 flex items-center justify-center">
//             {/* simple illustrative svg */}
//             <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//               <rect x="6" y="6" width="208" height="128" rx="12" fill="white" stroke="#e6f0ff"/>
//               <circle cx="48" cy="48" r="28" fill="#eaf6ff"/>
//               <rect x="86" y="26" width="110" height="18" rx="6" fill="#eef7ff"/>
//               <rect x="86" y="54" width="78" height="12" rx="6" fill="#f7fbff"/>
//               <rect x="86" y="74" width="100" height="12" rx="6" fill="#f7fbff"/>
//               <rect x="20" y="92" width="84" height="18" rx="6" fill="#eef7ff"/>
//               <path d="M0 138h220" stroke="#f0f6ff"/>
//             </svg>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const FeaturesLayout: React.FC = () => {
//   // map your imported Features (untyped) to typed objects
//   const features = (Features as FeatureType[]);

//   // first row under heading should be features 5,6,8 (based on id)
//   const threeUp = features.filter((f) => [5, 6, 8].includes(f.id)).sort((a,b)=>a.id - b.id);

//   // remaining features sorted by id except 5,6,8
//   const remaining = features.filter((f) => ![5, 6, 8].includes(f.id)).sort((a,b)=>a.id - b.id);

//   return (
//     <section className="py-16 bg-gradient-to-b from-[#fbfdff] to-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <header className="text-center mb-8">
//           <p className="text-sm font-extrabold text-[#0066d6] mb-2">Features</p>
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
//             Built to accelerate FinTech sales & compliance
//           </h2>
//           <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
//             Powerful features designed to automate workflows, keep you audit-ready, and free your team to focus on deals.
//           </p>
//         </header>

//         {/* 3-up row for 5,6,8 */}
//         <ThreeUpRow items={threeUp} />

//         {/* remaining features as alternating image/text rows */}
//         <div className="mt-8">
//           {remaining.map((f, idx) => (
//             <AlternatingFeatureRow key={f.id} feature={f} index={idx} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesLayout;



// // src/components/Features.tsx
// import React from "react";

// type Feature = {
//   id: number;
//   title: string;
//   short?: string;
//   description: React.ReactNode;
// };

// const features: Feature[] = [
//   {
//     id: 1,
//     title: "Voice & Text Commands",
//     short: "Talk or type — Lumora listens.",
//     description: (
//       <>
//         <p className="mb-2">
//           Say things like:
//         </p>
//         <div className="space-y-2 mb-3">
//           <div className="rounded-md bg-slate-50 p-3 font-mono text-sm text-slate-700">
//             “Add new lead: FinCore Lending, processing $30M annually.”
//           </div>
//           <div className="rounded-md bg-slate-50 p-3 font-mono text-sm text-slate-700">
//             “Schedule demo with TechBank next Tuesday.”
//           </div>
//         </div>
//         <p>
//           Lumora instantly creates the lead profile, gathers company insights, and schedules tasks automatically. No typing, no searching, no switching apps.
//         </p>
//       </>
//     ),
//   },
//   {
//     id: 2,
//     title: "AI-Powered Task Automation",
//     short: "Your digital co-pilot — automates repetitive work.",
//     description: (
//       <>
//         <p className="mb-2">
//           Lumora handles recurring work behind the scenes so you can focus on high-value tasks. It still keeps you in control — you review and approve.
//         </p>
//         <ul className="list-disc pl-5 space-y-1">
//           <li>Generates and sends follow-up emails</li>
//           <li>Schedules client callbacks</li>
//           <li>Updates CRM records automatically</li>
//           <li>Prepares proposals and compliance packets</li>
//         </ul>
//       </>
//     ),
//   },
//   {
//     id: 3,
//     title: "Meeting Recording & Transcription",
//     short: "Capture every client conversation.",
//     description: (
//       <>
//         <p className="mb-2">
//           Lumora transcribes meetings, identifies key pain points, extracts action items, and logs everything neatly into the client record.
//         </p>
//         <p className="italic text-sm text-slate-600">Eg. “Send proposal by Friday” or “Needs updated PCI certificate” — never slips through the cracks again.</p>
//       </>
//     ),
//   },
//   {
//     id: 4,
//     title: "Smart Document Management",
//     short: "Snap, categorize, attach.",
//     description: (
//       <>
//         <p className="mb-2">
//           Snap a photo of a business card or compliance document — Lumora automatically categorizes and attaches it to the right client.
//         </p>
//         <ul className="list-disc pl-5 space-y-1">
//           <li>Tracks expiration dates</li>
//           <li>Sends renewal reminders</li>
//           <li>Keeps all KYC/AML documents audit-ready</li>
//         </ul>
//       </>
//     ),
//   },
//   {
//     id: 5,
//     title: "Predictive Lead Scoring",
//     short: "Rank and prioritize automatically.",
//     description: (
//       <p>
//         Using behavior signals and public data, Lumora predicts which prospects are most likely to convert so you can focus time where it matters most.
//       </p>
//     ),
//   },
//   {
//     id: 6,
//     title: "Compliance Automation",
//     short: "Never miss regulatory work.",
//     description: (
//       <>
//         <p className="mb-2">
//           Lumora tracks compliance tasks — KYC checks, policy renewals, AML verifications — and color-codes status (Green / Amber / Red).
//         </p>
//         <p className="text-sm text-slate-600">You’ll know exactly what needs action, and when.</p>
//       </>
//     ),
//   },
//   {
//     id: 7,
//     title: "Seamless Integrations",
//     short: "Plugs into the tools you already use.",
//     description: (
//       <>
//         <p className="mb-2">Connect Lumora to:</p>
//         <ul className="list-disc pl-5 space-y-1">
//           <li>CRM: Salesforce, HubSpot, Pipedrive</li>
//           <li>Communication: Email, WhatsApp, SMS</li>
//           <li>Calendar: Google, Outlook</li>
//           <li>Compliance: KYC/AML verification platforms</li>
//         </ul>
//         <p className="mt-2">Lumora fits into your workflow — not the other way around.</p>
//       </>
//     ),
//   },
//   {
//     id: 8,
//     title: "24/7 Lead Capture",
//     short: "Leads captured while you sleep.",
//     description: (
//       <>
//         <p className="mb-2">
//           If a prospect fills a form or calls after hours, Lumora creates the profile, asks qualifying questions, calculates ROI, and schedules next steps — all before your morning.
//         </p>
//       </>
//     ),
//   },
// ];

// const Features: React.FC = () => {
//   return (
//     <section className="bg-gradient-to-b from-[#fbfdff] to-white py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-10">
//           <p className="text-2xl font-extrabold text-[#0066d6] mb-2">Features</p>
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
//             Built to accelerate FinTech sales & compliance
//           </h2>
//           <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
//             Powerful features designed to automate workflows, keep you audit-ready, and free your team to focus on deals.
//           </p>
//         </div>

//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {features.map((f) => (
//             <article
//               key={f.id}
//               className="group relative rounded-2xl bg-white shadow-[0_8px_30px_rgba(2,6,23,0.06)] border border-slate-100 p-6 hover:shadow-lg transition"
//             >
//               <header className="flex items-start gap-4">
//                 <div className="shrink-0 mt-1">
//                   {/* Accent marker */}
//                   <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0480e6] to-[#0066d6] flex items-center justify-center text-white font-bold">
//                     {f.id}
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
//                   {f.short && <p className="text-sm text-slate-600 mt-1">{f.short}</p>}
//                 </div>
//               </header>

//               <div className="mt-4 text-sm text-slate-700">{f.description}</div>

//               {/* subtle footer / CTA */}
//               <div className="mt-6 flex items-center gap-3">
//                 <span className="text-xs text-slate-500">Ready to try?</span>
//                 <a
//                   href="#demo"
//                   className="ml-auto inline-flex items-center gap-2 rounded-full bg-[#0066d6] px-3 py-1 text-xs font-semibold text-white shadow-sm hover:bg-[#004ea8] transition"
//                 >
//                   Request demo
//                 </a>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* CTA row at bottom */}
//         <div className="mt-10 flex justify-center">
//           <a
//             href="#demo"
//             className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#0480e6] to-[#0066d6] text-white font-semibold shadow-lg hover:scale-[1.02] transform transition"
//           >
//             Request a demo
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;


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