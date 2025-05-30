"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ProgressLoaderProps {
  className?: string
  color?: "blue" | "cyan" | "white"
  progress?: number
  showPercentage?: boolean
  text?: string
  indeterminate?: boolean
}

export function ProgressLoader({
  className,
  color = "blue",
  progress = 0,
  showPercentage = true,
  text = "Loading",
  indeterminate = false,
}: ProgressLoaderProps) {
  const [currentProgress, setCurrentProgress] = useState(0)

  useEffect(() => {
    if (indeterminate) {
      const interval = setInterval(() => {
        setCurrentProgress((prev) => {
          if (prev >= 100) return 0
          return prev + 1
        })
      }, 30)
      return () => clearInterval(interval)
    } else {
      setCurrentProgress(progress)
    }
  }, [progress, indeterminate])

  const colorClasses = {
    blue: "text-sky-500 border-sky-500",
    cyan: "text-cyan-400 border-cyan-400",
    white: "text-white border-white",
  }

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="text-sm font-medium mb-2 text-slate-300">{text}</div>
      <div className="relative w-64 h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={cn("absolute top-0 left-0 h-full rounded-full", colorClasses[color].split(" ")[0])}
          style={{
            width: `${currentProgress}%`,
            backgroundImage: indeterminate
              ? "linear-gradient(to right, transparent, currentColor, transparent)"
              : undefined,
            backgroundSize: indeterminate ? "200% 100%" : undefined,
            animation: indeterminate ? "progressIndeterminate 2s linear infinite" : undefined,
          }}
        ></div>
      </div>
      {showPercentage && <div className="text-xs mt-2 text-slate-400">{Math.round(currentProgress)}%</div>}

      {/* Rocket icon */}
      <div
        className={cn("mt-4", colorClasses[color].split(" ")[0])}
        style={{
          transform: `translateX(${(currentProgress / 100) * 120 - 60}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      </div>
    </div>
  )
}
