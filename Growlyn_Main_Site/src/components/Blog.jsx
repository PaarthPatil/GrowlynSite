import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Clock, BookOpen } from "lucide-react"
import { blogPosts } from "../constants"
import BlogReaderModal from "./BlogReaderModal"

export default function Blog({ openOnboarding }) {
    const [selectedPost, setSelectedPost] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenPost = (post) => {
        setSelectedPost(post)
        setIsModalOpen(true)
    }

    return (
        <section id="insights" className="py-20 sm:py-32 bg-dark relative border-t border-white/10 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="mb-12 sm:mb-16">
                    <span className="text-accent font-medium tracking-widest uppercase text-xs sm:text-sm block mb-3">
                        Thought Leadership & Playbooks
                    </span>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter">
                        Strategic Insights
                    </h2>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
                    {blogPosts.map((post, index) => {
                        const isFeatured = index === 0
                        const colSpan = isFeatured ? "md:col-span-12 lg:col-span-6" : "md:col-span-6 lg:col-span-3"

                        return (
                            <article
                                key={post.id}
                                onClick={() => handleOpenPost(post)}
                                className={`group cursor-pointer bg-white/[0.02] border border-white/10 hover:border-accent/40 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 flex flex-col justify-between ${colSpan}`}
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden aspect-[16/10] w-full">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />

                                    {/* Category Pill */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="text-[11px] font-bold text-accent bg-dark/80 backdrop-blur-md border border-accent/30 px-3 py-1 rounded-full uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Read time pill */}
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="text-[11px] text-white/70 bg-dark/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Details */}
                                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="text-white/40 text-xs uppercase tracking-wider mb-2.5">
                                            {post.date} • By {post.author}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-accent transition-colors duration-300 mb-3 leading-snug">
                                            {post.title}
                                        </h3>
                                        <p className="text-white/60 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-6">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-white/60 group-hover:text-accent transition-colors">
                                        <span className="flex items-center gap-1.5">
                                            <BookOpen className="w-3.5 h-3.5" /> Read Analysis
                                        </span>
                                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>

            {/* Practical Modal Reader */}
            <BlogReaderModal
                post={selectedPost}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                openOnboarding={openOnboarding}
            />
        </section>
    )
}
