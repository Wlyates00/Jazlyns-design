import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
   {
      question: "Can you work with the furniture and decor I already have?",
      answer:
         "Absolutely! I specialize in organization, so we can refresh your space using what you already have—no need to purchase anything new unless you want to.",
   },
   {
      question: "Do I need to have a vision or style in mind before starting?",
      answer:
         "No worries if you're not sure what you're looking for, I will help you discover your style and needs during our first conversation.",
   },
   {
      question: "Can you recommend painters, electricians, or carpenters?",
      answer:
         "Yes! I work with a network of trusted, licensed painters and repair professionals that I’m happy to recommend for your project.",
   },
];

export default function FAQSection() {
   const [openIndex, setOpenIndex] = useState<number | null>(null);

   const toggleIndex = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
   };

   return (
      <div className="bg-[#EBD8D0]">
         <div className="max-w-screen-md mx-auto px-4 py-10">
            <h2 className="text-5xl font-playfair text-center mb-8">
               Frequently Asked Questions
            </h2>
            <div className="space-y-4">
               {faqs.map((faq, index) => (
                  <div
                     key={index}
                     className="border-t border-b border-gray-400 overflow-hidden"
                  >
                     <button
                        onClick={() => toggleIndex(index)}
                        className="w-full flex justify-between items-center p-4 bg-[#EBD8D0] hover:bg-[#e0c6bd] transition-colors"
                     >
                        <span className="text-left font-georgian font-medium text-lg text-[#4b2e2e]">
                           {faq.question}
                        </span>
                        <ChevronDown
                           className={`w-5 h-5 transform transition-transform ${
                              openIndex === index ? "rotate-180" : ""
                           }`}
                        />
                     </button>
                     {openIndex === index && (
                        <div className="p-4 bg-[#EBD8D0] font-georgian text-[#3d2c29]">
                           {faq.answer}
                        </div>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
