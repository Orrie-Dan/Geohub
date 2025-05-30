"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SpaceTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "cosmic"
  error?: string
  success?: boolean
}

const SpaceTextarea = React.forwardRef<HTMLTextAreaElement, SpaceTextareaProps>(
  ({ className, variant = "default", error, success, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)

    const getVariantClasses = () => {
      switch (variant) {
        case "cosmic":
          return cn(
            "flex min-h-[80px] w-full rounded-lg px-3 py-2 text-sm transition-all duration-300",
            "bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md",
            "border-2 border-transparent text-white resize-none",
            "focus:outline-none focus:ring-0 focus:bg-gradient-to-br focus:from-slate-800/90 focus:to-slate-700/90",
            "hover:from-slate-800/90 hover:to-slate-700/90",
            "placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "focus:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
              : success
                ? "focus:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                : "focus:shadow-[0_0_20px_rgba(56,189,248,0.3)]",
          )
        default:
          return cn(
            "flex min-h-[80px] w-full rounded-lg border-2 px-3 py-2 text-sm transition-all duration-300",
            "bg-slate-900/50 backdrop-blur-md text-white resize-none",
            "focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
            "placeholder:text-slate-400",
            error
              ? "border-red-500/50 focus:border-red-400"
              : success
                ? "border-green-500/50 focus:border-green-400"
                : "border-slate-700/50 focus:border-sky-400",
            "hover:border-slate-600/50",
          )
      }
    }

    return (
      <div className="relative">
        <textarea
          className={cn(getVariantClasses(), className)}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {/* Cosmic Glow Effect */}
        {variant === "cosmic" && isFocused && (
          <div
            className={cn(
              "absolute inset-0 rounded-lg opacity-30 blur-xl transition-opacity duration-300",
              error ? "bg-red-500" : success ? "bg-green-500" : "bg-sky-500",
            )}
            style={{ zIndex: -1 }}
          />
        )}

        {/* Error/Success Message */}
        {(error || success) && (
          <div className="mt-2 flex items-center space-x-2">
            <div className={cn("w-2 h-2 rounded-full", error ? "bg-red-500" : "bg-green-500")} />
            <span className={cn("text-sm", error ? "text-red-400" : "text-green-400")}>
              {error || (success && "Input is valid")}
            </span>
          </div>
        )}
      </div>
    )
  },
)

SpaceTextarea.displayName = "SpaceTextarea"

export { SpaceTextarea }
