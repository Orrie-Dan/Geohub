"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

export interface SpaceInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "floating" | "cosmic"
  icon?: React.ReactNode
  error?: string
  success?: boolean
}

const SpaceInput = React.forwardRef<HTMLInputElement, SpaceInputProps>(
  ({ className, type, variant = "default", icon, error, success, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0)
      props.onChange?.(e)
    }

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword)
    }

    const getVariantClasses = () => {
      switch (variant) {
        case "floating":
          return cn(
            "peer w-full px-4 pt-6 pb-2 bg-slate-900/50 backdrop-blur-md border-2 rounded-lg",
            "text-white placeholder-transparent transition-all duration-300",
            "focus:outline-none focus:ring-0",
            error
              ? "border-red-500/50 focus:border-red-400"
              : success
                ? "border-green-500/50 focus:border-green-400"
                : "border-slate-700/50 focus:border-sky-400",
            "hover:border-slate-600/50",
            icon ? "pl-12" : "pl-4",
          )
        case "cosmic":
          return cn(
            "w-full px-4 py-3 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-md",
            "border-2 border-transparent rounded-lg text-white transition-all duration-300",
            "focus:outline-none focus:ring-0 focus:bg-gradient-to-r focus:from-slate-800/90 focus:to-slate-700/90",
            "hover:from-slate-800/90 hover:to-slate-700/90",
            error
              ? "focus:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
              : success
                ? "focus:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                : "focus:shadow-[0_0_20px_rgba(56,189,248,0.3)]",
            icon ? "pl-12" : "pl-4",
          )
        default:
          return cn(
            "flex h-12 w-full rounded-lg border-2 bg-slate-900/50 backdrop-blur-md px-3 py-2 text-sm",
            "text-white transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-0",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-red-500/50 focus-visible:border-red-400"
              : success
                ? "border-green-500/50 focus-visible:border-green-400"
                : "border-slate-700/50 focus-visible:border-sky-400",
            "hover:border-slate-600/50",
            icon ? "pl-12" : "pl-3",
          )
      }
    }

    return (
      <div className="relative">
        {/* Icon */}
        {icon && <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 z-10">{icon}</div>}

        {/* Input */}
        <input
          type={type === "password" && showPassword ? "text" : type}
          className={cn(getVariantClasses(), className)}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
          {...props}
        />

        {/* Floating Label */}
        {variant === "floating" && props.placeholder && (
          <label
            className={cn(
              "absolute left-4 transition-all duration-300 pointer-events-none",
              "text-slate-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2",
              "peer-focus:text-xs peer-focus:top-2 peer-focus:transform peer-focus:translate-y-0",
              hasValue || isFocused ? "text-xs top-2 transform translate-y-0" : "",
              error ? "peer-focus:text-red-400" : success ? "peer-focus:text-green-400" : "peer-focus:text-sky-400",
              icon ? "left-12" : "left-4",
            )}
          >
            {props.placeholder}
          </label>
        )}

        {/* Password Toggle */}
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        )}

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

SpaceInput.displayName = "SpaceInput"

export { SpaceInput }
