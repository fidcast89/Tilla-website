"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Package, Plus, AreaChart, ShoppingBag, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function MobileNavigation() {
  const pathname = usePathname()
  const [showAddModal, setShowAddModal] = useState(false)

  // Hide navigation on these paths
  const hideNavPaths = ["/checkout", "/products/create", "/products/[id]", "/sales/[id]"]

  // Check if current path matches any of the hide paths
  const shouldHideNav = () => {
    return hideNavPaths.some((path) => {
      if (path.includes("[id]")) {
        const basePath = path.split("/[")[0]
        return pathname.startsWith(basePath) && pathname !== basePath
      }
      return pathname === path
    })
  }

  if (shouldHideNav()) {
    return null
  }

  return (
    <>
      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-10 px-4 pb-4 md:px-6 md:pb-6 max-w-md mx-auto">
        <div className="bg-white rounded-full shadow-lg flex items-center justify-around py-2 px-4">
          <Link href="/">
            <div className={`p-2 ${pathname === "/" ? "text-primary" : "text-slate-400"}`}>
              <Home className="w-6 h-6" />
            </div>
          </Link>

          <Link href="/sales">
            <div className={`p-2 ${pathname.startsWith("/sales") ? "text-primary" : "text-slate-400"}`}>
              <ShoppingBag className="w-6 h-6" />
            </div>
          </Link>

          <div className="relative -mt-8">
            <button
              onClick={() => setShowAddModal(true)}
              className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg"
            >
              <Plus className="w-7 h-7 text-white" />
            </button>
          </div>

          <Link href="/products">
            <div
              className={`p-2 ${pathname.startsWith("/products") && !pathname.includes("/create") ? "text-primary" : "text-slate-400"}`}
            >
              <Package className="w-6 h-6" />
            </div>
          </Link>

          <Link href="/analytics">
            <div className={`p-2 ${pathname.startsWith("/analytics") ? "text-primary" : "text-slate-400"}`}>
              <AreaChart className="w-6 h-6" />
            </div>
          </Link>
        </div>
      </div>

      {/* Add New Modal */}
      <AnimatePresence>
        {showAddModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setShowAddModal(false)}
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 z-50 max-w-md mx-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Create New</h2>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <Link href="/new-sale" onClick={() => setShowAddModal(false)}>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:bg-slate-50"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                      <ShoppingBag className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-900">New Sale</h3>
                      <p className="text-sm text-slate-500">Record a new transaction</p>
                    </div>
                  </motion.div>
                </Link>

                <Link href="/new-product" onClick={() => setShowAddModal(false)}>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:bg-slate-50"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mr-4">
                      <Package className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-900">New Product</h3>
                      <p className="text-sm text-slate-500">Create with AI assistance</p>
                    </div>
                  </motion.div>
                </Link>
              </div>

              <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mt-8"></div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
