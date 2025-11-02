"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, CreditCard, Wifi } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";

export default function HomePage() {
  return (
    <div className="min-h-screen text-[var(--fg)]">
      <Navigation />
      <main>
        <HeroSection />
        <BusinessValuesSection />
        <AlternatingSection1 />
        <AlternatingSection2 />
        <AlternatingSection3 />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left Column - Hero Content */}
        <div className="relative flex items-center px-6 md:px-12 lg:px-16 pt-32 pb-20 md:pt-40 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6 md:space-y-8 max-w-lg md:ml-auto"
          >
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-[var(--brand-dark)]">
                <span className="block">One App,</span>
                <span className="block text-[var(--brand-primary)]">Your Complete Business Solution</span>
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Stop juggling multiple apps and paper records. Tilla brings everything together - sales, inventory, customers, analytics - in one simple, powerful mobile app.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://pos.tilla.app"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-primary)] px-6 md:px-8 py-3 md:py-4 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Get started free <ArrowRight className="w-5 h-5" />
              </a>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--brand-primary)] px-6 md:px-8 py-3 md:py-4 text-[var(--brand-primary)] font-semibold hover:bg-[var(--brand-primary)]/5 transition">
                Watch demo
              </button>
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center gap-3 pt-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[var(--brand-primary)] to-teal-500 border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm md:text-base text-neutral-600">
                <span className="font-semibold text-[var(--brand-dark)]">1000+</span> retailers growing with Tilla
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - Mockup Container */}
        <div className="relative min-h-[500px] md:min-h-screen">
          {/* Container - Aligned to right edge, only bottom-left rounded on desktop, 80% height */}
          <div className="absolute top-0 right-0 left-0 h-[80%] bg-[var(--brand-primary)]/10 rounded-3xl md:rounded-none md:rounded-bl-[4rem] overflow-visible">
            {/* Decorative Shapes inside container */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-20 right-10 md:top-32 md:right-20 w-32 h-32 md:w-40 md:h-40 border-2 border-[var(--brand-primary)]/20 rounded-3xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-32 left-10 md:bottom-40 md:left-16 w-24 h-24 md:w-32 md:h-32 border-2 border-[var(--brand-primary)]/15 rounded-full"
            />

            {/* Floating Dots */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-3 h-3 bg-[var(--brand-primary)]/40 rounded-full"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-1/2 right-1/4 w-2 h-2 bg-[var(--brand-primary)]/30 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-[var(--brand-primary)]/35 rounded-full"
            />

            {/* Mockups centered inside container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-full flex items-center justify-center px-4 md:px-8"
            >
              <div className="relative w-full max-w-2xl">
                {/* Back - Tablet Landscape */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden mx-auto"
                  style={{
                    width: "min(90%, 480px)",
                    aspectRatio: "3/2",
                    border: "3px solid #4a4a4a",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)"
                  }}
                >
                  <img
                    src="/screenshots/Dashboard/dashboard_tablet.png"
                    alt="Tablet Dashboard"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Front - Mobile Phone */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  className="absolute bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden z-10"
                  style={{
                    width: "min(40%, 160px)",
                    aspectRatio: "9/18",
                    right: "5%",
                    bottom: "-10%",
                    border: "3px solid #4a4a4a",
                    boxShadow: "0 25px 70px rgba(0, 0, 0, 0.2)"
                  }}
                >
                  <img
                    src="/screenshots/Dashboard/dashboard_mobile.png"
                    alt="Mobile Dashboard"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BusinessValuesSection() {
  const values = [
    {
      icon: TrendingUp,
      title: "See what's selling",
      description: "Real-time sales analytics and inventory tracking so you always know what's moving and what's not.",
    },
    {
      icon: Zap,
      title: "Work smarter, not harder",
      description: "AI-powered product creation and smart recommendations that save you hours every week.",
    },
    {
      icon: CreditCard,
      title: "Sell on credit, get paid",
      description: "Built-in credit management so you can extend credit to trusted customers without the headache.",
    },
    {
      icon: Wifi,
      title: "Never miss a sale",
      description: "Works offline so you keep selling even when the internet goes down. Syncs automatically when you're back online.",
    },
  ];

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  React.useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden -mt-1">
      {/* Decorative dots */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-5">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-[var(--brand-primary)] rounded-full" />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Built for how you actually work
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Stop fighting with your POS. Tilla is designed for East African retailers who want to focus on selling, not software.
          </p>
        </motion.div>

        {/* Horizontal Scrollable Container with Arrow Navigation */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {values.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex-shrink-0 w-72 md:w-80 group cursor-pointer"
                >
                  <div className="flex flex-col gap-4 p-6 rounded-2xl transition-all duration-300 group-hover:bg-[var(--brand-primary)]/5 group-hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--brand-primary)]/10 flex items-center justify-center group-hover:bg-[var(--brand-primary)]/20 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-[var(--brand-primary)] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="text-lg font-bold text-[var(--brand-dark)] mb-2 group-hover:text-[var(--brand-primary)] transition-colors duration-300">{value.title}</h3>
                        <p className="text-neutral-600 leading-relaxed text-sm">{value.description}</p>
                      </div>
                    </div>
                    <button className="text-[var(--brand-primary)] font-semibold text-sm flex items-center gap-2 group/btn hover:gap-3 transition-all duration-300">
                      Learn more <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Arrow Navigation */}
          {(canScrollLeft || canScrollRight) && (
            <>
              {canScrollLeft && (
                <button
                  onClick={() => scroll("left")}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 w-10 h-10 rounded-full bg-[var(--brand-dark)] text-white flex items-center justify-center hover:shadow-lg transition-all z-10"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
              )}
              {canScrollRight && (
                <button
                  onClick={() => scroll("right")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 w-10 h-10 rounded-full bg-[var(--brand-dark)] text-white flex items-center justify-center hover:shadow-lg transition-all z-10"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <Link
            href="/features"
            className="inline-flex items-center gap-2 bg-[var(--brand-dark)] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            Explore all features <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Alternating Section 1 - Sales/POS (Container on left, content on right)
function AlternatingSection1() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left - Mockup Container (aligned to left edge, rounded-right) */}
        <div className="relative min-h-[400px] md:min-h-[600px]">
          <div className="absolute inset-0 left-0 md:left-0 bg-[var(--brand-primary)]/10 rounded-3xl md:rounded-r-[3rem] md:rounded-l-none overflow-hidden">
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 right-10 w-32 h-32 border-2 border-[var(--brand-primary)]/20 rounded-3xl"
            />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 left-10 w-3 h-3 bg-[var(--brand-primary)]/40 rounded-full"
            />

            {/* Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative h-full flex items-center justify-center p-8 md:p-12"
            >
              <div className="relative">
                <img
                  src="/screenshots/Sales/pos-checkout-tablet.png"
                  alt="POS Checkout"
                  className="w-full max-w-md rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex items-center px-6 md:px-12 lg:px-16 py-12 md:py-0"
        >
          <div className="max-w-lg">
            <div className="inline-block px-4 py-1.5 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] rounded-full text-sm font-semibold mb-4">
              Fast Checkout
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--brand-dark)]">
              Sell faster with our intuitive POS
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Process sales in seconds with our lightning-fast checkout. Accept multiple payment methods, manage credit sales, and keep your customers happy with quick service.
            </p>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-semibold hover:gap-3 transition-all"
            >
              Learn more <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Alternating Section 2 - Products/AI (Content on left, container on right)
function AlternatingSection2() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex items-center px-6 md:px-12 lg:px-16 py-12 md:py-0 order-2 md:order-1"
        >
          <div className="max-w-lg md:ml-auto">
            <div className="inline-block px-4 py-1.5 bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] rounded-full text-sm font-semibold mb-4">
              AI-Powered
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--brand-dark)]">
              Add products in seconds with AI
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Just snap a photo and our AI does the rest. Automatically extract product details, pricing, and descriptions. No more manual data entry.
            </p>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-semibold hover:gap-3 transition-all"
            >
              Learn more <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Right - Mockup Container (aligned to right edge, rounded-left) */}
        <div className="relative min-h-[400px] md:min-h-[600px] order-1 md:order-2">
          <div className="absolute inset-0 right-0 md:right-0 bg-[var(--brand-accent)]/10 rounded-3xl md:rounded-l-[3rem] md:rounded-r-none overflow-hidden">
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-10 left-10 w-32 h-32 border-2 border-[var(--brand-accent)]/20 rounded-full"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-10 w-3 h-3 bg-[var(--brand-accent)]/40 rounded-full"
            />

            {/* Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative h-full flex items-center justify-center p-8 md:p-12"
            >
              <div className="relative">
                <img
                  src="/screenshots/Products/ai_product_scan_1.png"
                  alt="AI Product Scan"
                  className="w-full max-w-xs rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Alternating Section 3 - Analytics (Container on left, content on right)
function AlternatingSection3() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left - Mockup Container (aligned to left edge, rounded-right) */}
        <div className="relative min-h-[400px] md:min-h-[600px]">
          <div className="absolute inset-0 left-0 md:left-0 bg-[var(--brand-primary)]/10 rounded-3xl md:rounded-r-[3rem] md:rounded-l-none overflow-hidden">
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-40 h-40 border-2 border-[var(--brand-primary)]/15 rounded-3xl"
            />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/3 left-1/4 w-2.5 h-2.5 bg-[var(--brand-primary)]/35 rounded-full"
            />

            {/* Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="relative h-full flex items-center justify-center p-8 md:p-12"
            >
              <div className="relative">
                <img
                  src="/screenshots/Analytics/analytics_tablet.png"
                  alt="Analytics Dashboard"
                  className="w-full max-w-md rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex items-center px-6 md:px-12 lg:px-16 py-12 md:py-0"
        >
          <div className="max-w-lg">
            <div className="inline-block px-4 py-1.5 bg-[var(--brand-primary)]/10 text-[var(--brand-primary)] rounded-full text-sm font-semibold mb-4">
              Smart Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--brand-dark)]">
              Make data-driven decisions
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Get real-time insights into your sales, inventory, and customer behavior. Track what's working and optimize your business for growth.
            </p>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-[var(--brand-primary)] font-semibold hover:gap-3 transition-all"
            >
              Learn more <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { num: "01", title: "Sign Up", desc: "Create your account in seconds" },
    { num: "02", title: "Set Up", desc: "Add products and configure your store" },
    { num: "03", title: "Sell", desc: "Process sales and track inventory" },
    { num: "04", title: "Grow", desc: "Use insights to scale your business" },
  ];

  return (
    <section className="py-16 md:py-24 bg-[var(--muted)]/30">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-neutral-600">Get up and running in minutes</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative text-center"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[var(--brand-primary)] to-teal-500 flex items-center justify-center text-white font-bold text-lg md:text-xl mx-auto mb-4 shadow-lg">
                {step.num}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-neutral-600 text-sm md:text-base">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 -right-2 w-4 h-1 bg-gradient-to-r from-[var(--brand-primary)] to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-[var(--brand-primary)] rounded-[2.5rem] px-8 md:px-16 py-16 md:py-20 text-center"
        >
          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-40 h-40 border-2 border-white/20 rounded-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-16 -left-16 w-32 h-32 border-2 border-white/15 rounded-full"
          />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute bottom-1/4 right-1/4 w-2.5 h-2.5 bg-white/25 rounded-full"
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
              Ready to transform how you run your business?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of East African retailers who are already managing, scheduling, and selling with ease using Tilla.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://pos.tilla.app"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 md:py-4 text-[var(--brand-primary)] font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </a>
              <button className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3 md:py-4 text-white font-semibold hover:bg-white/10 transition-all">
                Watch demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--brand-dark)] text-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-[var(--brand-primary)]" />
              <span className="text-xl font-bold">Tilla</span>
            </div>
            <p className="text-neutral-400 text-sm">AI-powered POS for East African retailers.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/features" className="hover:text-white transition">Features</a></li>
              <li><a href="/pricing" className="hover:text-white transition">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-700 pt-8 text-center text-sm text-neutral-400">
          <p>&copy; 2024 Tilla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}