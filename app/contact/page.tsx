"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"
import { FloatingElements } from "@/components/floating-elements"
import { ElegantShapesBackground } from "@/components/elegant-shapes"
import { Mail, Phone, MapPin, Send, MessageSquare, PhoneIcon as WhatsApp, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { contactService } from "@/lib/contact-service"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "demo",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubjectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      subject: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await contactService.submitContactForm({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      })

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        })
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "demo",
          message: "",
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 pt-32 pb-20">
        <FloatingElements />

        <div className="container mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center relative z-10">
            <FadeIn>
              <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
                Contact Us
              </span>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Let's talk about your <span className="text-primary">business</span>
              </h1>
              <p className="text-lg text-gray-300">
                Have questions? Want to see a demo? Our team is here to help you find the right solution for your
                business.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 py-24">
        <div className="container mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <FadeIn>
                <h2 className="mb-6 text-3xl font-bold text-white">Get in touch</h2>
                <p className="mb-8 text-gray-300">
                  Fill out the form and our team will get back to you within 24 hours. We're excited to hear about your
                  business and how we can help.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Email</h3>
                      <p className="mt-1 text-gray-300">
                        <a href="mailto:info@tilla.app" className="hover:text-primary">
                          info@tilla.app
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Phone</h3>
                      <p className="mt-1 text-gray-300">
                        <a href="tel:+254720024670" className="hover:text-primary">
                          +254 720 024 670
                        </a>
                      </p>
                      <a
                        href="https://wa.me/254720024670"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 rounded-full bg-green-600/20 px-3 py-1 text-sm text-green-400 hover:bg-green-600/30 transition-colors"
                      >
                        <WhatsApp className="h-4 w-4" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>



                  <div className="flex items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Live Chat</h3>
                      <p className="mt-1 text-gray-300">
                        Available Monday-Friday
                        <br />
                        9:00 AM - 5:00 PM EAT
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl border border-gray-800 bg-gray-900 p-8 shadow-lg"
              >
                <form onSubmit={handleSubmit}>
                  {submitStatus && (
                    <div className={`mb-6 flex items-start gap-3 rounded-lg p-4 ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-red-500/10 text-red-400"
                    }`}>
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                      )}
                      <p className="text-sm">{submitStatus.message}</p>
                    </div>
                  )}

                  <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-300">
                        First name
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-1 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-primary"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-300">
                        Last name
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-1 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-primary"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-primary"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="phone" className="text-gray-300">
                      Phone number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-primary"
                      placeholder="+254700123456"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <Label className="text-gray-300">What are you interested in?</Label>
                    <RadioGroup value={formData.subject} onValueChange={handleSubjectChange} className="mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="demo" value="demo" className="border-gray-600 text-primary" />
                        <Label htmlFor="demo" className="text-gray-300">
                          Product Demo
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="pricing" value="pricing" className="border-gray-600 text-primary" />
                        <Label htmlFor="pricing" className="text-gray-300">
                          Pricing Information
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="support" value="support" className="border-gray-600 text-primary" />
                        <Label htmlFor="support" className="text-gray-300">
                          Technical Support
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem id="other" value="other" className="border-gray-600 text-primary" />
                        <Label htmlFor="other" className="text-gray-300">
                          Other
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="message" className="text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-primary"
                      placeholder="Tell us about your business and how we can help..."
                      required
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
