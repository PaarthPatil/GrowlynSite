import { motion } from "framer-motion"
import { useLenis } from "../context/LenisContext"

export default function Hero({ openModal }) {
    const lenis = useLenis()

    const scrollTo = (href) => {
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
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-20 -left-20 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-violet-600/10 blur-[80px] sm:blur-[130px]"
                />

                {/* Sphere 2: Bottom Right Orange Glow */}
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -bottom-20 -right-20 w-[350px] h-[350px] sm:w-[550px] sm:h-[550px] rounded-full bg-accent/15 blur-[90px] sm:blur-[140px]"
                />

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto text-center relative z-10 py-8 sm:py-0">
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
                        We help ambitious brands scale through data-driven strategies and creative marketing.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
                        <button
                            onClick={() => scrollTo("#contact")}
                            className="bg-white text-dark px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-white/90 active:bg-white/90 active:scale-95 transition-all w-full sm:w-auto shadow-xl select-none"
                        >
                            Start Project
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
