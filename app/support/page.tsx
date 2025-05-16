"use client"

import { useState } from "react"
import { MobileContainer } from "@/components/mobile-container"
import { Search, HelpCircle, MessageSquare, FileText, ChevronRight, ArrowRight, X, Mail, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showArticle, setShowArticle] = useState<string | null>(null)

  const categories = [
    { id: "all", name: "All" },
    { id: "getting-started", name: "Getting Started" },
    { id: "sales", name: "Sales" },
    { id: "products", name: "Products" },
    { id: "customers", name: "Customers" },
  ]

  const articles = [
    {
      id: "getting-started-guide",
      title: "Getting Started with iHustle",
      category: "getting-started",
      summary: "Learn the basics of setting up and using iHustle for your business.",
      content: `
        <h2>Getting Started with iHustle</h2>
        <p>Welcome to iHustle! This guide will help you get started with the app and set up your business.</p>

        <h3>Step 1: Create Your Account</h3>
        <p>When you first open the app, you'll be prompted to create an account. Enter your business name, email, and create a password.</p>

        <h3>Step 2: Set Up Your Business Profile</h3>
        <p>Navigate to the Settings page and complete your business profile. Add your business logo, address, and contact information.</p>

        <h3>Step 3: Add Your Products</h3>
        <p>Go to the Products page and tap "New Product" to start adding your inventory. You can add products manually or use the AI assistant to help you.</p>

        <h3>Step 4: Make Your First Sale</h3>
        <p>Tap on "New Sale" from the home screen to start processing sales. Add products to the cart, select payment method, and complete the transaction.</p>

        <h3>Step 5: Explore Analytics</h3>
        <p>Visit the Analytics page to see your sales performance, best-selling products, and other important business metrics.</p>
      `,
    },
    {
      id: "processing-sales",
      title: "How to Process Sales",
      category: "sales",
      summary: "Learn how to create and manage sales transactions in iHustle.",
      content: `
        <h2>How to Process Sales</h2>
        <p>Processing sales in iHustle is quick and easy. Follow these steps to complete a transaction.</p>

        <h3>Creating a New Sale</h3>
        <p>From the home screen or sales page, tap the "New Sale" button to start a new transaction.</p>

        <h3>Adding Products</h3>
        <p>Search for products by name or scan barcodes to add them to the cart. You can adjust quantities as needed.</p>

        <h3>Applying Discounts</h3>
        <p>To apply a discount, tap on the product in the cart and select "Add Discount". You can apply percentage or fixed amount discounts.</p>

        <h3>Selecting Payment Method</h3>
        <p>Choose the payment method (cash, credit card, mobile money) and enter the amount received.</p>

        <h3>Completing the Sale</h3>
        <p>Tap "Complete Sale" to finalize the transaction. You can then send a receipt to the customer via SMS or email.</p>

        <h3>Viewing Sales History</h3>
        <p>All completed sales are recorded in the Sales History page, where you can view details and process returns if needed.</p>
      `,
    },
    {
      id: "managing-inventory",
      title: "Managing Your Inventory",
      category: "products",
      summary: "Learn how to add, edit, and track your product inventory.",
      content: `
        <h2>Managing Your Inventory</h2>
        <p>Effective inventory management is crucial for your business. Here's how to manage your products in iHustle.</p>

        <h3>Adding New Products</h3>
        <p>Go to the Products page and tap "New Product". Fill in the product details including name, price, cost, and quantity.</p>

        <h3>Using Categories</h3>
        <p>Organize your products by assigning them to categories. You can create and manage categories in the Settings page.</p>

        <h3>Tracking Stock Levels</h3>
        <p>iHustle automatically updates stock levels when you make sales. You can also manually adjust stock from the product details page.</p>

        <h3>Low Stock Alerts</h3>
        <p>Set low stock thresholds in Settings to receive notifications when products need to be restocked.</p>

        <h3>Bulk Updates</h3>
        <p>To update multiple products at once, use the bulk edit feature from the Products page menu.</p>
      `,
    },
    {
      id: "credit-sales",
      title: "Managing Credit Sales",
      category: "sales",
      summary: "Learn how to create and manage credit sales for your customers.",
      content: `
        <h2>Managing Credit Sales</h2>
        <p>Credit sales allow you to sell products to customers who will pay later. Here's how to manage credit sales in iHustle.</p>

        <h3>Creating a Credit Sale</h3>
        <p>Start a new sale and select "Credit Sale" as the sale type. You must select a customer for credit sales.</p>

        <h3>Setting Payment Terms</h3>
        <p>Specify the payment due date and any applicable interest. You can also require a down payment if needed.</p>

        <h3>Tracking Credit Sales</h3>
        <p>All credit sales appear in the Credit Sales page, where you can monitor outstanding balances and payment status.</p>

        <h3>Recording Payments</h3>
        <p>When a customer makes a payment toward their credit, record it by selecting the credit sale and tapping "Record Payment".</p>

        <h3>Payment Reminders</h3>
        <p>The app can automatically send payment reminders to customers when payments are due or overdue.</p>
      `,
    },
    {
      id: "customer-management",
      title: "Managing Customers",
      category: "customers",
      summary: "Learn how to add and manage customer information and track their purchase history.",
      content: `
        <h2>Managing Customers</h2>
        <p>Building relationships with your customers is essential. Here's how to manage customer information in iHustle.</p>

        <h3>Adding New Customers</h3>
        <p>Go to the Customers page and tap "Add Customer". Enter their name, contact information, and any notes.</p>

        <h3>Customer Purchase History</h3>
        <p>View a customer's purchase history by selecting them from the Customers list and tapping on "Purchase History".</p>

        <h3>Customer Categories</h3>
        <p>Group customers into categories like "Regular", "VIP", or "Wholesale" to better manage your customer relationships.</p>

        <h3>Customer Credit</h3>
        <p>Track credit balances and payment history for each customer from their profile page.</p>

        <h3>Customer Communications</h3>
        <p>Send receipts, payment reminders, and promotional messages directly to customers from the app.</p>
      `,
    },
  ]

  const filteredArticles = articles
    .filter((article) => selectedCategory === "all" || article.category === selectedCategory)
    .filter(
      (article) =>
        searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()),
    )

  return (
    <MobileContainer title="Support" showBackButton={true}>
      {/* Search Bar */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-4"
          >
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search help articles..."
                className="w-full py-2 px-4 pl-10 rounded-xl border border-slate-200 focus:outline-none focus:border-[#00C696]"
                autoFocus
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center"
                >
                  <X className="w-3 h-3 text-slate-500" />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category Filter */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Help Center</h2>
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center"
          >
            <Search className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`py-1.5 px-3 rounded-full whitespace-nowrap capitalize text-sm font-medium ${
                selectedCategory === category.id ? "bg-[#00C696] text-white" : "bg-white text-slate-700 shadow-sm"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Articles */}
      <AnimatePresence mode="wait">
        {showArticle ? (
          <motion.div
            key="article-detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pb-20"
          >
            <button
              onClick={() => setShowArticle(null)}
              className="flex items-center gap-1.5 mb-4 text-sm text-slate-600"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to articles
            </button>

            <div className="bg-white rounded-xl p-5 shadow-sm">
              {articles.find((a) => a.id === showArticle)?.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: articles.find((a) => a.id === showArticle)?.content || "",
                  }}
                  className="prose prose-sm max-w-none prose-headings:text-slate-800 prose-p:text-slate-600"
                />
              )}
            </div>

            <div className="mt-6 bg-white rounded-xl p-5 shadow-sm">
              <h3 className="text-base font-medium mb-3">Was this helpful?</h3>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-[#00C696]/10 text-[#00C696] rounded-lg text-sm font-medium">
                  Yes, thanks!
                </button>
                <button className="flex-1 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium">
                  No, I need more help
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="article-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4 pb-20"
          >
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#00C696]/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-[#00C696]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-800 mb-1">{article.title}</h3>
                      <p className="text-sm text-slate-500 mb-3">{article.summary}</p>
                      <button
                        onClick={() => setShowArticle(article.id)}
                        className="text-sm text-[#00C696] font-medium flex items-center gap-1"
                      >
                        Read more
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="font-medium text-slate-800 mb-1">No articles found</h3>
                <p className="text-sm text-slate-500 mb-4">
                  We couldn't find any articles matching your search. Try different keywords or browse categories.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                  }}
                  className="py-2 px-4 bg-[#00C696] text-white rounded-lg text-sm font-medium"
                >
                  View all articles
                </button>
              </div>
            )}

            {/* Contact Support */}
            <div className="bg-[#00C696]/5 rounded-xl p-5">
              <h3 className="text-base font-medium mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#00C696]" />
                Need more help?
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Can't find what you're looking for? Contact our support team directly.
              </p>
              <div className="space-y-2">
                <Link href="mailto:support@ihustle.com">
                  <button className="w-full py-2.5 bg-white text-slate-800 rounded-lg text-sm font-medium flex items-center justify-center gap-2 border border-slate-200">
                    <Mail className="w-4 h-4 text-[#00C696]" />
                    Email Support
                  </button>
                </Link>
                <Link href="tel:+254700000000">
                  <button className="w-full py-2.5 bg-[#00C696] text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Support
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MobileContainer>
  )
}
