
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
    { name: "Insights", href: "#insights" },
    { name: "FAQ", href: "#faq" },
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
        instagramId: "DNqEoAjM2_i"
    },
    {
        videoTitle: "STUDY ABROAD",
        metric: "Reached 56.8L+ People in 30 Days",
        description: "5,685,600 Accounts reached. 5,171,699 Views.",
        thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
        instagramId: "C5Sew8DBYUE"
    },
    {
        videoTitle: "FORTUNER LIGHTS? FIXED!",
        metric: "Started With Zero Digital Presence",
        description: "100% Dependent on Offline Sales. Today 85% of Their Revenue Flows Through Online Channels.",
        thumbnail: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop",
        instagramId: "DLHxfIMo04n"
    }
];

export const blogPosts = [
    {
        id: "performance-marketing-2026",
        category: "Performance Marketing",
        title: "Scaling Paid Acquisition in India: What Works Beyond Vanity Metrics",
        date: "Feb 2026",
        readTime: "5 min read",
        author: "Growlyn Strategy Desk",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop",
        excerpt: "Modern performance marketing demands creative velocity, first-party customer cohort tracking, and strict unit economics over blind scale.",
        content: [
            {
                heading: "The Paradigm Shift in Paid Acquisition",
                body: "Relying purely on algorithm optimizations without distinct creative angles is no longer a viable growth model. Platforms like Meta and Google now demand that brands function like media houses — continually testing audience hypotheses through targeted angles, hook testing, and conversion-engineered landing pages."
            },
            {
                heading: "1. Creative As The Primary Targeting Lever",
                body: "In modern ad networks, the creative itself dictates the audience pool. By engineering distinct hooks for varying customer cohorts (e.g., price-sensitive buyers vs. quality-first enterprise purchasers), algorithms route ads to high-intent segments without hyper-restrictive demographic filters."
            },
            {
                heading: "2. The Retention & Unit Economics Equation",
                body: "Acquisition without retention is financial attrition. At Growlyn, we evaluate blending Customer Acquisition Cost (CAC) against 90-day Customer Lifetime Value (LTV). Driving first purchases must seamlessly synchronize with automated remarketing and high-touch community retention."
            },
            {
                heading: "3. First-Party Tracking Architecture",
                body: "With browser tracking privacy regulations tightening, server-side APIs (CAPI) and clean data attribution models are mandatory infrastructure requirements for any business deploying capital at scale."
            }
        ]
    },
    {
        id: "owned-audience-brand-equity",
        category: "Organic Ecosystems",
        title: "The Owned Audience Playbook: Why Communities Outlast Algorithms",
        date: "Jan 2026",
        readTime: "4 min read",
        author: "Content Strategy Group",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900&auto=format&fit=crop",
        excerpt: "Renting attention through ad spend is transactional. Constructing proprietary content distribution channels creates compounding enterprise value.",
        content: [
            {
                heading: "Renting Attention vs. Owning Communities",
                body: "Every dollar invested in paid ads stops generating returns the moment the campaign is turned off. Conversely, constructing high-retention video formats, educational authority, and genuine communities compounds in organic reach, lower CAC, and unmatched referral momentum."
            },
            {
                heading: "The 3 Pillars of Compounding Content",
                body: "High-performing brands focus on three core content categories: Proof of Authority (behind-the-scenes engineering and execution), Relatable Problem-Solving (short-form reels resolving real consumer pain points), and Cultural Relevance (participating naturally in market conversations)."
            },
            {
                heading: "Converting Viewers Into Loyal Advocates",
                body: "Viral reach without clear conversion pathways is wasted attention. Every piece of cornerstone organic content must funnel engaged audiences into owned touchpoints — WhatsApp channels, email newsletters, and direct inquiries."
            }
        ]
    },
    {
        id: "offline-to-digital-transformation",
        category: "Business Transformation",
        title: "From 0% to 85% Digital Revenue: Transitioning Established Businesses",
        date: "Jan 2026",
        readTime: "6 min read",
        author: "Enterprise Growth Division",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=900&auto=format&fit=crop",
        excerpt: "How traditional brick-and-mortar brands in automotive, immigration, and retail unlock exponential scale by re-engineering customer acquisition funnels.",
        content: [
            {
                heading: "Overcoming the Traditional Footfall Dependency",
                body: "Legacy businesses often rely on geographic footfall and local word-of-mouth. While established reputations provide strong foundational trust, growth caps quickly when operational capacity isn't backed by high-intent digital pipelines."
            },
            {
                heading: "Re-Engineering the Inquiry Pipeline",
                body: "By capturing localized search intent, showcasing verified work transformations via vertical video, and implementing instant conversational lead qualification (WhatsApp and automated scheduling), brands convert passive prospects into high-ticket clients."
            },
            {
                heading: "The Multiplier Effect",
                body: "Digital transformation does not replace existing operations; it amplifies them. Transparent proof-of-work, Google Business optimization, and omni-channel remarketing ensure your brand dominates local market share against less modern competitors."
            }
        ]
    }
];

export const faqData = [
    {
        question: "How does Growlyn structure client engagements?",
        answer: "We operate on dedicated strategic partnerships rather than generic task-based scopes. Each engagement begins with a comprehensive brand discovery and infrastructure review, followed by phased roadmaps focusing on paid acquisition, content architecture, or full-funnel digital transformation."
    },
    {
        question: "What differentiates Growlyn from traditional agencies?",
        answer: "We think like founders and execute like owners. We don't focus on superficial vanity metrics like empty impressions or low-intent likes. Our work is benchmarked against real commercial outcomes: pipeline revenue, lower acquisition costs (CAC), owned audience retention, and verified return on ad spend (ROAS)."
    },
    {
        question: "What typical timelines should we anticipate for tangible impact?",
        answer: "For performance ad campaigns, baseline testing and algorithmic stabilization typically yield qualified lead traction within 14 to 28 days. Comprehensive organic brand architecture and owned community compounding show substantial momentum within 60 to 90 days."
    },
    {
        question: "What industries and company sizes do you partner with?",
        answer: "We partner with ambitious enterprises and high-growth challenger brands across D2C, automotive, educational immigration, premium lifestyle, and professional services. Our methodologies scale seamlessly whether transitioning established regional businesses or accelerating emerging brands."
    },
    {
        question: "How are reporting and communication managed?",
        answer: "Transparency is core to our operations. Partners receive structured weekly performance updates, live real-time reporting dashboards, and dedicated strategic alignment calls with our lead specialists."
    },
    {
        question: "How are intellectual property and confidentiality handled?",
        answer: "Complete confidentiality is strictly preserved under reciprocal non-disclosure agreements (NDAs). All marketing assets, creative repositories, customer data, and ad accounts remain 100% owned by your organization."
    }
];

export const onboardingServices = [
    "Category Performance Marketing (Paid Ads & ROAS)",
    "Brand & Communication Strategy",
    "Organic Content & Owned Audience Ecosystems",
    "Marketing Automation & Retention Funnels",
    "Comprehensive Digital Transformation"
];

export const onboardingBudgets = [
    "₹50,000 – ₹1,00,000 / month",
    "₹1,00,000 – ₹2,50,000 / month",
    "₹2,50,000 – ₹5,00,000 / month",
    "₹5,00,000+ / month",
    "Custom Project Engagement"
];

export const onboardingTimelines = [
    "Immediate (Within 1-2 weeks)",
    "Within 30 days",
    "Next Quarter Planning"
];

export const contactInfo = {
    email: "info@growlyn.in",
    phone: "+91 88282 65416",
    address: "101, Bhawani Complex, Plot No. 67-68A, Sector 19A, Vashi, Navi Mumbai, Maharashtra - 400703",
    googleMapsUrl: "https://maps.google.com/?q=101+Bhawani+Complex+Sector+19A+Vashi+Navi+Mumbai+400703"
};

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
        { name: "About Us", href: "#presentation" },
    ],
    social: [
        { Icon: Instagram, href: "https://www.instagram.com/growwithgrowlyn/" },
        { Icon: Facebook, href: "https://www.facebook.com/growwithgrowlyn/" },
        { Icon: GoogleIcon, href: "https://www.google.com/search?q=Growlyn.in" },
    ]
};

export const brands = [
    { name: "Gurukripa Motors", metric: "85% Online Sales", tagline: "Automotive Services Partner" },
    { name: "shamika's marvels", metric: "Brand Growth", tagline: "Beauty Salon & Spa" },
    { name: "AJ Educational", metric: "5.6M Reach", tagline: "Immigration Consultants Inc." },
    { name: "SCHRAMM LOGISTICS", metric: "Global Scale", tagline: "Worldwide Delivery Partner" },
    { name: "Crowning Glorys", metric: "Digital Presence", tagline: "Premium Services" },
    { name: "Shalom", metric: "44.3K Followers", tagline: "Car & Bike Detailing" },
];
