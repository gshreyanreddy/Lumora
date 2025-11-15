import React from "react";

/* Workflow data (kept inline for convenience) */
const workflowSteps = [
  {
    step: 1,
    title: "Daily Operations (Your New Routine)",
    subtitle: "Lumora integrates seamlessly into your day, handling the routine so you can focus on the client.",
    details: [
      "Morning: Lumora generates your priority list — urgent leads, compliance alerts, and pending follow-ups — all ready for your review.",
      "During the Day: Add leads by voice, record client meetings, or reply to AI-drafted follow-ups — Lumora syncs it all to your CRM in real time.",
      "Evening: Get an auto-generated summary of your day, updated compliance status, and tomorrow’s suggested actions."
    ],
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  },
  {
    step: 2,
    title: "Continuous Automation",
    subtitle: "Lumora runs 24/7, ensuring no lead is missed and all compliance is up-to-date, even while you’re offline.",
    details: [
      "Lumora runs 24/7 — capturing new leads from your website, emails, and forms even while you’re offline.",
      "It validates compliance documents, updates client records, and keeps every contact perfectly organized behind the scenes."
    ],
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
      </svg>
    )
  },
  {
    step: 3,
    title: "Smart Insights & Learning",
    subtitle: "Every interaction makes Lumora smarter, continuously optimizing your sales process for maximum conversion.",
    details: [
      "Every week, Lumora gets smarter — identifying patterns in your sales cycle, ranking your best prospects, and optimizing when and how to follow up.",
      "It evolves with your business, turning every interaction into insight and every task into progress."
    ],
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
    )
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50" id="how">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900">The 3-Step Lumora Workflow</p>
        </div>

        {/* Workflow Steps Grid */}
        <div className="relative">
          {/* Vertical Line Connector */}
          <div className="absolute inset-y-0 left-4 w-0.5 bg-blue-200 lg:hidden" aria-hidden />
          <div className="hidden lg:block absolute inset-y-0 left-1/2 w-0.5 bg-blue-200 transform -translate-x-1/2" aria-hidden />

          {workflowSteps.map((step, index) => (
            <div
              key={step.step}
              className={`relative flex flex-col items-start pl-10 lg:pl-0 lg:items-center lg:flex-row py-10 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Content Column */}
              <div className="lg:w-5/12">
                <div className="p-6 bg-white rounded-xl shadow-xl border border-gray-100 lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-lg font-medium text-blue-600 mb-4">{step.subtitle}</p>

                  {/* Use native bullets — remove tick SVGs and flex on <li> */}
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    {step.details.map((detail, i) => (
                      <li key={i} className="text-base">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step Number/Icon Circle */}
              <div className="lg:w-2/12 flex justify-center my-6 lg:my-0">
                <div className="relative">
                  {/* MOBILE ONLY circle */}
                  <div className="absolute -left-10 top-3 lg:hidden">
                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center ring-8 ring-gray-50 shadow-2xl z-10">
                      {step.icon}
                    </div>
                  </div>

                  {/* DESKTOP ONLY circle */}
                  <div className="hidden lg:block">
                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center ring-8 ring-gray-50 shadow-2xl z-10">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty Column (or placeholder for images on desktop) */}
              <div className="lg:w-5/12" />
            </div>
          ))}
        </div>

        {/* Final Result Section */}
        <div className="pt-10 border-t border-gray-200 text-center">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
            Result: You spend less time managing your workflow and more time moving it forward
          </h3>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            — with every client interaction automatically recorded, every deadline met, and every opportunity maximized.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;




// import React from "react";

// /* Workflow data (kept inline for convenience) */
// const workflowSteps = [
//   {
//     step: 1,
//     title: "Daily Operations (Your New Routine)",
//     subtitle: "Lumora integrates seamlessly into your day, handling the routine so you can focus on the client.",
//     details: [
//       "Morning: Lumora generates your priority list — urgent leads, compliance alerts, and pending follow-ups — all ready for your review.",
//       "During the Day: Add leads by voice, record client meetings, or reply to AI-drafted follow-ups — Lumora syncs it all to your CRM in real time.",
//       "Evening: Get an auto-generated summary of your day, updated compliance status, and tomorrow’s suggested actions."
//     ],
//     icon: (
//       <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//       </svg>
//     )
//   },
//   {
//     step: 2,
//     title: "Continuous Automation",
//     subtitle: "Lumora runs 24/7, ensuring no lead is missed and all compliance is up-to-date, even while you’re offline.",
//     details: [
//       "Lumora runs 24/7 — capturing new leads from your website, emails, and forms even while you’re offline.",
//       "It validates compliance documents, updates client records, and keeps every contact perfectly organized behind the scenes."
//     ],
//     icon: (
//       <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
//       </svg>
//     )
//   },
//   {
//     step: 3,
//     title: "Smart Insights & Learning",
//     subtitle: "Every interaction makes Lumora smarter, continuously optimizing your sales process for maximum conversion.",
//     details: [
//       "Every week, Lumora gets smarter — identifying patterns in your sales cycle, ranking your best prospects, and optimizing when and how to follow up.",
//       "It evolves with your business, turning every interaction into insight and every task into progress."
//     ],
//     icon: (
//       <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
//       </svg>
//     )
//   }
// ];

// const HowItWorksSection: React.FC = () => {
//   return (
//     <section className="py-16 sm:py-24 bg-gray-50" id="how">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
//             How It Works
//           </h2>
//           <p className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900">
//             The 3-Step Lumora Workflow
//           </p>
//         </div>

//         {/* Workflow Steps Grid */}
//         <div className="relative">
//           {/* Vertical Line Connector */}
//           <div className="absolute inset-y-0 left-4 w-0.5 bg-blue-200 lg:hidden" aria-hidden />
//           <div className="hidden lg:block absolute inset-y-0 left-1/2 w-0.5 bg-blue-200 transform -translate-x-1/2" aria-hidden />

//           {workflowSteps.map((step, index) => (
//             <div
//               key={step.step}
//               className={`relative flex flex-col items-start pl-10 lg:pl-0 lg:items-center lg:flex-row py-10 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
//             >
//               {/* Content Column */}
//               <div className="lg:w-5/12">
//                 <div className="p-6 bg-white rounded-xl shadow-xl border border-gray-100 lg:text-left">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
//                   <p className="text-lg font-medium text-blue-600 mb-4">{step.subtitle}</p>

//                   <ul className="space-y-3 text-gray-700">
//                     {step.details.map((detail, i) => (
//                       <li key={i} className="flex items-start">
//                         <svg className={`flex-shrink-0 w-5 h-5 text-blue-500 mt-1 ${index % 2 === 0 ? "lg:hidden" : "lg:block"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
//                         </svg>
//                         <svg className={`flex-shrink-0 w-5 h-5 text-blue-500 mt-1 ${index % 2 === 0 ? "lg:block" : "lg:hidden"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
//                         </svg>
//                         <span className="text-base ml-2">{detail}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>

//               {/* Step Number/Icon Circle */}
//               <div className="lg:w-2/12 flex justify-center my-6 lg:my-0">
//                 <div className="relative">
//                   {/* MOBILE ONLY circle: absolute and hidden on lg */}
//                   <div className="absolute -left-10 top-3 lg:hidden">
//                     <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center ring-8 ring-gray-50 shadow-2xl z-10">
//                       {step.icon}
//                     </div>
//                   </div>

//                   {/* DESKTOP ONLY circle: hidden on mobile, visible on lg */}
//                   <div className="hidden lg:block">
//                     <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center ring-8 ring-gray-50 shadow-2xl z-10">
//                       {step.icon}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Empty Column (or placeholder for images on desktop) */}
//               <div className="lg:w-5/12">
//                 {/* empty for spacing or future images */}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Final Result Section */}
//         <div className="pt-10 border-t border-gray-200 text-center">
//           <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
//             Result: You spend less time managing your workflow and more time moving it forward
//           </h3>
//           <p className="text-xl text-gray-700 max-w-4xl mx-auto">
//             — with every client interaction automatically recorded, every deadline met, and every opportunity maximized.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorksSection;



// interface Step {
//   id: number;
//   title: string;
//   description: string;
//   details?: string[];
//   iconPath: string; // Placeholder for SVG path or component name
// }


// const How= () => {
//   const steps: Step[] = [
//     {
//       id: 1,
//       title: 'Daily Operations (Your New Routine)',
//       description: 'Lumora integrates seamlessly into your day, handling the routine so you can focus on the client.',
//       details: [
//         'Morning: Lumora generates your priority list — urgent leads, compliance alerts, and pending follow-ups — all ready for your review.',
//         'During the Day: Add leads by voice, record client meetings, or reply to AI-drafted follow-ups — Lumora syncs it all to your CRM in real time.',
//         'Evening: Get an auto-generated summary of your day, updated compliance status, and tomorrow’s suggested actions.',
//       ],
//       iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', // Clock icon
//     },
//     {
//       id: 2,
//       title: 'Continuous Automation',
//       description: 'Lumora runs 24/7, ensuring no lead is missed and all compliance is up-to-date, even while you’re offline.',
//       details: [
//         'Lumora runs 24/7 — capturing new leads from your website, emails, and forms even while you’re offline.',
//         'It validates compliance documents, updates client records, and keeps every contact perfectly organized behind the scenes.',
//       ],
//       iconPath: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18', // Globe/Automation icon
//     },
//     {
//       id: 3,
//       title: 'Smart Insights & Learning',
//       description: 'Every interaction makes Lumora smarter, continuously optimizing your sales process for maximum conversion.',
//       details: [
//         'Every week, Lumora gets smarter — identifying patterns in your sales cycle, ranking your best prospects, and optimizing when and how to follow up.',
//         'It evolves with your business, turning every interaction into insight and every task into progress.',
//       ],
//       iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m3 0V5a2 2 0 012-2h2a2 2 0 012 2v14m-4 0h8', // Chart/Growth icon
//     },
//   ];

//   const resultText =
//     'You spend less time managing your workflow and more time moving it forward — with every client interaction automatically recorded, every deadline met, and every opportunity maximized.';

//   return (
//     <section id="how-it-works" className="py-16 sm:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
//             How It Works
//           </h2>
//           <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
//             The 3-Step Lumora Workflow
//           </p>
//         </div>

//         {/* Timeline/Step-by-Step Grid */}
//         <div className="mt-16 relative">
//           {/* Vertical Line Connector (Hidden on Mobile) */}
//           {/* <div className="hidden lg:block absolute inset-0 top-6 left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-200 h-full"></div> */}

//           <div className="lg:grid lg:grid-cols-3 lg:gap-x-12">
//             {steps.map((step, index) => (
//               <div key={step.id} className="relative mb-12 lg:mb-0">
//                 {/* Step Marker (Circle with Icon) */}
//                 <div className="flex items-center justify-center lg:mx-auto h-12 w-12 rounded-full bg-blue-600 text-white shadow-xl ring-8 ring-white lg:absolute lg:top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
//                   <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.iconPath} />
//                   </svg>
//                 </div>

//                 <div className="mt-6 lg:mt-12 text-center">
//                   <h3 className="text-xl font-extrabold text-gray-900">
//                     {step.title}
//                   </h3>
//                   <p className="mt-4 text-base text-gray-600">
//                     {step.description}
//                   </p>
                  
//                   {/* Detailed Bullet Points */}
//                   <ul className="mt-4 text-left space-y-2 text-gray-500 max-w-sm mx-auto">
//                     {step.details?.map((detail, detailIndex) => (
//                       <li key={detailIndex} className="flex items-start">
//                         <svg className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                         </svg>
//                         <span className="ml-3">{detail}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Result/Conclusion Section */}
//         <div className="mt-20 pt-10 border-t border-gray-200">
//           <p className="text-center text-2xl font-bold text-gray-900 max-w-3xl mx-auto">
//             <span className="text-blue-600">Result:</span> {resultText}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default How;