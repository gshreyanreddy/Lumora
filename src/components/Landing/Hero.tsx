import React from 'react';

// Define the component's props (empty in this case, but good practice)
interface HeroSectionProps {}

// The component is designed for a light mode aesthetic, using:
// - Background: White (bg-white)
// - Primary Text: Dark Gray (text-gray-900)
// - Accent Color (from logo): Vibrant Blue (bg-blue-600, text-blue-600)

const HeroSection = () => {
  const headline = (
    <>
      Automate FinTech Sales. <span className="text-blue-600">Simplify Compliance. </span><span className="">Amplify Growth.</span>
    </>
  );

  const subHeadline =
    'Lumora is an AI-powered platform that automates lead management, client follow-ups, and compliance workflows — saving hours daily while ensuring 100% audit readiness.';

  const ctaText = 'Request a Demo';
  const ctaLink = '#demo';

  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* 
        Subtle Moon/Crescent Motif in the Background (Re-integrated)
        These abstract elements provide the requested "moon" motif and visual depth.
      */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-50 transform translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>
      
      <div 
        className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full opacity-30 transform -translate-x-1/4 translate-y-1/4 blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
          {headline}
        </h1>

        {/* Sub-Headline */}
        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
          {subHeadline}
        </p>

        {/* Call to Action Button */}
        <div className="mt-10 flex justify-center">
          <a
            href={ctaLink}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {ctaText}
          </a>
        </div>

        {/* Visual Element: Logo Image (Updated from Placeholder) */}
        <div className="mt-16">
          <div className="mx-auto max-w-5xl h-96 bg-gray-100 rounded-xl shadow-2xl flex items-center justify-center border-4 border-blue-100 p-4">
            <img 
              src="/lumora title logo.png"
              alt="Lumora AI Product Visual"
              className="h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



// const HeroSection = () => {
//   const headline = (
//     <>
//       Automate FinTech Sales. <span className="text-blue-600">Simplify Compliance. </span><span className="">Amplify Growth.</span>
//     </>
//   );

//   const subHeadline =
//     'Lumora is an AI-powered platform that automates lead management, client follow-ups, and compliance workflows — saving hours daily while ensuring 100% audit readiness.';

//   const ctaText = 'Request a Demo';
//   const ctaLink = '#demo';

//   return (
//     <section className="bg-white py-20 md:py-32">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         {/* Headline */}
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
//           {headline}
//         </h1>

//         {/* Sub-Headline */}
//         <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
//           {subHeadline}
//         </p>

//         {/* Call to Action Button */}
//         <div className="mt-10 flex justify-center">
//           <a
//             href={ctaLink}
//             className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
//           >
//             {ctaText}
//           </a>
//         </div>

//         {/* Optional: Placeholder for a visual element (e.g., product screenshot or illustration) */}
//         <div className="mt-16">
//           <div className="mx-auto max-w-5xl h-96 bg-gray-100 rounded-xl shadow-2xl flex items-center justify-center border-4 border-blue-100">
//             {/* <p className="text-gray-500 text-lg">
//               [Placeholder for Product Screenshot or Illustration]
//             </p> */}
//             <img 
//             src="/lumora title logo.png"
//             alt="Product Screenshot Placeholder"
//             className="h-full object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;