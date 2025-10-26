"use client"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"
import { FloatingElements } from "@/components/floating-elements"
import { ElegantShapesBackground } from "@/components/elegant-shapes"
import { AIProductCreationMockup } from "@/components/feature-mockups/ai-product-creation-mockup"
import { SmartSalesMockup } from "@/components/feature-mockups/smart-sales-mockup"
import { CustomerCreditMockup } from "@/components/feature-mockups/customer-credit-mockup"
import { BusinessInsightsMockup } from "@/components/feature-mockups/business-insights-mockup"

export default function FeaturesPage() {
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
                Features that make your <span className="text-primary">business</span> smarter
              </h1>
              <p className="mb-8 text-lg text-gray-300">
                We've packed Tilla with powerful features that help small businesses work smarter, not harder.
                Here's how we're different.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  Get started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  See a demo
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="py-24 overflow-visible">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          {/* Feature 1 */}
          <div className="mb-32 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <FadeIn>
              <div>
                <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
                  AI-Powered Inventory
                </span>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Add products in seconds, not minutes
                </h2>
                <p className="mb-6 text-lg text-gray-300">
                  Just snap a photo and our AI does the rest. It identifies your product, writes a description, suggests
                  categories, and even recommends pricing based on similar items in your area.
                </p>
                <ul className="mb-8 space-y-4">
                  {[
                    "Automatic product identification",
                    "AI-generated descriptions and categories",
                    "Smart pricing recommendations",
                    "Bulk photo import for multiple products",
                    "Barcode scanning and generation",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="rounded-full bg-primary text-white hover:bg-primary/90">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute -top-8 -left-8 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
                <div className="relative z-10 mx-auto rounded-xl shadow-2xl">
                  <AIProductCreationMockup />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Feature 2 */}
          <div className="mb-32 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <FadeIn className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -bottom-8 -right-8 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
                <div className="relative z-10 mx-auto rounded-xl shadow-2xl">
                  <SmartSalesMockup />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="order-1 lg:order-2">
              <div>
                <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
                  Smart Sales
                </span>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Sell anywhere, anytime, even offline
                </h2>
                <p className="mb-6 text-lg text-gray-300">
                  Our mobile-first app works even when your internet doesn't. Sell in your store, at markets, or on the
                  go, and everything syncs automatically when you're back online.
                </p>
                <ul className="mb-8 space-y-4">
                  {[
                    "Works offline with automatic syncing",
                    "Accept cash, cards, and mobile money",
                    "Quick checkout with customer history",
                    "AI-powered product recommendations",
                    "Digital receipts via SMS or email",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="rounded-full bg-primary text-white hover:bg-primary/90">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Feature 3 */}
          <div className="mb-32 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <FadeIn>
              <div>
                <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
                  Customer Relationships
                </span>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Build loyal customers with smart credit
                </h2>
                <p className="mb-6 text-lg text-gray-300">
                  Offer credit to your best customers without the headache. Our AI helps you decide who's a good
                  candidate and automatically sends friendly reminders when payments are due.
                </p>
                <ul className="mb-8 space-y-4">
                  {[
                    "AI-powered credit worthiness scoring",
                    "Automated payment reminders",
                    "Flexible payment plans",
                    "Customer purchase history tracking",
                    "Loyalty program integration",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="rounded-full bg-primary text-white hover:bg-primary/90">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute -top-8 -right-8 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
                <div className="relative z-10 mx-auto rounded-xl shadow-2xl">
                  <CustomerCreditMockup />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Feature 4 */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <FadeIn className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
                <div className="relative z-10 mx-auto rounded-xl shadow-2xl">
                  <BusinessInsightsMockup />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="order-1 lg:order-2">
              <div>
                <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
                  Business Insights
                </span>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Insights that actually help you grow
                </h2>
                <p className="mb-6 text-lg text-gray-300">
                  No more guessing what's working. Our AI analyzes your sales data and gives you actionable insights in
                  plain language, not complicated charts and graphs.
                </p>
                <ul className="mb-8 space-y-4">
                  {[
                    "Plain-language business insights",
                    "Inventory optimization recommendations",
                    "Sales trend predictions",
                    "Profit margin analysis",
                    "Customizable reports and dashboards",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="rounded-full bg-primary text-white hover:bg-primary/90">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-gray-900 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary">
                And Much More
              </span>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Everything you need to run your business
              </h2>
              <p className="text-lg text-gray-300">
                Tilla is packed with features designed specifically for small businesses like yours.
              </p>
            </FadeIn>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI Product Creation",
                description:
                  "Snap a photo of your product and let AI generate the title, description, category, and pricing suggestions instantly.",
              },
              {
                title: "Social Media Integration",
                description:
                  "Post directly to social media with AI-generated captions and hashtags. Reach customers where they spend their time.",
              },
              {
                title: "Supplier Management",
                description: "Track suppliers, manage orders, and get automatic restock notifications when inventory runs low.",
              },
              {
                title: "Multi-branch Support",
                description: "Manage multiple locations from one dashboard. Track inventory and sales across all your branches.",
              },
              {
                title: "Income Statements",
                description: "Get detailed financial reports showing revenue, expenses, and profit at a glance.",
              },
              {
                title: "Advanced Analytics",
                description: "Deep dive into sales trends, customer behavior, and product performance with detailed charts and insights.",
              },
              {
                title: "Offline Mode",
                description: "Keep selling even when the internet is down. Everything syncs automatically when you're back online.",
              },
              {
                title: "Role-based Access Control",
                description: "Add team members with custom permissions. Control who can view sales, manage inventory, or access reports.",
              },
              {
                title: "Real-time Sync",
                description: "All your data syncs in real-time across devices. Never worry about data being out of sync.",
              },
            ].map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="rounded-xl bg-gray-800 p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to transform your business?
              </h2>
              <p className="mb-8 text-lg text-white/80">
                Join thousands of small businesses using Tilla to work smarter, not harder.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Schedule a demo
                </Button>
                <Button size="lg" className="bg-black text-white hover:bg-black/90">
                  Apply for Beta
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
