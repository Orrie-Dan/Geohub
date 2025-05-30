"use client"

import { useState, useEffect } from "react"
import { OrbitLoader } from "./orbit-loader"
import { RocketLoader } from "./rocket-loader"
import { SatelliteLoader } from "./satellite-loader"
import { AstronautLoader } from "./astronaut-loader"
import { ProgressLoader } from "./progress-loader"
import { LoadingContainer } from "./loading-container"

export type LoaderType = "orbit" | "rocket" | "satellite" | "astronaut" | "progress"

interface SpaceLoaderProps {
  className?: string
  type?: LoaderType
  size?: "sm" | "md" | "lg"
  color?: "blue" | "cyan" | "white"
  isLoading?: boolean
  fullScreen?: boolean
  text?: string
  progress?: number
  showPercentage?: boolean
  indeterminate?: boolean
}

export function SpaceLoader({
  className,
  type = "orbit",
  size = "md",
  color = "blue",
  isLoading = true,
  fullScreen = false,
  text,
  progress = 0,
  showPercentage = true,
  indeterminate = false,
}: SpaceLoaderProps) {
  const [randomTip, setRandomTip] = useState("")

  const spaceTips = [
    "Earth is approximately 93 million miles from the sun",
    "A day on Venus is longer than a year on Venus",
    "The Great Red Spot on Jupiter is a storm that has lasted over 300 years",
    "Saturn's rings are made mostly of ice and rock",
    "There are more stars in the universe than grains of sand on Earth",
    "Light from the Sun takes about 8 minutes to reach Earth",
    "The Milky Way galaxy is about 100,000 light-years across",
    "The International Space Station orbits Earth every 90 minutes",
    "Mars has the largest volcano in our solar system, Olympus Mons",
    "Space is completely silent as there is no air to carry sound waves",
  ]

  useEffect(() => {
    if (isLoading) {
      const randomIndex = Math.floor(Math.random() * spaceTips.length)
      setRandomTip(spaceTips[randomIndex])
    }
  }, [isLoading])

  const renderLoader = () => {
    switch (type) {
      case "orbit":
        return <OrbitLoader size={size} color={color} />
      case "rocket":
        return <RocketLoader size={size} color={color} />
      case "satellite":
        return <SatelliteLoader size={size} color={color} />
      case "astronaut":
        return <AstronautLoader size={size} color={color} />
      case "progress":
        return (
          <ProgressLoader
            color={color}
            progress={progress}
            showPercentage={showPercentage}
            text={text}
            indeterminate={indeterminate}
          />
        )
      default:
        return <OrbitLoader size={size} color={color} />
    }
  }

  return (
    <LoadingContainer isLoading={isLoading} fullScreen={fullScreen} className={className}>
      <div className="flex flex-col items-center justify-center space-y-6">
        {renderLoader()}

        {text && type !== "progress" && <div className="text-slate-300 font-medium text-center">{text}</div>}

        {fullScreen && (
          <div className="text-xs text-slate-400 max-w-xs text-center mt-8 animate-pulse">{randomTip}</div>
        )}
      </div>
    </LoadingContainer>
  )
}
