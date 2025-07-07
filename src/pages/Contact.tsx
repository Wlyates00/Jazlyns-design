import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ContactForm() {
   const [submitted, setSubmitted] = useState(false);
   const [loading, setLoading] = useState(false);

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);

      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "df1cc795-744b-4f4c-a545-660d125d2482");

      const res = await fetch("https://api.web3forms.com/submit", {
         method: "POST",
         body: formData,
      });

      if (res.ok) {
         setSubmitted(true);
         setLoading(false);
         e.currentTarget.reset();
         setTimeout(() => setSubmitted(false), 4000);
      } else {
         alert("Something went wrong. Please try again.");
         setLoading(false);
      }
   };

   return (
      <>
         <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="bg-white py-12 flex-grow flex items-center">
               <div className="max-w-screen-lg mx-auto px-4 flex flex-col md:flex-row gap-8">
                  {/* Left side: heading and text */}
                  <div className="md:w-1/2 space-y-4">
                     <h2 className="text-4xl font-playfair font-bold">
                        Get in Touch
                     </h2>
                     <p className="text-lg text-gray-600">
                        I'd love to hear about your project or answer any
                        questions you have. Fill out the form and I'll get back
                        to you shortly.
                     </p>
                     <p className="text-md text-gray-500">
                        Prefer email? Reach out to me directly at{" "}
                        <a
                           href="mailto:jgcast7@gmail.com"
                           className="text-violet-400 underline"
                        >
                           jgcast7@gmail.com
                        </a>
                     </p>
                  </div>

                  {/* Right side: form */}
                  <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4">
                     {/* Hidden key now added via JS */}
                     <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-violet-400"
                     />
                     <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-violet-400"
                     />
                     <input
                        type="text"
                        name="subject"
                        required
                        placeholder="Services Needed"
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-violet-400"
                     />
                     <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Your Message"
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-violet-400"
                     ></textarea>

                     <button
                        type="submit"
                        disabled={loading || submitted}
                        className={`bg-violet-200 text-black hover:bg-violet-100 px-6 py-3 rounded-md transition font-playfair font-semibold text-lg flex items-center justify-center ${
                           submitted ? "text-violet-500" : ""
                        }`}
                     >
                        {submitted
                           ? "✓ Sent!"
                           : loading
                           ? "Sending..."
                           : "Send Message"}
                     </button>
                  </form>
               </div>
            </div>
            <div className="shadow-2xl">
               <Footer />
            </div>
         </div>
      </>
   );
}
