import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom"; // Or `next/link` if using Next.js

const projects = [
   {
      title: "Draper",
      image: "/projects/draper/Draper1.jpg",
      link: "/projects/draper",
   },
   {
      title: "Radford",
      image: "/coming-soon3.jpg",
      link: "#",
   },
   {
      title: "Sunridge",
      image: "/coming-soon3.jpg",
      link: "#",
   },
];

export default function ShowcasePage() {
   return (
      <>
         <div className="min-h-screen flex flex-col">
            <Navbar />

            <div className="bg-white py-10 flex-grow">
               <div className="max-w-screen-lg mx-auto px-4">
                  <h1 className="text-5xl font-playfair font-bold text-center mb-10">
                     Project Showcase
                  </h1>

                  {/* Project Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                     {projects.map((project, index) => (
                        <Link to={project.link} key={index}>
                           <div className="cursor-pointer group">
                              <img
                                 src={project.image}
                                 alt={project.title}
                                 className="rounded-xl shadow-lg w-full h-64 object-cover transition transform group-hover:scale-105"
                              />
                              <h2 className="mt-4 text-xl text-center font-semibold font-playfair">
                                 {project.title}
                              </h2>
                           </div>
                        </Link>
                     ))}
                  </div>

                  {/* Contact Section */}
                  <div className="mt-20 bg-violet-100 rounded-xl p-8">
                     <h2 className="text-3xl font-georgian font-bold text-center mb-4">
                        Interested in working together?
                     </h2>
                     <p className="text-center text-gray-600 mb-6 font-georgian">
                        Let's talk about your next project. I'm happy to answer
                        any questions or provide a quote!
                     </p>
                     <div className="flex justify-center">
                        <a
                           href="/contact"
                           className="bg-violet-300 hover:bg-violet-200 px-6 py-3 rounded-md font-semibold font-playfair transition"
                        >
                           Contact Me
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <div className="shadow-2xl">
               <Footer />
            </div>
         </div>
      </>
   );
}
