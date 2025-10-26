"use client"

import React, { useState, useEffect } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"
import { PricingCard } from "@/components/pricing-card"
import { FloatingElements } from "@/components/floating-elements"
import { ElegantShapesBackground } from "@/components/elegant-shapes"
import { ContactDialog } from "@/components/contact-dialog"
import { pricingService } from "@/lib/pricing-service"

interface PricingPlan {
  id: string
  tier: string
  title: string
  price: number
  description: string
  features: string[]
  is_active: boolean
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)
  const [supabasePricingPlans, setSupabasePricingPlans] = useState<PricingPlan[]>([])
  const [comparisonFeatures, setComparisonFeatures] = useState<Record<string, any[]>>({})

  useEffect(() => {
    // Fetch pricing data from Supabase
    const fetchPricing = async () => {
      try {
        const plans = await pricingService.getBasePricing()
        // Filter to only get one plan per tier (remove duplicates)
        const uniquePlans = plans.reduce((acc, plan) => {
          const existing = acc.find(p => p.tier === plan.tier)
          if (!existing) {
            acc.push(plan)
          }
          return acc
        }, [] as typeof plans)
        setSupabasePricingPlans(uniquePlans)

        // Fetch features grouped by category for comparison table
        const groupedFeatures = await pricingService.getFeaturesGroupedByCategory()
        setComparisonFeatures(groupedFeatures)
      } catch (error) {
        console.error("Error fetching pricing plans:", error)
      }
    }

    fetchPricing()
  }, [])

  const defaultPricingPlans = {
    monthly: [
      {
        title: "Free",
        price: "$0",
        description: "Perfect for testing the waters",
        features: [
          "Basic inventory management",
          "Up to 50 products",
          "1 user account",
          "Basic sales tracking",
          "Offline functionality",
          "Community support",
        ],
        buttonText: "Get Started",
        popular: false,
      },
      {
        title: "Starter",
        price: "$12",
        description: "When you're ready to scale",
        features: [
          "Everything in Free",
          "Up to 500 products",
          "2 user accounts",
          "Customer database",
          "Credit sales tracking",
          "Basic reports",
          "Email support",
        ],
        buttonText: "Get Started",
        popular: false,
      },
      {
        title: "Growth",
        price: "$29",
        description: "For businesses that are thriving",
        features: [
          "Everything in Starter",
          "Up to 2,000 products",
          "5 user accounts",
          "Advanced inventory management",
          "Sales analytics dashboard",
          "Multi-branch support (2 locations)",
          "Priority email & chat support",
        ],
        buttonText: "Get Started",
        popular: true,
      },
      {
        title: "Enterprise",
        price: "$79",
        description: "For ambitious businesses",
        features: [
          "Everything in Growth",
          "Unlimited products",
          "10+ user accounts",
          "AI-powered features",
          "Advanced analytics & reporting",
          "Multi-location support (unlimited)",
          "Dedicated account manager",
          "Custom integrations",
        ],
        buttonText: "Contact Us",
        popular: false,
      },
    ],
    yearly: [
      {
        title: "Free",
        price: "$0",
        description: "For individuals and micro-businesses just starting out",
        features: [
          "Basic inventory management",
          "Up to 50 products",
          "1 user account",
          "Basic sales tracking",
          "Offline functionality",
          "Community support",
        ],
        buttonText: "Get Started",
        popular: false,
      },
      {
        title: "Starter",
        price: "$9",
        description: "For small businesses ready to grow",
        features: [
          "Everything in Free",
          "Up to 500 products",
          "2 user accounts",
          "Customer database",
          "Credit sales tracking",
          "Basic reports",
          "Email support",
        ],
        buttonText: "Get Started",
        popular: false,
      },
      {
        title: "Growth",
        price: "$24",
        description: "For growing businesses with advanced needs",
        features: [
          "Everything in Starter",
          "Up to 2,000 products",
          "5 user accounts",
          "Advanced inventory management",
          "Sales analytics dashboard",
          "Multi-branch support (2 locations)",
          "Priority email & chat support",
        ],
        buttonText: "Get Started",
        popular: true,
      },
      {
        title: "Enterprise",
        price: "$65",
        description: "For established businesses with multiple locations",
        features: [
          "Everything in Growth",
          "Unlimited products",
          "10+ user accounts",
          "AI-powered features",
          "Advanced analytics & reporting",
          "Multi-location support (unlimited)",
          "Dedicated account manager",
          "Custom integrations",
        ],
        buttonText: "Contact Us",
        popular: false,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 pt-24 pb-16">
        <ElegantShapesBackground />
        <FloatingElements />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center relative z-10">
            <FadeIn>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Simple pricing for your <span className="text-primary">business</span>
              </h1>
              <p className="mb-8 text-lg text-gray-300">
                Transparent pricing that grows with your business. Start free, upgrade when you're ready.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mx-auto mb-8 flex w-fit rounded-full bg-gray-800 p-1">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                    billingCycle === "monthly"
                      ? "bg-primary text-white"
                      : "bg-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                    billingCycle === "yearly"
                      ? "bg-primary text-white"
                      : "bg-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  Yearly <span className="text-xs">(Save 20%)</span>
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      {supabasePricingPlans.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {supabasePricingPlans.map((plan, index) => (
                <PricingCard
                  key={plan.id}
                  title={plan.display_name}
                  price={plan.tier === "enterprise" ? "Custom" : `$${plan.base_monthly_price || 0}`}
                  description={plan.description}
                  features={plan.features}
                  buttonText={plan.tier === "enterprise" ? "Contact Us" : "Get Started"}
                  popular={plan.tier === "growth"}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <div className="mt-16">
              <FadeIn delay={0.4}>
                <div className="mx-auto max-w-3xl rounded-2xl bg-gray-800 p-8 shadow-sm">
                  <div className="flex flex-col items-center gap-4 sm:flex-row">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white">Need a custom plan?</h3>
                      <p className="mt-2 text-gray-300">
                        Have unique requirements? Let's build something that fits your business perfectly. Our team is here to help.
                      </p>
                    </div>
                    <Button size="lg" onClick={() => setIsContactDialogOpen(true)}>
                      Get in touch
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* Feature Comparison */}
      <section className="bg-gray-900 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Compare plans in detail
              </h2>
              <p className="text-lg text-gray-300">
                Find the perfect plan for your business needs. Start with our free tier and upgrade as you grow.
              </p>
            </FadeIn>
          </div>

          <div className="mt-16 overflow-hidden rounded-xl border border-gray-800">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-gray-800 bg-gray-800/50">
                    <th className="px-6 py-4 text-sm font-semibold text-white">Features</th>
                    <th className="px-6 py-4 text-sm font-semibold text-white text-center">Free</th>
                    <th className="px-6 py-4 text-sm font-semibold text-white text-center">Starter</th>
                    <th className="px-6 py-4 text-sm font-semibold text-white text-center">Growth</th>
                    <th className="px-6 py-4 text-sm font-semibold text-white text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(comparisonFeatures).map(([category, features]) => (
                    <React.Fragment key={category}>
                      {/* Category Header */}
                      <tr className="border-b border-gray-700 bg-gray-800/30">
                        <td colSpan={5} className="px-6 py-3 text-sm font-bold text-primary">
                          {category}
                        </td>
                      </tr>
                      {/* Features in this category */}
                      {features.map((feature, index) => (
                        <tr
                          key={feature.feature_name}
                          className={`border-b border-gray-800 ${index % 2 === 0 ? "bg-gray-900" : "bg-gray-900/50"}`}
                        >
                          <td className="px-6 py-4 text-sm font-medium text-white">{feature.feature_name}</td>
                          <td className="px-6 py-4 text-sm text-gray-300 text-center">
                            {feature.free_value === '—' ? (
                              <span className="text-gray-500">—</span>
                            ) : feature.free_value === '✓' ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <span>{feature.free_value}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-300 text-center">
                            {feature.starter_value === '—' ? (
                              <span className="text-gray-500">—</span>
                            ) : feature.starter_value === '✓' ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <span>{feature.starter_value}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-300 text-center">
                            {feature.growth_value === '—' ? (
                              <span className="text-gray-500">—</span>
                            ) : feature.growth_value === '✓' ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <span>{feature.growth_value}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-300 text-center">
                            {feature.enterprise_value === '—' ? (
                              <span className="text-gray-500">—</span>
                            ) : feature.enterprise_value === '✓' ? (
                              <Check className="h-5 w-5 text-green-500 mx-auto" />
                            ) : (
                              <span>{feature.enterprise_value}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Questions? We've got answers
              </h2>
              <p className="text-lg text-gray-300">Here's what people usually want to know about our pricing.</p>
            </FadeIn>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <FadeIn delay={0.1}>
              <div>
                <h3 className="text-xl font-semibold text-white">Do you offer any discounts?</h3>
                <p className="mt-2 text-gray-300">
                  Yes! We offer a 20% discount when you pay annually. We also have special pricing for non-profits and educational institutions.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-xl font-semibold text-white">Can I change plans later?</h3>
                <p className="mt-2 text-gray-300">
                  Absolutely. You can upgrade, downgrade, or cancel your plan at any time. If you upgrade, you'll be prorated for the remainder of your billing cycle.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div>
                <h3 className="text-xl font-semibold text-white">Is the Free plan really free forever?</h3>
                <p className="mt-2 text-gray-300">
                  Yes! Our Free plan is completely free with no time limits. You can use it for as long as you want with the included features. Upgrade to a paid plan when you need more advanced features.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold text-white">Is Tilla suitable for emerging markets?</h3>
                <p className="mt-2 text-gray-300">
                  Absolutely! Tilla is designed for diverse markets worldwide, with features like mobile money integration, offline functionality, and support for local currencies and languages.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <ContactDialog
        isOpen={isContactDialogOpen}
        onClose={() => setIsContactDialogOpen(false)}
      />

      <Footer />
    </div>
  )
}
