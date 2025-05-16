"use client"

import { useState, useEffect } from "react"
import { WifiOff, AlertTriangle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function OfflineBanner() {
  const [isOnline, setIsOnline] = useState(true)
  const [isOfflineForTooLong, setIsOfflineForTooLong] = useState(false)
  const [offlineTime, setOfflineTime] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Set initial state
    setIsOnline(navigator.onLine)

    const handleOnline = () => {
      setIsOnline(true)
      setIsOfflineForTooLong(false)
      setOfflineTime(null)
    }

    const handleOffline = () => {
      setIsOnline(false)
      setOfflineTime(Date.now())
    }

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    // Check if being offline for too long (5 minutes)
    const checkOfflineTime = setInterval(() => {
      if (offlineTime && Date.now() - offlineTime > 5 * 60 * 1000) {
        setIsOfflineForTooLong(true)
      }
    }, 60 * 1000) // Check every minute

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
      clearInterval(checkOfflineTime)
    }
  }, [offlineTime])

  if (!mounted || isOnline) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Alert variant={isOfflineForTooLong ? "destructive" : "warning"}>
          {isOfflineForTooLong ? (
            <>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>You've been offline for a while</AlertTitle>
              <AlertDescription>Some features may be limited until you reconnect to the internet.</AlertDescription>
            </>
          ) : (
            <>
              <WifiOff className="h-4 w-4" />
              <AlertTitle>You're currently offline</AlertTitle>
              <AlertDescription>Changes will sync when you reconnect to the internet.</AlertDescription>
            </>
          )}
        </Alert>
      </motion.div>
    </AnimatePresence>
  )
}
