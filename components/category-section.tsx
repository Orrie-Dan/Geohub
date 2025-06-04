"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import CategoryCard from "@/components/category-card"
import { ScrollReveal } from "@/components/scroll-reveal"


// Category data

const categories = [
  {
    title: "Agriculture",
    icon: "plant",
    description: "Crop monitoring, soil analysis, and agricultural planning tools",
    color: "green",
    applications: 4,
    image: "/images/agriculture.jpeg",
    
  },
  {
    title: "Infrastructure",
    icon: "building-2",
    description: "Urban planning, construction, and infrastructure management",
    color: "blue",
    applications:4,
    image: "/images/urban-planning.jpeg",
  },
  {
    title: "Environment",
    icon: "globe",
    description: "Climate data, conservation, and environmental monitoring",
    color: "teal",
    applications: 4,
    image: "/images/environment-alt.jpeg",
  },
  {
    title: "Disaster Management",
    icon: "shield",
    description: "Early warning systems and disaster response planning",
    color: "red",
    applications: 6 ,
    image: "/images/flood-risk.jpeg",
    path: "app/category/disaster-management/page.tsx",
  },
  {
    title: "Health",
    icon: "activity",
    description: "Healthcare facility mapping and epidemic tracking",
    color: "pink",
    applications: 2,
    image: "/images/health.jpeg",
  },
  {
    title: "Education",
    icon: "book-open",
    description: "School mapping and educational resource distribution",
    color: "indigo",
    applications: 1,
    image: "/images/library.jpeg",
  },
  {
    title: "Land ",
    icon: "map-pin",
    description: "Land use planning and resource management",
    color: "amber",
    applications: 1,
    image: "/images/lnd.jpg",
  },
  {
    title: "Mining",
    icon: "hard-hat",
    description: "Mineral resource mapping and mining operations",
    color: "gray",
    applications: 1,
    image: "/images/mining.jpg",
  },
  {
    title: "Local Government",
    icon: "landmark",
    description: "Administrative boundaries and public service mapping",
    color: "purple",
    applications: 1,
    image: "/images/education.jpeg",
    path: "app/category/local-government/page.tsx",
  },
  {
    title: "Population",
    icon: "users",
    description: "Demographic data and population distribution analysis",
    color: "orange",
    applications: 1,
    image: "/images/population.jpg",
  },
  {
    title: "Finance ",
    icon: "dollar-sign",
    description: "Financial services mapping",
    color: "yellow",
    applications: 1,
    image: "/images/finance.jpg",
  },
  {
    title: "Trade",
    icon: "shipping-fast",
    description: "Market analysis and trade routes mapping",
    color: "yellow",
    applications: 1,
    image: "/images/trade.jpg",
  
  }

]

export default function CategorySection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  const [animatedCategories, setAnimatedCategories] = useState<string[]>([])

  // Animate categories one by one for initial load effect
  useEffect(() => {
    const timer = setTimeout(() => {
      categories.forEach((category, index) => {
        setTimeout(() => {
          setAnimatedCategories((prev) => [...prev, category.title])
        }, index * 150)
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const sortedCategories = [...filteredCategories].sort((a, b) => {
    if (activeFilter === "name") {
      return a.title.localeCompare(b.title)
    } else if (activeFilter === "popular") {
      return b.applications - a.applications
    }
    return 0
  })

  return (
    <div className="container relative z-10 px-4 mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Categories</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Discover geospatial applications across various sectors to support Rwanda's development goals
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mt-8">
            <div className="relative flex-grow">
              <Input
                type="text"
                placeholder="Search categories..."
                className="pl-12 py-6 text-lg bg-slate-800/50 backdrop-blur-md border-slate-700 text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
            </div>
            <div className="flex gap-2">
              <Button
                variant={activeFilter === "all" ? "default" : "outline"}
                onClick={() => setActiveFilter("all")}
                className={activeFilter === "all" ? "bg-sky-600 hover:bg-sky-700" : "border-slate-700 text-slate-300"}
              >
                All
              </Button>
              <Button
                variant={activeFilter === "name" ? "default" : "outline"}
                onClick={() => setActiveFilter("name")}
                className={activeFilter === "name" ? "bg-sky-600 hover:bg-sky-700" : "border-slate-700 text-slate-300"}
              >
                A-Z
              </Button>
              <Button
                variant={activeFilter === "popular" ? "default" : "outline"}
                onClick={() => setActiveFilter("popular")}
                className={
                  activeFilter === "popular" ? "bg-sky-600 hover:bg-sky-700" : "border-slate-700 text-slate-300"
                }
              >
                Popular
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {sortedCategories.length > 0 ? (
          sortedCategories.map((category, index) => (
            <div
              key={category.title}
              className={`transition-all duration-700 transform ${
                animatedCategories.includes(category.title) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CategoryCard
                title={category.title}
                icon={category.icon}
                description={category.description}
                color={category.color}
                applications={category.applications}
                image={category.image}
                path={category.path}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-xl text-slate-400">No categories found matching "{searchTerm}"</p>
            <Button variant="link" className="text-sky-400 mt-2" onClick={() => setSearchTerm("")}>
              Clear search
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
