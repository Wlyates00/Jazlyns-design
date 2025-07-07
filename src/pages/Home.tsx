import { Link } from "react-router-dom";
import FAQSection from "../components/Faqs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesCarousel";
import TestimonialCarousel from "../components/TestimonialCarousel";

function Home() {
   return (
      <div>
         <Navbar />
         {/* Home Banner */}
         <div className="bg-[url('/Lavender.jpg')] bg-cover bg-center w-full h-72">
            <div className="max-w-screen-lg mx-auto h-full">
               <div className="flex flex-row p-6 w-full h-full">
                  <div className="text-center w-full sm:w-1/2 sm:text-left flex flex-col justify-center h-full sm:pr-4 bg-white/50 rounded-xl sm:bg-transparent sm:rounded-none">
                     <h1 className="text-6xl font-dancing font-bold">
                        Hi, I'm Jazlyn!
                     </h1>
                     <h2 className="text-2xl font-georgian font-light mt-4">
                        I offer affordable and cozy results
                     </h2>
                  </div>
               </div>
            </div>
         </div>

         {/* Second Section */}
         <div className="max-w-screen-lg mx-auto h-full py-10 px-4">
            <div className="relative w-full h-48 bg-white p-4">
               <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-black"></div>
               <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-black"></div>

               <div className="flex items-center justify-center h-full">
                  <h1 className="text-xl text-center font-georgian font-light sm:mx-0 ">
                     This page was created out of a passion for cozy, organized,
                     and accessible design. I'll create a warm and inspiring
                     space for anyone who wants to love and enjoy their home to
                     the fullest.
                  </h1>
               </div>
            </div>
         </div>

         {/* Services Section */}
         <div className="bg-[#EBD8D0]">
            <div className="max-w-screen-lg mx-auto h-full pt-8 pb-4">
               <h4 className="text-5xl font-bold font-playfair w-full text-center">
                  Services
               </h4>
            </div>
            <ServicesSection />
            <div className="max-w-screen-lg mx-auto flex justify-center pb-8">
               <Link to="/contact">
                  <button className="bg-[#d7aa96] py-2 px-6 rounded-full font-georgian text-xl hover:pointer hover:bg-[#c09787] transition-colors shadow hover:shadow-md">
                     Book Now
                  </button>
               </Link>
            </div>
         </div>

         {/* Testimonials */}
         <TestimonialCarousel />

         <FAQSection />

         <Footer />
      </div>
   );
}

export default Home;
