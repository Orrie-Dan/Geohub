"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ParallaxScrollProps {
  children: React.ReactNode
  speed?: number
}

export function ParallaxScroll({ children, speed = 0.5 }: ParallaxScrollProps) {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const { top } = ref.current.getBoundingClientRect()
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      if (top < windowHeight && top + ref.current.offsetHeight > 0) {
        setOffset(scrollPosition * speed)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div
        style={{
          transform: `translateY(${offset}px)`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
