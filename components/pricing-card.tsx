"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  popular?: boolean
  delay?: number
}

export function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  popular = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`relative overflow-hidden rounded-2xl ${
        popular ? "bg-primary text-white" : "bg-gray-800 text-white"
      } p-8 shadow-sm transition-shadow hover:shadow-md`}
    >
      {popular && (
        <div className="absolute -right-12 top-7 rotate-45 bg-white px-12 py-1 text-sm font-medium text-primary">
          Popular
        </div>
      )}

      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        <span className={`text-sm ${popular ? "text-white/70" : "text-gray-400"}`}>/month</span>
      </div>
      <p className={`mb-6 ${popular ? "text-white/70" : "text-gray-300"}`}>{description}</p>

      <ul className="mb-8 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className={`h-5 w-5 shrink-0 ${popular ? "text-white" : "text-primary"}`} />
            <span className={popular ? "text-white/90" : "text-gray-300"}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        size="lg"
        className={`w-full ${
          popular ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-white hover:bg-primary/90"
        }`}
      >
        {buttonText}
      </Button>
    </motion.div>
  )
}
