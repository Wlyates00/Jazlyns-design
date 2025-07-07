import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FileDown } from "lucide-react";

const resources = [
   {
      title: "Flooring and Lighting Guide",
      file: "/pdfs/FlooringandLightingGuide.pdf",
   },
   {
      title: "Fiber Glossary",
      file: "/pdfs/FiberGlossary.pdf",
   },
   {
      title: "General Packing List",
      file: "/pdfs/PackingList.pdf",
   },
   {
      title: "New Apartment Checklist",
      file: "/pdfs/NewApartmentChecklist.pdf",
   },
];

export default function Resources() {
   return (
      <>
         <div className="min-h-screen flex flex-col">
            <Navbar />

            <div className="bg-white flex-grow py-10">
               <div className="max-w-screen-lg mx-auto px-4">
                  <h2 className="text-5xl font-playfair font-bold mb-6 text-center">
                     Resources
                  </h2>
                  <p className="text-xl text-gray-600 mb-10 text-center font-playfair">
                     Download any of my helpful guides and checklists to support
                     your design journey.
                  </p>

                  <ul className="space-y-6 font-georgian">
                     {resources.map((res, i) => (
                        <li
                           key={i}
                           className="flex items-center justify-between bg-violet-100 px-6 py-4 rounded-lg shadow-md"
                        >
                           <span className="text-lg font-medium text-gray-800">
                              {res.title}
                           </span>
                           <a
                              href={res.file}
                              download
                              className="flex items-center gap-2 bg-violet-300 hover:bg-violet-200 px-4 py-2 rounded-md text-sm font-semibold transition"
                           >
                              <FileDown size={18} />
                              Download
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            <div className="shadow-2xl">
               <Footer />
            </div>
         </div>
      </>
   );
}
