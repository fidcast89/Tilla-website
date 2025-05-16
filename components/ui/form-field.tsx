"use client"

import type React from "react"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface FormFieldProps {
  label: string
  name: string
  type?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  required?: boolean
  icon?: React.ReactNode
  className?: string
  autoComplete?: string
}

export function FormField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  icon,
  className,
  autoComplete,
}: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <Label htmlFor={name} className={cn("text-sm", error ? "text-destructive" : "text-foreground")}>
          {label}
          {required && <span className="ml-1 text-destructive">*</span>}
        </Label>
        {error && <span className="text-xs text-destructive">{error}</span>}
      </div>

      <div className="relative">
        {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</div>}

        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          className={cn(
            icon ? "pl-10" : "",
            error ? "border-destructive focus-visible:ring-destructive" : "",
            isFocused ? "border-primary" : "",
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      </div>
    </div>
  )
}
