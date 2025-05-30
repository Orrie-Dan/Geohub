"use client"

import { cn } from "@/lib/utils"

interface OrbitLoaderProps {
  className?: string
  size?: "sm" | "md" | "lg"
  color?: "blue" | "cyan" | "white"
}

export function OrbitLoader({ className, size = "md", color = "blue" }: OrbitLoaderProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  }

  const colorClasses = {
    blue: "text-sky-500",
    cyan: "text-cyan-400",
    white: "text-white",
  }

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      {/* Planet */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={cn("w-1/3 h-1/3 rounded-full bg-current animate-pulse", colorClasses[color])}></div>
      </div>

      {/* Orbits */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: "3s" }}>
        <div className={cn("absolute top-0 left-1/2 w-2 h-2 -ml-1 rounded-full bg-current", colorClasses[color])}></div>
      </div>

      <div className="absolute inset-0 animate-spin" style={{ animationDuration: "5s" }}>
        <div
          className={cn("absolute top-1/4 right-0 w-3 h-3 -mr-1.5 rounded-full bg-current", colorClasses[color])}
        ></div>
      </div>

      <div className="absolute inset-0 animate-spin" style={{ animationDuration: "7s", animationDirection: "reverse" }}>
        <div
          className={cn("absolute bottom-0 left-1/2 w-4 h-4 -ml-2 rounded-full bg-current", colorClasses[color])}
        ></div>
      </div>

      {/* Orbit rings */}
      <div className="absolute inset-0 rounded-full border border-current opacity-20"></div>
      <div className="absolute inset-2 rounded-full border border-current opacity-15"></div>
      <div className="absolute inset-4 rounded-full border border-current opacity-10"></div>
    </div>
  )
}
