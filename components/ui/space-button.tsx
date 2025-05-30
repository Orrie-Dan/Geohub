"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const spaceButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-sky-600 text-white hover:bg-sky-700 shadow-lg hover:shadow-xl",
        cosmic:
          "bg-gradient-to-r from-sky-600 to-cyan-600 text-white hover:from-sky-700 hover:to-cyan-700 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]",
        orbital:
          "bg-slate-900/50 backdrop-blur-md border-2 border-sky-400/50 text-sky-400 hover:bg-sky-400/10 hover:border-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]",
        nebula:
          "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]",
        destructive: "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl",
        outline:
          "border-2 border-slate-700 bg-slate-900/50 backdrop-blur-md text-white hover:bg-slate-800/50 hover:border-slate-600",
        secondary: "bg-slate-800 text-white hover:bg-slate-700 shadow-lg hover:shadow-xl",
        ghost: "text-white hover:bg-slate-800/50 hover:text-sky-400",
        link: "text-sky-400 underline-offset-4 hover:underline hover:text-sky-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8",
        xl: "h-14 rounded-xl px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface SpaceButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof spaceButtonVariants> {
  asChild?: boolean
  loading?: boolean
}

const SpaceButton = React.forwardRef<HTMLButtonElement, SpaceButtonProps>(
  ({ className, variant, size, asChild = false, loading, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(spaceButtonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </Comp>
    )
  },
)
SpaceButton.displayName = "SpaceButton"

export { SpaceButton, spaceButtonVariants }
