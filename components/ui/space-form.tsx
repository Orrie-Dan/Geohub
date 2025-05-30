"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SpaceFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  variant?: "default" | "cosmic" | "orbital"
  title?: string
  description?: string
  showStars?: boolean
}

export interface SpaceFormFieldProps {
  label?: string
  description?: string
  error?: string
  required?: boolean
  children: React.ReactNode
  className?: string
}

const SpaceForm = React.forwardRef<HTMLFormElement, SpaceFormProps>(
  ({ className, variant = "default", title, description, showStars = true, children, ...props }, ref) => {
    const getVariantClasses = () => {
      switch (variant) {
        case "cosmic":
          return cn(
            "relative p-8 rounded-2xl border-2 border-slate-700/50",
            "bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md",
            "shadow-2xl shadow-slate-900/50",
          )
        case "orbital":
          return cn(
            "relative p-8 rounded-2xl border-2 border-slate-700/50",
            "bg-slate-900/60 backdrop-blur-md",
            "shadow-xl shadow-slate-900/30",
            "before:absolute before:inset-0 before:rounded-2xl before:p-[2px]",
            "before:bg-gradient-to-r before:from-sky-400 before:via-cyan-400 before:to-sky-400",
            "before:-z-10 before:animate-pulse",
          )
        default:
          return cn(
            "relative p-8 rounded-xl border border-slate-700/50",
            "bg-slate-900/50 backdrop-blur-sm",
            "shadow-lg shadow-slate-900/25",
          )
      }
    }

    return (
      <form ref={ref} className={cn(getVariantClasses(), className)} {...props}>
        {/* Animated Stars Background */}
        {showStars && (
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        )}

        <div className="relative z-10">
          {/* Form Header */}
          {(title || description) && (
            <div className="mb-8 text-center">
              {title && <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>}
              {description && <p className="text-slate-400">{description}</p>}
            </div>
          )}

          {/* Form Content */}
          <div className="space-y-6">{children}</div>
        </div>
      </form>
    )
  },
)

SpaceForm.displayName = "SpaceForm"

const SpaceFormField: React.FC<SpaceFormFieldProps> = ({
  label,
  description,
  error,
  required,
  children,
  className,
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label className="text-sm font-medium text-white flex items-center">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      {description && <p className="text-xs text-slate-400">{description}</p>}
      {children}
      {error && (
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <span className="text-sm text-red-400">{error}</span>
        </div>
      )}
    </div>
  )
}

export { SpaceForm, SpaceFormField }
