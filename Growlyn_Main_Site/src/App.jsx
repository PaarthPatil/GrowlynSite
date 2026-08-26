import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LenisProvider, useLenis } from "./context/LenisContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import BrandLogos from "./components/BrandLogos"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Testimonials from "./components/Testimonials"
import Blog from "./components/Blog"
import FAQ from "./components/FAQ"
import OnboardingForm from "./components/OnboardingForm"
import Footer from "./components/Footer"
import Preloader from "./components/Preloader"
import ErrorBoundary from "./components/ErrorBoundary"
import ContactCareersModal from "./components/ContactCareersModal"

function MainContent({ openContactModal }) {
  const lenis = useLenis()
  const scrollToOnboarding = () => {
    if (lenis) {
      lenis.scrollTo("#onboarding", { offset: -50 })
    } else {
      window.location.hash = "#onboarding"
    }
  }

  return (
    <>
      <Navbar openModal={openContactModal} />
      <Hero openModal={openContactModal} />
      <BrandLogos />
      <Services />
      <Portfolio />
      <Testimonials />
      <Blog openOnboarding={scrollToOnboarding} />
      <FAQ openOnboarding={scrollToOnboarding} />
      <OnboardingForm />
      <Footer openModal={openContactModal} />
    </>
  )
}

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
        <main className="bg-dark min-h-[100dvh] text-white font-sans selection:bg-accent/30 selection:text-white">

          <AnimatePresence mode="wait">
            {isLoading && <Preloader setLoading={setIsLoading} />}
          </AnimatePresence>

          {!isLoading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <MainContent openContactModal={openContactModal} />
              
              <AnimatePresence>
                {isContactModalOpen && (
                  <ContactCareersModal 
                    isOpen={isContactModalOpen} 
                    onClose={() => setIsContactModalOpen(false)} 
                    defaultTab={contactModalTab} 
                  />
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </main>
      </LenisProvider>
    </ErrorBoundary>
  )
}

export default App

