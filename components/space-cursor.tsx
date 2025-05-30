"use client"

import { useEffect, useState } from "react"

export function SpaceCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          width: isClicking ? "24px" : "12px",
          height: isClicking ? "24px" : "12px",
          backgroundColor: "white",
          transition: "width 0.2s, height 0.2s",
        }}
      />
      <div
        className="fixed pointer-events-none z-50 rounded-full border border-white/30 backdrop-blur-sm"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          width: "40px",
          height: "40px",
          transition: "transform 0.1s ease-out, opacity 0.2s ease",
          opacity: 0.6,
        }}
      />
    </>
  )
}
