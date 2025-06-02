"use client"

import { useState, useMemo, useCallback } from "react"
import { Search, ArrowLeft, ExternalLink, Grid, List, X, MapPin, Star, Users, BookOpen, GraduationCap, Brain, Link } from "lucide-react"


// Education application data
const educationApps = [
  {
    id: 1,
    title: "Schools Distribution and Profiling Mapping Application",
    category: "Mapping",
    image: "/images/school.jpg",
    description: "Comprehensive digital learning platform aligned with Rwanda's national curriculum, featuring interactive lessons and progress tracking for primary and secondary students",
    keywords: ["k12", "curriculum", "primary", "secondary", "learning", "education", "rwanda"],
    link: "https://gh.space.gov.rw/portal/home/item.html?id=dbdfdfc8d9864a5da4669e1387754b95" 
  }
]

export default function EducationApps() {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'

  // Handle back to home navigation
  const handleBackToHome = useCallback(() => {
    // For demo purposes, this could navigate back or go to a home page
    // In a real app, you might use router.back() or navigate to '/'
    window.history.back()
  }, [])

  // Handle opening external links
  const handleOpenLink = useCallback((url: string) => {
    if (url) { 
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }, [])

  // Simplified search function - only searches titles/names
  const searchApps = useCallback((query: string) => {
    if (!query.trim()) return educationApps

    const searchTerm = query.toLowerCase()
    
    return educationApps.filter(app => 
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
    <main className="flex min-h-screen flex-col relative bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-indigo-900/20 via-slate-900 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/70"></div>
      </div>
            
      {/* Content */}
      <div className="relative z-10">
        {/* Header Section */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"></div>
          <div className="container relative z-10 px-4 mx-auto">
            <div className="flex items-center mb-8">
              <button 
                onClick={handleBackToHome}
                className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors duration-200 group"
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
                Back to Home
              </button>
            </div>
            
            <div className="text-center mb-12 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-400 tracking-tight drop-shadow-lg">
                Education Applications
              </h1>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto drop-shadow-sm">
                Empowering Rwanda's future through innovative digital education solutions, 
                from early childhood to lifelong learning opportunities
              </p>
            </div>

            {/* Enhanced Search Bar */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search education applications by name..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full pl-12 pr-10 py-4 text-lg bg-white/15 backdrop-blur-md border border-slate-600 rounded-lg text-white placeholder:text-slate-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/50 focus:outline-none"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-300 h-5 w-5" />
                  {searchQuery && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-200 p-1 rounded"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                
                {/* View Mode Toggle */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      viewMode === 'grid' 
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white" 
                        : "border border-slate-600 text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    <Grid className="h-4 w-4" />
                    Grid
                  </button>
                  
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      viewMode === 'list' 
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white" 
                        : "border border-slate-600 text-slate-400 hover:bg-slate-800"
                    }`}
                  >
                    <List className="h-4 w-4" />
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
                    Found <span className="text-indigo-400 font-semibold">{filteredApps.length}</span> applications
                    <span className="text-slate-400"> matching "{searchQuery}"</span>
                  </>
                ) : (
                  <>
                    Showing <span className="text-indigo-400 font-semibold">{filteredApps.length}</span> education applications
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
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr"
                  : "space-y-4"
              }>
                {filteredApps.map((app, index) => (
                  <div key={app.id} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                    {viewMode === 'grid' ? (
                      // Grid View - Now with flex layout for equal heights
                      <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full">
                        {/* App Image */}
                        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center flex-shrink-0">
                          {app.image ? (
                            <img
                              src={app.image}
                              alt={app.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                                ((e.target as HTMLImageElement).nextElementSibling as HTMLElement)!.style.display = 'flex';
                              }}
                            />
                          ) : null}
                          <div className="flex items-center justify-center w-full h-full" style={{display: app.image ? 'none' : 'flex'}}>
                            <div className="text-center">
                              <BookOpen className="h-16 w-16 text-indigo-400/60 mx-auto mb-2" />
                              <GraduationCap className="h-8 w-8 text-purple-400/40 mx-auto" />
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

                          {/* Category Badge */}
                          <div className="absolute top-3 right-3">
                            <span className="px-2 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 rounded-full">
                              {app.category}
                            </span>
                          </div>
                        </div>

                        {/* App Content - Flex grow to fill remaining space */}
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                            {app.title}
                          </h3>
                          
                          <p className="text-slate-300 text-sm mb-4 flex-grow overflow-hidden">
                            {app.description}
                          </p>

                          {/* Action Buttons - Always at bottom */}
                          <div className="flex gap-2 mt-auto">
                            <button 
                              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-lg transition-colors"
                              onClick={() => handleOpenLink(app.link)}
                            >
                              <ExternalLink className="h-4 w-4" />
                              Launch
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // List View
                      <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="relative w-full md:w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center">
                            {app.image ? (
                              <img
                                src={app.image}
                                alt={app.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display = 'none';
                                  ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display = 'flex';
                                }}
                              />
                            ) : null}
                            <div className="flex items-center justify-center" style={{display: app.image ? 'none' : 'flex'}}>
                              <BookOpen className="h-12 w-12 text-indigo-400/60" />
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                                {app.title}
                              </h3>
                              <div className="flex gap-2">
                                <span className="px-2 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 rounded-full">
                                  {app.category}
                                </span>
                              </div>
                            </div>
                            
                            <p className="text-slate-300 text-sm mb-3">
                              {app.description}
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex gap-2">
                                <button 
                                  className="flex items-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-lg transition-colors"
                                  onClick={() => handleOpenLink(app.link)}
                                >
                                  <ExternalLink className="h-4 w-4" />
                                  Launch
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
                  <div className="text-6xl mb-4">🎓</div>
                  <h3 className="text-xl font-bold text-white mb-2">No applications found</h3>
                  <p className="text-slate-400 mb-6">
                    We couldn't find any applications matching "{searchQuery}".
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-slate-500">Try different keywords or:</p>
                    <button 
                      onClick={clearSearch}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-lg transition-colors"
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
                <h3 className="text-white text-lg font-semibold mb-4">GeoHub Education</h3>
                <p className="text-sm">
                  A project of the Rwanda Space Agency providing digital education solutions to empower
                  learners and educators across Rwanda with innovative technology.
                </p>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button 
                      onClick={handleBackToHome}
                      className="hover:text-indigo-400 transition-colors text-left"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-400 transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-400 transition-colors">
                      Applications
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-400 transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Education Categories</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-indigo-400 transition-colors">
                      K-12 Education
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-400 transition-colors">
                      Higher Education
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-400 transition-colors">
                      Vocational Training
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-indigo-400 transition-colors">
                      View All
                    </a>
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
                    <a href="mailto:education@space.gov.rw" className="hover:text-indigo-400 transition-colors">
                      info@space.gov.rw
                    </a>
                  </li>
                </ul>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
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
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
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