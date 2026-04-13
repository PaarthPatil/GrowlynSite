import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { LenisProvider } from "./context/LenisContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Clients from "./components/Clients"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Team from "./components/Team"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import Preloader from "./components/Preloader"
import ErrorBoundary from "./components/ErrorBoundary"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <ErrorBoundary>
      <LenisProvider>
        <main className="bg-dark min-h-screen text-white font-sans selection:bg-accent/30 selection:text-white">

          <AnimatePresence mode="wait">
            {isLoading && <Preloader setLoading={setIsLoading} />}
          </AnimatePresence>

          {!isLoading && (
            <>
              <Navbar />
              <Hero />
              <Clients />
              <Services />
              <Portfolio />
              <Team />
              <Testimonials />
              <Footer />
            </>
          )}
        </main>
      </LenisProvider>
    </ErrorBoundary>
  )
}

export default App

