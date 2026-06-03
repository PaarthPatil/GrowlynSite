
import React from "react"
import { Facebook, Instagram, Search, Target, Share2, PenTool } from "lucide-react"

const GoogleIcon = (props) => 
    React.createElement("svg", { 
        viewBox: "0 0 24 24", 
        fill: "currentColor", 
        className: props.className, 
        style: props.style 
    }, 
    React.createElement("path", { 
        d: "M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.51 0-6.377-2.87-6.377-6.39 0-3.52 2.867-6.39 6.377-6.39 1.622 0 3.098.602 4.228 1.688l3.055-3.057C19.243 2.502 15.992 1.5 12.24 1.5 6.333 1.5 1.5 6.333 1.5 12.24s4.833 10.74 10.74 10.74c5.908 0 10.74-4.833 10.74-10.74 0-.743-.082-1.465-.219-2.16H12.24z" 
    })
);

export const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
];

export const heroData = {
    title: "GROWTH PARTNERS",
    subtitle: "Digital Marketing Agency",
    description: "We help ambitious brands scale through data-driven strategies and creative excellence.",
    ctaPrimary: "Start Project",
    ctaSecondary: "View Case Studies"
};

export const services = [
    {
        id: "01",
        title: "SEO",
        description: "Dominate search rankings with data-driven keyword strategies and technical audits.",
        icon: Search,
        coverImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "PPC Advertising",
        description: "Maximize ROI with targeted ad campaigns on Google, Facebook, and LinkedIn.",
        icon: Target,
        coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Social Media",
        description: "Build a loyal community and drive engagement with creative content strategies.",
        icon: Share2,
        coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "04",
        title: "Organic Content Marketing",
        description: "Tell your brand story with compelling copy that converts visitors into customers.",
        icon: PenTool,
        coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600&auto=format&fit=crop"
    },
];

export const projects = [
    {
        title: "Apex SaaS Growth",
        category: "SEO",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Bloom D2C Scale",
        category: "PPC Campaigns",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Zenith Fintech Launch",
        category: "Growth Strategy",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Velo Apparel Campaign",
        category: "Social Scaling",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop",
    },
];

export const testimonials = [
    {
        quote: "Growlyn completely transformed our organic acquisition. Our SEO traffic grew by 320% in under 5 months, and their team felt like an extension of our own.",
        author: "Sarah Jenkins",
        role: "VP of Growth, Apex SaaS",
    },
    {
        quote: "Their paid advertising strategies are highly optimized. We saw our return on ad spend (ROAS) double within the first quarter of collaboration.",
        author: "Michael Patel",
        role: "Founder, Bloom D2C",
    },
    {
        quote: "A world-class strategic partner. They helped us navigate our fintech launch, delivering growth metrics that exceeded our board targets.",
        author: "Elena Rostova",
        role: "CMO, Zenith Finance",
    },
];



export const posts = [
    {
        category: "Marketing",
        title: "The Future of SEO in 2026",
        date: "Oct 24, 2025",
        image: "https://placehold.co/600x400/222222/FFFFFF?text=SEO",
    },
    {
        category: "Design",
        title: "Why Minimalist Design Converts Better",
        date: "Oct 18, 2025",
        image: "https://placehold.co/600x400/222222/FFFFFF?text=Design",
    },
    {
        category: "Strategy",
        title: "Scaling Your Ad Spend Profitably",
        date: "Oct 12, 2025",
        image: "https://placehold.co/600x400/222222/FFFFFF?text=Scale",
    },
];

export const footerLinks = {
    services: [
        { name: "SEO", href: "#services" },
        { name: "PPC Advertising", href: "#services" },
        { name: "Social Media", href: "#services" },
        { name: "Organic Content Marketing", href: "#services" },
    ],
    company: [
        { name: "Careers", href: "#contact" },
        { name: "Contact", href: "#contact" },
    ],
    social: [
        { Icon: Instagram, href: "https://www.instagram.com/growwithgrowlyn/" },
        { Icon: GoogleIcon, href: "https://share.google/jL8rtKtHbyecT50MN" },
    ]
};

export const brands = [
    { name: "TechStart", metric: "3x Leads", tagline: "B2B SaaS Growth" },
    { name: "EcoBrand", metric: "+180% Sales", tagline: "Sustainable D2C" },
    { name: "Fintech Scale", metric: "5x ROI", tagline: "Secure Payments" },
    { name: "FashionHQ", metric: "2.5M Reach", tagline: "E-Commerce Launch" },
    { name: "Apex Global", metric: "+92% SEO Traffic", tagline: "Logistics Hub" },
    { name: "Vortex Digital", metric: "4.2x Conversions", tagline: "AI Content Studio" },
    { name: "Pulse Media", metric: "+300% Engagement", tagline: "Social Network" },
    { name: "Growlyn Pro", metric: "Partnership Creator", tagline: "Global Scaling" },
];
