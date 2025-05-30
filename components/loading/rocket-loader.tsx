"use client"

import { cn } from "@/lib/utils"

interface RocketLoaderProps {
  className?: string
  size?: "sm" | "md" | "lg"
  color?: "blue" | "cyan" | "white"
}

export function RocketLoader({ className, size = "md", color = "blue" }: RocketLoaderProps) {
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
      <div className="absolute inset-0">
        {/* Rocket path */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M10,50 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3,3"
            className="opacity-30"
          />
        </svg>

        {/* Rocket */}
        <div
          className={cn("absolute w-8 h-8 -ml-4 -mt-4 transform", colorClasses[color])}
          style={{
            animation: "rocketOrbit 4s linear infinite",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
            style={{
              animation: "rocketRotate 4s linear infinite",
            }}
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>

          {/* Rocket trail */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-6 bg-gradient-to-t from-transparent via-current to-transparent opacity-70"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
