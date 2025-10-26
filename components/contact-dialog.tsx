"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Phone, X } from "lucide-react"
import { motion } from "framer-motion"

interface ContactDialogProps {
  isOpen: boolean
  onClose: () => void
  planName?: string
  planPrice?: string
}

export function ContactDialog({ isOpen, onClose, planName, planPrice }: ContactDialogProps) {
  const [isLoading, setIsLoading] = useState(false)

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: "Chat with us instantly",
      color: "bg-green-500/20 text-green-400",
      action: () => handleWhatsApp(),
    },
    {
      icon: Mail,
      title: "Email",
      subtitle: "Send us a message",
      color: "bg-blue-500/20 text-blue-400",
      action: () => handleEmail(),
    },
    {
      icon: Phone,
      title: "Phone",
      subtitle: "Talk to our team",
      color: "bg-purple-500/20 text-purple-400",
      action: () => handlePhone(),
    },
  ]

  const getMessageContext = () => {
    if (planName && planPrice) {
      return `I'm interested in the ${planName} plan (${planPrice}). Can you provide more information?`
    }
    return "I'm interested in learning more about Tilla POS pricing and features."
  }

  const handleWhatsApp = async () => {
    setIsLoading(true)
    try {
      const message = encodeURIComponent(getMessageContext())
      const phoneNumber = "254700000000" // Replace with actual support number
      const url = `https://wa.me/${phoneNumber}?text=${message}`
      window.open(url, "_blank")
      onClose()
    } catch (error) {
      console.error("Error opening WhatsApp:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmail = async () => {
    setIsLoading(true)
    try {
      const subject = encodeURIComponent("Tilla POS Pricing Inquiry")
      const body = encodeURIComponent(getMessageContext())
      const email = "support@tillapos.com"
      const url = `mailto:${email}?subject=${subject}&body=${body}`
      window.location.href = url
      onClose()
    } catch (error) {
      console.error("Error opening email:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handlePhone = async () => {
    setIsLoading(true)
    try {
      const phoneNumber = "+254700000000" // Replace with actual support number
      window.location.href = `tel:${phoneNumber}`
      onClose()
    } catch (error) {
      console.error("Error opening phone:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="border-gray-700 bg-gray-900 text-white sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-xl font-bold">Get Started</DialogTitle>
              {planName && (
                <DialogDescription className="mt-1 text-sm text-gray-400">
                  {planName} Plan {planPrice && `- ${planPrice}`}
                </DialogDescription>
              )}
            </div>
            <button
              onClick={onClose}
              className="rounded-lg bg-gray-800 p-1 hover:bg-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <p className="text-sm text-gray-300">
            Choose how you'd like to get in touch with our team:
          </p>

          <div className="space-y-3">
            {contactOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <motion.button
                  key={option.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={option.action}
                  disabled={isLoading}
                  className="w-full rounded-lg border border-gray-700 bg-gray-800/50 p-4 text-left transition-all hover:border-gray-600 hover:bg-gray-800 disabled:opacity-50"
                >
                  <div className="flex items-start gap-3">
                    <div className={`rounded-lg p-2 ${option.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{option.title}</h3>
                      <p className="text-sm text-gray-400">{option.subtitle}</p>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          <div className="rounded-lg border border-gray-700 bg-gray-800/30 p-3">
            <p className="text-xs text-gray-400">
              <strong>Support Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EAT
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

