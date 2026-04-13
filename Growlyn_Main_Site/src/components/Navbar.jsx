import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "../lib/utils"
import { useLenis } from "../context/LenisContext"

import { navLinks } from "../constants"

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const lenis = useLenis()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleLinkClick = (e, href) => {
        e.preventDefault()
        if (lenis) {
            lenis.scrollTo(href, { offset: -70 })
        } else {
            window.location.href = href
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-dark/95 backdrop-blur-md border-border py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-2xl font-heading font-bold text-white tracking-tighter">
                    Growlyn<span className="text-accent">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => lenis?.scrollTo("#contact", { offset: -70 })}
                        className="bg-white text-dark px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
                    >
                        Get Started
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => {
                                        if (lenis) lenis.scrollTo(link.href, { offset: -70 })
                                        setIsMobileMenuOpen(false)
                                    }}
                                    className="text-left text-lg font-medium text-white/70 hover:text-white"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <button
                                onClick={() => {
                                    if (lenis) lenis.scrollTo("#contact", { offset: -70 })
                                    setIsMobileMenuOpen(false)
                                }}
                                className="bg-white text-dark text-center py-3 rounded-lg font-semibold mt-2"
                            >
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
