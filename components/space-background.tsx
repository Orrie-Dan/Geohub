"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Image from "next/image"

interface SpaceBackgroundProps {
  children: React.ReactNode
  variant?: "stars" | "moon" | "astronaut" | "moon-landing"
  fixed?: boolean
  overlay?: boolean
}

export function SpaceBackground({ children, variant = "stars", fixed = false, overlay = true }: SpaceBackgroundProps) {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setOpacity(1)
  }, [])

  const getImageSrc = () => {
    switch (variant) {
      case "moon":
        return "/images/moon-phases.jpeg"
      case "astronaut":
        return "/images/astronaut.jpeg"
      case "moon-landing":
        return "/images/moon-landing.jpeg"
      case "stars":
      default:
        return "/images/starry-night.jpeg"
    }
  }

  return (
    <div className="relative w-full">
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${fixed ? "fixed" : ""}`}
        style={{ opacity }}
      >
        <Image
          src={getImageSrc() || "/placeholder.svg"}
          alt="Space background"
          fill
          priority
          className="object-cover"
        />
        {overlay && <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"></div>}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
