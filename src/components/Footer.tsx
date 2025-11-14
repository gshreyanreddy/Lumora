// import { RiInstagramFill } from "react-icons/ri";
// import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";


// const Footer = () => {
//   return (
//     <div className="bg-slate-900">
//     <footer className="flex justify-start  text-white p-4 text-center" >
//       <p>
//         © 2025 Xylem AI is a product owned and operated by <span className="font-bold text-[#D4A953]">  Virtu Tech Solutions </span>, All rights reserved.</p>

//         <div className="flex space-x-4 justify-end ">
//               <a href="#" target="_blank" rel="noopener noreferrer"
//                 className="w-10 h-10 bg-[#4267B2] rounded-lg flex items-center justify-center hover:bg-[#D4A953] transition-all duration-300 hover:scale-110"
//               ><FaFacebookF size={25} /></a>
//               <a href="#" target="_blank" rel="noopener noreferrer"
//                 className="w-10 h-10 bg-[#000000] rounded-lg flex items-center justify-center hover:bg-[#D4A953] transition-all duration-300 hover:scale-110"
//               ><FaXTwitter size={25} /></a>
//               <a href="#" target="_blank" rel="noopener noreferrer"
//                 className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center hover:bg-[#D4A953] transition-all duration-300 hover:scale-110"
//                 aria-label="LinkedIn"><FaLinkedinIn size={25} /></a>
//               <a href="#" target="_blank" rel="noopener noreferrer"
//                 className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center hover:bg-[#D4A953] transition-all duration-300 hover:scale-110"
//                 aria-label="Instagram"><RiInstagramFill size={25} /></a>
//       </div>
//     </footer>

    

//     </div>
//   );
// };

// export default Footer;





import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    // <footer className="bg-[#105470] text-white py-4">
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">

        <p className="text-center sm:text-left text-md">
          © 2025 Lumora AI is a product owned and operated by 
          <span className="font-bold text-[#D4A953]"> Virtu Tech Solutions </span>, 
          {/* <span className="font-semibold text-blue-600"> Virtu Tech Solutions </span>, */}
          All rights reserved.
        </p>

        <div className="flex space-x-4 text-white">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#4267B2] rounded-full flex items-center justify-center hover:bg-[#D4A953] transition-all duration-300 hover:scale-110"
          >
            <FaFacebookF size={22} />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-[#D4A953] transition-all duration-300 hover:scale-110"
          >
            <FaXTwitter size={22} />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#0A66C2] rounded-full flex items-center justify-center hover:bg-[#D4A953] transition-all duration-300 hover:scale-110"
          >
            <FaLinkedinIn size={22} />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
          >
            <RiInstagramFill size={22} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;



// import { RiInstagramFill } from "react-icons/ri";
// import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

// const Footer = () => {
//   // Define a modern dark background and a subtle accent color
//   const bgColor = "bg-gray-900"; // Deep, professional dark background
//   const accentColor = "text-blue-400"; // Subtle blue accent for modern look
//   const hoverColor = "hover:text-blue-400"; // Consistent hover effect

//   return (
//     <footer className={`${bgColor} text-gray-400 py-6 sm:py-8 border-t border-gray-800`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">

//         {/* Copyright Text (Left) */}
//         <p className="text-center sm:text-left text-sm sm:text-base">
//           © 2025 Lumora AI is a product owned and operated by 
//           <span className={`font-bold ${accentColor}`}> Virtu Tech Solutions </span>.
//           All rights reserved.
//         </p>

//         {/* Social Media Icons (Right) */}
//         <div className="flex space-x-3 sm:space-x-4">
          
//           {/* Facebook */}
//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border border-gray-700 transition-all duration-300 ${hoverColor} hover:border-blue-400`}
//             aria-label="Facebook"
//           >
//             <FaFacebookF size={16} />
//           </a>

//           {/* X/Twitter */}
//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border border-gray-700 transition-all duration-300 ${hoverColor} hover:border-blue-400`}
//             aria-label="X/Twitter"
//           >
//             <FaXTwitter size={16} />
//           </a>

//           {/* LinkedIn */}
//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border border-gray-700 transition-all duration-300 ${hoverColor} hover:border-blue-400`}
//             aria-label="LinkedIn"
//           >
//             <FaLinkedinIn size={16} />
//           </a>

//           {/* Instagram */}
//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border border-gray-700 transition-all duration-300 ${hoverColor} hover:border-blue-400`}
//             aria-label="Instagram"
//           >
//             <RiInstagramFill size={18} />
//           </a>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;
