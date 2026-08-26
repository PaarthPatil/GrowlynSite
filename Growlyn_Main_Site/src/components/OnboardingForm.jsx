import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle2, ShieldCheck, Clock, Award, Building2, User, Mail, Phone, Globe, ChevronDown, MessageSquare } from "lucide-react"
import { onboardingServices, onboardingBudgets, onboardingTimelines } from "../constants"

export default function OnboardingForm() {
    const [formData, setFormData] = useState({
        brandName: "",
        contactPerson: "",
        email: "",
        phone: "",
        websiteUrl: "",
        primaryService: onboardingServices[0],
        budgetRange: onboardingBudgets[1],
        timeline: onboardingTimelines[0],
        projectScope: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newErrors = {}

        if (!formData.brandName.trim()) newErrors.brandName = "Brand/Company name is required"
        if (!formData.contactPerson.trim()) newErrors.contactPerson = "Contact person name is required"
        if (!formData.email.trim()) newErrors.email = "Business email is required"
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email address required"
        if (!formData.phone.trim()) newErrors.phone = "Contact number is required"
        if (!formData.projectScope.trim()) newErrors.projectScope = "Please provide an overview of your objectives"

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setErrors({})
        setIsSubmitting(true)

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "27b78839-ca53-4f42-a1f9-217444722b95",
                    subject: `Client Onboarding Dossier: ${formData.brandName} (${formData.contactPerson})`,
                    from_name: "Growlyn Onboarding System",
                    brand_name: formData.brandName,
                    contact_person: formData.contactPerson,
                    email: formData.email,
                    phone: formData.phone,
                    current_url: formData.websiteUrl || "Not specified",
                    primary_service: formData.primaryService,
                    budget_range: formData.budgetRange,
                    target_timeline: formData.timeline,
                    project_scope_and_bottlenecks: formData.projectScope,
                }),
            })

            const result = await response.json()
            if (result.success) {
                setIsSubmitted(true)
            } else {
                setErrors({ form: result.message || "Failed to submit onboarding form. Please try again." })
            }
        } catch (err) {
            setErrors({ form: "Network connection error. Please verify your connection." })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="onboarding" className="py-20 sm:py-32 bg-dark relative border-t border-white/10 overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Context, Process & Value Architecture */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div>
                            <span className="text-accent font-medium tracking-widest uppercase text-xs sm:text-sm block mb-3">
                                Client Onboarding Dossier
                            </span>
                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter leading-[0.95] mb-6">
                                INITIATE YOUR BRAND'S <br className="hidden sm:block" />
                                <span className="text-accent">GROWTH MATRIX</span>
                            </h2>
                            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                                Submit your organizational objectives and current operational benchmarks. Our principal strategists will review your data and prepare a tailored growth roadmap for your discovery consultation.
                            </p>
                        </div>

                        {/* Executive Standards Badges */}
                        <div className="space-y-4 pt-4 border-t border-white/10">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                <div className="p-2.5 rounded-xl bg-accent/15 text-accent shrink-0">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm sm:text-base">Strict Confidentiality</h4>
                                    <p className="text-white/50 text-xs sm:text-sm mt-0.5 leading-relaxed">
                                        All organizational benchmarks, ad spend figures, and commercial inquiries are protected under strict non-disclosure terms.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                <div className="p-2.5 rounded-xl bg-accent/15 text-accent shrink-0">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm sm:text-base">24-Hour Strategic Review</h4>
                                    <p className="text-white/50 text-xs sm:text-sm mt-0.5 leading-relaxed">
                                        Submissions are reviewed directly by our founders and department leads, not sales reps.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                <div className="p-2.5 rounded-xl bg-accent/15 text-accent shrink-0">
                                    <Award className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm sm:text-base">Targeted Strategy Blueprint</h4>
                                    <p className="text-white/50 text-xs sm:text-sm mt-0.5 leading-relaxed">
                                        Every discovery session includes audit insights on customer acquisition costs, ad creative angles, and content retention.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: High-Ticket Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden"
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="py-12 sm:py-20 text-center flex flex-col items-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-accent/20 border border-accent flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(249,115,22,0.3)] animate-pulse">
                                    <CheckCircle2 className="w-10 h-10 text-accent" />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-tight mb-3">
                                    Dossier Received
                                </h3>
                                <p className="text-white/60 text-sm sm:text-base max-w-md leading-relaxed mb-8">
                                    Your onboarding information for <span className="text-white font-bold">{formData.brandName}</span> has been securely transmitted. A lead strategist will analyze your requirements and reach out via email/phone within 24 business hours.
                                </p>
                                <button
                                    onClick={() => {
                                        setIsSubmitted(false)
                                        setFormData({
                                            brandName: "",
                                            contactPerson: "",
                                            email: "",
                                            phone: "",
                                            websiteUrl: "",
                                            primaryService: onboardingServices[0],
                                            budgetRange: onboardingBudgets[1],
                                            timeline: onboardingTimelines[0],
                                            projectScope: "",
                                        })
                                    }}
                                    className="px-8 py-3 bg-white text-dark font-black text-sm rounded-full hover:bg-white/90 transition-all cursor-pointer"
                                >
                                    Submit Additional Requirements
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="border-b border-white/10 pb-4 mb-2">
                                    <h3 className="text-lg sm:text-xl font-heading font-bold text-white uppercase tracking-tight">
                                        Client Brief & Infrastructure Data
                                    </h3>
                                    <p className="text-xs text-white/40 uppercase tracking-wider mt-1">
                                        All fields marked with an asterisk are required
                                    </p>
                                </div>

                                {/* Row 1: Brand Name & Contact Person */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold uppercase tracking-wider text-white/70 flex items-center gap-1.5">
                                            <Building2 className="w-3.5 h-3.5 text-accent" /> Brand / Enterprise Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="brandName"
                                            value={formData.brandName}
                                            onChange={handleChange}
                                            placeholder="e.g. Apex Apparel India"
                                            className={`w-full bg-white/[0.03] border ${
                                                errors.brandName ? "border-red-500" : "border-white/10 focus:border-accent"
                                            } rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all`}
                                        />
                                        {errors.brandName && <p className="text-xs text-red-500">{errors.brandName}</p>}
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold uppercase tracking-wider text-white/70 flex items-center gap-1.5">
                                            <User className="w-3.5 h-3.5 text-accent" /> Decision Maker Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="contactPerson"
                                            value={formData.contactPerson}
                                            onChange={handleChange}
                                            placeholder="e.g. Siddharth Nair"
                                            className={`w-full bg-white/[0.03] border ${
                                                errors.contactPerson ? "border-red-500" : "border-white/10 focus:border-accent"
                                            } rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all`}
                                        />
                                        {errors.contactPerson && <p className="text-xs text-red-500">{errors.contactPerson}</p>}
                                    </div>
                                </div>

                                {/* Row 2: Email & Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold uppercase tracking-wider text-white/70 flex items-center gap-1.5">
                                            <Mail className="w-3.5 h-3.5 text-accent" /> Corporate Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="siddharth@apexapparel.in"
                                            className={`w-full bg-white/[0.03] border ${
                                                errors.email ? "border-red-500" : "border-white/10 focus:border-accent"
                                            } rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all`}
                                        />
                                        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold uppercase tracking-wider text-white/70 flex items-center gap-1.5">
                                            <Phone className="w-3.5 h-3.5 text-accent" /> Contact Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className={`w-full bg-white/[0.03] border ${
                                                errors.phone ? "border-red-500" : "border-white/10 focus:border-accent"
                                            } rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all`}
                                        />
                                        {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                                    </div>
                                </div>

                                {/* Row 3: Website or Handle */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-white/70 flex items-center gap-1.5">
                                        <Globe className="w-3.5 h-3.5 text-accent" /> Website URL or Instagram Handle
                                    </label>
                                    <input
                                        type="text"
                                        name="websiteUrl"
                                        value={formData.websiteUrl}
                                        onChange={handleChange}
                                        placeholder="https://yourbrand.in or @yourbrand"
                                        className="w-full bg-white/[0.03] border border-white/10 focus:border-accent rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all"
                                    />
                                </div>

                                {/* Row 4: Primary Strategic Objective */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-white/70">
                                        Primary Strategic Focus Area *
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="primaryService"
                                            value={formData.primaryService}
                                            onChange={handleChange}
                                            className="w-full bg-white/[0.03] border border-white/10 focus:border-accent rounded-xl px-4 py-3 text-sm text-white outline-none transition-all appearance-none cursor-pointer"
                                        >
                                            {onboardingServices.map((service) => (
                                                <option key={service} value={service} className="bg-dark text-white">
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Row 5: Budget Range & Timeline */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold uppercase tracking-wider text-white/70">
                                            Monthly Marketing Allocation
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="budgetRange"
                                                value={formData.budgetRange}
                                                onChange={handleChange}
                                                className="w-full bg-white/[0.03] border border-white/10 focus:border-accent rounded-xl px-4 py-3 text-sm text-white outline-none transition-all appearance-none cursor-pointer"
                                            >
                                                {onboardingBudgets.map((budget) => (
                                                    <option key={budget} value={budget} className="bg-dark text-white">
                                                        {budget}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold uppercase tracking-wider text-white/70">
                                            Target Execution Window
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleChange}
                                                className="w-full bg-white/[0.03] border border-white/10 focus:border-accent rounded-xl px-4 py-3 text-sm text-white outline-none transition-all appearance-none cursor-pointer"
                                            >
                                                {onboardingTimelines.map((time) => (
                                                    <option key={time} value={time} className="bg-dark text-white">
                                                        {time}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                {/* Row 6: Project Scope / Bottlenecks */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold uppercase tracking-wider text-white/70 flex items-center gap-1.5">
                                        <MessageSquare className="w-3.5 h-3.5 text-accent" /> Strategic Goals & Current Growth Bottlenecks *
                                    </label>
                                    <textarea
                                        name="projectScope"
                                        value={formData.projectScope}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Detail your target milestones, current ad performance metrics, or key challenges currently limiting your scale..."
                                        className={`w-full bg-white/[0.03] border ${
                                            errors.projectScope ? "border-red-500" : "border-white/10 focus:border-accent"
                                        } rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all resize-none`}
                                    />
                                    {errors.projectScope && <p className="text-xs text-red-500">{errors.projectScope}</p>}
                                </div>

                                {errors.form && (
                                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium text-center">
                                        {errors.form}
                                    </div>
                                )}

                                {/* Submit Action */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-accent text-dark py-4 rounded-xl font-black text-sm sm:text-base transition-all hover:bg-accent/95 hover:shadow-[0_0_35px_rgba(249,115,22,0.3)] active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin" />
                                            <span>Transmitting Dossier...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            <span>Submit Strategic Dossier</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
