import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Preloader({ setLoading }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => (prev < 100 ? prev + 1 : 100))
        }, 20)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        if (count === 100) {
            const timeoutId = setTimeout(() => setLoading(false), 800)
            return () => clearTimeout(timeoutId)
        }
    }, [count, setLoading])

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-accent text-white"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            role="progressbar"
            aria-valuenow={count}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            <div className="relative">
                <motion.div
                    className="text-9xl font-heading font-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {count}%
                </motion.div>
            </div>
        </motion.div>
    )
}
