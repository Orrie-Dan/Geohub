"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cn } from "@/lib/utils"

export interface SpaceRadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  variant?: "default" | "cosmic" | "orbital"
}

export interface SpaceRadioItemProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  variant?: "default" | "cosmic" | "orbital"
  label?: string
  description?: string
}

const SpaceRadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, SpaceRadioGroupProps>(
  ({ className, ...props }, ref) => {
    return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />
  },
)
SpaceRadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const SpaceRadioItem = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, SpaceRadioItemProps>(
  ({ className, variant = "default", label, description, ...props }, ref) => {
    const getVariantClasses = () => {
      switch (variant) {
        case "cosmic":
          return cn(
            "aspect-square h-5 w-5 rounded-full border-2 border-slate-600 bg-gradient-to-br from-slate-900 to-slate-800",
            "text-white ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "data-[state=checked]:border-sky-400 data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-sky-600 data-[state=checked]:to-cyan-600",
            "data-[state=checked]:shadow-[0_0_15px_rgba(56,189,248,0.4)]",
            "hover:border-slate-500 transition-all duration-300",
          )
        case "orbital":
          return cn(
            "aspect-square h-5 w-5 rounded-full border-2 border-slate-600 bg-slate-900/50 backdrop-blur-sm",
            "text-white ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "data-[state=checked]:border-sky-400 data-[state=checked]:bg-sky-600",
            "data-[state=checked]:shadow-[0_0_10px_rgba(56,189,248,0.6)]",
            "hover:border-slate-500 transition-all duration-300",
            "relative overflow-hidden",
          )
        default:
          return cn(
            "aspect-square h-5 w-5 rounded-full border-2 border-slate-600 bg-slate-900/50 backdrop-blur-sm",
            "text-white ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "data-[state=checked]:border-sky-400 data-[state=checked]:bg-sky-600",
            "hover:border-slate-500 transition-all duration-300",
          )
      }
    }

    const renderIndicator = () => {
      if (variant === "orbital") {
        return (
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
          </RadioGroupPrimitive.Indicator>
        )
      }

      return (
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <div className="h-2.5 w-2.5 rounded-full bg-white" />
        </RadioGroupPrimitive.Indicator>
      )
    }

    if (label || description) {
      return (
        <div className="flex items-start space-x-3">
          <RadioGroupPrimitive.Item ref={ref} className={cn(getVariantClasses(), className)} {...props}>
            {renderIndicator()}
            {variant === "orbital" && (
              <div className="absolute inset-0 rounded-full border border-sky-400/30 animate-ping" />
            )}
          </RadioGroupPrimitive.Item>
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
      <RadioGroupPrimitive.Item ref={ref} className={cn(getVariantClasses(), className)} {...props}>
        {renderIndicator()}
        {variant === "orbital" && (
          <div className="absolute inset-0 rounded-full border border-sky-400/30 animate-ping" />
        )}
      </RadioGroupPrimitive.Item>
    )
  },
)
SpaceRadioItem.displayName = RadioGroupPrimitive.Item.displayName

export { SpaceRadioGroup, SpaceRadioItem }
