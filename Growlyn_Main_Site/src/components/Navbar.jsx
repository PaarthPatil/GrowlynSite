import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"
import { cn } from "../lib/utils"
import { useLenis } from "../context/LenisContext"

import { navLinks } from "../constants"

export default function Navbar({ openModal }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const lenis = useLenis()

    // --- Styling Variables (Edit these to change the look) ---
    const styles = {
        nav: cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
            isScrolled ? "bg-dark/80 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" : "bg-transparent py-6"
        ),
        logoContainer: "flex items-center gap-3 group",
        logoImage: "h-8 sm:h-10 w-auto object-contain",
        logoText: "text-xl sm:text-2xl font-heading font-bold text-white tracking-tight group-hover:text-accent transition-colors",
        logoDot: "text-accent ml-0.5",

        desktopNav: "hidden md:flex items-center gap-8",
        desktopNavLink: "text-sm font-medium text-white/70 hover:text-white transition-colors",
        desktopCta: "bg-white text-dark px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors",

        mobileToggle: "md:hidden text-white",
        mobileMenu: "md:hidden bg-dark border-b border-white/10 overflow-hidden",
        mobileMenuContainer: "flex flex-col p-6 gap-4",
        mobileNavLink: "text-left text-lg font-medium text-white/70 hover:text-white",
        mobileCta: "bg-white text-dark text-center py-3 rounded-lg font-semibold mt-2"
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleLinkClick = (e, href) => {
        if (e) e.preventDefault()

        if (href === "#contact") {
            if (openModal) openModal("contact")
            setIsMobileMenuOpen(false)
            return
        }

        if (lenis) {
            // --- SCROLL OFFSET CONFIG ---
            // Edit these numbers to change where the scroll stops
            let offset = -70 // Default offset
            if (href === "#work") offset = -150 // Special offset for Work

            lenis.scrollTo(href, { offset })
        } else {
            window.location.href = href
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <nav className={styles.nav}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className={styles.logoContainer}>
                    <img
                        src="/logo.png"
                        alt="Growlyn Logo"
                        className={styles.logoImage}
                    />
                    <span className={styles.logoText}>
                        Growlyn<span className={styles.logoDot}>.</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="relative text-sm font-medium text-white/70 hover:text-white transition-colors py-2 group/navlink select-none"
                        >
                            <span>{link.name}</span>
                            {/* Slide underline highlight */}
                            <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent scale-x-0 group-hover/navlink:scale-x-100 transition-transform duration-300 origin-left" />
                        </a>
                    ))}
                    <button
                        onClick={(e) => handleLinkClick(e, "#contact")}
                        className="relative overflow-hidden bg-white text-dark px-6 py-2.5 rounded-full text-sm font-black hover:text-white transition-colors duration-300 group/cta border border-white hover:border-accent hover:bg-transparent shadow-lg shadow-white/5 hover:shadow-accent/25 hover:shadow-xl select-none"
                    >
                        <span className="relative z-10">Get Started</span>
                        <span className="absolute inset-0 bg-accent scale-x-0 group-hover/cta:scale-x-100 transition-transform duration-500 origin-left z-0" />
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={styles.mobileToggle}
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
                        className="md:hidden bg-dark/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-3.5 relative">
                            {/* Mobile ambient glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    className="text-left text-base font-bold text-white/80 active:text-accent active:bg-white/5 px-5 py-4 rounded-xl transition-all w-full flex items-center justify-between border border-white/5 select-none"
                                >
                                    <span>{link.name}</span>
                                    <ChevronRight className="w-4 h-4 text-white/30" />
                                </button>
                            ))}
                            <button
                                onClick={(e) => handleLinkClick(e, "#contact")}
                                className="bg-accent text-dark text-center py-4 rounded-xl font-black mt-3 transition-colors duration-200 active:bg-accent/80 shadow-lg shadow-accent/15 select-none"
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
