import { motion } from "framer-motion"
import { brands } from "../constants"
import { Sparkles, TrendingUp } from "lucide-react"

export default function BrandLogos() {
    // Duplicate array to ensure infinite seamless marquee
    const marqueeBrands = [...brands, ...brands, ...brands]

    return (
        <section className="py-14 sm:py-20 bg-dark relative border-b border-white/10 overflow-hidden select-none">
            {/* Soft Ambient Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-10 text-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-white/50 text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-accent" />
                    <span>Trusted By Ambitious Brands & Category Leaders</span>
                </div>
            </div>

            {/* Edge Fade Gradients for visual polish */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-dark to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-dark to-transparent z-20 pointer-events-none" />

            {/* Infinite Horizontal Marquee */}
            <div className="flex overflow-hidden py-2 group">
                <motion.div
                    className="flex gap-4 sm:gap-6 shrink-0"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 35,
                    }}
                >
                    {marqueeBrands.map((brand, index) => (
                        <div
                            key={`${brand.name}-${index}`}
                            className="w-[250px] sm:w-[300px] shrink-0 bg-white/[0.02] border border-white/10 rounded-2xl p-4 sm:p-5 hover:border-accent/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between"
                        >
                            <div className="flex items-center justify-between gap-2 mb-3">
                                <h3 className="font-heading font-black text-white text-base sm:text-lg tracking-tight uppercase truncate">
                                    {brand.name}
                                </h3>
                                <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-accent bg-accent/15 border border-accent/30 px-2 py-0.5 rounded-full shrink-0">
                                    <TrendingUp className="w-3 h-3" />
                                    {brand.metric}
                                </span>
                            </div>
                            <p className="text-white/50 text-xs tracking-wide uppercase truncate">
                                {brand.tagline}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
