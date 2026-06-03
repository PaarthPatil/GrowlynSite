import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { LenisProvider } from "./context/LenisContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import Preloader from "./components/Preloader"
import ErrorBoundary from "./components/ErrorBoundary"
import ContactCareersModal from "./components/ContactCareersModal"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [contactModalTab, setContactModalTab] = useState("contact")

  const openContactModal = (tab = "contact") => {
    setContactModalTab(tab)
    setIsContactModalOpen(true)
  }

  return (
    <ErrorBoundary>
      <LenisProvider>
        <main className="bg-dark min-h-screen text-white font-sans selection:bg-accent/30 selection:text-white">

          <AnimatePresence mode="wait">
            {isLoading && <Preloader setLoading={setIsLoading} />}
          </AnimatePresence>

          {!isLoading && (
            <>
              <Navbar openModal={openContactModal} />
              <Hero openModal={openContactModal} />
              <Services />
              <Portfolio />
              <Testimonials />
              <Footer openModal={openContactModal} />
              
              <AnimatePresence>
                {isContactModalOpen && (
                  <ContactCareersModal 
                    isOpen={isContactModalOpen} 
                    onClose={() => setIsContactModalOpen(false)} 
                    defaultTab={contactModalTab} 
                  />
                )}
              </AnimatePresence>
            </>
          )}
        </main>
      </LenisProvider>
    </ErrorBoundary>
  )
}

export default App

