import { motion } from "framer-motion";
import { brands } from "../constants";

export default function Clients() {
    return (
        <section className="bg-dark py-20 sm:py-28 border-b border-white/10 relative overflow-hidden">
            {/* Background decorative glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-accent/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <span className="text-accent font-medium tracking-widest uppercase text-xs sm:text-sm">Partnerships</span>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter mt-3">
                        Our Client Ecosystem
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
                        Consolidated growth and performance metrics across our leading brand partners.
                    </p>
                </motion.div>

                {/* Unified Brand Showcase Box */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-5xl mx-auto backdrop-blur-md bg-white/[0.01] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative group/box"
                >
                    {/* Interactive glowing spotlight */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-white/[0.02] pointer-events-none z-0" />
                    
                    {/* Glowing outer border overlay on box hover */}
                    <div className="absolute inset-0 border border-accent/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover/box:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                    <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-white/10 relative z-10">
                        {brands.map((brand, i) => (
                            <motion.div
                                key={brand.name}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.5 }}
                                className="border-r border-b border-white/10 relative p-6 sm:p-10 flex flex-col items-center justify-center min-h-[160px] sm:min-h-[200px] cursor-pointer hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden group/item"
                            >
                                {/* Active background grid card glow */}
                                <div className="absolute inset-0 bg-gradient-to-b from-accent/0 to-accent/[0.03] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Interactive content block */}
                                <div className="flex flex-col items-center justify-center text-center">
                                    {/* Brand Logo/Name Typography */}
                                    <h3 className="text-base sm:text-2xl font-black text-white/60 md:text-white/40 group-hover/item:text-white group-hover/item:scale-105 transition-all duration-500 select-none tracking-tight font-heading uppercase">
                                        {brand.name}
                                    </h3>

                                    {/* Metric Tooltip badge (Auto-visible on mobile, dynamic hover on desktop) */}
                                    <div className="mt-3 md:mt-0 md:h-0 md:opacity-0 md:group-hover/item:h-auto md:group-hover/item:opacity-100 md:group-hover/item:mt-3 transition-all duration-500 ease-out flex flex-col items-center">
                                        <span className="bg-accent text-dark font-black text-[9px] sm:text-xs px-2.5 py-0.5 rounded-full shadow-md uppercase tracking-wider">
                                            {brand.metric}
                                        </span>
                                        <span className="text-[9px] sm:text-[10px] text-white/50 mt-1.5 font-medium max-w-[120px] leading-tight md:hidden md:group-hover/item:block">
                                            {brand.tagline}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
