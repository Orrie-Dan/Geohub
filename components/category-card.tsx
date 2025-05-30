"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  TreesIcon as Plant,
  Building2,
  Globe,
  AlertTriangle,
  Activity,
  BookOpen,
  MapPin,
  Landmark,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface CategoryCardProps {
  title: string
  icon: string
  description: string
  color: string
  applications?: number
  image?: string
  path?: string
}

export default function CategoryCard({
  title,
  icon,
  description,
  color,
  applications = Math.floor(Math.random() * 20) + 5,
  image,
  path, // Use the provided path if available
}: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Function to create URL-friendly slugs
  const createSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^\w-]+/g, '') // Remove special characters
      .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
      .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
  }

  const getIcon = (): LucideIcon => {
    switch (icon) {
      case "plant":
        return Plant
      case "building-2":
        return Building2
      case "globe":
        return Globe
      case "alert-triangle":
        return AlertTriangle
      case "activity":
        return Activity
      case "book-open":
        return BookOpen
      case "map-pin":
        return MapPin
      case "landmark":
        return Landmark
      default:
        return Globe
    }
  }

  const getColorClasses = () => {
    const colorMap: Record<string, { bg: string; text: string; hover: string; border: string; gradient: string }> = {
      green: {
        bg: "bg-green-500/10",
        text: "text-green-500",
        hover: "group-hover:bg-green-500/20",
        border: "border-green-500/20",
        gradient: "from-green-500/80 to-green-600/80",
      },
      blue: {
        bg: "bg-blue-500/10",
        text: "text-blue-500",
        hover: "group-hover:bg-blue-500/20",
        border: "border-blue-500/20",
        gradient: "from-blue-500/80 to-blue-600/80",
      },
      teal: {
        bg: "bg-teal-500/10",
        text: "text-teal-500",
        hover: "group-hover:bg-teal-500/20",
        border: "border-teal-500/20",
        gradient: "from-teal-500/80 to-teal-600/80",
      },
      red: {
        bg: "bg-red-500/10",
        text: "text-red-500",
        hover: "group-hover:bg-red-500/20",
        border: "border-red-500/20",
        gradient: "from-red-500/80 to-red-600/80",
      },
      pink: {
        bg: "bg-pink-500/10",
        text: "text-pink-500",
        hover: "group-hover:bg-pink-500/20",
        border: "border-pink-500/20",
        gradient: "from-pink-500/80 to-pink-600/80",
      },
      indigo: {
        bg: "bg-indigo-500/10",
        text: "text-indigo-500",
        hover: "group-hover:bg-indigo-500/20",
        border: "border-indigo-500/20",
        gradient: "from-indigo-500/80 to-indigo-600/80",
      },
      amber: {
        bg: "bg-amber-500/10",
        text: "text-amber-500",
        hover: "group-hover:bg-amber-500/20",
        border: "border-amber-500/20",
        gradient: "from-amber-500/80 to-amber-600/80",
      },
      purple: {
        bg: "bg-purple-500/10",
        text: "text-purple-500",
        hover: "group-hover:bg-purple-500/20",
        border: "border-purple-500/20",
        gradient: "from-purple-500/80 to-purple-600/80",
      },
      sky: {
        bg: "bg-sky-500/10",
        text: "text-sky-500",
        hover: "group-hover:bg-sky-500/20",
        border: "border-sky-500/20",
        gradient: "from-sky-500/80 to-sky-600/80",
      },
    }

    return colorMap[color] || colorMap.blue
  }

  const { bg, text, hover, border, gradient } = getColorClasses()
  const Icon = getIcon()

  // Use provided path or generate slug-based URL
  const href = path ? `/${path.replace('app/', '').replace('/page.tsx', '')}` : `/category/${createSlug(title)}`

  return (
    <Link href={href}>
      <div
        className={cn(
          "group relative h-full rounded-xl border backdrop-blur-sm transition-all duration-500",
          "bg-slate-900/40 border-slate-700/50",
          isHovered ? "translate-y-[-5px] shadow-lg shadow-slate-900/50" : "shadow-md",
          "overflow-hidden",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 transition-opacity duration-500"
          style={{ opacity: isHovered ? 0.8 : 0.15 }}
        >
          <Image
            src={image || "/placeholder.svg?height=400&width=600"}
            alt={title}
            fill
            className={cn("object-cover transition-transform duration-700", isHovered ? "scale-110" : "scale-100")}
          />
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
              gradient,
              isHovered ? "opacity-60" : "opacity-0",
            )}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          <div
            className={cn(
              "p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 transition-transform duration-500",
              bg,
              isHovered ? "scale-110" : "scale-100",
            )}
          >
            <Icon className={cn("h-7 w-7", text)} />
          </div>

          <h3
            className={cn(
              "text-xl font-semibold mb-2 transition-all duration-500",
              isHovered ? "text-white" : "text-white",
            )}
          >
            {title}
          </h3>

          <p className={cn("mb-4 transition-all duration-500", isHovered ? "text-white" : "text-slate-300")}>
            {description}
          </p>

          <div className="flex justify-between items-center">
            <span className={cn("text-sm transition-all duration-500", isHovered ? "text-white" : "text-slate-400")}>
              {applications} applications
            </span>
            <div
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500",
                isHovered ? `bg-white ${text}` : "text-white",
              )}
            >
              <ArrowRight className={cn("h-5 w-5 transition-all duration-500", isHovered ? "translate-x-0.5" : "")} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}