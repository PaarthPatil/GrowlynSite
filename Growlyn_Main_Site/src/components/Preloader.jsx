import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader({ setLoading }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev === 100) {
                    clearInterval(timer)
                    setTimeout(() => setLoading(false), 800)
                    return 100
                }
                return prev + 1
            })
        }, 20)
        return () => clearInterval(timer)
    }, [setLoading])

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-accent text-white"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
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
