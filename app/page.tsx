import Link from "next/link"
import Image from "next/image"
import { Search, ChevronRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import CategorySection from "@/components/category-section"
import HeroAnimation from "@/components/hero-animation"
import FeaturedApp from "@/components/featured-app"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ScrollProgress } from "@/components/scroll-progress"
import ScrollDownButton from "@/components/ScrollDownButton"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      {/* Fixed Background - Moon Landing */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/2.jpg"
          alt="Rocket Launch"
          fill
          priority
          className="object-cover object-center"
          style={{
            objectPosition: "center center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/60"></div>
        <HeroAnimation />
      </div>

      <ScrollProgress />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          <div className="container relative z-10 px-4 py-16 mx-auto text-center">
            <ScrollReveal>
              <div className="space-y-6 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-400 tracking-tight drop-shadow-lg">
                  WELCOME TO{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                    GEOHUB
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-white drop-shadow-md">Powered by the Rwanda Space Agency</p>
                <p className="text-lg text-slate-200 max-w-2xl mx-auto drop-shadow-sm">
                  Your central platform for geospatial applications and data across all sectors in Rwanda
                </p>

                <div className="relative max-w-2xl mx-auto mt-8">
                  <Input
                    type="text"
                    placeholder="Search for applications..."
                    className="pl-12 py-6 text-lg bg-white/15 backdrop-blur-md border-slate-600 text-white placeholder:text-slate-300"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-300" />
                  <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-sky-600 hover:bg-sky-700">
                    Search
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
        
        {/* Scroll Down Button */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <ScrollDownButton />
          </div>
        </section>
        {/* About Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-sm"></div>
          <div className="container relative z-10 px-4 mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">About the GeoHub</h2>
                <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
                  GeoHub is Rwanda's premier platform for geospatial information and applications. Discover, analyze,
                  and utilize spatial data to drive innovation and development across all sectors.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Enhanced Category Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm"></div>
          <CategorySection />
        </section>

        {/* Featured Applications */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-sm"></div>
          <div className="container relative z-10 px-4 mx-auto">
            <ScrollReveal>
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-bold text-white">Featured Applications</h2>
                <Button variant="ghost" className="text-sky-400 hover:text-sky-300">
                   <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollReveal delay={100}>
                <FeaturedApp
                  title="Agriculture Land Mapping Application"
                  category="Agriculture"
                  image="/images/agriculture.jpeg"
                  description="Map and analyze agricultural land use patterns across Rwanda"
                />
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <FeaturedApp
                  title="Flood Risk Assessment"
                  category="Disaster Management"
                  image="/images/flood-risk.jpeg"
                  description="Identify areas at risk of flooding based on topography and rainfall data"
                />
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <FeaturedApp
                  title="Urban Planning Simulator"
                  category="Infrastructure"
                  image="/images/urban-planning.jpeg"
                  description="Simulate urban development scenarios and their impact"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm"></div>
          <div className="container relative z-10 px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ScrollReveal delay={100}>
                <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700/50">
                  <div className="text-4xl font-bold text-sky-400 mb-2">50+</div>
                  <div className="text-slate-300">Applications</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700/50">
                  <div className="text-4xl font-bold text-sky-400 mb-2">8</div>
                  <div className="text-slate-300">Sectors Covered</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700/50">
                  <div className="text-4xl font-bold text-sky-400 mb-2">1000+</div>
                  <div className="text-slate-300">Daily Users</div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <div className="text-center p-6 bg-slate-800/50 rounded-lg backdrop-blur-sm border border-slate-700/50">
                  <div className="text-4xl font-bold text-sky-400 mb-2">30+</div>
                  <div className="text-slate-300">Data Partners</div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"></div>
          <div className="container relative z-10 px-4 mx-auto text-center">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Explore GeoHub?</h2>
                <p className="text-lg text-slate-300 mb-8">
                  Discover the power of geospatial applications for Rwanda's development
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  
                </div>
              </div>
            </ScrollReveal>
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
                    <Link href="#" className="hover:text-sky-400">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-sky-400">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-sky-400">
                      Applications
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-sky-400">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:text-sky-400">
                      Agriculture
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-sky-400">
                      Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-sky-400">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-sky-400">
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
                    <Link href="mailto:info@space.gov.rw" className="hover:text-sky-400">
                      info@space.gov.rw
                    </Link>
                  </li>
                </ul>
                <div className="mt-4 flex space-x-4">
                  <Link href="#" className="text-slate-400 hover:text-sky-400">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-slate-400 hover:text-sky-400">
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
