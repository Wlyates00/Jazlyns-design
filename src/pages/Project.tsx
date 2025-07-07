import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

type ProjectProps = {
   title: string;
   description: string;
   primaryImage: string;
   images: string[];
};

export default function Project({
   title,
   description,
   primaryImage,
   images,
}: ProjectProps) {
   return (
      <div>
         <div className="min-h-screen flex flex-col">
            <Navbar />

            <div className="bg-white flex-grow">
               <div className="bg-[#EBD8D0] mb-10">
                  <div className="max-w-screen-lg mx-auto px-4">
                     <div className="w-full flex flex-col sm:flex-row items-center justify-center py-4">
                        <div className="flex flex-col sm:w-1/2 h-full pr-4">
                           <h1 className="text-4xl font-playfair font-bold mb-2 sm:mb-4 text-center sm:text-left">
                              {title}
                           </h1>
                           <p className="sm:px-0 px-12 text-lg text-gray-700 font-playfair leading-relaxed sm:mb-6 text-center sm:text-left">
                              {description}
                           </p>
                        </div>
                        <div className="sm:px-0 px-12 sm:w-1/2 flex justify-center py-4">
                           <img
                              src={primaryImage}
                              alt={`${title} hero`}
                              className="w-full h-80 object-cover rounded-xl shadow"
                           />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="max-w-screen-lg mx-auto px-4 mb-10">
                  {/* Gallery */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                     {images.map((img, index) => (
                        <img
                           key={index}
                           src={img}
                           alt={`Preview ${index + 1}`}
                           className="rounded-lg object-cover h-64 max-w-64 sm:max-w-full w-full shadow hover:scale-105 transition"
                        />
                     ))}
                  </div>
               </div>
            </div>

            <div className="shadow-2xl">
               <Footer />
            </div>
         </div>
      </div>
   );
}
