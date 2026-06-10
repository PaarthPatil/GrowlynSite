import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

import { testimonials } from "../constants"

export default function Testimonials() {
    const [playingVideo, setPlayingVideo] = useState(null);

    return (
        <section id="testimonials" className="py-20 sm:py-32 bg-dark border-t border-white/10">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-black text-white mb-12 sm:mb-20 text-center uppercase tracking-tighter">
                    Client Feedback
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 py-4">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="flex flex-col items-center group h-full"
                        >
                            <div 
                                className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-4 border-accent/20 cursor-pointer group-hover:border-accent/60 transition-colors duration-500 bg-black"
                                onClick={() => setPlayingVideo(index)}
                            >
                                {playingVideo === index && item.videoId ? (
                                    <iframe 
                                        src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&controls=1&modestbranding=1&rel=0`} 
                                        title={item.videoTitle}
                                        className="absolute inset-0 w-full h-full border-none"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <>
                                        <img 
                                            src={item.thumbnail} 
                                            alt={item.videoTitle} 
                                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
                                        
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-accent/80 group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                                                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1 sm:ml-2" />
                                            </div>
                                        </div>

                                        <div className="absolute bottom-6 left-0 w-full px-6 text-center">
                                            <h3 className="text-white font-black text-xl sm:text-2xl uppercase tracking-wider drop-shadow-lg leading-tight">
                                                {item.videoTitle}
                                            </h3>
                                        </div>
                                    </>
                                )}
                            </div>
                            
                            <button 
                                onClick={() => setPlayingVideo(index)}
                                className="mt-6 text-accent font-black text-xl uppercase tracking-widest hover:text-white transition-colors border-b-2 border-accent hover:border-white pb-1 inline-block"
                            >
                                {playingVideo === index ? "NOW PLAYING" : "WATCH NOW"}
                            </button>

                            <div className="mt-6 text-center px-4 bg-white/[0.02] rounded-xl p-6 border border-white/5 w-full flex-grow flex flex-col justify-center transition-colors hover:bg-white/[0.04]">
                                <h4 className="text-white font-bold text-base sm:text-lg mb-3 leading-snug">{item.metric}</h4>
                                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
