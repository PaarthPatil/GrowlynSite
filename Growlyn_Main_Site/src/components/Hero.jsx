import { useState } from "react"
import { motion } from "framer-motion"
import { useLenis } from "../context/LenisContext"
import PresentationModal from "./PresentationModal"
import { Play } from "lucide-react"

export default function Hero({ openModal }) {
    const lenis = useLenis()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const scrollTo = (href) => {
        if (lenis) lenis.scrollTo(href, { offset: -70 })
        if (lenis) lenis.scrollTo(href, { offset: -70 })
        else window.location.href = href
    }

    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center pt-16 sm:pt-20 border-b border-white/10 px-4 sm:px-6 overflow-hidden">
            {/* Ambient Background Mesh Spheres */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Sphere 1: Top Left Violet Glow */}
                <motion.div
                    animate={{
                        x: [0, 40, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-20 -left-20 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-violet-600/10 blur-[80px] sm:blur-[130px]"
                />
                
                {/* Sphere 2: Bottom Right Orange Glow */}
                <motion.div
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 40, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -bottom-20 -right-20 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full bg-accent/10 blur-[100px] sm:blur-[150px]"
                />
            </div>

            <div className="container mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <p className="text-accent font-medium mb-4 sm:mb-6 tracking-widest uppercase text-xs sm:text-sm">
                        Digital Marketing Agency
                    </p>
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black text-white mb-5 sm:mb-8 leading-[0.95] tracking-tighter uppercase select-none">
                        GROWTH <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>PARTNERS
                    </h1>
                    <p className="text-sm sm:text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-6 sm:mb-12 leading-relaxed px-3 sm:px-0">
                        We help ambitious brands scale through data-driven strategies and creative excellence.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
                        <button
                            onClick={() => scrollTo("#contact")}
                            className="bg-white text-dark px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-white/90 active:bg-white/90 active:scale-95 transition-all w-full sm:w-auto shadow-xl select-none"
                        >
                            Start Project
                        </button>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group flex items-center justify-center gap-3 text-white transition-colors text-base sm:text-lg py-3 w-full sm:w-auto select-none"
                        >
                            <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 active:bg-accent/25 active:border-accent transition-all duration-300">
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
