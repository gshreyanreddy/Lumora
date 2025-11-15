// const WhyLumoraSection = () => {
//   return (
//     <section className="py-8 sm:py-24 bg-white" id="why">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Main Header - Centered and Punchy */}
//         <div className="text-center mb-16">
//           <p className="text-base font-semibold text-blue-600 tracking-wide uppercase mb-3">
//             Why Lumora
//           </p>
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
//             FinTech agents spend most of their day doing admin work.
//             <br className="hidden sm:inline" />
            
//           </h2>
//           <span className="text-blue-600 mt-1 text-6xl font-extrabold font-Lato [font-feature-settings:'liga'_off]">Lumora fixes that.</span>
//         </div>

//         {/* Content Grid - Two-Column Layout for Text Flow */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
//           {/* Left Column: Problem & Solution */}
//           <div>
            
//             {/* Problem Description */}
//             <p className="text-2xl font-semibold text-gray-700 mb-6">
//               FinTech professionals lose valuable hours every day updating CRMs, managing documents, and chasing compliance requirements — all at the cost of selling time.
//             </p>
            
//             <p className="text-xl text-gray-600 leading-relaxed">
//               Lumora AI takes those manual, repetitive processes and runs them intelligently in the background. It automatically captures leads, drafts emails, tracks KYC and AML tasks, organizes your pipeline, and reminds you before deadlines hit.
//             </p>

//             {/* Vision/Card Style Quote */}
//             <div className="mt-10 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600">
//               <h3 className="text-xl font-bold text-blue-800 mb-2">
//                 Your New Morning Routine
//               </h3>
//               <p className="text-lg text-blue-700 italic">
//                 "Instead of juggling spreadsheets and reminders, you wake up to a clear priority list — already prepared, already compliant."
//               </p>
//             </div>
//           </div>
          
//           {/* Right Column: Result & Automation List */}
//           <div>
            
//             {/* Result Section */}
//             <div className="mb-10">
//               <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
//                 The Result: Time Back
//               </h3>
//               <p className="text-xl text-gray-700 leading-relaxed">
//                 With Lumora, you get your time back to do what actually drives growth: **building trust, closing clients, and expanding your business.**
//               </p>
//             </div>

//             {/* Automation List - Cleaned up and highlighted */}
//             <div className="p-6 bg-gray-50 rounded-xl">
//               <h4 className="text-xl font-bold text-gray-900 mb-4">Lumora's Intelligent Automation:</h4>
              
//               <ul className="space-y-4 text-lg text-gray-700">
//                 <li className="flex items-start">
//                   {/* Checkmark Icon */}
//                   <svg className="flex-shrink-0 w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span>Automatically captures leads and drafts follow-up emails.</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg className="flex-shrink-0 w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span>Tracks KYC, AML, and compliance tasks with reminders.</span>
//                 </li>
//                 <li className="flex items-start">
//                   <svg className="flex-shrink-0 w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//                   </svg>
//                   <span>Organizes your sales pipeline and updates CRM records automatically.</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyLumoraSection;


import React from "react";

const WhyLumoraSection: React.FC = () => {
  return (
    <section
      id="why"
      className="py-16 sm:py-24 bg-gray-900 text-white overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header - Centered and Punchy */}
        <div className="text-center mb-16">
          <p className="text-2xl font-bold text-blue-400 tracking-wide uppercase mb-3">
            Why Lumora
          </p>

          <h2 className="text-4xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight">
            FinTech agents spend most of their day doing admin work.
            <br className="hidden sm:inline" />
          </h2>

          <div className="mt-4">
            <span className="text-blue-400 text-4xl sm:text-4xl lg:text-6xl [font-feature-settings:'liga'_off]">
              Lumora fixes that.
            </span>
          </div>
        </div>

        {/* Content Grid - Split Layout */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Problem & Solution Text */}
          <div className="lg:col-span-6">
            {/* Problem Description */}
            <p className="mt-4 text-xl text-gray-300 leading-relaxed">
              FinTech professionals lose valuable hours every day updating CRMs,
              managing documents, and chasing compliance requirements — all at the
              cost of selling time. Lumora AI takes those manual, repetitive
              processes and runs them intelligently in the background.
            </p>

            {/* Solution/Automation List */}
            <div className="mt-10 space-y-6">
              <h3 className="text-2xl font-bold text-white">What Lumora Automates:</h3>

              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-start">
                  {/* Checkmark Icon */}
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-blue-400 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automatically captures leads, drafts emails, and organizes your pipeline.</span>
                </li>

                <li className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-blue-400 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tracks KYC and AML tasks, ensuring you never miss a compliance deadline.</span>
                </li>

                <li className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-blue-400 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reminds you of critical deadlines before they hit, keeping your business audit-ready.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Image and Result Card (non-overlapping) */}
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            {/* <div className="relative p-6 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700/50"> */}
              {/* Image inserted cleanly, clipped to rounded corners */}
              <div className="h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden border border-gray-700/50 max-w-full">
                <img
                  src="/dashboard.png"
                  alt="Lumora Dashboard"
                  className="w-full h-full object-cover block max-w-full"
                />
              </div>
            {/* </div> */}

            {/* Result/Vision Card — placed below image (not overlapping) */}
            <div className="mt-6 w-full p-6 bg-blue-600 rounded-xl shadow-2xl text-white text-center">
              <h3 className="text-xl font-extrabold mb-2">Your New Morning Routine</h3>
              <p className="text-lg font-medium">
                You wake up to a clear priority list —{" "}
                <span className="font-semibold">already prepared, already compliant.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Final Result Section - Full Width, High Impact */}
        {/* <div className="mt-24 pt-12 border-t border-gray-700 text-center">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-4">The Result: Time Back</h3>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            With Lumora, you get your time back to do what actually drives growth: building trust,
            closing clients, and expanding your business.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default WhyLumoraSection;



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



// import { ArrowRight, Zap, Clock, FileText, CheckCircle, TrendingUp, Target, AlertCircle } from "lucide-react";
// import { useState } from "react";

// export default function Home() {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/60 rounded-lg flex items-center justify-center">
//               <Zap className="w-5 h-5 text-white" />
//             </div>
//             <span className="text-xl font-bold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
//               Lumora
//             </span>
//           </div>
//           <button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 py-2 font-semibold transition-all duration-300 hover:shadow-lg">
//             Get Started
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//         <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
//             Why{" "}
//             <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
//               Lumora
//             </span>
//           </h1>

//           <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
//             FinTech agents spend most of their day doing admin work. Lumora fixes that.
//           </p>

//           <button
//             className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-12 text-base font-semibold group transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             Discover the Difference
//             <ArrowRight className={`w-5 h-5 transition-transform ${isHovered ? "translate-x-1" : ""}`} />
//           </button>
//         </div>
//       </section>

//       {/* The Problem Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold mb-4">The FinTech Reality</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               FinTech professionals lose valuable hours every day updating CRMs, managing documents, and chasing compliance requirements — all at the cost of selling time.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Clock,
//                 title: "Lost Hours",
//                 description: "Updating CRMs manually, managing spreadsheets, and tracking compliance tasks that could be automated.",
//                 stat: "15+ hours/week"
//               },
//               {
//                 icon: FileText,
//                 title: "Document Chaos",
//                 description: "Chasing documents, managing versions, and organizing files across multiple systems and platforms.",
//                 stat: "40+ documents/month"
//               },
//               {
//                 icon: AlertCircle,
//                 title: "Compliance Risk",
//                 description: "Tracking KYC and AML requirements manually while managing deadlines and regulatory changes.",
//                 stat: "100+ compliance tasks"
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="relative p-8 rounded-2xl bg-background border border-border hover:border-accent/40 transition-all duration-300 group overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
//                 <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
//                   <item.icon className="w-7 h-7 text-accent" />
//                 </div>
                
//                 <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
//                 <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                
//                 <div className="pt-4 border-t border-border">
//                   <p className="text-sm font-semibold text-accent">{item.stat}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* The Solution Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold mb-4">Lumora AI Takes Over</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Lumora AI takes those manual, repetitive processes and runs them intelligently in the background.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               {
//                 icon: Target,
//                 title: "Automatically Captures Leads",
//                 description: "Lumora intelligently captures leads from emails, calls, and documents, organizing them directly into your pipeline without manual intervention.",
//               },
//               {
//                 icon: FileText,
//                 title: "Drafts Emails & Documents",
//                 description: "Generate professional client communications, follow-ups, and compliance documents that match your tone and requirements instantly.",
//               },
//               {
//                 icon: CheckCircle,
//                 title: "Tracks KYC & AML Tasks",
//                 description: "Automatically monitor compliance requirements, flag overdue tasks, and ensure regulatory deadlines are never missed.",
//               },
//               {
//                 icon: TrendingUp,
//                 title: "Organizes Your Pipeline",
//                 description: "Your sales pipeline stays updated automatically with zero manual data entry, ensuring no deals are forgotten.",
//               },
//               {
//                 icon: Clock,
//                 title: "Reminds You Before Deadlines",
//                 description: "Smart reminders alert you before critical compliance dates and follow-up windows, keeping your team on track.",
//               },
//               {
//                 icon: Zap,
//                 title: "Prepares Your Priority List",
//                 description: "Wake up to a clear, prepared priority list — already organized, already compliant, ready to execute.",
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-accent/40 hover:shadow-xl transition-all duration-300 group"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition-colors">
//                     <item.icon className="w-6 h-6 text-accent" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                     <p className="text-muted-foreground leading-relaxed">{item.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* The Result Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/10 to-accent/5 relative overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold mb-4">The Result</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               With Lumora, you get your time back to do what actually drives growth
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             {[
//               {
//                 title: "Building Trust",
//                 description: "Focus on meaningful client relationships instead of administrative overhead.",
//                 icon: "🤝"
//               },
//               {
//                 title: "Closing Clients",
//                 description: "Spend your energy on sales and deal closure instead of chasing compliance tasks.",
//                 icon: "✨"
//               },
//               {
//                 title: "Expanding Business",
//                 description: "Scale your operations with intelligent automation handling the busywork.",
//                 icon: "📈"
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="p-8 rounded-2xl bg-background border border-border/50 text-center hover:border-accent/40 transition-all duration-300"
//               >
//                 <div className="text-5xl mb-4">{item.icon}</div>
//                 <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
//                 <p className="text-muted-foreground leading-relaxed">{item.description}</p>
//               </div>
//             ))}
//           </div>

//           {/* Key Benefits */}
//           <div className="bg-background rounded-3xl border border-border/50 p-12 text-center">
//             <h3 className="text-3xl font-bold mb-8">Why Choose Lumora?</h3>
            
//             <div className="grid md:grid-cols-2 gap-8 mb-8">
//               {[
//                 {
//                   benefit: "Reclaim Your Time",
//                   detail: "15+ hours per week back in your schedule"
//                 },
//                 {
//                   benefit: "Zero Compliance Risk",
//                   detail: "Never miss a KYC, AML, or regulatory deadline"
//                 },
//                 {
//                   benefit: "Higher Close Rates",
//                   detail: "3x more deals closed when you focus on selling"
//                 },
//                 {
//                   benefit: "Enterprise Security",
//                   detail: "Bank-grade encryption and compliance standards"
//                 },
//               ].map((item, idx) => (
//                 <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
//                   <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
//                   <div className="text-left">
//                     <p className="font-bold text-lg">{item.benefit}</p>
//                     <p className="text-muted-foreground text-sm">{item.detail}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <div className="rounded-3xl bg-gradient-to-r from-accent/15 to-accent/5 border border-accent/30 p-12 text-center">
//             <h2 className="text-4xl sm:text-5xl font-bold mb-4">
//               Ready to Fix Your Admin Work?
//             </h2>
//             <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
//               Join FinTech professionals who are already using Lumora to automate their admin work and focus on what drives growth: building trust, closing clients, and expanding their business.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-12 text-base font-semibold transition-all duration-300 hover:shadow-lg">
//                 Start Free Trial
//               </button>
//               <button className="rounded-full px-8 h-12 text-base font-semibold border-2 border-border hover:bg-muted transition-all duration-300">
//                 Schedule Demo
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
//         <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
//           <p>&copy; 2025 Lumora. AI-powered automation for FinTech professionals.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }






// // src/components/WhyLumora.tsx
// import React from "react";

// const WhyLumora: React.FC = () => {
//   return (
//     <section className="bg-gradient-to-b from-white to-slate-50 py-20">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left: Copy */}
//           <div>
//             <p className="inline-flex items-center text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
//               Why Lumora
//             </p>

//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
//               Give your sales team back the one thing they can’t buy: time.
//             </h2>

//             <p className="mt-6 text-lg text-slate-700 max-w-2xl">
//               FinTech professionals lose valuable hours every day updating CRMs,
//               managing documents, and chasing compliance requirements — all at the cost of selling time.
//               Lumora AI runs those manual, repetitive processes intelligently in the background.
//             </p>

//             <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 max-w-2xl">
//               <div className="flex items-start gap-3">
//                 <span className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#eaf6ff] text-[#0480e6]">
//                   {/* capture icon */}
//                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//                     <path d="M3 7h18M3 12h12M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </span>
//                 <div>
//                   <div className="font-semibold text-slate-900">Automatic Lead Capture</div>
//                   <div className="text-sm text-slate-600">Lumora captures and qualifies leads 24/7 — even after hours.</div>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <span className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#fff7e6] text-[#D4A953]">
//                   {/* automation icon */}
//                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//                     <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                     <path d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </span>
//                 <div>
//                   <div className="font-semibold text-slate-900">Automated Admin</div>
//                   <div className="text-sm text-slate-600">Draft emails, sync CRMs, and prepare compliance packets automatically.</div>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <span className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#eef7ff] text-[#0066d6]">
//                   {/* transcript icon */}
//                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//                     <path d="M3 5h18M7 9h10M5 13h14M9 17h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </span>
//                 <div>
//                   <div className="font-semibold text-slate-900">Meeting Capture & Notes</div>
//                   <div className="text-sm text-slate-600">Automatic transcription, action items, and client logging so nothing slips through.</div>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <span className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#f0fdf4] text-[#059669]">
//                   {/* compliance icon */}
//                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//                     <path d="M12 2l3 6 6 .5-4.5 3.5L19 20l-7-4-7 4 1.5-7L3 8.5 9 8 12 2z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </span>
//                 <div>
//                   <div className="font-semibold text-slate-900">Audit-Ready Compliance</div>
//                   <div className="text-sm text-slate-600">Track KYC/AML tasks, expirations, and renewals with color-coded clarity.</div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
//               <a
//                 href="#demo"
//                 className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#0480e6] to-[#0066d6] text-white font-semibold shadow hover:scale-[1.02] transform transition"
//               >
//                 Request a demo
//               </a>

//               <a
//                 href="#features"
//                 className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-slate-200 text-slate-800 bg-white font-medium shadow-sm hover:bg-slate-50 transition"
//               >
//                 See features
//               </a>
//             </div>

//             {/* Result statement */}
//             <div className="mt-8 border-l-4 border-blue-100 pl-4">
//               <p className="text-lg font-semibold text-slate-900">
//                 The Result:
//               </p>
//               <p className="mt-2 text-slate-700 max-w-xl">
//                 With Lumora, you get your time back to do what actually drives growth: building trust, closing clients, and expanding your business.
//               </p>
//             </div>
//           </div>

//           {/* Right: Illustrative card */}
//           <div className="relative">
//             <div className="rounded-2xl bg-white shadow-xl border border-slate-100 overflow-hidden">
//               <div className="p-8 lg:p-12">
//                 <div className="flex items-start justify-between gap-6">
//                   <div>
//                     <div className="text-sm font-semibold text-slate-500">Lumora AI</div>
//                     <h3 className="mt-2 text-xl font-extrabold text-slate-900">Automate the busywork — focus on deals</h3>
//                     <p className="mt-3 text-sm text-slate-600 max-w-md">
//                       It automatically captures leads, drafts emails, tracks KYC and AML tasks, organizes your pipeline, and reminds you before deadlines hit.
//                     </p>

//                     <div className="mt-6 flex items-center gap-4">
//                       <div className="bg-[#eef6ff] rounded-full px-3 py-1 text-xs font-semibold text-[#0066d6]">24/7 Capture</div>
//                       <div className="bg-[#fff6e6] rounded-full px-3 py-1 text-xs font-semibold text-[#D4A953]">Audit-ready</div>
//                       <div className="bg-[#f0fff4] rounded-full px-3 py-1 text-xs font-semibold text-[#059669]">Auto follow-ups</div>
//                     </div>
//                   </div>

//                   {/* small illustration on the right */}
//                   <div className="hidden md:flex items-center">
//                     <div className="w-40 h-36 rounded-lg bg-gradient-to-br from-[#eef7ff] to-white border border-slate-100 flex items-center justify-center">
//                       {/* subtle svg illustration */}
//                       <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//                         <rect x="6" y="6" width="108" height="78" rx="10" fill="#f7fbff" stroke="#e6f0ff"/>
//                         <circle cx="28" cy="34" r="18" fill="#eaf6ff"/>
//                         <rect x="54" y="22" width="60" height="10" rx="6" fill="#eef7ff"/>
//                         <rect x="54" y="38" width="44" height="8" rx="4" fill="#f7fbff"/>
//                         <rect x="14" y="60" width="36" height="10" rx="5" fill="#eef7ff"/>
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 {/* bottom stats */}
//                 <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
//                   <div className="bg-[#fafcff] rounded-lg p-4 text-center border border-slate-50">
//                     <div className="text-2xl font-extrabold text-[#004ea8]">90%</div>
//                     <div className="text-sm text-slate-600">Faster follow-ups</div>
//                   </div>
//                   <div className="bg-[#fff8f2] rounded-lg p-4 text-center border border-slate-50">
//                     <div className="text-2xl font-extrabold text-[#D4A953]">100%</div>
//                     <div className="text-sm text-slate-600">Audit ready</div>
//                   </div>
//                   <div className="bg-[#f6fff8] rounded-lg p-4 text-center border border-slate-50">
//                     <div className="text-2xl font-extrabold text-[#059669]">24/7</div>
//                     <div className="text-sm text-slate-600">Lead capture</div>
//                   </div>
//                 </div>
//               </div>

//               {/* decorative lower gradient */}
//               <div className="h-8 bg-gradient-to-r from-[#fbfdff] to-transparent" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyLumora;




// import React from "react";

// /**
//  * WhyLumoraAlt.tsx
//  * A different modern design for the "Why Lumora" section using Tailwind CSS only.
//  */

// const WhyLumoraAlt: React.FC = () => {
//   return (
//     <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-slate-50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//           {/* LEFT: Bold intro card */}
//           <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#061E3A] to-[#003E8A] text-white p-10 lg:p-14 shadow-xl">
//             {/* decorative faint grid */}
//             <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-screen" />
//             <div className="relative z-10">
//               <p className="inline-block text-xs font-semibold tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full">
//                 Why Lumora
//               </p>

//               <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
//                 Stop managing admin. Start closing deals.
//               </h2>

//               <p className="mt-6 text-slate-100 max-w-xl text-lg leading-relaxed">
//                 FinTech teams spend hours on paperwork, compliance checks, and CRM updates.
//                 Lumora intelligently automates those tasks so your team wakes up to a prioritized,
//                 ready-to-go pipeline every morning.
//               </p>

//               <div className="mt-8 flex flex-col sm:flex-row gap-3">
//                 <a
//                   href="#demo"
//                   className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-[#003E8A] font-semibold shadow hover:scale-[1.02] transform transition"
//                 >
//                   Request a demo
//                 </a>

//                 <a
//                   href="#features"
//                   className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition"
//                 >
//                   See features
//                 </a>
//               </div>

//               <div className="mt-8 grid grid-cols-3 gap-3">
//                 <Stat label="Faster follow-ups" value="90%" accent="from-[#7AD3FF] to-[#2EA0FF]" />
//                 <Stat label="Audit-ready" value="100%" accent="from-[#FFE8A3] to-[#FFD06A]" />
//                 <Stat label="24/7 capture" value="24/7" accent="from-[#CFFFE4] to-[#6EE7AB]" />
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: vertical feature cards */}
//           <div className="space-y-6">
//             <FeatureCard
//               title="Automatic Lead Capture"
//               desc="Lumora captures leads from forms, calls, and emails — qualifies and creates records automatically."
//               badge="24/7"
//               color="from-[#eaf6ff] to-[#d7f0ff]"
//             />
//             <FeatureCard
//               title="Automated Admin"
//               desc="Draft follow-ups, sync CRM entries, and prepare compliance packets with minimal review."
//               badge="Auto"
//               color="from-[#fff7e6] to-[#fff0d6]"
//             />
//             <FeatureCard
//               title="Meeting Capture & Notes"
//               desc="Transcriptions, action items, and client logging so nothing slips through — searchable and structured."
//               badge="Notes"
//               color="from-[#eef7ff] to-[#e7f1ff]"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// /* Small presentational components used above */

// const Stat: React.FC<{ label: string; value: string; accent?: string }> = ({ label, value, accent }) => (
//   <div className="flex flex-col items-start">
//     <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-bold text-[#042A48] bg-gradient-to-r ${accent ?? "from-[#eef7ff] to-[#eaf6ff]"}`}>
//       {value}
//     </div>
//     <div className="mt-2 text-xs text-white/90">{label}</div>
//   </div>
// );

// const FeatureCard: React.FC<{ title: string; desc: string; badge?: string; color?: string }> = ({ title, desc, badge, color }) => {
//   return (
//     <article className="relative rounded-2xl overflow-hidden">
//       <div className={`p-6 md:p-8 bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm flex gap-4 items-start`}>
//         <div className="flex-shrink-0">
//           <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0480e6] to-[#0066d6] flex items-center justify-center text-white font-bold shadow-sm">
//             {/* simple icon placeholder (letter) */}
//             {title.split(" ").slice(0,1)[0]}
//           </div>
//         </div>

//         <div className="flex-1 min-w-0">
//           <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
//           <p className="mt-2 text-sm text-slate-600">{desc}</p>

//           <div className="mt-4 flex items-center justify-between gap-4">
//             <a className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#f3f7ff] text-[#0565d6]" href="#demo">
//               Try demo
//             </a>
//             {badge && <div className="text-xs text-slate-500">{badge}</div>}
//           </div>
//         </div>
//       </div>

//       {/* decorative side stripe */}
//       <div className={`absolute right-0 top-0 bottom-0 w-1 ${color ?? "bg-gradient-to-b from-[#eef7ff] to-[#d7f0ff]"} opacity-90`} />
//     </article>
//   );
// };

// export default WhyLumoraAlt;







// const LumoraWhySectionSplit = () => {
//   const headline = 'FinTech agents spend most of their day doing admin work. Lumora fixes that.';
  
//   const problemText = [
//     "FinTech professionals spend hours every day updating CRMs and entering client details.",
//     "They lose even more time managing documents and chasing compliance requirements.",
//   ];

//   const solutionText = [
//     "Lumora AI takes those manual, repetitive processes and runs them intelligently in the background.",
//     "It automatically captures leads, drafts emails, tracks KYC and AML tasks, organizes your pipeline, and reminds you before deadlines hit.",
//     "Instead of juggling spreadsheets and reminders, you wake up to a clear priority list — already prepared, already compliant.",
//   ];

//   const resultText = "With Lumora, you get your time back to do what actually drives growth: building trust, closing clients, and expanding your business.";

//   return (
//     <section id="why-lumora" className="py-16 sm:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto">
//           <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
//             Why Lumora
//           </h2>
//           <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
//             {headline}
//           </p>
//         </div>

//         {/* Problem-Solution Split Grid */}
//         <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
          
//           {/* Left Column: The Problem (Pain Points) */}
//           <div className="p-8 rounded-xl bg-red-50 border border-red-100 shadow-lg">
//             <div className="flex items-center space-x-4">
//               {/* Icon for Problem (e.g., Time Lost) */}
//               <svg className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <h3 className="text-2xl font-bold text-red-800">The Problem</h3>
//             </div>
//             <div className="mt-6 space-y-4 text-lg text-gray-700">
//               {problemText.map((p, i) => <p key={i}>{p}</p>)}
//             </div>
//           </div>

//           {/* Right Column: The Solution (Lumora AI) */}
//           <div className="p-8 rounded-xl bg-blue-50 border border-blue-100 shadow-lg">
//             <div className="flex items-center space-x-4">
//               {/* Icon for Solution (e.g., Automation/Fix) */}
//               <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <h3 className="text-2xl font-bold text-blue-800">The Lumora Fix</h3>
//             </div>
//             <div className="mt-6 space-y-4 text-lg text-gray-700">
//               {solutionText.map((p, i) => <p key={i}>{p}</p>)}
//             </div>
//           </div>
//         </div>

//         {/* Final Result/Takeaway */}
//         <div className="mt-16 p-8 bg-gray-50 rounded-xl border-l-4 border-blue-600 shadow-inner">
//           <p className="text-xl font-medium text-gray-800">
//             <span className="text-blue-600 font-extrabold">The Result:</span> {resultText}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LumoraWhySectionSplit;



// const LumoraWhySectionHuman = () => {
//   const headline = 'FinTech agents spend most of their day doing admin work. Lumora fixes that.';
  
//   const problemQuote = "FinTech professionals lose valuable hours every day updating CRMs, managing documents, and chasing compliance requirements — all at the cost of selling time.";
  
//   const solutionText = [
//     "Lumora AI takes those manual, repetitive processes and runs them intelligently in the background.",
//     "It automatically captures leads, drafts emails, tracks KYC and AML tasks, organizes your pipeline, and reminds you before deadlines hit.",
//   ];

//   const beforeAfterText = "Instead of juggling spreadsheets and reminders, you wake up to a clear priority list — already prepared, already compliant.";

//   const resultText = "With Lumora, you get your time back to do what actually drives growth: building trust, closing clients, and expanding your business.";

//   return (
//     <section id="why-lumora" className="py-16 sm:py-24 bg-gray-50">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
//         {/* Section Header */}
//         <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
//           Why Lumora
//         </h2>
//         <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
//           {headline}
//         </p>

//         {/* Human-Centric Problem Quote */}
//         <div className="mt-12 p-8 bg-white rounded-xl shadow-2xl border-t-4 border-gray-200">
//           <blockquote className="text-2xl font-serif italic text-gray-700">
//             &ldquo;{problemQuote}&rdquo;
//           </blockquote>
//           <p className="mt-4 text-sm font-medium text-gray-500">
//             — The Reality for Every FinTech Agent
//           </p>
//         </div>

//         {/* Solution Section */}
//         <div className="mt-12">
//           <h3 className="text-2xl font-bold text-gray-900">
//             The Lumora Solution: Your Time, Reclaimed.
//           </h3>
          
//           {/* Solution Paragraphs */}
//           <div className="mt-6 space-y-4 text-lg text-gray-700 max-w-3xl mx-auto">
//             {solutionText.map((p, i) => <p key={i}>{p}</p>)}
//           </div>

//           {/* Before & After Highlight */}
//           <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
//             <p className="text-xl font-semibold text-blue-800">
//               {beforeAfterText}
//             </p>
//           </div>
//         </div>

//         {/* Final Result/Takeaway - The Human Benefit */}
//         <div className="mt-12 pt-8 border-t border-gray-200">
//           <p className="text-2xl font-bold text-gray-900 max-w-3xl mx-auto">
//             <span className="text-blue-600">The Result:</span> {resultText}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LumoraWhySectionHuman;