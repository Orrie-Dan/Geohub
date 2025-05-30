"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

const SpaceSelect = SelectPrimitive.Root

const SpaceSelectGroup = SelectPrimitive.Group

const SpaceSelectValue = SelectPrimitive.Value

const SpaceSelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    variant?: "default" | "cosmic"
    error?: boolean
    success?: boolean
  }
>(({ className, children, variant = "default", error, success, ...props }, ref) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "cosmic":
        return cn(
          "flex h-12 w-full items-center justify-between rounded-lg px-3 py-2 text-sm",
          "bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-md",
          "border-2 border-transparent text-white transition-all duration-300",
          "focus:outline-none focus:ring-0 focus:bg-gradient-to-r focus:from-slate-800/90 focus:to-slate-700/90",
          "hover:from-slate-800/90 hover:to-slate-700/90",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "[&>span]:line-clamp-1",
          error
            ? "focus:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
            : success
              ? "focus:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              : "focus:shadow-[0_0_20px_rgba(56,189,248,0.3)]",
        )
      default:
        return cn(
          "flex h-12 w-full items-center justify-between rounded-lg border-2 px-3 py-2 text-sm",
          "bg-slate-900/50 backdrop-blur-md text-white transition-all duration-300",
          "focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
          "[&>span]:line-clamp-1",
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
    <SelectPrimitive.Trigger ref={ref} className={cn(getVariantClasses(), className)} {...props}>
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
})
SpaceSelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SpaceSelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SpaceSelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SpaceSelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SpaceSelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

const SpaceSelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-lg border-2 border-slate-700/50",
        "bg-slate-900/95 backdrop-blur-md text-white shadow-lg shadow-slate-900/50",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
        "data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SpaceSelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SpaceSelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SpaceSelectContent.displayName = SelectPrimitive.Content.displayName

const SpaceSelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold text-sky-400", className)}
    {...props}
  />
))
SpaceSelectLabel.displayName = SelectPrimitive.Label.displayName

const SpaceSelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-md py-2 pl-8 pr-2 text-sm",
      "outline-none transition-colors duration-200",
      "focus:bg-slate-800/50 focus:text-sky-400 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "hover:bg-slate-800/30",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4 text-sky-400" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SpaceSelectItem.displayName = SelectPrimitive.Item.displayName

const SpaceSelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-slate-700/50", className)} {...props} />
))
SpaceSelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  SpaceSelect,
  SpaceSelectGroup,
  SpaceSelectValue,
  SpaceSelectTrigger,
  SpaceSelectContent,
  SpaceSelectLabel,
  SpaceSelectItem,
  SpaceSelectSeparator,
  SpaceSelectScrollUpButton,
  SpaceSelectScrollDownButton,
}
