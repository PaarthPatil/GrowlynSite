import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react"
import { faqData } from "../constants"

export default function FAQ({ openOnboarding }) {
    const [openIndex, setOpenIndex] = useState(0) // First item open by default

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }

    return (
        <section id="faq" className="py-20 sm:py-32 bg-dark relative border-t border-white/10 overflow-hidden">
            {/* Soft Ambient Radial Glow */}
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

            <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-20">
                    <span className="text-accent font-medium tracking-widest uppercase text-xs sm:text-sm block mb-3">
                        Clarity & Operations
                    </span>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
                        Direct answers regarding our partnership structure, performance benchmarks, and growth operations.
                    </p>
                </div>

                {/* Accordion Container */}
                <div className="space-y-4">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index

                        return (
                            <div
                                key={index}
                                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                                    isOpen
                                        ? "bg-white/[0.04] border-accent/40 shadow-[0_0_25px_rgba(249,115,22,0.08)]"
                                        : "bg-white/[0.02] border-white/10 hover:border-white/20"
                                }`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left cursor-pointer select-none"
                                    aria-expanded={isOpen}
                                >
                                    <span
                                        className={`font-heading font-bold text-base sm:text-xl transition-colors duration-300 ${
                                            isOpen ? "text-accent" : "text-white group-hover:text-white/90"
                                        }`}
                                    >
                                        {item.question}
                                    </span>
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                                            isOpen
                                                ? "border-accent bg-accent/20 text-accent rotate-180"
                                                : "border-white/15 bg-white/5 text-white/50"
                                        }`}
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                                        >
                                            <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-white/70 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>

                {/* Additional Queries Footer Note */}
                <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-white/50">
                    <HelpCircle className="w-4 h-4 text-accent" />
                    <span>Have a specific operational or enterprise requirement not covered here?</span>
                    <button
                        onClick={() => {
                            if (openOnboarding) openOnboarding()
                            else window.location.hash = "#onboarding"
                        }}
                        className="text-white hover:text-accent underline underline-offset-4 font-bold inline-flex items-center gap-1 cursor-pointer transition-colors"
                    >
                        Schedule an inquiry <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>
        </section>
    )
}
