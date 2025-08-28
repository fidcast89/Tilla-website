"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"
import { PricingCard } from "@/components/pricing-card"
import { FloatingElements } from "@/components/floating-elements"
import { ElegantShapesBackground } from "@/components/elegant-shapes"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const pricingPlans = {
    monthly: [
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
        price: "$12",
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
        price: "$29",
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
        price: "$79",
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
                Simple pricing for your <span className="text-primary">Hustle</span>
              </h1>
              <p className="mb-8 text-lg text-gray-300">
                No hidden fees, no surprises. Just straightforward pricing that makes sense for small businesses.
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
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricingPlans[billingCycle].map((plan, index) => (
              <PricingCard
                key={plan.title}
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                buttonText={plan.buttonText}
                popular={plan.popular}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="mt-16">
            <FadeIn delay={0.4}>
              <div className="mx-auto max-w-3xl rounded-2xl bg-gray-800 p-8 shadow-sm">
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">Need something custom?</h3>
                    <p className="mt-2 text-gray-300">
                      Let's chat about what you need. We're flexible and love helping businesses find the right solution
                      for their Hustle.
                    </p>
                  </div>
                  <Button size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90">
                    Contact Us
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

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
              <table className="w-full min-w-[800px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-gray-800 bg-gray-800/50">
                    <th className="px-6 py-4 text-sm font-semibold text-white">Features</th>
                    <th className="px-6 py-4 text-sm font-semibold text-white">Free</th>
                    <th className="px-6 py-4 text-sm font-semibold text-white">Starter</th>
                    <th className="px-6 py-4 text-sm font-semibold text-white">Growth</th>
                    <th className="px-6 py-4 text-sm font-semibold text-white">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Products", free: "50", starter: "500", growth: "2,000", enterprise: "Unlimited" },
                    { name: "User accounts", free: "1", starter: "2", growth: "5", enterprise: "10+" },
                    { name: "Sales transactions", free: "Unlimited", starter: "Unlimited", growth: "Unlimited", enterprise: "Unlimited" },
                    { name: "Basic inventory", free: true, starter: true, growth: true, enterprise: true },
                    { name: "Offline mode", free: true, starter: true, growth: true, enterprise: true },
                    { name: "Mobile app", free: true, starter: true, growth: true, enterprise: true },
                    { name: "Customer database", free: false, starter: true, growth: true, enterprise: true },
                    { name: "Credit sales", free: false, starter: true, growth: true, enterprise: true },
                    { name: "Basic reports", free: false, starter: true, growth: true, enterprise: true },
                    { name: "Advanced inventory", free: false, starter: false, growth: true, enterprise: true },
                    { name: "Sales analytics", free: false, starter: false, growth: true, enterprise: true },
                    { name: "Multi-branch support", free: false, starter: false, growth: "2 locations", enterprise: "Unlimited" },
                    { name: "AI product creation", free: false, starter: false, growth: false, enterprise: true },
                    { name: "AI insights", free: false, starter: false, growth: false, enterprise: true },
                    { name: "Advanced analytics", free: false, starter: false, growth: false, enterprise: true },
                    { name: "Custom integrations", free: false, starter: false, growth: false, enterprise: true },
                    { name: "Dedicated account manager", free: false, starter: false, growth: false, enterprise: true },
                  ].map((feature, index) => (
                    <tr
                      key={feature.name}
                      className={`border-b border-gray-800 ${index % 2 === 0 ? "bg-gray-900" : "bg-gray-900/50"}`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-white">{feature.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        {typeof feature.free === "boolean" ? (
                          feature.free ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <span className="text-gray-500">—</span>
                          )
                        ) : (
                          feature.free
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        {typeof feature.starter === "boolean" ? (
                          feature.starter ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <span className="text-gray-500">—</span>
                          )
                        ) : (
                          feature.starter
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        {typeof feature.growth === "boolean" ? (
                          feature.growth ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <span className="text-gray-500">—</span>
                          )
                        ) : (
                          feature.growth
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        {typeof feature.enterprise === "boolean" ? (
                          feature.enterprise ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <span className="text-gray-500">—</span>
                          )
                        ) : (
                          feature.enterprise
                        )}
                      </td>
                    </tr>
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
                <h3 className="text-xl font-semibold text-white">Is the Free tier really free forever?</h3>
                <p className="mt-2 text-gray-300">
                  Yes! Our Free tier is completely free with no time limits. You can use it for as long as you want with the included features. Upgrade to a paid plan when you need more advanced features.
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

      <Footer />
    </div>
  )
}
