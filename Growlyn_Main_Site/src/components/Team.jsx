import { motion } from "framer-motion"

import { team } from "../constants"

export default function Team() {
    return (
        <section id="team" className="py-16 sm:py-24 bg-dark border-t border-white/10">
            <div className="container mx-auto px-4 sm:px-6 mb-10 sm:mb-16 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter mb-3 sm:mb-4">
                    Meet the Minds
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base px-4">
                    A collective of creative thinkers and data wizards.
                </p>
            </div>

            <div className="container mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 lg:gap-12">
                {team.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="group relative flex flex-col items-center"
                    >
                        <div className="w-full mb-3 sm:mb-6 overflow-hidden relative rounded-xl sm:rounded-2xl border border-white/10 group-hover:border-accent/50 transition-colors duration-500 cursor-pointer">
                            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full aspect-[4/3] sm:aspect-square md:aspect-[4/5] object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-out"
                            />
                        </div>

                        <div className="text-center w-full">
                            <h3 className="text-sm sm:text-xl font-bold text-white mb-0.5 sm:mb-1 group-hover:text-accent transition-colors">{member.name}</h3>
                            <p className="text-[9px] sm:text-xs font-medium text-white/50 uppercase tracking-widest">{member.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
