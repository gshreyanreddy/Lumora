import { motion } from "framer-motion";

const About = () => {
  const mainText = [
    "In financial technology, time isn’t just money — it’s momentum. Yet most FinTech agents spend more of it on admin work than on actual sales. Updating CRMs, chasing KYC files, rewriting the same emails, remembering who needs what — it’s endless.",
    "We built Lumora AI to change that.",
    "Lumora is your personal AI-powered assistant for FinTech growth — designed to handle the busywork while you focus on building trust, closing clients, and growing your business.",
  ];

  const bulletPoints = [
    'Never sleeps — captures leads even at 2 A.M.',
    'Always remembers — keeps perfect notes, transcripts, and follow-ups.',
    'Understands FinTech — knows compliance rules, renewal cycles, and what each client needs next.',
  ];

  const closingText =
    'From recording meetings to generating proposals and tracking compliance, Lumora automates every routine step — turning hours of manual work into minutes of review.';

  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
          {/* Left Column: Main Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              About Lumora AI
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Focus on Momentum, Not Manual Work.
            </p>

            <div className="mt-6 space-y-6 text-lg text-gray-600">
              {mainText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Stylized Bullet Points / Quote */}
          <motion.div
            className="mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="p-8 bg-white rounded-xl shadow-xl border-t-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Think of it as having a teammate who:
              </h3>
              <ul className="space-y-4 list-disc list-inside pl-1">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="text-lg text-gray-700">
                    {/* <span className="text-blue-600 font-extrabold mr-1">•</span> */}
                    {point}
                  </li>
                ))}
              </ul><p className="mt-6 text-lg font-medium text-gray-800 border-t pt-4 border-gray-100">
                {closingText}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


// const About = () => {
//   const mainText = [
//     "In financial technology, time isn’t just money — it’s momentum. Yet most FinTech agents spend more of it on admin work than on actual sales. Updating CRMs, chasing KYC files, rewriting the same emails, remembering who needs what — it’s endless.",
//     "We built Lumora AI to change that.",
//     "Lumora is your personal AI-powered assistant for FinTech growth — designed to handle the busywork while you focus on building trust, closing clients, and growing your business.",
//   ];

//   const bulletPoints = [
//     'Never sleeps — captures leads even at 2 A.M.',
//     'Always remembers — keeps perfect notes, transcripts, and follow-ups.',
//     'Understands FinTech — knows compliance rules, renewal cycles, and what each client needs next.',
//   ];

//   const closingText =
//     'From recording meetings to generating proposals and tracking compliance, Lumora automates every routine step — turning hours of manual work into minutes of review.';

//   return (
//     <section id="about-us" className="py-16 sm:py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
//           {/* Left Column: Main Text Content */}
//           <div>
//             <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
//               About Lumora AI
//             </h2>
//             <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
//               Focus on Momentum, Not Manual Work.
//             </p>

//             <div className="mt-6 space-y-6 text-lg text-gray-600">
//               {mainText.map((paragraph, index) => (
//                 <p key={index}>{paragraph}</p>
//               ))}
//             </div>
//           </div>

//           {/* Right Column: Stylized Bullet Points / Quote */}
//           <div className="mt-10 lg:mt-0">
//             <div className="p-8 bg-white rounded-xl shadow-xl border-t-4 border-blue-600">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 Think of it as having a teammate who:
//               </h3>
//               <ul className="space-y-4">
//                 {bulletPoints.map((point, index) => (
//                   <li key={index} className="flex items-start">
//                     {/* Checkmark Icon in Blue */}
//                     <div className="flex-shrink-0">
//                       {/* <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                       </svg> */}
//                     </div>
//                     <p className="ml-3 text-lg text-gray-700">
//                       {point}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//               <p className="mt-6 text-lg font-medium text-gray-800 border-t pt-4 border-gray-100">
//                 {closingText}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;