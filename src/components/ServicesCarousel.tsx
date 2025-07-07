import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
   { title: "Interior Design", image: "/services/Service4.jpg" },
   { title: "Space Planning", image: "/services/Service3.jpg" },
   { title: "Paint Selection", image: "/services/Service1.jpg" },
   { title: "Organization", image: "/services/Service6.jpg" },
   { title: "Product Shoppping", image: "/services/Service2.jpg" },
   { title: "Furniture Selection", image: "/services/Service5.jpeg" },
];

export default function ServicesSection() {
   const scrollRef = useRef<HTMLDivElement>(null);
   const cardRef = useRef<HTMLDivElement>(null);
   const [cardWidth, setCardWidth] = useState(0);
   const [cardsPerView, setCardsPerView] = useState(1);
   const [currentIndex, setCurrentIndex] = useState(0);
   const [centerCards, setCenterCards] = useState(false);

   useEffect(() => {
      const updateDimensions = () => {
         if (scrollRef.current && cardRef.current) {
            const containerWidth = scrollRef.current.clientWidth;
            const cardStyle = window.getComputedStyle(cardRef.current);
            const width = cardRef.current.offsetWidth;
            const count = Math.floor(containerWidth / width);

            setCardWidth(width);
            setCardsPerView(count || 1);

            const totalContentWidth = services.length * width;
            setCenterCards(totalContentWidth < containerWidth);
         }
      };

      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
   }, []);

   const scrollToIndex = (index: number) => {
      if (!scrollRef.current || cardWidth === 0) return;

      const maxIndex = services.length - cardsPerView;
      const clampedIndex = Math.min(Math.max(index, 0), maxIndex);

      setCurrentIndex(clampedIndex);
      scrollRef.current.scrollTo({
         left: clampedIndex * cardWidth,
         behavior: "smooth",
      });
   };

   return (
      <div className="bg-[#EBD8D0] pb-2">
         <div className="max-w-screen-lg mx-auto px-4">
            <div className="relative">
               {/* Arrow buttons */}
               <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 disabled:opacity-50"
                  disabled={currentIndex === 0}
                  onClick={() => scrollToIndex(currentIndex - cardsPerView)}
               >
                  <ChevronLeft />
               </button>
               <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 disabled:opacity-50"
                  disabled={currentIndex >= services.length - cardsPerView}
                  onClick={() => scrollToIndex(currentIndex + cardsPerView)}
               >
                  <ChevronRight />
               </button>

               {/* Carousel */}
               <div
                  ref={scrollRef}
                  className={`flex overflow-x-auto scroll-smooth hide-scrollbar${
                     centerCards ? "justify-center" : ""
                  }`}
               >
                  {services.map((service, index) => (
                     <div
                        key={index}
                        ref={index === 0 ? cardRef : null}
                        className="flex-shrink-0 w-[90vw] sm:w-1/3 p-6 text-center"
                     >
                        <img
                           src={service.image}
                           alt={`Image of ${service.title}`}
                           className="w-full h-64 object-cover rounded-md mx-auto"
                        />
                        <h5 className="text-2xl font-semibold mt-2 font-playfair">
                           {service.title}
                        </h5>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
