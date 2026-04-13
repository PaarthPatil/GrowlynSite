import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useLenis } from "../context/LenisContext"
import { projects } from "../constants"

export default function Portfolio() {
    const lenis = useLenis()
    const scrollToTop = () => lenis?.scrollTo("#work", { offset: -70 })

    return (
        <section id="work" className="py-20 sm:py-32 bg-dark relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-accent/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none -translate-y-1/2" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex items-baseline justify-between mb-3 sm:mb-4"
                >
                    <span className="text-accent font-medium tracking-widest uppercase text-xs sm:text-sm">Portfolio</span>
                    <button onClick={scrollToTop} className="hidden md:flex items-center gap-2 text-white/60 hover:text-accent transition-colors group">
                        <span className="border-b border-white/30 pb-1 group-hover:border-accent">View All Projects</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="flex items-baseline justify-between mb-12 sm:mb-20 border-b border-white/10 pb-6 sm:pb-8"
                >
                    <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white uppercase tracking-tighter">
                        Selected<span className="hidden sm:inline"><br className="md:hidden" /></span> Work
                    </h2>
                    <span className="hidden md:block text-white/30 text-lg font-heading">
                        {String(projects.length).padStart(2, '0')} Projects
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
                    {projects.map((project, i) => {
                        const isLarge = i === 0 || i === 3
                        const span = isLarge ? 'md:col-span-7' : 'md:col-span-5'
                        const offset = i % 2 === 1 ? 'md:mt-16' : ''

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className={`group cursor-pointer ${span} ${offset}`}
                            >
                                <div className="relative mb-4 sm:mb-6">
                                    <span className="absolute -top-2 -left-1 sm:-top-4 sm:-left-2 md:-top-8 md:-left-4 text-4xl sm:text-6xl md:text-8xl font-black text-white/5 group-hover:text-accent/20 transition-colors duration-700 z-0 select-none">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>

                                    <div className="relative overflow-hidden border border-white/10 group-hover:border-accent/50 transition-colors duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20" />

                                        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }} className="relative">
                                            <img src={project.image} alt={project.title} className={`w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 aspect-[16/10] sm:aspect-[16/10] md:${isLarge ? 'aspect-[16/10]' : 'aspect-[4/5]'}`} />
                                        </motion.div>

                                        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                            <div className="bg-white text-dark px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 font-bold text-xs sm:text-sm">
                                                <span className="hidden sm:inline">View Case Study</span>
                                                <span className="sm:hidden">View</span>
                                                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="absolute -top-2 sm:-top-3 left-0 w-0 h-[2px] bg-accent group-hover:w-8 sm:group-hover:w-12 transition-all duration-500" />
                                    <div className="flex justify-between items-start gap-3 sm:gap-4">
                                        <div>
                                            <span className="text-accent text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-1 sm:mb-2 block">{project.category}</span>
                                            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white leading-tight">{project.title}</h3>
                                        </div>
                                        <div className="text-white/20 group-hover:text-accent/60 transition-colors flex-shrink-0">
                                            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-12 sm:mt-16 text-center md:hidden">
                    <button onClick={scrollToTop} className="inline-flex items-center gap-2 text-white border-b border-accent pb-1 hover:text-accent transition-colors text-sm">
                        View All Projects
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
