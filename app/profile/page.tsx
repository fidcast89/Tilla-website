"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Building2,
  Camera,
  ChevronRight,
  CreditCard,
  Edit,
  HelpCircle,
  Key,
  Loader2,
  LogOut,
  Mail,
  Save,
  Shield,
  Smartphone,
  Store,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [userData, setUserData] = useState({
    name: "Cameron Smith",
    email: "cameron@example.com",
    phone: "+254 712 345 678",
    storeName: "Tilla Coffee",
    storeType: "Food & Beverage",
    notifications: true,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setUserData({
      ...userData,
      [name]: checked,
    })
  }

  const saveChanges = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real app, we would save user data to the database
    localStorage.setItem("userData", JSON.stringify(userData))

    setIsSaving(false)
    setIsEditing(false)
  }

  return (
    <div className="relative w-full max-w-[420px] mx-auto min-h-screen bg-[#f8faf9] text-slate-800">
      {/* Status Bar */}
      <div className="flex justify-between items-center p-4 pt-7 pb-4">
        <span className="text-xs font-medium text-slate-500">9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-primary opacity-70"></div>
          <div className="w-3 h-3 rounded-full border border-slate-400"></div>
          <div className="w-3 h-3 rounded-full border border-slate-400"></div>
        </div>
      </div>

      {/* Header */}
      <header className="px-6 pb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
              <ArrowLeft className="w-4 h-4 text-slate-600" />
            </div>
          </Link>
          <h1 className="text-xl font-medium">Account & Store</h1>
        </div>

        <div>
          {isEditing ? (
            <Button
              variant="default"
              size="sm"
              className="h-9 w-9 rounded-full p-0"
              disabled={isSaving}
              onClick={saveChanges}
            >
              {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
            </Button>
          ) : (
            <Button variant="outline" size="sm" className="h-9 w-9 rounded-full p-0" onClick={() => setIsEditing(true)}>
              <Edit className="h-4 w-4" />
            </Button>
          )}
        </div>
      </header>

      {/* Profile Header */}
      <div className="px-6 pb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            {isEditing && (
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                <Camera className="w-4 h-4 text-primary" />
              </button>
            )}
          </div>

          <div>
            <h2 className="text-xl font-semibold">{userData.name}</h2>
            <p className="text-sm text-slate-500">Premium Account</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6">
        <Tabs defaultValue="account">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="store">Store</TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Personal Details
              </h3>

              <div className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-xs text-slate-500">
                    Full Name
                  </Label>
                  {isEditing ? (
                    <Input id="name" name="name" value={userData.name} onChange={handleInputChange} className="h-9" />
                  ) : (
                    <p className="text-sm">{userData.name}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <Label htmlFor="email" className="text-xs text-slate-500">
                    Email
                  </Label>
                  {isEditing ? (
                    <div className="relative">
                      <Mail className="absolute left-3 top-2 h-4 w-4 text-slate-400" />
                      <Input
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        className="h-9 pl-10"
                      />
                    </div>
                  ) : (
                    <p className="text-sm">{userData.email}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-xs text-slate-500">
                    Phone
                  </Label>
                  {isEditing ? (
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-2 h-4 w-4 text-slate-400" />
                      <Input
                        id="phone"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                        className="h-9 pl-10"
                      />
                    </div>
                  ) : (
                    <p className="text-sm">{userData.phone}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                Security
              </h3>

              <div className="space-y-2">
                <button className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50">
                  <div className="flex items-center gap-2">
                    <Key className="w-4 h-4 text-slate-500" />
                    <span className="text-sm">Change Password</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-slate-500" />
                    <span className="text-sm">Two-Factor Authentication</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                <Bell className="w-4 h-4 text-primary" />
                Notifications
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="notifications" className="text-sm">
                    Push Notifications
                  </label>
                  <Switch
                    id="notifications"
                    checked={userData.notifications}
                    onCheckedChange={(checked) => handleSwitchChange("notifications", checked)}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>

            <Link href="/auth">
              <button className="w-full mt-6 flex items-center justify-center gap-2 py-3 px-4 text-red-500 bg-red-50 rounded-xl">
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </Link>
          </TabsContent>

          <TabsContent value="store" className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                <Store className="w-4 h-4 text-primary" />
                Store Details
              </h3>

              <div className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="storeName" className="text-xs text-slate-500">
                    Store Name
                  </Label>
                  {isEditing ? (
                    <Input
                      id="storeName"
                      name="storeName"
                      value={userData.storeName}
                      onChange={handleInputChange}
                      className="h-9"
                    />
                  ) : (
                    <p className="text-sm">{userData.storeName}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <Label htmlFor="storeType" className="text-xs text-slate-500">
                    Business Type
                  </Label>
                  {isEditing ? (
                    <div className="relative">
                      <Building2 className="absolute left-3 top-2 h-4 w-4 text-slate-400" />
                      <Input
                        id="storeType"
                        name="storeType"
                        value={userData.storeType}
                        onChange={handleInputChange}
                        className="h-9 pl-10"
                      />
                    </div>
                  ) : (
                    <p className="text-sm">{userData.storeType}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-accent" />
                Payment Methods
              </h3>

              <div className="space-y-2">
                <button className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-slate-500" />
                    <span className="text-sm">Manage Payment Methods</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-primary" />
                Help & Support
              </h3>

              <div className="space-y-2">
                <button className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-slate-500" />
                    <span className="text-sm">Contact Support</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>

                <button className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50">
                  <div className="flex items-center gap-2">
                    <File className="w-4 h-4 text-slate-500" />
                    <span className="text-sm">Terms & Privacy</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function Bell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}

function File(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}
