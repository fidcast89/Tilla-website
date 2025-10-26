"use client"

import { motion } from "framer-motion"
import { Download, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"

export function PlayStoreDownload() {
  return (
    <section className="relative overflow-visible bg-gradient-to-b from-gray-900 to-gray-950 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/20 p-3"
            >
              <Smartphone className="h-8 w-8 text-primary" />
            </motion.div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get Tilla on your phone
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Download the Tilla app from Google Play Store and start managing your business on the go.
            </p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="gap-2"
                onClick={() => window.location.href = 'https://play.google.com/apps/testing/com.tilla.app'}
              >
                <Download className="h-5 w-5" />
                Download from Play Store
              </Button>
              <p className="text-sm text-gray-400">
                Available for Android devices
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 rounded-2xl bg-gray-800/50 p-8 backdrop-blur-sm"
            >
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-primary">Beta Testing:</span> Join our beta program to get early access to new features and help us improve Tilla.
              </p>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

