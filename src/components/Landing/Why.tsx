const WhyLumoraSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white" id="why-lumora">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header - Centered and Punchy */}
        <div className="text-center mb-16">
          <p className="text-base font-semibold text-blue-600 tracking-wide uppercase mb-3">
            Why Lumora
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
            FinTech agents spend most of their day doing admin work.
            <br className="hidden sm:inline" />
            <span className="text-blue-600">Lumora fixes that.</span>
          </h2>
        </div>

        {/* Content Grid - Two-Column Layout for Text Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Problem & Solution */}
          <div>
            
            {/* Problem Description */}
            <p className="text-2xl font-semibold text-gray-700 mb-6">
              FinTech professionals lose valuable hours every day updating CRMs, managing documents, and chasing compliance requirements — all at the cost of selling time.
            </p>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Lumora AI takes those manual, repetitive processes and runs them intelligently in the background. It automatically captures leads, drafts emails, tracks KYC and AML tasks, organizes your pipeline, and reminds you before deadlines hit.
            </p>

            {/* Vision/Card Style Quote */}
            <div className="mt-10 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                Your New Morning Routine
              </h3>
              <p className="text-lg text-blue-700 italic">
                "Instead of juggling spreadsheets and reminders, you wake up to a clear priority list — already prepared, already compliant."
              </p>
            </div>
          </div>
          
          {/* Right Column: Result & Automation List */}
          <div>
            
            {/* Result Section */}
            <div className="mb-10">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                The Result: Time Back
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                With Lumora, you get your time back to do what actually drives growth: **building trust, closing clients, and expanding your business.**
              </p>
            </div>

            {/* Automation List - Cleaned up and highlighted */}
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Lumora's Intelligent Automation:</h4>
              
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  {/* Checkmark Icon */}
                  <svg className="flex-shrink-0 w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Automatically captures leads and drafts follow-up emails.</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Tracks KYC, AML, and compliance tasks with reminders.</span>
                </li>
                <li className="flex items-start">
                  <svg className="flex-shrink-0 w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Organizes your sales pipeline and updates CRM records automatically.</span>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyLumoraSection;



// const WhyLumoraSection = () => {
//   return (
//     <section className="py-16 sm:py-24 bg-gray-900 text-white" id="why-lumora">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Main Header - Centered and Punchy */}
//         <div className="text-center mb-16">
//           <p className="text-lg font-bold text-blue-400 tracking-wide uppercase mb-3">
//             Why Lumora
//           </p>
//           <h2 className="text-4xl sm:text-4xl lg:text-6xl font-extrabold text-white">
//             FinTech agents spend most of their day doing admin work.
//             <br className="hidden sm:inline" />
//             <span className="text-blue-400">Lumora fixes that.</span>
//           </h2>
//         </div>

//         {/* Content Grid - Split Layout */}
//         <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
//           {/* Left Column: Problem & Solution Text */}
//           <div className="lg:col-span-6">
            
//             {/* Problem Description */}
//             <p className="mt-4 text-xl text-gray-300 leading-relaxed">
//               FinTech professionals lose valuable hours every day updating CRMs, managing documents, and chasing compliance requirements — all at the cost of selling time. Lumora AI takes those manual, repetitive processes and runs them intelligently in the background.
//             </p>

//             {/* Solution/Automation List */}
//             <div className="mt-10 space-y-6">
//               <h3 className="text-2xl font-bold text-white">What Lumora Automates:</h3>
              
//               <ul className="space-y-4 text-lg text-gray-300">
//                 <li className="flex items-start">
//                   {/* Checkmark Icon */}
//                   <svg className="flex-shrink-0 w-6 h-6 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span>Automatically captures leads, drafts emails, and organizes your pipeline.</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg className="flex-shrink-0 w-6 h-6 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span>Tracks KYC and AML tasks, ensuring you never miss a compliance deadline.</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg className="flex-shrink-0 w-6 h-6 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span>Reminds you of critical deadlines before they hit, keeping your business audit-ready.</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
          
//           {/* Right Column: Image Placeholder and Result Card */}
//           <div className="lg:col-span-6 mt-12 lg:mt-0">
            
//             {/* High-Tech Image Placeholder */}
//             <div className="relative p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700/50">
//               <div className="h-64 sm:h-80 lg:h-96 rounded-xl bg-gray-700 flex items-center justify-center text-gray-400 font-medium text-xl border border-dashed border-gray-600">
//                 Placeholder: High-Tech Lumora Dashboard/Interface Image
//               </div>
              
//               {/* Result/Vision Card - Overlaid for emphasis */}
//               <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-11/12 p-6 bg-blue-600 rounded-xl shadow-2xl text-white text-center">
//                 <h3 className="text-xl font-extrabold mb-2">
//                   Your New Morning Routine
//                 </h3>
//                 <p className="text-lg font-medium">
//                   You wake up to a clear priority list — **already prepared, already compliant.**
//                 </p>
//               </div>
//             </div>
//           </div>
          
//         </div>
        
//         {/* Final Result Section - Full Width, High Impact */}
//         <div className="mt-24 pt-12 border-t border-gray-700 text-center">
//           <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-4">
//             The Result: Time Back
//           </h3>
//           <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
//             With Lumora, you get your time back to do what actually drives growth: **building trust, closing clients, and expanding your business.**
//           </p>
          
//           {/* Call to Action Button */}
//           <a
//             href="#demo"
//             className="mt-8 inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-xl text-gray-900 bg-white hover:bg-gray-200 transition duration-150 ease-in-out transform hover:scale-105"
//           >
//             Book a Demo and Reclaim Your Day
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyLumoraSection;



// const WhyLumoraSection = () => {
//   return (
//     <section className="py-16 sm:py-24 bg-white" id="why-lumora">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Main Content Grid */}
//         <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          
//           {/* Left Column: Problem & Solution */}
//           <div className="lg:col-span-7">
            
//             {/* Tagline/Header */}
//             <p className="text-base font-semibold text-blue-600 tracking-wide uppercase mb-3">
//               The Lumora Difference
//             </p>
//             <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
//               FinTech agents spend most of their day doing admin work. <span className="text-blue-600">Lumora fixes that.</span>
//             </h2>
            
//             {/* Problem Description */}
//             <p className="mt-4 text-xl text-gray-600 leading-relaxed">
//               FinTech professionals lose valuable hours every day updating CRMs, managing documents, and chasing compliance requirements — all at the cost of selling time. Lumora AI takes those manual, repetitive processes and runs them intelligently in the background.
//             </p>

//             {/* Solution/Automation List */}
//             <div className="mt-10 space-y-6">
//               <h3 className="text-2xl font-bold text-gray-900">What Lumora Automates:</h3>
              
//               <ul className="space-y-4 text-lg text-gray-700">
//                 <li className="flex items-start">
//                   <svg className="flex-shrink-0 w-6 h-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                   </svg>
//                   <span>Automatically captures leads, drafts emails, and organizes your pipeline.</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg className="flex-shrink-0 w-6 h-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                   </svg>
//                   <span>Tracks KYC and AML tasks, ensuring you never miss a compliance deadline.</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg className="flex-shrink-0 w-6 h-6 text-blue-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                   </svg>
//                   <span>Reminds you of critical deadlines before they hit, keeping your business audit-ready.</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
          
//           {/* Right Column: Result & Vision (Card Style) */}
//           <div className="mt-12 lg:mt-0 lg:col-span-5">
//             <div className="p-8 sm:p-10 bg-gray-50 rounded-2xl shadow-2xl border border-gray-100 h-full flex flex-col justify-between">
              
//               {/* Vision */}
//               <div>
//                 <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
//                   Your New Morning Routine
//                 </h3>
//                 <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-blue-500 pl-4 italic">
//                   Instead of juggling spreadsheets and reminders, you wake up to a clear priority list — already prepared, already compliant.
//                 </p>
//               </div>

//               {/* Result/CTA */}
//               <div className="mt-8 pt-6 border-t border-gray-200">
//                 <h3 className="text-2xl font-extrabold text-blue-600 mb-3">
//                   The Result: Time Back
//                 </h3>
//                 <p className="text-lg text-gray-700">
//                   With Lumora, you get your time back to do what actually drives growth: **building trust, closing clients, and expanding your business.**
//                 </p>
                
//                 {/* Call to Action Button */}
//                 <a
//                   href="#demo"
//                   className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
//                 >
//                   Book a Demo and Reclaim Your Day
//                 </a>
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyLumoraSection;

// const Why = () => {
//   const headline = 'FinTech agents spend most of their day doing admin work. Lumora fixes that.';
  
//   const paragraph = [
//     "FinTech professionals lose valuable hours every day updating CRMs, managing documents, and chasing compliance requirements — all at the cost of selling time. Lumora AI takes those manual, repetitive processes and runs them intelligently in the background.",
//     "It automatically captures leads, drafts emails, tracks KYC and AML tasks, organizes your pipeline, and reminds you before deadlines hit.",
//     "Instead of juggling spreadsheets and reminders, you wake up to a clear priority list — already prepared, already compliant.",
//     "With Lumora, you get your time back to do what actually drives growth: building trust, closing clients, and expanding your business.",
//   ];

//   return (
//     <section id="why-lumora" className="py-20 sm:py-32 bg-gray-100">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
//         {/* Sub-Headline / Tagline */}
//         <p className="text-base text-blue-600 font-semibold tracking-wide uppercase">
//           The Lumora Difference
//         </p>

//         {/* Main Headline - Bold and Centered */}
//         <h2 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
//           {headline}
//         </h2>

//         {/* Problem/Solution Paragraphs - Separated for readability */}
//         <div className="mt-10 space-y-6 text-xl text-gray-700">
//           <p className="font-medium">
//             {paragraph[0]}
//           </p>
//           <p>
//             {paragraph[1]}
//           </p>
//           <p>
//             {paragraph[2]}
//           </p>
//         </div>

//         {/* Strong Conclusion - Highlighted with Blue */}
//         <div className="mt-12">
//           <p className="text-2xl font-bold text-gray-900">
//             <span className="text-blue-600">The Result:</span> {paragraph[3]}
//           </p>
//         </div>

//         {/* Optional: A subtle visual separator or icon */}
//         <div className="mt-16">
//           <svg className="mx-auto h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Why;