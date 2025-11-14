const HeroSection = () => {
  const headline = (
    <>
      Automate FinTech.{" "}
      <span className="text-blue-600">Simplify Compliance. </span>
      <span>Amplify Growth.</span>
    </>
  );

  const subHeadline =
    "Lumora is an AI-powered platform that automates lead management, client follow-ups, and compliance workflows — saving hours daily while ensuring 100% audit readiness.";

  const ctaText = "Request a Demo";
  const ctaLink = "#demo";

  const secondaryText = "Explore Features";
  const secondaryLink = "#features";

  return (
    <section
      className="relative bg-white py-37 md:py-37 bg-cover bg-center"
      style={{
        backgroundImage: `url('/lightest blue waves.jpg')`, // <-- change this to your image
      }}
    >
      {/* Optional overlay (remove if not needed) */}
      {/* <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Announcement Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 mb-5">
          <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1 text-base font-semibold text-white">
            New
          </span>

          <span className="text-gray-900 text-base font-medium">
            Announcing our latest product launch
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
          {headline}
        </h1>

        {/* Sub-Headline */}
        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-900">
          {subHeadline}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          {/* Primary Button */}
          <a
            href={ctaLink}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {ctaText}
          </a>

          {/* Secondary Button */}
          <a
            href={secondaryLink}
            className="inline-flex items-center justify-center px-8 py-4 border border-blue-600 text-blue-600 bg-white font-medium rounded-lg shadow-md hover:bg-teal-200 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {secondaryText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


// const HeroSection = () => {
//   const headline = (
//     <>
//       Automate FinTech. <span className="text-blue-600">Simplify Compliance. </span><span className="">Amplify Growth.</span>
//     </>
//   );

//   const subHeadline =
//     'Lumora is an AI-powered platform that automates lead management, client follow-ups, and compliance workflows — saving hours daily while ensuring 100% audit readiness.';

//   const ctaText = 'Request a Demo';
//   const ctaLink = '#demo';

//   return (
//     <section className="bg-white py-20 md:py-28">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-200 px-4 py-2 mb-6">
//   <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-base font-semibold text-white">
//     New
//   </span>

//   <span className="text-gray-700 text-base font-medium">
//     Announcing our latest product launch
//   </span>
// </div>


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

        
//       </div>
//     </section>
//   );
// };

// export default HeroSection;