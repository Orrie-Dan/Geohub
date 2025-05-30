"use client"

import { cn } from "@/lib/utils"

interface AstronautLoaderProps {
  className?: string
  size?: "sm" | "md" | "lg"
  color?: "blue" | "cyan" | "white"
}

export function AstronautLoader({ className, size = "md", color = "blue" }: AstronautLoaderProps) {
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
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Astronaut */}
        <div
          className={cn("relative w-1/2 h-1/2", colorClasses[color])}
          style={{
            animation: "float 3s ease-in-out infinite",
          }}
        >
          {/* Helmet */}
          <div className="absolute inset-0 rounded-full border-2 border-current bg-slate-900/50 backdrop-blur-sm">
            <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/3 rounded-t-full bg-current opacity-20"></div>
          </div>

          {/* Body */}
          <div className="absolute left-1/4 right-1/4 top-[60%] bottom-0 bg-current rounded-lg"></div>

          {/* Oxygen tank */}
          <div className="absolute left-[10%] right-[70%] top-1/2 bottom-[20%] bg-current rounded-lg"></div>
          <div className="absolute left-[70%] right-[10%] top-1/2 bottom-[20%] bg-current rounded-lg"></div>

          {/* Tether line */}
          <div
            className="absolute w-px h-16 bg-current left-1/2 bottom-full"
            style={{
              animation: "tetherWave 2s ease-in-out infinite",
              transformOrigin: "bottom",
            }}
          ></div>
        </div>
      </div>

      {/* Stars */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[20%] w-1 h-1 rounded-full bg-white animate-pulse"></div>
        <div
          className="absolute top-[70%] left-[80%] w-1 h-1 rounded-full bg-white animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-[30%] left-[60%] w-1 h-1 rounded-full bg-white animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-[80%] left-[30%] w-1 h-1 rounded-full bg-white animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>
    </div>
  )
}
