"use client"

import { motion } from "framer-motion"
import { Smartphone, ShoppingBag, Users, Zap, ArrowRight, Check, DollarSign, Plus } from "lucide-react"

export function HowItWorksMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-xl bg-gray-800/40 blur-xl"></div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900 shadow-lg"
      >
        {/* Sale Process Mockup */}
        <div className="relative h-[600px] w-[300px] overflow-hidden bg-gray-900 p-4">
          {/* App Header */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                <ShoppingBag className="h-4 w-4 text-primary" />
              </div>
              <h2 className="text-lg font-bold text-white">New Sale</h2>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800">
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Cart Items */}
          <div className="mb-4 space-y-3">
            <div className="rounded-lg bg-gray-800 p-3">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-md bg-gray-700"></div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-white">Black Cotton T-Shirt</h3>
                  <p className="text-xs text-gray-400">Size: M • Qty: 2</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">KES 2,400</p>
                  <p className="text-xs text-gray-400">KES 1,200 each</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-800 p-3">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-md bg-gray-700"></div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-white">Denim Jacket</h3>
                  <p className="text-xs text-gray-400">Size: L • Qty: 1</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">KES 3,500</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center py-2">
              <button className="flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
                <Plus className="h-3 w-3" />
                <span>Add Item</span>
              </button>
            </div>
          </div>

          {/* Customer Selection */}
          <div className="mb-4 rounded-xl bg-gray-800 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-medium text-white">Customer</h3>
              <button className="rounded-full bg-gray-700 px-2 py-0.5 text-xs text-gray-300">+ New</button>
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-gray-700/50 p-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Sarah Johnson</p>
                <p className="text-xs text-gray-400">Regular Customer • 12 purchases</p>
              </div>
              <div className="ml-auto">
                <Check className="h-4 w-4 text-primary" />
              </div>
            </div>

            <div className="mt-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <p className="text-xs text-gray-300">Good credit history</p>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="mb-4 rounded-xl bg-gray-800 p-4">
            <h3 className="mb-3 text-sm font-medium text-white">Payment Method</h3>

            <div className="space-y-2">
              <div className="flex items-center gap-3 rounded-lg bg-primary/10 p-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                  <DollarSign className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">Cash</p>
                </div>
                <div>
                  <div className="h-4 w-4 rounded-full border-2 border-primary bg-primary"></div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-gray-700/50 p-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700">
                  <Smartphone className="h-4 w-4 text-gray-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">Mobile Money</p>
                </div>
                <div>
                  <div className="h-4 w-4 rounded-full border-2 border-gray-500"></div>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-gray-700/50 p-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700">
                  <Zap className="h-4 w-4 text-gray-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">Credit Sale</p>
                </div>
                <div>
                  <div className="h-4 w-4 rounded-full border-2 border-gray-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Total and Checkout */}
          <div className="rounded-xl bg-gray-800 p-4">
            <div className="mb-3 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-300">Subtotal</p>
                <p className="text-sm font-medium text-white">KES 5,900</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-300">Tax (16%)</p>
                <p className="text-sm font-medium text-white">KES 944</p>
              </div>
              <div className="border-t border-gray-700 pt-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">Total</p>
                  <p className="text-lg font-bold text-white">KES 6,844</p>
                </div>
              </div>
            </div>

            <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-medium text-white">
              <ShoppingBag className="h-4 w-4" />
              <span>Complete Sale</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
