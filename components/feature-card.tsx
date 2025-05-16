"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
  hoverEffect?: "scale" | "lift" | "glow" | "none"
}

export function FeatureCard({ icon, title, description, delay = 0, hoverEffect = "lift" }: FeatureCardProps) {
  const getHoverAnimation = () => {
    switch (hoverEffect) {
      case "scale":
        return { scale: 1.03 }
      case "lift":
        return { y: -5 }
      case "glow":
        return {}
      case "none":
        return {}
      default:
        return { y: -5 }
    }
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={getHoverAnimation()}
      className={`group relative overflow-hidden rounded-2xl bg-gray-800 p-8 shadow-sm transition-all duration-300 ${
        hoverEffect === "glow" ? "hover:shadow-lg hover:shadow-primary/20" : ""
      }`}
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 transition-transform group-hover:scale-150"></div>

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">{icon}</div>

      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="mb-4 text-gray-300">{description}</p>

      <div className="flex items-center text-sm font-medium text-primary">
        <span>Learn more</span>
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.div>
  )
}
