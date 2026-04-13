import { Mail, ArrowUpRight } from "lucide-react"
import { footerLinks } from "../constants"
import { motion } from "framer-motion"
import { useLenis } from "../context/LenisContext"

export default function Footer() {
    const lenis = useLenis()
    const scrollTo = (href) => lenis?.scrollTo(href, { offset: -70 })

    return (
        <footer id="contact" className="bg-dark border-t border-white/10 pt-16 sm:pt-20 pb-8 sm:pb-10 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 sm:mb-20 text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold font-heading text-white mb-4 sm:mb-6 leading-tight">
                        Let's start a <br className="hidden sm:block" />
                        <span className="text-accent">project together</span>
                    </h2>
                    <p className="text-base sm:text-xl text-white/60 max-w-2xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
                        We help brands grow through data-driven digital marketing strategies and creative excellence.
                    </p>
                    <motion.a
                        href="mailto:hello@growlyn.com?subject=Project Inquiry"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-white text-dark px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/90 transition-colors"
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
                    <div className="col-span-2 md:col-span-2 lg:col-span-1">
                        <button onClick={() => scrollTo("#")} className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tighter block mb-4 sm:mb-6 hover:text-accent transition-colors">
                            Growlyn<span className="text-accent">.</span>
                        </button>
                        <p className="text-white/60 mb-4 sm:mb-6 text-sm sm:text-base">
                            Transforming digital landscapes one brand at a time.
                        </p>
                        <div className="flex gap-3 sm:gap-4">
                            {footerLinks.social.map(({ Icon, href }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3 }}
                                    className="text-white/40 transition-colors bg-white/5 p-2.5 sm:p-3 rounded-full hover:bg-white/10 hover:text-accent"
                                >
                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Services</h4>
                        <ul className="space-y-2 sm:space-y-3 text-white/60 text-sm sm:text-base">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <button onClick={() => scrollTo(link.href)} className="hover:text-accent transition-colors flex items-center gap-2 group text-left">
                                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Company</h4>
                        <ul className="space-y-2 sm:space-y-3 text-white/60 text-sm sm:text-base">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <button onClick={() => scrollTo(link.href)} className="hover:text-accent transition-colors flex items-center gap-2 group text-left">
                                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <h4 className="text-white font-bold mb-4 sm:mb-6 text-base sm:text-lg">Contact Us</h4>
                        <ul className="space-y-3 sm:space-y-4 text-white/60 text-sm sm:text-base">
                            <li className="flex items-center gap-2 sm:gap-3">
                                <div className="bg-accent/20 p-1.5 sm:p-2 rounded-lg text-accent flex-shrink-0">
                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <a href="mailto:hello@agency.com" className="hover:text-white transition-colors break-all">hello@agency.com</a>
                            </li>
                            <li className="leading-relaxed pl-8 sm:pl-12 border-l-2 border-white/10 text-white/50">
                                123 Market St, Suite 400<br />San Francisco, CA 94103
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                    <p className="text-white/40 text-xs sm:text-sm text-center sm:text-left">
                        © {new Date().getFullYear()} Growlyn Agency. All rights reserved.
                    </p>
                    <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-white/40">
                        <button onClick={() => scrollTo("#")} className="hover:text-white transition-colors">Privacy Policy</button>
                        <button onClick={() => scrollTo("#")} className="hover:text-white transition-colors">Terms of Service</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
