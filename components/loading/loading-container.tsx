"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface LoadingContainerProps {
  children: React.ReactNode
  className?: string
  isLoading?: boolean
  delay?: number
  fullScreen?: boolean
}

export function LoadingContainer({
  children,
  className,
  isLoading = true,
  delay = 300,
  fullScreen = false,
}: LoadingContainerProps) {
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isLoading) {
      timeout = setTimeout(() => {
        setShowLoader(true)
      }, delay)
    } else {
      setShowLoader(false)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [isLoading, delay])

  if (!isLoading) return null

  if (!showLoader) return null

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        fullScreen ? "fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm" : "w-full h-full min-h-[100px]",
        className,
      )}
    >
      {children}
    </div>
  )
}
