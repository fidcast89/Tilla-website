"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Eye, EyeOff, Loader2, LockKeyhole, Mail, Smartphone, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FormField } from "@/components/ui/form-field"
import { useToast } from "@/hooks/use-toast"
import { signIn, signUp } from "@/lib/supabase-client"
import { useAuth } from "@/contexts/auth-context"

export function AuthForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  })
  const [, setFormErrors] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const router = useRouter()
  const { toast } = useToast()
  const { setAuth } = useAuth()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validateForm = (type: "signin" | "signup") => {
    const newErrors: Record<string, string> = {}

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    // Additional validation for signup
    if (type === "signup") {
      if (!formData.name) {
        newErrors.name = "Name is required"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm("signin")) return

    setIsLoading(true)
    try {
      const { session } = await signIn(formData.email, formData.password)

      if (session) {
        toast({
          title: "Sign in successful",
          description: "Welcome back to Tilla POS",
        })
        setAuth(true)
        router.push("/")
      } else {
        throw new Error("Failed to sign in")
      }
    } catch (error: any) {
      console.error("Login error:", error)
      toast({
        title: "Sign in failed",
        description: error.message || "Please check your credentials and try again",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm("signup")) return

    setIsLoading(true)
    try {
      const { user } = await signUp(formData.email, formData.password, {
        name: formData.name,
        phone: formData.phone,
      })

      if (user) {
        toast({
          title: "Account created successfully",
          description: "Welcome to Tilla POS",
        })
        router.push("/onboarding")
      } else {
        throw new Error("Failed to create account")
      }
    } catch (error: any) {
      console.error("Registration error:", error)
      toast({
        title: "Sign up failed",
        description: error.message || "Please try again later",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-[420px] mx-auto px-6">
      <div className="flex flex-col items-center justify-center mt-12 mb-8">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
          <Image
            src="/tilla_favicon.png"
            alt="Tilla Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
        </div>
        <h1 className="text-2xl font-bold text-center">Welcome to Tilla</h1>
        <p className="text-sm text-muted-foreground text-center mt-2">
          AI-powered POS and eCommerce platform for small businesses
        </p>
      </div>

      <Tabs defaultValue="signin" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="signin">Sign In</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>

        <TabsContent value="signin">
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-3">
              <FormField
                label="Email Address"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                required
                icon={<Mail className="h-4 w-4" />}
                autoComplete="email"
              />

              <div className="relative">
                <FormField
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  error={errors.password}
                  required
                  icon={<LockKeyhole className="h-4 w-4" />}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-muted-foreground"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="button" variant="link" className="text-primary text-sm p-0">
                Forgot password?
              </Button>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-background px-2 text-muted-foreground">OR CONTINUE WITH</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" type="button" className="flex items-center gap-2">
                <Image src="/placeholder.svg?height=20&width=20" alt="Google" width={20} height={20} />
                Google
              </Button>
              <Button variant="outline" type="button" className="flex items-center gap-2">
                <Image src="/placeholder.svg?height=20&width=20" alt="Apple" width={20} height={20} />
                Apple
              </Button>
            </div>
          </form>
        </TabsContent>

        <TabsContent value="signup">
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="space-y-3">
              <FormField
                label="Full Name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
                required
                icon={<User className="h-4 w-4" />}
                autoComplete="name"
              />

              <FormField
                label="Email Address"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                required
                icon={<Mail className="h-4 w-4" />}
                autoComplete="email"
              />

              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={handleInputChange}
                error={errors.phone}
                icon={<Smartphone className="h-4 w-4" />}
                autoComplete="tel"
              />

              <div className="relative">
                <FormField
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  error={errors.password}
                  required
                  icon={<LockKeyhole className="h-4 w-4" />}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-muted-foreground"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="h-4 w-4 rounded border-border accent-primary" required />
              <label htmlFor="terms" className="text-xs text-muted-foreground">
                I agree to the <span className="text-primary">Terms of Service</span> and{" "}
                <span className="text-primary">Privacy Policy</span>
              </label>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-background px-2 text-muted-foreground">OR CONTINUE WITH</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" type="button" className="flex items-center gap-2">
                <Image src="/placeholder.svg?height=20&width=20" alt="Google" width={20} height={20} />
                Google
              </Button>
              <Button variant="outline" type="button" className="flex items-center gap-2">
                <Image src="/placeholder.svg?height=20&width=20" alt="Apple" width={20} height={20} />
                Apple
              </Button>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  )
}
