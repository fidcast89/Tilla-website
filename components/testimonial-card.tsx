"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar: string
  rating: number
  delay?: number
}

export function TestimonialCard({ quote, author, role, avatar, rating, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl bg-gray-800 p-8 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 transition-transform group-hover:scale-150"></div>

      <div className="mb-4 flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-600"}`} />
        ))}
      </div>

      <p className="mb-6 text-gray-300">"{quote}"</p>

      <div className="flex items-center gap-4">
        <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-700">
          <Image
            src={avatar || "/placeholder.svg?height=48&width=48"}
            alt={author}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium text-white">{author}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}
