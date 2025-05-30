"use client"

import { cn } from "@/lib/utils"

interface SatelliteLoaderProps {
  className?: string
  size?: "sm" | "md" | "lg"
  color?: "blue" | "cyan" | "white"
}

export function SatelliteLoader({ className, size = "md", color = "blue" }: SatelliteLoaderProps) {
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
      {/* Earth */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/2 h-1/2 rounded-full bg-blue-600 opacity-80 shadow-lg shadow-blue-500/50">
          <div className="absolute inset-0 rounded-full bg-[url('/placeholder.svg?height=100&width=100')] bg-cover opacity-30"></div>
        </div>
      </div>

      {/* Satellite orbit */}
      <div className="absolute inset-0 rounded-full border border-slate-600 opacity-30 rotate-45"></div>

      {/* Satellite */}
      <div
        className="absolute"
        style={{
          animation: "satelliteOrbit 6s linear infinite",
          transformOrigin: "center",
        }}
      >
        <div
          className={cn("w-4 h-3 flex items-center justify-center", colorClasses[color])}
          style={{
            position: "relative",
            left: "calc(50% - 8px)",
            top: "-2px",
          }}
        >
          <div className="w-4 h-1.5 bg-current rounded-sm"></div>
          <div className="absolute left-1/2 top-0 w-0.5 h-3 bg-current transform -translate-x-1/2 -translate-y-full"></div>
          <div className="absolute left-1/2 bottom-0 w-0.5 h-3 bg-current transform -translate-x-1/2 translate-y-full"></div>
          <div className="absolute left-0 top-1/2 w-3 h-0.5 bg-current transform -translate-x-full -translate-y-1/2"></div>
          <div className="absolute right-0 top-1/2 w-3 h-0.5 bg-current transform translate-x-full -translate-y-1/2"></div>
        </div>
      </div>

      {/* Signal waves */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={cn("w-full h-full opacity-0", colorClasses[color])}
          style={{
            animation: "signalPulse 3s ease-out infinite",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,3" />
          </svg>
        </div>
      </div>
    </div>
  )
}
