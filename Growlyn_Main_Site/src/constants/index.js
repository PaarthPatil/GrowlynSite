
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

export const whatsappLink = "https://wa.me/918828265416?text=Hi%2C%20I%20came%20across%20your%20website%20and%20I%E2%80%99m%20interested%20in%20your%20services.%0A%0AMy%20Name%3A%0ABusiness%20Name%3A%0AService%20Required%3A%0ALocation%3A%0A%0APlease%20share%20more%20details.";

export const heroData = {
    title: "GROW REAL GO VIRAL",
    subtitle: "Growlyn",
    description: "We Think Like Founders, Work Like Owners, and Play for Real Results.",
    ctaPrimary: "Let's Talk",
    ctaSecondary: "Our Work"
};

export const services = [
    {
        id: "01",
        title: "Brand & Communication Strategy",
        description: "We Provide Services That Define Every Aspect of a Brands Universe. Identifying Customer Cohorts and How to Reach Them.",
        icon: Search,
        coverImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "Marketing Automation",
        description: "Streamline your digital storytelling and consistent communication across all channels.",
        icon: Target,
        coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Category Performance Marketing",
        description: "CPC & CPM Campaigns that justify value and turn your online presence into a competitive advantage.",
        icon: Share2,
        coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: "04",
        title: "Organic Content Marketing",
        description: "Creating Intellectual Properties That Keep Them Loyal to You. Long-term equity that compounds.",
        icon: PenTool,
        coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600&auto=format&fit=crop"
    },
];

export const projects = [
    {
        title: "Top Fit",
        handle: "top.fit.in",
        category: "Organic Content Marketing",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop",
        metrics: "32.1K Followers",
        growth: "Grew from 0 to 32.1K followers with 240 posts",
        description: "Custom comfort for every ride | Premium seat covers made to fit your style."
    },
    {
        title: "Baba Car Accessories",
        handle: "baba.car.accessories",
        category: "Owned Audience Growth",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
        metrics: "44.3K Followers",
        growth: "From 0 to 44.3K followers and 873 posts",
        description: "King of Car Accessories. Building community and long-term owned audience equity."
    },
    {
        title: "AJ Educational & Immigration",
        handle: "Study Abroad Campaigns",
        category: "Video Content & Reels",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
        metrics: "1.0M Views",
        growth: "Reached 56.8L+ people in 30 days",
        description: "Educational consultation content driving high-engagement short-form video campaigns."
    },
    {
        title: "Gurukripa Motors & Shalom",
        handle: "Digital Transformation",
        category: "Brand Strategy & Detailing",
        image: "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=800&auto=format&fit=crop",
        metrics: "85% Online Revenue",
        growth: "From 0% digital to 85% revenue from online channels",
        description: "Transforming local offline businesses into digital powerhouses through search & social strategy."
    }
];

export const testimonials = [
    {
        videoTitle: "CAR INTERIOR MADE SIMPLE",
        metric: "From 0 Followers To A Community",
        description: "This is Owned Audience. This is Long term Equity. This is Growth That Compounds.",
        thumbnail: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop",
        videoId: "5QjYcoCLyvU"
    },
    {
        videoTitle: "STUDY ABROAD",
        metric: "Reached 56.8L+ People in 30 Days",
        description: "5,685,600 Accounts reached. 5,171,699 Views.",
        thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
        videoId: "5QjYcoCLyvU" // Placeholder until actual link is provided
    },
    {
        videoTitle: "FORTUNER LIGHTS? FIXED!",
        metric: "Started With Zero Digital Presence",
        description: "100% Dependent on Offline Sales. Today 85% of Their Revenue Flows Through Online Channels.",
        thumbnail: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop",
        videoId: "5QjYcoCLyvU" // Placeholder until actual link is provided
    }
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
        { name: "Brand & Communication Strategy", href: "#services" },
        { name: "Marketing Automation", href: "#services" },
        { name: "Category Performance Marketing", href: "#services" },
        { name: "Organic Content Marketing", href: "#services" },
    ],
    company: [
        { name: "Careers", href: "#contact" },
        { name: "Contact Us", href: "#contact" },
    ],
    social: [
        { Icon: Instagram, href: "https://www.instagram.com/growwithgrowlyn/" },
        { Icon: Facebook, href: "https://www.facebook.com/growwithgrowlyn/" },
    ]
};

export const brands = [
    { name: "Gurukripa Motors", metric: "85% Online Sales", tagline: "Automotive Services Partner" },
    { name: "shamika's marvels", metric: "Brand Growth", tagline: "Beauty Salon & Spa" },
    { name: "AJ Educational", metric: "5.6M Reach", tagline: "Immigration Consultants Inc." },
    { name: "SCHRAMM LOGISTICS", metric: "Global Scale", tagline: "Worldwide Delivery Partner" },
    { name: "Crowning Glorys", metric: "Digital Presence", tagline: "Premium Services" },
    { name: "Shalom", metric: "44.3K Followers", tagline: "CAR AND BIKE DETAILING" },
];
