"use client"

import { useState, useMemo, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ArrowLeft, ExternalLink, Grid, List, X, MapPin, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ScrollProgress } from "@/components/scroll-progress"

// Finance & Trade application data
const financeTradeApps = [
  {
    id: 1,
    title: "Trade Centers and Markets Mapping and Profiling Application (V1)",
    category: " Trade",
    image: "/images/trade.jpg",
    description: "An interactive application for mapping and profiling trade centers and markets in Rwanda.",
    keywords: ["trade centers", "markets", "mapping", "profiling", "Rwanda", "business intelligence"],
    link: "https://esrirw.rw/portal/apps/dashboards/acac2c514da14351853dd5804c8d7c31"
  }
  
]

export default function FinanceTradeApps() {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'

  // Function to handle launching applications
  const handleLaunchApp = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [])

  // Simplified search function - only searches titles/names
  const searchApps = useCallback((query: string) => {
    if (!query.trim()) return financeTradeApps

    const searchTerm = query.toLowerCase()
    
    return financeTradeApps.filter(app => 
      app.title.toLowerCase().includes(searchTerm)
    )
  }, [])

  // Memoized filtered applications with title-only search
  const filteredApps = useMemo(() => {
    return searchApps(searchQuery)
  }, [searchQuery, searchApps])

  const clearSearch = useCallback(() => {
    setSearchQuery('')
  }, [])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }, [])

  return (
    <main className="flex min-h-screen flex-col relative">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/Earth.jpg"
          alt="Earth Background"
          fill
          priority
          className="object-cover object-center"
          style={{
            objectPosition: "center center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/70"></div>
      </div>

      <ScrollProgress />

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"></div>
          <div className="container relative z-10 px-4 mx-auto">
            <ScrollReveal>
              <div className="flex items-center mb-8">
                <Link href="/">
                  <Button variant="ghost" className="text-emerald-400 hover:text-emerald-300 mr-4">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Button>
                </Link>
              </div>
              
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-emerald-400 mr-4" />
                  <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-400 tracking-tight drop-shadow-lg">
                    Trade Applications
                  </h1>
                </div>
                <p className="text-xl text-slate-200 max-w-3xl mx-auto drop-shadow-sm">
                  Explore our collection of geospatial applications designed to enhance trade in Rwanda.
                  These tools provide valuable insights and data to support business growth and economic development.
                </p>
              </div>

              {/* Enhanced Search Bar */}
              <div className="max-w-4xl mx-auto mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Input
                      type="text"
                      placeholder="Search applications by name..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="pl-12 pr-10 py-4 text-lg bg-white/15 backdrop-blur-md border-slate-600 text-white placeholder:text-slate-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/50"
                    />
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-300 h-5 w-5" />
                    {searchQuery && (
                      <Button
                        onClick={clearSearch}
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  
                  {/* View Mode Toggle */}
                  <div className="flex gap-2">
                    <Button 
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      onClick={() => setViewMode('grid')}
                      className={viewMode === 'grid' 
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white" 
                        : "border-slate-600 text-slate-300 hover:bg-slate-800"
                      }
                    >
                      <Grid className="h-4 w-4 mr-2" />
                      Grid
                    </Button>
                    
                    <Button 
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      onClick={() => setViewMode('list')}
                      className={viewMode === 'list' 
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white" 
                        : "border-slate-600 text-slate-400 hover:bg-slate-800"
                      }
                    >
                      <List className="h-4 w-4 mr-2" />
                      List
                    </Button>
                  </div>
                </div>
              </div>

              {/* Search Results Info */}
              <div className="text-center text-slate-300 mb-8">
                <p>
                  {searchQuery ? (
                    <>
                      Found <span className="text-emerald-400 font-semibold">{filteredApps.length}</span> applications
                      <span className="text-slate-400"> matching "{searchQuery}"</span>
                    </>
                  ) : (
                    <>
                      Showing <span className="text-emerald-400 font-semibold">{filteredApps.length}</span>  trade application
                    </>
                  )}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Applications Grid/List */}
        <section className="relative py-12">
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>
          <div className="container relative z-10 px-4 mx-auto">
            {filteredApps.length > 0 ? (
              <div className={
                viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              }>
                {filteredApps.map((app, index) => (
                  <ScrollReveal key={app.id} delay={index * 50}>
                    {viewMode === 'grid' ? (
                      // Grid View
                      <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        {/* App Image */}
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={app.image}
                            alt={app.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                          
                          {/* Category Badge */}
                          <div className="absolute top-3 right-3">
                            <span className="px-2 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">
                              {app.category}
                            </span>
                          </div>
                        </div>

                        {/* App Content */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                            {app.title}
                          </h3>
                          
                          <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                            {app.description}
                          </p>

                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                              onClick={() => handleLaunchApp(app.link)}
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Launch
                            </Button>
                            
                          </div>
                        </div>
                      </div>
                    ) : (
                      // List View
                      <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="relative w-full md:w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                            <Image
                              src={app.image}
                              alt={app.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                                {app.title}
                              </h3>
                              <div className="flex gap-2">
                                <span className="px-2 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">
                                  {app.category}
                                </span>
                              </div>
                            </div>
                            
                            <p className="text-slate-300 text-sm mb-3">
                              {app.description}
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-slate-400">
                                <div className="flex items-center">
                                  <TrendingUp className="h-4 w-4 text-emerald-400 mr-1" />
                                  <span>Live Data</span>
                                </div>
                              </div>
                              
                              <div className="flex gap-2">
                                <Button 
                                  size="sm" 
                                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                                  onClick={() => handleLaunchApp(app.link)}
                                >
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Launch
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                                >
                                  Learn More
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              // No Results State
              <div className="text-center py-16">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-12 max-w-md mx-auto">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-white mb-2">No applications found</h3>
                  <p className="text-slate-400 mb-6">
                    We couldn't find any applications matching "{searchQuery}".
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-slate-500">Try different keywords or:</p>
                    <Button 
                      onClick={clearSearch}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white"
                      size="sm"
                    >
                      Show all applications
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-slate-950/95 text-slate-400 py-12">
          <div className="container relative z-10 px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">GeoHub</h3>
                <p className="text-sm">
                  A project of the Rwanda Space Agency providing geospatial applications for national
                  development.
                </p>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Applications
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Finance & Trade
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Agriculture
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-emerald-400">
                      View All
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" /> Kigali, Rwanda
                  </li>
                  <li>
                    <Link href="mailto:info@space.gov.rw" className="hover:text-emerald-400">
                      info@space.gov.rw
                    </Link>
                  </li>
                </ul>
                <div className="mt-4 flex space-x-4">
                  <Link href="#" className="text-slate-400 hover:text-emerald-400">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-slate-400 hover:text-emerald-400">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
              <p>© {new Date().getFullYear()} Rwanda Space Agency. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}