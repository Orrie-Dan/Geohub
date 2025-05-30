"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

export interface SpaceCheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  variant?: "default" | "cosmic" | "orbital"
  label?: string
  description?: string
}

const SpaceCheckbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, SpaceCheckboxProps>(
  ({ className, variant = "default", label, description, ...props }, ref) => {
    const getVariantClasses = () => {
      switch (variant) {
        case "cosmic":
          return cn(
            "peer h-5 w-5 shrink-0 rounded-md border-2 border-slate-600 bg-gradient-to-br from-slate-900 to-slate-800",
            "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-sky-600 data-[state=checked]:to-cyan-600",
            "data-[state=checked]:border-sky-400 data-[state=checked]:text-white",
            "data-[state=checked]:shadow-[0_0_15px_rgba(56,189,248,0.4)]",
            "hover:border-slate-500 transition-all duration-300",
          )
        case "orbital":
          return cn(
            "peer h-5 w-5 shrink-0 rounded-full border-2 border-slate-600 bg-slate-900/50 backdrop-blur-sm",
            "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "data-[state=checked]:bg-sky-600 data-[state=checked]:border-sky-400 data-[state=checked]:text-white",
            "data-[state=checked]:shadow-[0_0_10px_rgba(56,189,248,0.6)]",
            "hover:border-slate-500 transition-all duration-300",
            "relative overflow-hidden",
          )
        default:
          return cn(
            "peer h-5 w-5 shrink-0 rounded border-2 border-slate-600 bg-slate-900/50 backdrop-blur-sm",
            "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "data-[state=checked]:bg-sky-600 data-[state=checked]:border-sky-400 data-[state=checked]:text-white",
            "hover:border-slate-500 transition-all duration-300",
          )
      }
    }

    const renderIndicator = () => {
      if (variant === "orbital") {
        return (
          <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
            <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
          </CheckboxPrimitive.Indicator>
        )
      }

      return (
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
          {props.checked === "indeterminate" ? <Minus className="h-3 w-3" /> : <Check className="h-3 w-3" />}
        </CheckboxPrimitive.Indicator>
      )
    }

    if (label || description) {
      return (
        <div className="flex items-start space-x-3">
          <CheckboxPrimitive.Root ref={ref} className={cn(getVariantClasses(), className)} {...props}>
            {renderIndicator()}
            {variant === "orbital" && (
              <div className="absolute inset-0 rounded-full border border-sky-400/30 animate-ping" />
            )}
          </CheckboxPrimitive.Root>
          <div className="grid gap-1.5 leading-none">
            {label && (
              <label
                htmlFor={props.id}
                className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {label}
              </label>
            )}
            {description && <p className="text-xs text-slate-400">{description}</p>}
          </div>
        </div>
      )
    }

    return (
      <CheckboxPrimitive.Root ref={ref} className={cn(getVariantClasses(), className)} {...props}>
        {renderIndicator()}
        {variant === "orbital" && (
          <div className="absolute inset-0 rounded-full border border-sky-400/30 animate-ping" />
        )}
      </CheckboxPrimitive.Root>
    )
  },
)

SpaceCheckbox.displayName = CheckboxPrimitive.Root.displayName

export { SpaceCheckbox }
