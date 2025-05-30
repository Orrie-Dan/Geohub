"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface FeaturedAppProps {
  title: string
  category: string
  image: string
  description: string
}

export default function FeaturedApp({ title, category, image, description }: FeaturedAppProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative overflow-hidden rounded-xl bg-slate-800/50 border border-slate-700 transition-all duration-300 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: isHovered ? "0 10px 25px -5px rgba(0, 0, 0, 0.3)" : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
        <div className="absolute top-0 left-0 m-3">
          <Badge className="bg-sky-600 hover:bg-sky-700">{category}</Badge>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-slate-300 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Button variant="ghost" className="text-sky-400 hover:text-sky-300 p-0 h-auto">
            Learn more
          </Button>
          <Button size="sm" className="bg-sky-600 hover:bg-sky-700">
            <ExternalLink className="h-4 w-4 mr-2" /> Launch
          </Button>
        </div>
      </div>
    </div>
  )
}
