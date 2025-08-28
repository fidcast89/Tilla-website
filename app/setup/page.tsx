"use client"

import { useState } from "react"
import { setupDatabase } from "@/lib/setup-database"
import { Loader2, CheckCircle, XCircle, Database, RefreshCw } from "lucide-react"

export default function SetupPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success?: boolean; error?: any } | null>(null)

  const handleSetupDatabase = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      const setupResult = await setupDatabase()
      setResult(setupResult)
    } catch (error) {
      setResult({ success: false, error })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Database className="w-8 h-8 text-primary" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-2">Tilla Setup</h1>
        <p className="text-slate-500 text-center mb-6">Set up your database schema and sample data</p>

        <div className="space-y-4">
          {result && (
            <div className={`p-4 rounded-lg ${result.success ? "bg-green-50" : "bg-red-50"}`}>
              <div className="flex items-center gap-3">
                {result.success ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
                <div>
                  <p className={`font-medium ${result.success ? "text-green-700" : "text-red-700"}`}>
                    {result.success ? "Setup Completed" : "Setup Failed"}
                  </p>
                  {result.error && (
                    <p className="text-sm text-red-600 mt-1">{result.error.message || JSON.stringify(result.error)}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <button
            onClick={handleSetupDatabase}
            disabled={isLoading}
            className="w-full py-3 rounded-lg bg-primary text-white font-medium flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Setting Up Database...
              </>
            ) : result?.success ? (
              <>
                <RefreshCw className="w-5 h-5" />
                Reinitialize Database
              </>
            ) : (
              <>
                <Database className="w-5 h-5" />
                Set Up Database
              </>
            )}
          </button>
        </div>

        <div className="mt-6 text-xs text-slate-500">
          <p className="mb-2">This will:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Create all required database tables</li>
            <li>Set up necessary functions and triggers</li>
            <li>Insert sample data for a fashion store</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
