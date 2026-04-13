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

                <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10 border-y border-white/10 py-8 sm:py-12">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="pt-6 sm:pt-8 md:pt-0 px-4 sm:px-6 text-center first:pt-0"
                        >
                            <div className="mb-4 sm:mb-6 flex justify-center gap-1">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent" />
                                ))}
                            </div>
                            <p className="text-base sm:text-lg md:text-xl text-white font-medium mb-6 sm:mb-8 leading-relaxed">
                                "{item.quote}"
                            </p>
                            <div>
                                <h4 className="text-white/90 font-bold uppercase tracking-wider sm:tracking-widest text-xs sm:text-sm">{item.author}</h4>
                                <p className="text-white/50 text-xs mt-1">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
