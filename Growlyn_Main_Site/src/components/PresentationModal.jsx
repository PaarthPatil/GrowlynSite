import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download, Maximize2, ExternalLink } from "lucide-react"

export default function PresentationModal({ isOpen, onClose, pdfUrl = "/presentation.pdf" }) {
    const [isLoaded, setIsLoaded] = useState(false)

    if (!isOpen) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-dark/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl bg-dark border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-dark/50 backdrop-blur-sm z-10 shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                                    <Maximize2 className="w-4 h-4 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm sm:text-base leading-none">Agency Presentation</h3>
                                    <p className="text-white/40 text-[10px] sm:text-xs mt-1 uppercase tracking-wider">Growlyn Credentials Deck</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1 sm:gap-2">
                                <a
                                    href={pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 hover:bg-white/5 rounded-full transition-colors group"
                                    title="Open in New Tab"
                                    aria-label="Open presentation in a new tab"
                                >
                                    <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                                </a>
                                <a
                                    href={pdfUrl}
                                    download
                                    className="p-2 hover:bg-white/5 rounded-full transition-colors group"
                                    title="Download PDF"
                                    aria-label="Download presentation PDF"
                                >
                                    <Download className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                                </a>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/5 rounded-full transition-colors group"
                                    title="Close"
                                    aria-label="Close presentation modal"
                                >
                                    <X className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer Body */}
                        <div className="relative w-full aspect-video bg-white/5 overflow-hidden">
                            {/* Skeleton Loader */}
                            {!isLoaded && (
                                <div className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-2">
                                    <div className="w-full h-full bg-white/5 animate-pulse flex flex-col items-center justify-center px-12">
                                        <div className="w-1/3 h-2 bg-white/10 rounded-full mb-4" />
                                        <div className="w-2/3 h-2 bg-white/10 rounded-full mb-2" />
                                        <div className="w-1/2 h-2 bg-white/10 rounded-full" />
                                    </div>
                                    <div className="absolute bottom-6 text-[10px] text-white/20 uppercase tracking-[0.2em] animate-pulse">
                                        Preparing Presentation...
                                    </div>
                                </div>
                            )}

                            <motion.iframe
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isLoaded ? 1 : 0 }}
                                transition={{ duration: 0.8 }}
                                onLoad={() => setIsLoaded(true)}
                                src={`${pdfUrl}#toolbar=0`}
                                className="absolute inset-0 w-full h-full border-none z-10"
                                title="Presentation PDF"
                            />
                        </div>

                        {/* Footer (Optional) */}
                        <div className="px-6 py-3 border-t border-white/10 bg-dark/30 text-[10px] text-white/30 flex justify-between items-center">
                            <span>© 2026 GROWLYN DIGITAL</span>
                            <span className="hidden sm:inline">Professional Agency Credentials</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
