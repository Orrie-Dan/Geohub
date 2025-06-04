"use client"

import { useState, useMemo, useCallback } from "react"
import { Search, ArrowLeft, ExternalLink, Grid, List, X, MapPin, Heart, Activity, Users, Stethoscope } from "lucide-react"
import Link from "next/link" 

// Health application data
const healthApps = [
  {
    id: 1,
    title: "Disease Outbreaks Reporting and Mapping Application",
    category: "Public Health",
    image: "/images/disease.jpg",
    description: "A comprehensive platform for reporting and mapping health facilities, hospitals, and clinics across Rwanda",
    keywords: ["disease", "outbreaks", "reporting", "mapping", "public health", "epidemiology"],
    link: "https://gh.space.gov.rw/portal/apps/dashboards/becaf96569284409af237aedb4fa5785",
  },
  {
    id: 2,
    title: "Health Emergency Management and Mapping Application", 
    category: "Public Health",
    image: "/images/health.jpg",
    description: "A tool for managing health emergencies and mapping disease outbreaks in real-time",
    keywords: ["health", "emergency", "management", "mapping", "disease outbreaks", "real-time"],
    link: "https://gh.space.gov.rw/portal/apps/experiencebuilder/experience/?id=26f19f93207640eeada7363b577481de",
  },
  
]

export default function HealthApps() {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [imageErrors, setImageErrors] = useState(new Set())

  const handleImageError = useCallback((appId: number) => {
    setImageErrors(prev => new Set(prev).add(appId))
  }, [])

  const searchApps = useCallback((query: string) => {
    if (!query.trim()) return healthApps

    const searchTerm = query.toLowerCase()
    
    return healthApps.filter(app => 
      app.title.toLowerCase().includes(searchTerm)
    )
  }, [])

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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-teal-950 to-cyan-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-400/20 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"></div>
          <div className="container relative z-10 px-4 mx-auto">
            <div className="flex items-center mb-8">
              <Link href="/">
              <button className="text-cyan-400 hover:text-cyan-300 mr-4 flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </button>
              </Link>
            </div>
            
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <Heart className="h-16 w-16 text-cyan-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 tracking-tight drop-shadow-lg mb-4">
                Health Applications
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto drop-shadow-sm">
                Comprehensive health information systems to improve healthcare delivery, 
                monitor public health, and support Rwanda's universal health coverage goals
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search health applications by name..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full pl-12 pr-10 py-4 text-lg bg-white/15 backdrop-blur-md border border-slate-600 rounded-lg text-white placeholder:text-slate-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 focus:outline-none"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-300 h-5 w-5" />
                  {searchQuery && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 rounded-lg flex items-center ${
                      viewMode === 'grid' 
                        ? "bg-cyan-600 hover:bg-cyan-700 text-white" 
                        : "border border-slate-600 text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    <Grid className="h-4 w-4 mr-2" />
                    Grid
                  </button>
                  
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 rounded-lg flex items-center ${
                      viewMode === 'list' 
                        ? "bg-cyan-600 hover:bg-cyan-700 text-white" 
                        : "border border-slate-600 text-slate-400 hover:bg-slate-800"
                    }`}
                  >
                    <List className="h-4 w-4 mr-2" />
                    List
                  </button>
                </div>
              </div>
            </div>

            {/* Search Results Info */}
            <div className="text-center text-slate-300 mb-8">
              <p>
                {searchQuery ? (
                  <>
                    Found <span className="text-cyan-400 font-semibold">{filteredApps.length}</span> applications
                    <span className="text-slate-400"> matching "{searchQuery}"</span>
                  </>
                ) : (
                  <>
                    Showing <span className="text-cyan-400 font-semibold">{filteredApps.length}</span> health applications
                  </>
                )}
              </p>
            </div>
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
                {filteredApps.map((app) => (
                  <div key={app.id}>
                    {viewMode === 'grid' ? (
                      // Grid View - Added h-full and flex flex-col for equal height
                      <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col">
                        {/* App Image */}
                        <div className="relative h-48 overflow-hidden flex-shrink-0">
                          {imageErrors.has(app.id) ? (
                            // Fallback when image fails to load
                            <div className="w-full h-full bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center">
                              <Activity className="h-16 w-16 text-cyan-400/60" />
                            </div>
                          ) : (
                            <img
                              src={app.image}
                              alt={app.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                              onError={() => handleImageError(app.id)}
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                          
                          {/* Category Badge */}
                          <div className="absolute top-3 right-3">
                            <span className="px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full backdrop-blur-sm">
                              {app.category}
                            </span>
                          </div>
                        </div>

                        {/* App Content - Added flex-1 to take remaining space */}
                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            {app.title}
                          </h3>
                          
                          <p className="text-slate-300 text-sm mb-4 line-clamp-3 flex-1">
                            {app.description}
                          </p>
                          
                          {/* Action Buttons - Added mt-auto to push to bottom */}
                          <div className="flex gap-2 mt-auto">
                            <a 
                              href={app.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center transition-colors"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Launch
                            </a>
                            
                          </div>
                        </div>
                      </div>
                    ) : (
                      // List View
                      <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="relative w-full md:w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                            {imageErrors.has(app.id) ? (
                              // Fallback when image fails to load
                              <div className="w-full h-full bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center">
                                <Stethoscope className="h-12 w-12 text-cyan-400/60" />
                              </div>
                            ) : (
                              <img
                                src={app.image}
                                alt={app.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                onError={() => handleImageError(app.id)}
                              />
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                {app.title}
                              </h3>
                              <span className="px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full backdrop-blur-sm ml-4">
                                {app.category}
                              </span>
                            </div>
                            
                            <p className="text-slate-300 text-sm mb-4">
                              {app.description}
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-slate-400">
                                <div className="flex items-center">
                                  <span className="text-yellow-400 mr-1">★</span>
                                  <span>Health Platform</span>
                                </div>
                              </div>
                              
                              <div className="flex gap-2">
                                <a 
                                  href={app.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center transition-colors"
                                >
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Launch
                                </a>
                                <button className="border border-slate-600 text-slate-300 hover:bg-slate-700 px-3 py-2 rounded-lg text-sm transition-colors">
                                  Learn More
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
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
                    <button 
                      onClick={clearSearch}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Show all applications
                    </button>
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
                <h3 className="text-white text-lg font-semibold mb-4">GeoHub Health</h3>
                <p className="text-sm">
                  A project of the Rwanda Space Agency providing health information systems for 
                  improved healthcare delivery and public health monitoring.
                </p>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/#" className="hover:text-sky-400">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/#about" className="hover:text-sky-400">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/#category" className="hover:text-sky-400">
                      Applications
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/category/agriculture" className="hover:text-sky-400">
                      Agriculture
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/infrastructure" className="hover:text-sky-400">
                      Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/health" className="hover:text-sky-400">
                      Health
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
                    <a href="mailto:info@space.gov.rw" className="hover:text-cyan-400">
                      info@space.gov.rw
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
              <p>© 2025 Rwanda Space Agency. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}