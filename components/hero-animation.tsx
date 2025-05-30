"use client"

import { useEffect, useRef } from "react"

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create stars
    const stars: { x: number; y: number; radius: number; speed: number; opacity: number; pulse: number }[] = []

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.05,
        opacity: Math.random() * 0.5 + 0.3,
        pulse: Math.random() * 0.1,
      })
    }

    // Animation
    let animationFrameId: number
    let time = 0

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        // Pulsating effect
        const pulseFactor = Math.sin(time * star.pulse) * 0.2 + 0.8

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius * pulseFactor, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * pulseFactor})`
        ctx.fill()

        // Add glow effect
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 3)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * 0.3})`)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Move stars slightly
        star.x += Math.sin(time) * star.speed
        star.y += Math.cos(time) * star.speed

        // Wrap stars around the screen
        if (star.x < -10) star.x = canvas.width + 10
        if (star.x > canvas.width + 10) star.x = -10
        if (star.y < -10) star.y = canvas.height + 10
        if (star.y > canvas.height + 10) star.y = -10
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-10" />
}
