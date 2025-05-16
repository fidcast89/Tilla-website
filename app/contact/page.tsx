"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"
import { FloatingElements } from "@/components/floating-elements"
import { Mail, Phone, MapPin, Send, MessageSquare, PhoneIcon as WhatsApp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ContactPage() {
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
                Let's talk about your <span className="text-primary">Hustle</span>
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
                        <a href="mailto:hello@ihustlebiz.com" className="hover:text-primary">
                          hello@ihustlebiz.com
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
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Office</h3>
                      <p className="mt-1 text-gray-300">
                        123 Business Avenue
                        <br />
                        Nairobi, Kenya
                      </p>
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
                <form>
                  <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="first-name" className="text-gray-300">
                        First name
                      </Label>
                      <Input
                        id="first-name"
                        className="mt-1 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="last-name" className="text-gray-300">
                        Last name
                      </Label>
                      <Input
                        id="last-name"
                        className="mt-1 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-primary"
                        placeholder="Doe"
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
                      className="mt-1 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-primary"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="phone" className="text-gray-300">
                      Phone number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="mt-1 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-primary"
                      placeholder="+254 720 024 670"
                    />
                  </div>

                  <div className="mb-6">
                    <Label className="text-gray-300">What are you interested in?</Label>
                    <RadioGroup defaultValue="demo" className="mt-2">
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
                      className="mt-1 border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:border-primary"
                      placeholder="Tell us about your business and how we can help..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
                    Send Message <Send className="ml-2 h-4 w-4" />
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
