import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Clock, Calendar, User, Share2, Check, ArrowRight, BookOpen } from "lucide-react"
import { useLenis } from "../context/LenisContext"

export default function BlogReaderModal({ post, isOpen, onClose, openOnboarding }) {
    const lenis = useLenis()
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (isOpen) {
            lenis?.stop()
            document.body.style.overflow = "hidden"
        } else {
            lenis?.start()
            document.body.style.overflow = ""
        }

        return () => {
            lenis?.start()
            document.body.style.overflow = ""
        }
    }, [isOpen, lenis])

    if (!isOpen || !post) return null

    const handleShare = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
                {/* Dark Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-dark/90 backdrop-blur-md"
                />

                {/* Large Practical Reader Card */}
                <motion.div
                    role="dialog"
                    aria-modal="true"
                    data-lenis-prevent
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-4xl max-h-[92dvh] bg-dark border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
                >
                    {/* Header Bar */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02] backdrop-blur-md shrink-0 z-20">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/15 border border-accent/30 px-3 py-1 rounded-full">
                                {post.category}
                            </span>
                            <span className="text-white/40 text-xs hidden sm:inline flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 inline" /> {post.readTime}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleShare}
                                className="p-2 hover:bg-white/10 text-white/60 hover:text-white rounded-full transition-colors flex items-center gap-1.5 text-xs cursor-pointer"
                                title="Share article link"
                            >
                                {copied ? <Check className="w-4 h-4 text-accent" /> : <Share2 className="w-4 h-4" />}
                                <span className="hidden sm:inline">{copied ? "Link Copied" : "Share"}</span>
                            </button>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/10 text-white/60 hover:text-white rounded-full transition-colors cursor-pointer"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Scrollable Reader Body */}
                    <div className="flex-1 overflow-y-auto p-6 sm:p-10 text-white selection:bg-accent/30" data-lenis-prevent>
                        {/* Title & Metadata */}
                        <div className="max-w-3xl mx-auto mb-8">
                            <h1 className="text-2xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight uppercase mb-4 sm:mb-6 leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/50 border-b border-white/10 pb-6">
                                <div className="flex items-center gap-1.5">
                                    <User className="w-4 h-4 text-accent" />
                                    <span>{post.author || "Growlyn Strategist"}</span>
                                </div>
                                <span>•</span>
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    <span>{post.date}</span>
                                </div>
                                <span>•</span>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4" />
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] relative">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                        </div>

                        {/* Structured Practical Content */}
                        <div className="max-w-3xl mx-auto space-y-8">
                            {/* Lead Excerpt Callout */}
                            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border-l-4 border-accent text-white/90 text-base sm:text-lg italic leading-relaxed">
                                "{post.excerpt}"
                            </div>

                            {/* Main Sections */}
                            {post.content && post.content.map((section, idx) => (
                                <div key={idx} className="space-y-3">
                                    <h2 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                                        {section.heading}
                                    </h2>
                                    <p className="text-white/70 text-base sm:text-lg leading-relaxed font-sans">
                                        {section.body}
                                    </p>
                                </div>
                            ))}

                            {/* Strategic Bottom Consultation CTA */}
                            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-accent/15 via-white/[0.02] to-transparent border border-accent/30 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-heading font-black text-white uppercase tracking-tight mb-1">
                                        Apply this strategy to your brand
                                    </h3>
                                    <p className="text-xs sm:text-sm text-white/60">
                                        Consult with Growlyn strategists to review your customer acquisition architecture.
                                    </p>
                                </div>
                                <button
                                    onClick={() => {
                                        onClose()
                                        if (openOnboarding) {
                                            openOnboarding()
                                        } else {
                                            window.location.hash = "#onboarding"
                                        }
                                    }}
                                    className="px-6 py-3 bg-accent text-dark font-black rounded-full hover:bg-accent/90 transition-all active:scale-95 shrink-0 flex items-center gap-2 cursor-pointer shadow-lg shadow-accent/20"
                                >
                                    <span>Initiate Engagement</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}
