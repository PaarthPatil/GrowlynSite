import { motion } from "framer-motion"
import { Star } from "lucide-react"

import { testimonials } from "../constants"

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 sm:py-32 bg-dark border-t border-white/10">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-black text-white mb-12 sm:mb-20 text-center uppercase tracking-tighter">
                    Client Feedback
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 py-4">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            whileHover={{ y: -8, scale: 1.01 }}
                            className="backdrop-blur-sm bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-accent/30 rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 shadow-2xl relative overflow-hidden group cursor-pointer"
                        >
                            {/* Inner ambient corner glow */}
                            <div className="absolute top-0 right-0 w-28 h-28 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="mb-6 flex justify-center md:justify-start gap-1">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="w-4 h-4 sm:w-4 sm:h-4 fill-accent text-accent" />
                                    ))}
                                </div>
                                <p className="text-base sm:text-lg text-white/95 font-medium mb-8 leading-relaxed italic text-center md:text-left select-none">
                                    "{item.quote}"
                                </p>
                            </div>

                            <div className="relative z-10 border-t border-white/10 pt-4 text-center md:text-left flex flex-col justify-end">
                                <h4 className="text-white/95 font-black uppercase tracking-wider sm:tracking-widest text-xs sm:text-sm group-hover:text-accent transition-colors duration-300">
                                    {item.author}
                                </h4>
                                <p className="text-white/40 text-xs mt-1 font-medium">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
