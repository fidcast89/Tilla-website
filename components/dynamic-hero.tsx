"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"

// Hero content options that will rotate
const heroContents = [
  {
    title: "One App, Your <span>Complete</span> Business Solution",
    description: "Stop juggling multiple apps and paper records. Tilla brings everything together - sales, inventory, customers, analytics - in one simple, powerful mobile app."
  },
  {
    title: "Your <span>Hustle</span>, supercharged with AI",
    description: "We've built the mobile business tool we always wanted - mobile-first, smart, simple, and actually fun to use. Let AI handle the boring stuff while you focus on growing your Hustle."
  },
  {
    title: "Small Business, <span>Big</span> Possibilities",
    description: "Tilla gives small businesses the same powerful tools that big companies use, at a fraction of the cost. Level the playing field with AI-powered business management."
  },
  {
    title: "Your Entire <span>Business</span> in Your Pocket",
    description: "Tilla transforms your smartphone into a complete business management system. Sell, track, analyze, and grow - all from the palm of your hand."
  },
  {
    title: "Your Business Assistant, <span>Online or Offline</span>",
    description: "Tilla works even when your internet doesn't. Keep selling, tracking inventory, and managing customers anywhere - everything syncs when you're back online."
  },
  {
    title: "Business Management Made <span>Simple</span>",
    description: "No technical skills required. If you can use WhatsApp, you can use Tilla to manage your entire business, from sales to inventory to customer relationships."
  },
  {
    title: "<span>AI</span> That Actually Helps Your Business",
    description: "No more guesswork. Tilla's AI analyzes your sales, predicts trends, and gives you practical advice to boost profits and streamline operations."
  },
  {
    title: "Your <span>Hustle</span> Simplified, Anywhere You Go",
    description: "Tilla turns your smartphone into a powerful business tool. No complicated systems, no tech headaches - just a simple app that helps you sell more and stress less."
  },
  {
    title: "Save <span>Hours</span> Every Day with Smart Tools",
    description: "Stop wasting time on manual inventory, sales tracking, and customer management. Tilla automates the boring stuff so you can focus on what matters - growing your business."
  }
]

export function DynamicHero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate through hero contents
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContents.length)
    }, 8000) // Change every 8 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-xl flex-shrink-0 md:w-1/2"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <FadeIn delay={0.2}>
            <h1
              className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
              dangerouslySetInnerHTML={{
                __html: heroContents[currentIndex].title.replace(
                  /<span>(.*?)<\/span>/g,
                  '<span class="text-primary">$1</span>'
                )
              }}
            />
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mb-8 max-w-lg text-lg text-gray-300">
              {heroContents[currentIndex].description}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full bg-primary text-white hover:bg-primary/90"
                onClick={() => window.location.href = 'mailto:info@tilla.app?subject=Tilla%20Inquiry'}
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                onClick={() => window.location.href = 'https://forms.gle/BSTDaS3WKft7vsjB6'}
              >
                Get Early Access
              </Button>
            </div>
          </FadeIn>
        </motion.div>
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="mt-8 flex justify-center space-x-2 md:justify-start">
        {heroContents.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-4" : "bg-gray-600"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`View hero message ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  )
}
