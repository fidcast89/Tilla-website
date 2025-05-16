"use client"

import { motion } from "framer-motion"
import { BarChart2, Wifi, Battery, Signal, TrendingUp, ArrowRight, ArrowDown, Package, DollarSign } from "lucide-react"
import Image from "next/image"

export function BusinessInsightsMockup() {
  return (
    <div className="relative">
      <div className="relative mx-auto w-[320px]">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="relative"
        >
          {/* Shadow */}
          <div className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-[280px] h-[15px] bg-black/20 blur-md rounded-full"></div>

          {/* Smartphone Frame */}
          <div className="relative w-[320px] h-[650px] rounded-[40px] bg-gray-800 p-3 shadow-xl">
            {/* Bezel */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-gray-800 rounded-b-[16px] z-20">
              {/* Front Camera & Sensors */}
              <div className="absolute top-[10px] left-[50px] w-[8px] h-[8px] rounded-full bg-gray-700"></div>
              <div className="absolute top-[10px] left-[70px] w-[12px] h-[12px] rounded-full bg-gray-700"></div>
              <div className="absolute top-[10px] right-[50px] w-[8px] h-[8px] rounded-full bg-gray-700"></div>
            </div>

            {/* Screen */}
            <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-gray-900">
              {/* Status Bar */}
              <div className="flex justify-between items-center px-6 py-2 bg-gray-900">
                <div className="text-xs text-white font-medium">9:41</div>
                <div className="flex items-center gap-2">
                  <Signal className="h-3 w-3 text-white" />
                  <Wifi className="h-3 w-3 text-white" />
                  <Battery className="h-3 w-3 text-white" />
                </div>
              </div>

              {/* App Content Container */}
              <div className="px-5 py-3">
                {/* App Header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                      <BarChart2 className="h-4 w-4 text-green-400" />
                    </div>
                    <h2 className="text-lg font-bold text-white">Analytics</h2>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800">
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                </div>

                {/* Sales Overview */}
                <div className="mb-4 rounded-xl bg-gray-800 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-medium text-white">Sales Overview</h3>
                    <span className="text-xs text-gray-400">This Month</span>
                  </div>

                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-white">KES 128,450</p>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-green-400" />
                        <span className="text-xs text-green-400">+18% vs last month</span>
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-green-400" />
                    </div>
                  </div>

                  {/* Sales Chart */}
                  <div className="h-32 w-full rounded-lg bg-gray-700/50 p-2 relative">
                    {/* Simplified chart representation */}
                    <div className="absolute inset-0 flex items-end px-2 pb-2">
                      <div className="flex-1 flex items-end space-x-1">
                        {[30, 45, 25, 60, 40, 80, 55, 70, 50, 90, 65, 75].map((height, i) => (
                          <div 
                            key={i} 
                            className="flex-1 bg-gradient-to-t from-green-500/70 to-green-400/30 rounded-t"
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Chart labels */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 pt-1 border-t border-gray-600/30">
                      <span className="text-[8px] text-gray-400">Jun</span>
                      <span className="text-[8px] text-gray-400">Jul</span>
                      <span className="text-[8px] text-gray-400">Aug</span>
                      <span className="text-[8px] text-gray-400">Sep</span>
                      <span className="text-[8px] text-gray-400">Oct</span>
                      <span className="text-[8px] text-gray-400">Nov</span>
                    </div>
                  </div>
                </div>

                {/* Top Products */}
                <div className="mb-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-sm font-medium text-white">Top Products</h3>
                    <span className="text-xs text-green-400">View All</span>
                  </div>

                  <div className="space-y-3">
                    {/* Product 1 */}
                    <div className="rounded-lg bg-gray-800 p-3">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-md bg-gray-700 overflow-hidden">
                          <Image 
                            src="/images/product-kitenge.jpg" 
                            alt="Kitenge Shirt"
                            width={40}
                            height={40}
                            className="object-cover h-full w-full"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-white">African Print Shirt</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400">42 sold</span>
                            <span className="text-xs text-green-400">KES 50,400</span>
                          </div>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                          <TrendingUp className="h-4 w-4 text-green-400" />
                        </div>
                      </div>
                    </div>

                    {/* Product 2 */}
                    <div className="rounded-lg bg-gray-800 p-3">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-md bg-gray-700 overflow-hidden">
                          <Image 
                            src="/images/product-beads.jpg" 
                            alt="Beaded Necklace"
                            width={40}
                            height={40}
                            className="object-cover h-full w-full"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-white">Maasai Beaded Necklace</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400">38 sold</span>
                            <span className="text-xs text-green-400">KES 32,300</span>
                          </div>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                          <ArrowDown className="h-4 w-4 text-red-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inventory Insights */}
                <div className="mb-4 rounded-xl bg-gray-800 p-4">
                  <h3 className="mb-3 text-sm font-medium text-white">Inventory Insights</h3>
                  <div className="space-y-3">
                    <div className="rounded-lg bg-red-500/10 p-3 border border-red-500/30">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
                          <Package className="h-5 w-5 text-red-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-white">Low Stock Alert</h4>
                          <p className="text-xs text-gray-400">5 products are running low on stock</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-green-500/10 p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20">
                          <TrendingUp className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-white">Restocking Suggestion</h4>
                          <p className="text-xs text-gray-400">Order more African Print Shirts before weekend</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full rounded-lg bg-green-500 py-3 text-sm font-medium text-white">
                  View Detailed Reports
                </button>
              </div>
            </div>
          </div>

          {/* Floating notification */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 0 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{
              delay: 2,
              duration: 0.5,
              y: { repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" },
            }}
            className="absolute -right-20 top-20 z-20 w-48 rounded-lg bg-gray-800 p-3 shadow-lg"
          >
            <div className="flex items-start gap-2">
              <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
                <BarChart2 className="h-4 w-4 text-green-400" />
              </div>
              <div>
                <p className="text-xs font-medium text-white">AI Insight</p>
                <p className="text-xs text-gray-400">Sales peak on Fridays. Consider special promotions.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
