import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
   return (
      <>
         <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
               <Navbar />
               <div className="bg-violet-200">
                  <div className="max-w-screen-lg mx-auto flex sm:flex-row flex-col-reverse items-center justify-center">
                     <div className="sm:w-1/2 p-4">
                        <h1 className="text-7xl font-dancing font-bold">
                           Jazlyn Garcia
                        </h1>
                        <p className="text-xl font-playfair mt-4">
                           Hi, I’m Jazlyn! I studied Design Management at
                           Radford University and also earned a minor in Special
                           Education. I’m passionate about organizing, cleaning,
                           and helping others create spaces that are not only
                           beautiful but also functional and accessible.
                           Combining my design knowledge with my love for
                           organization, I’m here to help you transform your
                           space into a calm, inviting place that works
                           perfectly for you.
                        </p>
                     </div>
                     <div className="w-1/2 p-4 flex justify-end">
                        <img
                           src="/Me.jpg"
                           alt="A photo of me!"
                           className="max-h-[480px] rounded-full"
                        />
                     </div>
                  </div>
               </div>

               <div className="bg-white">
                  <div className="max-w-screen-lg mx-auto sm:p-4 p-8 sm:mt-6 mt-2 mb-6">
                     <h2 className="w-full text-center font-playfair text-5xl font-bold">
                        My Philosophy
                     </h2>
                     <p className="w-full text-center text-xl font-playfair mt-4 lg:px-16">
                        At Jazlyn’s Design, I’m all about creating clean,
                        organized, and accessible spaces. A tidy space not only
                        looks great but also helps you feel calm and focused.
                        Whether it’s your home, office, or business, keeping
                        things simple, neat, and easy to navigate makes every
                        space more welcoming and enjoyable.
                     </p>
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
