
import { motion } from "framer-motion";

const MarqueeItem = () => (
    <div className="flex items-center gap-4 sm:gap-10 pr-4 sm:pr-10">
        <span className="text-4xl sm:text-6xl md:text-8xl font-black text-transparent stroke-text uppercase tracking-tighter opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap">
            Growlyn Advertising
        </span>
        <span className="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter whitespace-nowrap">
            Growlyn Advertising
        </span>
    </div>
)

export default function Clients() {
    return (
        <section className="bg-dark py-6 sm:py-10 border-b border-white/5 overflow-hidden">
            <div className="flex">
                <motion.div
                    className="flex"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...Array(4)].map((_, i) => (
                        <MarqueeItem key={i} />
                    ))}
                </motion.div>
                <motion.div
                    className="flex"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...Array(4)].map((_, i) => (
                        <MarqueeItem key={i + 4} />
                    ))}
                </motion.div>
            </div>

            <style jsx global>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
                }
                @media (min-width: 640px) {
                    .stroke-text {
                        -webkit-text-stroke: 2px rgba(255, 255, 255, 0.2);
                    }
                }
                .stroke-text:hover {
                    -webkit-text-stroke: 2px #f97316;
                }
            `}</style>
        </section>
    );
}
