import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
   {
      name: "Bill D.",
      text: "When I was temporarily disabled and moving into a new place, it was overwhelming. Jazlyn came into my life and turned a simple apartment into a beautiful home. She's extremely talented, polite, and professional. I cannot express how grateful I am to have had her work with me. I give her the highest recommendation and encourage anyone to please use her if you need any interior decorating.",
   },
   {
      name: "PLACEHOLDER",
      text: "I was struggling to make my new space feel like home, but Jazlyn's guidance completely transformed it. Her ability to understand my style and make it functional was incredible. Every room now feels warm, welcoming, and uniquely mine.",
   },
   {
      name: "PLACEHOLDER",
      text: "From the first meeting to the final touches, the process was seamless. Jazlyn brought my vision to life better than I imagined. Her professionalism and creativity made the experience truly enjoyable. I’m so happy with how everything turned out.",
   },
   {
      name: "PLACEHOLDER",
      text: "Working with Jazlyn was an absolute joy. She took the time to understand what I wanted and delivered results that exceeded expectations. My home has never felt more 'me.' Her attention to detail is unmatched.",
   },
   {
      name: "PLACEHOLDER",
      text: "I had no idea how much a well-designed space could impact my day-to-day life. Jazlyn's work not only improved the look of my home but how I feel in it. I can’t thank her enough for what she’s done.",
   },
   {
      name: "PLACEHOLDER",
      text: "Jazlyn turned what felt like a cold and impersonal apartment into a space that feels peaceful and warm. Her ability to mix functionality with beauty is rare. I recommend her to anyone looking to love their space again.",
   },
];

export default function TestimonialCarousel() {
   const scrollRef = useRef<HTMLDivElement>(null);
   const [currentIndex, setCurrentIndex] = useState(0);
   const [containerWidth, setContainerWidth] = useState(0);

   // Update container width on mount and on resize
   useEffect(() => {
      const updateWidth = () => {
         if (scrollRef.current) {
            setContainerWidth(scrollRef.current.clientWidth);
         }
      };

      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
   }, []);

   const scrollToIndex = (index: number) => {
      if (!scrollRef.current || containerWidth === 0) return;

      const clampedIndex = Math.min(
         Math.max(index, 0),
         testimonials.length - 1
      );
      setCurrentIndex(clampedIndex);

      scrollRef.current.scrollTo({
         left: clampedIndex * containerWidth,
         behavior: "smooth",
      });
   };

   return (
      <div className="bg-white py-10">
         <div className="max-w-screen-lg mx-auto px-4">
            <h4 className="text-5xl font-playfair font-bold text-center mb-10">
               Testimonials
            </h4>

            {/* Carousel */}
            <div
               ref={scrollRef}
               className="flex overflow-x-auto space-x-4 scroll-smooth hide-scrollbar items-center"
               style={{ scrollSnapType: "x mandatory" }}
            >
               {testimonials.map((t, i) => (
                  <div
                     key={i}
                     className="flex-shrink-0 w-full snap-center bg-violet-200 p-8 rounded-xl shadow text-center"
                     style={{ minWidth: `${containerWidth}px` }}
                  >
                     <p className="text-lg italic text-gray-700 mb-4">
                        “{t.text}”
                     </p>
                     <p className="text-md font-semibold text-gray-900">
                        — {t.name}
                     </p>
                  </div>
               ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex justify-center gap-4 mt-8">
               <button
                  className="bg-[#EBD8D0] p-2 rounded-full shadow disabled:opacity-50"
                  disabled={currentIndex === 0}
                  onClick={() => scrollToIndex(currentIndex - 1)}
               >
                  <ChevronLeft />
               </button>
               <button
                  className="bg-[#EBD8D0] p-2 rounded-full shadow disabled:opacity-50"
                  disabled={currentIndex === testimonials.length - 1}
                  onClick={() => scrollToIndex(currentIndex + 1)}
               >
                  <ChevronRight />
               </button>
            </div>
         </div>
      </div>
   );
}
