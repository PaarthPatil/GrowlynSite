import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, TrendingUp, Sparkles } from "lucide-react";

export default function Clients() {
    const [traffic, setTraffic] = useState(15000);
    const [convRate, setConvRate] = useState(1.5);
    const [leadValue, setLeadValue] = useState(150);
    const [isBoostActive, setIsBoostActive] = useState(false);
    const [particles, setParticles] = useState([]);
    const [showSummary, setShowSummary] = useState(false);

    // Calculate outcomes
    const effectiveTraffic = Math.round(traffic * (isBoostActive ? 1.5 : 1));
    const effectiveConvRate = Math.round((convRate * (isBoostActive ? 2.2 : 1)) * 10) / 10;
    
    // Monthly Leads = Traffic * (Conversion Rate / 100)
    const monthlyLeads = Math.round(effectiveTraffic * (effectiveConvRate / 100));
    
    // Monthly Revenue = Leads * Lead Value
    const monthlyRevenue = Math.round(monthlyLeads * leadValue);
    
    // Annualized Projection
    const annualRevenue = monthlyRevenue * 12;

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(value);
    };

    const handleOptimize = () => {
        setIsBoostActive(true);
        
        // Target maximum values
        const targetTraffic = 250000;
        const targetConvRate = 6.0;
        const targetLeadValue = 2000;
        
        // Animate the sliders sliding up over 800ms
        const steps = 15;
        const stepTime = 800 / steps;
        let currentStep = 0;
        
        const startTraffic = traffic;
        const startConvRate = convRate;
        const startLeadValue = leadValue;
        
        const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            
            setTraffic(Math.round(startTraffic + (targetTraffic - startTraffic) * progress));
            setConvRate(Math.round((startConvRate + (targetConvRate - startConvRate) * progress) * 10) / 10);
            setLeadValue(Math.round(startLeadValue + (targetLeadValue - startLeadValue) * progress));
            
            if (currentStep >= steps) {
                clearInterval(interval);
                
                // Spawn particles relative to the layout
                const newParticles = [
                    { id: 1, x: "20%", y: "30%", text: "Traffic Maxed! 📈" },
                    { id: 2, x: "50%", y: "25%", text: "Conversion Doubled! ⚡" },
                    { id: 3, x: "80%", y: "35%", text: "CAC Reduced 40%! 💸" },
                    { id: 4, x: "35%", y: "65%", text: "+350% Leads! 🚀" },
                    { id: 5, x: "75%", y: "55%", text: "ROI Optimized! 🔥" }
                ];
                setParticles(newParticles);
                
                setTimeout(() => {
                    setParticles([]);
                }, 2000);
                
                // Mount victory details after a small lag
                setTimeout(() => {
                    setShowSummary(true);
                }, 600);
            }
        }, stepTime);
    };

    return (
        <section className="bg-dark py-20 sm:py-28 border-b border-white/10 relative overflow-hidden">
            <style>{`
                @keyframes float-fade-up {
                    0% {
                        opacity: 0;
                        transform: translate(-50%, -50%) translateY(20px) scale(0.8);
                    }
                    15% {
                        opacity: 1;
                        transform: translate(-50%, -50%) translateY(0) scale(1.05);
                    }
                    85% {
                        opacity: 1;
                        transform: translate(-50%, -50%) translateY(-20px) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(-50%, -50%) translateY(-40px) scale(0.95);
                    }
                }
            `}</style>

            {/* Ambient Background glows */}
            <div 
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] rounded-full blur-[100px] sm:blur-[150px] pointer-events-none transition-all duration-1000 ${
                    isBoostActive ? "bg-accent/10" : "bg-accent/5"
                }`} 
            />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <span className="text-accent font-medium tracking-widest uppercase text-xs sm:text-sm">Interactive Sandbox</span>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-white uppercase tracking-tighter mt-3">
                        The Growth Simulator
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
                        Simulate your marketing funnel scaling. Drag metrics sliders below and activate Growlyn scaling parameters to forecast pipeline growth.
                    </p>
                </motion.div>

                {/* Dashboard Box wrapper */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-5xl mx-auto backdrop-blur-md bg-white/[0.01] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-white/[0.01] pointer-events-none z-0 rounded-2xl sm:rounded-3xl" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
                        
                        {/* LEFT: Inputs & Sliders (7 Columns) */}
                        <div className="lg:col-span-7 space-y-6 lg:border-r lg:border-white/10 lg:pr-8">
                            <h3 className="font-heading font-black text-white text-base sm:text-lg uppercase tracking-wider mb-4">
                                Funnel Configurations
                            </h3>

                            {/* Slider 1: Traffic */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-white/65 font-medium">Monthly Website Traffic</span>
                                    <span className="text-accent font-mono font-bold tabular-nums">
                                        {traffic.toLocaleString()} visitors
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="1000"
                                    max="250000"
                                    step="1000"
                                    value={traffic}
                                    onChange={(e) => setTraffic(parseInt(e.target.value))}
                                    className="w-full accent-accent bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent/30"
                                />
                            </div>

                            {/* Slider 2: Conversion Rate */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-white/65 font-medium">Funnel Conversion Rate</span>
                                    <span className="text-accent font-mono font-bold tabular-nums">
                                        {convRate.toFixed(1)}%
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="0.2"
                                    max="6.0"
                                    step="0.1"
                                    value={convRate}
                                    onChange={(e) => setConvRate(parseFloat(e.target.value))}
                                    className="w-full accent-accent bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent/30"
                                />
                            </div>

                            {/* Slider 3: Deal Value */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-white/65 font-medium">Average Deal / Lead Value</span>
                                    <span className="text-accent font-mono font-bold tabular-nums">
                                        {formatCurrency(leadValue)}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="10"
                                    max="2000"
                                    step="10"
                                    value={leadValue}
                                    onChange={(e) => setLeadValue(parseInt(e.target.value))}
                                    className="w-full accent-accent bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-accent/30"
                                />
                            </div>

                            {/* Growlyn Boost Acceleration Toggle */}
                            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.01] flex items-center justify-between gap-4 mt-8">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg shrink-0 ${isBoostActive ? "bg-accent/15 text-accent" : "bg-white/5 text-white/40"}`}>
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="text-white font-bold text-sm block leading-none">Growlyn Scaling Engine</span>
                                        <span className="text-white/50 text-[11px] block mt-1 leading-tight">
                                            Simulates 2.2x Conversion & 1.5x traffic boost
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsBoostActive(!isBoostActive)}
                                    className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-300 focus:outline-none shrink-0 relative ${
                                        isBoostActive ? "bg-accent" : "bg-white/10"
                                    }`}
                                >
                                    <div
                                        className={`w-5 h-5 rounded-full bg-dark shadow-md transform transition-transform duration-300 ${
                                            isBoostActive ? "translate-x-5" : "translate-x-0"
                                        }`}
                                    />
                                </button>
                            </div>
                        </div>

                        {/* RIGHT: Output Displays (5 Columns) */}
                        <div className="lg:col-span-5 flex flex-col justify-between h-full gap-8">
                            <div>
                                <h3 className="font-heading font-black text-white text-base sm:text-lg uppercase tracking-wider mb-6">
                                    Simulated Output
                                </h3>
                                
                                <div className="space-y-6">
                                    <div>
                                        <span className="text-[11px] text-white/40 font-bold uppercase tracking-widest block">Expected Monthly Leads</span>
                                        <span className="text-3xl sm:text-4xl font-heading font-black text-white block mt-1 tabular-nums">
                                            {monthlyLeads.toLocaleString()}
                                        </span>
                                    </div>
                                    
                                    <div>
                                        <span className="text-[11px] text-white/40 font-bold uppercase tracking-widest block">Estimated Monthly Revenue</span>
                                        <span className="text-3xl sm:text-4xl font-heading font-black text-accent block mt-1 tabular-nums">
                                            {formatCurrency(monthlyRevenue)}
                                        </span>
                                    </div>

                                    <div>
                                        <span className="text-[11px] text-white/40 font-bold uppercase tracking-widest block">Projected Annual Pipeline</span>
                                        <span className="text-2xl sm:text-3xl font-heading font-black text-white/70 block mt-1 tabular-nums">
                                            {formatCurrency(annualRevenue)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/5">
                                <button
                                    onClick={handleOptimize}
                                    className="w-full bg-white hover:bg-accent text-dark hover:text-dark font-black text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-accent/25 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer select-none"
                                >
                                    <Sparkles className="w-4 h-4" /> Optimize Funnel
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Optimization Floating Particles */}
                    {particles.map(p => (
                        <span
                            key={p.id}
                            className="absolute pointer-events-none text-accent font-black text-xs sm:text-sm uppercase tracking-wider select-none z-30 whitespace-nowrap bg-dark/95 px-3 py-1 rounded-full border border-accent/20 shadow-lg"
                            style={{
                                left: p.x,
                                top: p.y,
                                animation: "float-fade-up 2s ease-out forwards",
                            }}
                        >
                            {p.text}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Victory summary modal */}
            <AnimatePresence>
                {showSummary && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-dark/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.92, y: 15 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.92, y: 15 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="bg-dark/95 border border-accent/20 rounded-3xl p-8 max-w-lg w-full text-center relative overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.15)] animate-glow"
                        >
                            <div className="absolute -top-20 -left-20 w-44 h-44 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-20 -right-20 w-44 h-44 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-14 h-14 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-5 shrink-0">
                                    <Sparkles className="w-6 h-6" />
                                </div>

                                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2">
                                    Funnel Optimized! 🚀
                                </h3>
                                
                                <p className="text-white/70 text-sm sm:text-base mb-6 max-w-sm">
                                    Based on this simulation, your optimized funnel is projected to generate **{formatCurrency(monthlyRevenue)}/month** in pipeline revenue.
                                </p>
                                
                                <p className="text-white/40 text-xs sm:text-sm mb-8 leading-relaxed max-w-xs">
                                    Ready to design a custom growth strategy for your actual business metrics?
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full">
                                    <a
                                        href="https://wa.me/918828265416?text=Hi%2C%20I%20came%20across%20your%20website%20and%20I%E2%80%99m%20interested%20in%20your%20services.%0A%0AMy%20Name%3A%0ABusiness%20Name%3A%0AService%20Required%3A%0ALocation%3A%0A%0APlease%20share%20more%20details."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto bg-accent hover:bg-accent/80 text-dark font-black text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-accent/25 hover:scale-105 active:scale-95 uppercase tracking-wider text-center"
                                    >
                                        Get My Custom Growth Plan
                                    </a>
                                    
                                    <button
                                        onClick={() => setShowSummary(false)}
                                        className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors duration-300"
                                    >
                                        Adjust Metrics
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}



