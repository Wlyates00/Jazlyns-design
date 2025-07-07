import { Phone, Mail, Instagram, Facebook, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
   return (
      <footer className="bg-white">
         <div className="max-w-screen-lg mx-auto p-4">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-6 items-center">
               {/* Company Info */}
               <div className="sm:w-1/2 space-y-4 flex flex-col">
                  <p className="text-xl font-semibold text-center sm:text-left font-playfair">
                     Jazlyn's Design LLC
                  </p>
                  <Link
                     to="/contact"
                     className="w-full flex justify-center sm:justify-start"
                  >
                     <button className="bg-violet-200 max-w-42 rounded-md px-4 py-2 font-medium font-georgian hover:bg-violet-100 transition">
                        Contact Now
                     </button>
                  </Link>
               </div>

               {/* Socials */}
               <div className="sm:w-1/2 flex flex-col items-start sm:items-end space-y-2">
                  <p className="w-full sm:w-fit font-semibold text-center font-playfair text-xl">
                     Connect with me:
                  </p>
                  <div className="flex gap-4 w-fit">
                     <a
                        href="tel:5405585138"
                        className="hover:text-violet-700"
                        aria-label="Phone"
                     >
                        <Phone />
                     </a>
                     <a
                        href="mailto:jgcast7@gmail.com"
                        className="hover:text-violet-700"
                        aria-label="Email"
                     >
                        <Mail />
                     </a>
                     <a
                        href="https://www.instagram.com/jazlyns.design"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-700"
                        aria-label="Instagram"
                     >
                        <Instagram />
                     </a>
                     <a
                        href="https://www.facebook.com/profile.php?id=61560913512513&mibextid=ZbWKwL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-700"
                        aria-label="Facebook"
                     >
                        <Facebook />
                     </a>
                     <a
                        href="https://www.yelp.com/biz/jazlyns-design-radford"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-700"
                        aria-label="Yelp"
                     >
                        <Star />
                     </a>
                     <a
                        href="https://www.pinterest.com/jgcast1453/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-700"
                        aria-label="Pintrest"
                     >
                        <img
                           src="/pinterest.svg"
                           alt="pinterest"
                           className="w-full hover:text-violet-70 max-w-[24px]"
                        />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
