import { motion } from "framer-motion"

import { services } from "../constants"

export default function Services() {
    return (
        <section id="services" className="bg-dark/50 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 mb-4 sm:mb-6">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-6xl font-heading font-black text-white mb-6 sm:mb-10 text-center uppercase tracking-tighter"
                >
                    What We Do
                </motion.h2>
            </div>

            <div className="border-t border-b border-white/10">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className={`group border-b md:border-b-0 md:border-r border-white/10 last:border-b-0 last:md:border-r-0 p-6 sm:p-8 lg:p-10 min-h-[280px] sm:h-96 flex flex-col justify-between hover:bg-white/5 transition-all duration-500 cursor-pointer relative overflow-hidden`}
                        >
                            {/* Dynamic Cover Picture */}
                            {service.coverImage && (
                                <div className="absolute inset-0 opacity-25 md:opacity-0 md:group-hover:opacity-20 transition-all duration-700 ease-out scale-100 md:scale-105 md:group-hover:scale-100 pointer-events-none z-0">
                                    <img 
                                        src={service.coverImage} 
                                        alt={service.title} 
                                        className="w-full h-full object-cover filter grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                                </div>
                            )}

                            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500 pointer-events-none" />

                            {/* Top row with Category ID and Category Icon */}
                            <div className="flex justify-between items-start relative z-10 w-full">
                                <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white/10 group-hover:text-accent group-hover:scale-110 transition-all duration-500 origin-top-left select-none">
                                    {service.id}
                                </span>
                                {service.icon && (
                                    <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white/10 group-hover:text-accent group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                                )}
                            </div>

                            <div className="relative z-10 translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="w-10 sm:w-12 h-[2px] bg-accent mb-4 sm:mb-6 scale-0 group-hover:scale-100 transition-transform duration-500 origin-left" />
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{service.title}</h3>
                                <p className="text-white/70 sm:text-white/80 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
