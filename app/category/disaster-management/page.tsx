"use client"

import { useState, useMemo, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ArrowLeft, ExternalLink, Grid, List, X, MapPin, Shield } from "lucide-react"

// Disaster management application data
const disasterApps = [
  {
    id: 1,
    title: "Landslides Profile Mapping Application",
    category: "Monitoring and Alerts",
    image: "/images/landslide.jpg",
    description: "Real-time monitoring and alert system for landslides in Rwanda, providing early warnings and risk assessments",
    keywords: ["landslides", "monitoring", "alerts", "real-time", "risk assessment", "early warning"],
    Link: "https://gh.space.gov.rw/portal/home/item.html?id=89f13f64a695414bbe6be1f48570f4bb"
  },
  {
    id: 2,
    title: "Storms Profile Mapping Application",
    category: "Emergency Response Coordination", 
    image: "/images/storm.jpg",
    description: "Comprehensive storm response coordination platform for emergency teams, resources, and communication",
    keywords: ["storms", "emergency", "response", "coordination", "platform", "communication"],
    Link: "https://gh.space.gov.rw/portal/apps/dashboards/e89c802794114d7d97e4731351de612c"
  },
  {
    id: 3,
    title: "Floods Profile Mapping Application",
    category: "Flood Risk Analysis",
    image: "/images/flood.jpg",
    description: "Satellite-based flood risk mapping and vulnerability assessment tool for disaster management",
    keywords: ["flood", "mapping", "risk", "satellite", "topography", "vulnerability"],
    Link: "https://gh.space.gov.rw/portal/apps/dashboards/902b4a62d0f4420ab66be44e5ad8d40c"
  },
  {
    id: 4,
    title: "Earthquakes Profile Mapping Application",
    category: "Crisis Management",
    image: "/images/earthquake.jpg",
    description: "Platform for earthquake evacuation route planning, shelter identification, and emergency response optimization",
    keywords: ["earthquakes", "evacuation", "shelter", "planning", "crisis", "management", "response"],
    Link: "https://gh.space.gov.rw/portal/apps/dashboards/cd5411087b9b46b4ac356ae29fe6f3bf"
  },
  {
    id: 5,
    title: "Emergency Response Operations Mapping Application",
    category: "Emergency Operations",
    image: "/images/emergency.jpg",
    description: "Emergency response operations mapping tool for resource allocation, and recovery planning",
    keywords: ["emergency", "response", "operations", "mapping", "resource allocation", "recovery planning"],
    Link: "https://esrirw.rw/portal/apps/dashboards/3c38a17377bb4009950a3817bf20988d"
  },
  {
    id: 6,
    title: "Citizens Emergency Reporting Application",
    category: "Reporting and Alerts",
    image: "/images/reporting.jpg",
    description: "Community-based emergency reporting application for citizens to report incidents, hazards, and emergencies",
    keywords: ["citizens", "emergency", "reporting", "application", "community", "hazards", "incidents"],
    Link: "https://gh.space.gov.rw/portal/apps/dashboards/54565775943645309ffdd5aee7b76f60"
  }
  
]

export default function DisasterManagement() {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid')

  const searchApps = useCallback((query: string) => {
    if (!query.trim()) return disasterApps

    const searchTerm = query.toLowerCase()
    
    return disasterApps.filter(app => 
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

  const handleLaunchApp = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
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

      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-900 z-50">
        <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300 ease-out" style={{width: '0%'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"></div>
          <div className="container relative z-10 px-4 mx-auto">
            <div className="flex items-center mb-8">
              <Link href="/">
                <button className="flex items-center text-red-400 hover:text-red-300 transition-colors mr-4 p-2 rounded-lg hover:bg-slate-800/50">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </button>
              </Link>
            </div>
            
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-red-500/20 rounded-full border border-red-500/30">
                  <Shield className="h-12 w-12 text-red-400" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400 tracking-tight drop-shadow-lg mb-4">
                Disaster Management Applications
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto drop-shadow-sm">
                Comprehensive disaster preparedness, response, and recovery solutions to protect communities 
                and build resilience across Rwanda through advanced technology and real-time monitoring
              </p>
            </div>

            {/* Enhanced Search Bar */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search applications by name..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full pl-12 pr-10 py-4 text-lg bg-white/15 backdrop-blur-md border border-slate-600 text-white placeholder:text-slate-300 focus:border-red-400 focus:ring-2 focus:ring-red-400/50 rounded-xl transition-all"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-300 h-5 w-5" />
                  {searchQuery && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1 rounded-full hover:bg-slate-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                
                {/* View Mode Toggle */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                      viewMode === 'grid' 
                        ? "bg-red-600 hover:bg-red-700 text-white shadow-lg" 
                        : "border border-slate-600 text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    <Grid className="h-4 w-4 mr-2" />
                    Grid
                  </button>
                  
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                      viewMode === 'list' 
                        ? "bg-red-600 hover:bg-red-700 text-white shadow-lg" 
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
                    Found <span className="text-red-400 font-semibold">{filteredApps.length}</span> applications
                    <span className="text-slate-400"> matching "{searchQuery}"</span>
                  </>
                ) : (
                  <>
                    Showing <span className="text-red-400 font-semibold">{filteredApps.length}</span> disaster management applications
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
                {filteredApps.map((app, index) => (
                  <div key={app.id} className={`transition-all duration-300 ${index * 50 < 1000 ? 'animate-fade-in' : ''}`} style={{animationDelay: `${index * 50}ms`}}>
                    {viewMode === 'grid' ? (
                      // Grid View
                      <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        {/* App Image */}
                        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-red-900/20 via-slate-900 to-orange-900/20">
                          <Image
                            src={app.image}
                            alt={app.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            onError={(e) => {
                              // Fallback to gradient background if image fails to load
                              e.currentTarget.style.display = 'none'
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

                          {/* Category Badge */}
                          <div className="absolute top-3 right-3">
                            <span className="px-2 py-1 text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30 rounded-full backdrop-blur-sm">
                              {app.category}
                            </span>
                          </div>
                        </div>

                        {/* App Content */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                            {app.title}
                          </h3>
                          
                          <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                            {app.description}
                          </p>

                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            <button 
                              onClick={() => handleLaunchApp(app.Link)}
                              className="flex-1 flex items-center justify-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm font-medium"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Launch
                            </button>
                            
                          </div>
                        </div>
                      </div>
                    ) : (
                      // List View
                      <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="relative w-full md:w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-red-900/20 via-slate-900 to-orange-900/20">
                            <Image
                              src={app.image}
                              alt={app.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                              onError={(e) => {
                                // Fallback to gradient background if image fails to load
                                e.currentTarget.style.display = 'none'
                              }}
                            />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                                {app.title}
                              </h3>
                              <div className="flex gap-2">
                                <span className="px-2 py-1 text-xs font-medium bg-red-500/20 text-red-400 border border-red-500/30 rounded-full backdrop-blur-sm">
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
                                  <span className="text-yellow-400 mr-1">★</span>
                                  <span>Featured</span>
                                </div>
                              </div>
                              
                              <div className="flex gap-2">
                                <button 
                                  onClick={() => handleLaunchApp(app.Link)}
                                  className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm font-medium"
                                >
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Launch
                                </button>
                                <button className="px-4 py-2 border border-slate-600 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors text-sm">
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
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors text-sm font-medium"
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
                    <Link href="#" className="hover:text-red-400">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-red-400">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-red-400">
                      Applications
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-red-400">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:text-red-400">
                      Agriculture
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-red-400">
                      Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-red-400">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-red-400">
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
                    <a href="mailto:info@space.gov.rw" className="hover:text-red-400">
                      info@space.gov.rw
                    </a>
                  </li>
                </ul>
                <div className="mt-4 flex space-x-4">
                  <Link href="#" className="text-slate-400 hover:text-red-400">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-slate-400 hover:text-red-400">
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

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  )
}