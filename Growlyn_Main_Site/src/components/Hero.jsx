import { useState } from "react"
import { motion } from "framer-motion"
import { useLenis } from "../context/LenisContext"
import PresentationModal from "./PresentationModal"
import { Play } from "lucide-react"

export default function Hero() {
    const lenis = useLenis()
    const [isMenuOpen, setIsMenuOpen] = useState(false) // Assuming we might need this for consistency, but the request was specifically for the modal
    const [isModalOpen, setIsModalOpen] = useState(false)

    const scrollTo = (href) => {
        if (lenis) lenis.scrollTo(href, { offset: -70 })
        else window.location.href = href
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 border-b border-white/10 px-4 sm:px-6">
            <div className="container mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <p className="text-accent font-medium mb-4 sm:mb-6 tracking-widest uppercase text-xs sm:text-sm">
                        Digital Marketing Agency
                    </p>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white mb-6 sm:mb-8 leading-[0.9] tracking-tighter">
                        GROWTH <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>PARTNERS
                    </h1>
                    <p className="text-base sm:text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0">
                        We help ambitious brands scale through data-driven strategies and creative excellence.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <button
                            onClick={() => scrollTo("#contact")}
                            className="bg-white text-dark px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-white/90 transition-colors w-full sm:w-auto"
                        >
                            Start Project
                        </button>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group flex items-center gap-3 text-white transition-colors text-base sm:text-lg py-2"
                        >
                            <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                                <Play className="w-4 h-4 fill-white group-hover:fill-accent text-transparent transition-all" />
                            </span>
                            <span className="underline underline-offset-8 decoration-1 group-hover:text-accent group-hover:decoration-accent transition-all">
                                View Presentation
                            </span>
                        </button>
                    </div>
                </motion.div>
            </div>

            <PresentationModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                pdfUrl="/presentation.pdf" 
            />
        </section>
    )
}
