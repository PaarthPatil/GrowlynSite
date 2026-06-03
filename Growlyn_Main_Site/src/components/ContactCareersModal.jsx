import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check, Send, User, Mail, Link as LinkIcon, Briefcase, MessageSquare, ChevronDown } from "lucide-react"

export default function ContactCareersModal({ isOpen, onClose, defaultTab = "contact" }) {
    const [activeTab, setActiveTab] = useState(defaultTab)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    // Form inputs
    const [contactForm, setContactForm] = useState({ name: "", email: "", service: "SEO Optimization", message: "" })
    const [careersForm, setCareersForm] = useState({ name: "", email: "", role: "Senior SEO Strategist", resumeUrl: "", message: "" })

    // Errors
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (isOpen) {
            setActiveTab(defaultTab)
            setIsSubmitted(false)
            setIsSubmitting(false)
            setErrors({})
        }
    }, [isOpen, defaultTab])

    const handleContactSubmit = (e) => {
        e.preventDefault()
        const newErrors = {}
        if (!contactForm.name.trim()) newErrors.name = "Name is required"
        if (!contactForm.email.trim()) newErrors.email = "Email is required"
        else if (!/\S+@\S+\.\S+/.test(contactForm.email)) newErrors.email = "Invalid email address"
        if (!contactForm.message.trim()) newErrors.message = "Message is required"

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setErrors({})
        setIsSubmitting(true)

        // Mock API call
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)
            setContactForm({ name: "", email: "", service: "SEO Optimization", message: "" })
        }, 1500)
    }

    const handleCareersSubmit = (e) => {
        e.preventDefault()
        const newErrors = {}
        if (!careersForm.name.trim()) newErrors.name = "Name is required"
        if (!careersForm.email.trim()) newErrors.email = "Email is required"
        else if (!/\S+@\S+\.\S+/.test(careersForm.email)) newErrors.email = "Invalid email address"
        if (!careersForm.resumeUrl.trim()) newErrors.resumeUrl = "Resume link is required"
        if (!careersForm.message.trim()) newErrors.message = "Cover note is required"

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setErrors({})
        setIsSubmitting(true)

        // Mock API call
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)
            setCareersForm({ name: "", email: "", role: "Senior SEO Strategist", resumeUrl: "", message: "" })
        }, 1500)
    }

    const handleClose = () => {
        onClose()
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
                className="absolute inset-0 bg-dark/85 backdrop-blur-md"
            />

            {/* Modal Content Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="relative w-full max-w-lg bg-dark border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] z-10"
            >
                {/* Background radial glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-[80px] pointer-events-none z-0" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-600/5 rounded-full blur-[80px] pointer-events-none z-0" />

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/15 bg-white/[0.02] backdrop-blur-sm z-10 shrink-0">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-heading font-black text-white tracking-tight uppercase">
                            {activeTab === "contact" ? "Start A Project" : "Join Our Team"}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest mt-1">
                            {activeTab === "contact" ? "Growlyn Client Partner" : "Careers at Growlyn"}
                        </p>
                    </div>
                    <button
                        onClick={handleClose}
                        className="p-2 bg-white/5 hover:bg-white/10 active:bg-white/20 text-white/60 hover:text-white rounded-full transition-all cursor-pointer"
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Tab Selectors (Only shown if NOT submitted) */}
                {!isSubmitted && (
                    <div className="flex border-b border-white/10 relative z-10 shrink-0 bg-white/[0.01]">
                        <button
                            onClick={() => { setActiveTab("contact"); setErrors({}); }}
                            className={`flex-1 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors relative cursor-pointer ${
                                activeTab === "contact" ? "text-accent" : "text-white/40 hover:text-white/60"
                            }`}
                        >
                            Start Project
                            {activeTab === "contact" && (
                                <motion.div
                                    layoutId="modal-tab-line"
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                                />
                            )}
                        </button>
                        <button
                            onClick={() => { setActiveTab("careers"); setErrors({}); }}
                            className={`flex-1 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors relative cursor-pointer ${
                                activeTab === "careers" ? "text-accent" : "text-white/40 hover:text-white/60"
                            }`}
                        >
                            Careers
                            {activeTab === "careers" && (
                                <motion.div
                                    layoutId="modal-tab-line"
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                                />
                            )}
                        </button>
                    </div>
                )}

                {/* Scrollable Form Body */}
                <div className="flex-1 overflow-y-auto p-6 relative z-10">
                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center text-center py-10 sm:py-16"
                        >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/20 border border-accent flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(249,115,22,0.3)] animate-pulse">
                                <Check className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                            </div>
                            <h4 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-tight mb-3">
                                Thank You!
                            </h4>
                            <p className="text-sm sm:text-base text-white/60 max-w-sm leading-relaxed mb-8">
                                {activeTab === "contact"
                                    ? "Your project details have been received. Our growth strategists will analyze your request and get back to you within 24 hours."
                                    : "Your application has been received! Our HR team will review your credentials and reach out if there's a match."}
                            </p>
                            <button
                                onClick={handleClose}
                                className="bg-white text-dark px-8 py-3 rounded-full font-bold text-sm sm:text-base hover:bg-white/90 active:scale-95 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer"
                            >
                                Close Window
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={activeTab === "contact" ? handleContactSubmit : handleCareersSubmit} className="space-y-4 sm:space-y-5">
                            {activeTab === "contact" ? (
                                /* Contact Form Fields */
                                <>
                                    {/* Name */}
                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                                            <User className="w-3.5 h-3.5 text-accent" /> Full Name
                                        </label>
                                        <input
                                            type="text"
                                            value={contactForm.name}
                                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                            placeholder="John Doe"
                                            className={`w-full bg-white/[0.03] border ${
                                                errors.name ? "border-red-500" : "border-white/10 focus:border-accent"
                                            } rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white placeholder-white/20 outline-none transition-all`}
                                        />
                                        {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                                            <Mail className="w-3.5 h-3.5 text-accent" /> Email Address
                                        </label>
                                        <input
                                            type="email"
                                            value={contactForm.email}
                                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                            placeholder="john@example.com"
                                            className={`w-full bg-white/[0.03] border ${
                                                errors.email ? "border-red-500" : "border-white/10 focus:border-accent"
                                            } rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white placeholder-white/20 outline-none transition-all`}
                                        />
                                        {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                                    </div>

                                    {/* Service Selection */}
                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                                            <Briefcase className="w-3.5 h-3.5 text-accent" /> Service Needed
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={contactForm.service}
                                                onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                                                className="w-full bg-white/[0.03] border border-white/10 focus:border-accent rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white outline-none transition-all appearance-none cursor-pointer"
                                            >
                                                <option className="bg-dark text-white" value="SEO">SEO</option>
                                                <option className="bg-dark text-white" value="PPC Advertising">PPC Advertising</option>
                                                <option className="bg-dark text-white" value="Social Media">Social Media</option>
                                                <option className="bg-dark text-white" value="Organic Content Marketing">Organic Content Marketing</option>
                                                <option className="bg-dark text-white" value="Web Design & Dev">Web Design & Dev</option>
                                                <option className="bg-dark text-white" value="Complete Digital Strategy">Complete Digital Strategy</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                                            <MessageSquare className="w-3.5 h-3.5 text-accent" /> Project Brief
                                        </label>
                                        <textarea
                                            value={contactForm.message}
                                            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                                            placeholder="Tell us about your brand and what goals you want to achieve..."
                                            rows="3"
                                            className={`w-full bg-white/[0.03] border ${
                                                errors.message ? "border-red-500" : "border-white/10 focus:border-accent"
                                            } rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white placeholder-white/20 outline-none transition-all resize-none`}
                                        />
                                        {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message}</p>}
                                    </div>
                                </>
                            ) : (
                                /* Careers Form Fields */
                                <>
                                    {/* Name */}
                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                                            <User className="w-3.5 h-3.5 text-accent" /> Full Name
                                        </label>
                                        <input
                                            type="text"
                                            value={careersForm.name}
                                            onChange={(e) => setCareersForm({ ...careersForm, name: e.target.value })}
                                            placeholder="Jane Doe"
                                            className={`w-full bg-white/[0.03] border ${
                                                errors.name ? "border-red-500" : "border-white/10 focus:border-accent"
                                            } rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white placeholder-white/20 outline-none transition-all`}
                                        />
                                        {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                                            <Mail className="w-3.5 h-3.5 text-accent" /> Email Address
                                        </label>
                                        <input
                                            type="email"
                                            value={careersForm.email}
                                            onChange={(e) => setCareersForm({ ...careersForm, email: e.target.value })}
                                            placeholder="jane@example.com"
                                            className={`w-full bg-white/[0.03] border ${
                                                errors.email ? "border-red-500" : "border-white/10 focus:border-accent"
                                            } rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white placeholder-white/20 outline-none transition-all`}
                                        />
                                        {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                                    </div>

                                    {/* Role Selection */}
                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                                            <Briefcase className="w-3.5 h-3.5 text-accent" /> Position of Interest
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={careersForm.role}
                                                onChange={(e) => setCareersForm({ ...careersForm, role: e.target.value })}
                                                className="w-full bg-white/[0.03] border border-white/10 focus:border-accent rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white outline-none transition-all appearance-none cursor-pointer"
                                            >
                                                <option className="bg-dark text-white" value="Senior SEO Strategist">Senior SEO Strategist</option>
                                                <option className="bg-dark text-white" value="PPC Campaign Manager">PPC Campaign Manager</option>
                                                <option className="bg-dark text-white" value="Social Media Manager">Social Media Manager</option>
                                                <option className="bg-dark text-white" value="Creative Copywriter">Creative Copywriter</option>
                                                <option className="bg-dark text-white" value="Frontend Developer">Frontend Developer</option>
                                                <option className="bg-dark text-white" value="Creative Director">Creative Director</option>
                                                <option className="bg-dark text-white" value="Growth Intern">Growth Intern / Associate</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Resume Link */}
                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                                            <LinkIcon className="w-3.5 h-3.5 text-accent" /> Resume / Portfolio Link
                                        </label>
                                        <input
                                            type="url"
                                            value={careersForm.resumeUrl}
                                            onChange={(e) => setCareersForm({ ...careersForm, resumeUrl: e.target.value })}
                                            placeholder="https://myportfolio.com or Drive link"
                                            className={`w-full bg-white/[0.03] border ${
                                                errors.resumeUrl ? "border-red-500" : "border-white/10 focus:border-accent"
                                            } rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white placeholder-white/20 outline-none transition-all`}
                                        />
                                        {errors.resumeUrl && <p className="text-xs text-red-500 font-medium">{errors.resumeUrl}</p>}
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-1.5 sm:space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-white/60 flex items-center gap-1.5">
                                            <MessageSquare className="w-3.5 h-3.5 text-accent" /> Why Growlyn? (Cover Note)
                                        </label>
                                        <textarea
                                            value={careersForm.message}
                                            onChange={(e) => setCareersForm({ ...careersForm, message: e.target.value })}
                                            placeholder="Introduce yourself and tell us what value you can add to our ecosystem..."
                                            rows="3"
                                            className={`w-full bg-white/[0.03] border ${
                                                errors.message ? "border-red-500" : "border-white/10 focus:border-accent"
                                            } rounded-xl px-4 py-3 sm:py-3.5 text-sm sm:text-base text-white placeholder-white/20 outline-none transition-all resize-none`}
                                        />
                                        {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message}</p>}
                                    </div>
                                </>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-accent text-dark py-4 rounded-xl font-black text-sm sm:text-base transition-all hover:bg-accent/95 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] active:scale-98 flex items-center justify-center gap-2 mt-4 cursor-pointer disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin" />
                                        <span>Processing Request...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        <span>Send Details</span>
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </motion.div>
        </div>
    )
}
