"use client"

import { useState } from "react"
import { SpaceLoader, type LoaderType } from "@/components/loading/space-loader"
import { Button } from "@/components/ui/button"
import { TabsList, TabsTrigger,Tabs } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LoadingDemo() {
  const [loaderType, setLoaderType] = useState<LoaderType>("orbit")
  const [color, setColor] = useState<"blue" | "cyan" | "white">("blue")
  const [size, setSize] = useState<"sm" | "md" | "lg">("md")
  const [progress, setProgress] = useState(50)
  const [showPercentage, setShowPercentage] = useState(true)
  const [indeterminate, setIndeterminate] = useState(false)
  const [text, setText] = useState("Loading data...")
  const [isFullScreenActive, setIsFullScreenActive] = useState(false)

  const handleProgressChange = (value: number[]) => {
    setProgress(value[0])
  }

  const toggleFullScreen = () => {
    setIsFullScreenActive(!isFullScreenActive)

    // Auto-disable after 5 seconds
    if (!isFullScreenActive) {
      setTimeout(() => {
        setIsFullScreenActive(false)
      }, 5000)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="flex items-center text-sky-400 hover:text-sky-300 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold mb-2">Space-Themed Loading Animations</h1>
          <p className="text-slate-400">Custom loading animations for the GeoHub platform with a space theme.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
              <h2 className="text-xl font-semibold mb-4">Loader Settings</h2>

              <div className="space-y-4">
                <div>
                  <Label className="mb-2 block">Loader Type</Label>
                  <Tabs value={loaderType} className="w-full">
                  <TabsList className="w-full bg-slate-800">
                    <TabsTrigger
                      value="orbit"
                      className={loaderType === "orbit" ? "bg-sky-900" : ""}
                      onClick={() => setLoaderType("orbit")}
                    >
                      Orbit
                    </TabsTrigger>
                    <TabsTrigger
                      value="rocket"
                      className={loaderType === "rocket" ? "bg-sky-900" : ""}
                      onClick={() => setLoaderType("rocket")}
                    >
                      Rocket
                    </TabsTrigger>
                    <TabsTrigger
                      value="satellite"
                      className={loaderType === "satellite" ? "bg-sky-900" : ""}
                      onClick={() => setLoaderType("satellite")}
                    >
                      Satellite
                    </TabsTrigger>
                    <TabsTrigger
                      value="astronaut"
                      className={loaderType === "astronaut" ? "bg-sky-900" : ""}
                      onClick={() => setLoaderType("astronaut")}
                    >
                      Astronaut
                    </TabsTrigger>
                    <TabsTrigger
                      value="progress"
                      className={loaderType === "progress" ? "bg-sky-900" : ""}
                      onClick={() => setLoaderType("progress")}
                    >
                      Progress
                    </TabsTrigger>
                  </TabsList>
                  </Tabs>
                </div>

                <div>
                  <Label className="mb-2 block">Color</Label>
                  <Tabs value={color} className="w-full">
                  <TabsList className="w-full bg-slate-800">
                    <TabsTrigger
                      value="blue"
                      className={color === "blue" ? "bg-sky-900" : ""}
                      onClick={() => setColor("blue")}
                    >
                      Blue
                    </TabsTrigger>
                    <TabsTrigger
                      value="cyan"
                      className={color === "cyan" ? "bg-sky-900" : ""}
                      onClick={() => setColor("cyan")}
                    >
                      Cyan
                    </TabsTrigger>
                    <TabsTrigger
                      value="white"
                      className={color === "white" ? "bg-sky-900" : ""}
                      onClick={() => setColor("white")}
                    >
                      White
                    </TabsTrigger>
                  </TabsList>
                  </Tabs>
                </div>

                <div>
                  <Label className="mb-2 block">Size</Label>
                  <Tabs value={size} className="w-full">
                  <TabsList className="w-full bg-slate-800">
                    <TabsTrigger value="sm" className={size === "sm" ? "bg-sky-900" : ""} onClick={() => setSize("sm")}>
                      Small
                    </TabsTrigger>
                    <TabsTrigger value="md" className={size === "md" ? "bg-sky-900" : ""} onClick={() => setSize("md")}>
                      Medium
                    </TabsTrigger>
                    <TabsTrigger value="lg" className={size === "lg" ? "bg-sky-900" : ""} onClick={() => setSize("lg")}>
                      Large
                    </TabsTrigger>
                  </TabsList>
                  </Tabs>
                </div>

                {loaderType === "progress" && (
                  <>
                    <div>
                      <Label className="mb-2 block">Progress ({progress}%)</Label>
                      <Slider
                        value={[progress]}
                        min={0}
                        max={100}
                        step={1}
                        onValueChange={handleProgressChange}
                        disabled={indeterminate}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="show-percentage" checked={showPercentage} onCheckedChange={setShowPercentage} />
                      <Label htmlFor="show-percentage">Show Percentage</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="indeterminate" checked={indeterminate} onCheckedChange={setIndeterminate} />
                      <Label htmlFor="indeterminate">Indeterminate</Label>
                    </div>
                  </>
                )}

                <div>
                  <Label htmlFor="loader-text" className="mb-2 block">
                    Loading Text
                  </Label>
                  <input
                    id="loader-text"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-md px-3 py-2 text-white"
                  />
                </div>

                <Button onClick={toggleFullScreen} className="w-full bg-sky-600 hover:bg-sky-700">
                  {isFullScreenActive ? "Close Fullscreen (auto-closes in 5s)" : "Show Fullscreen"}
                </Button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 h-full flex items-center justify-center">
              <SpaceLoader
                type={loaderType}
                color={color}
                size={size}
                text={text}
                progress={progress}
                showPercentage={showPercentage}
                indeterminate={indeterminate}
                fullScreen={isFullScreenActive}
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 flex flex-col items-center">
            <SpaceLoader type="orbit" size="sm" />
            <p className="mt-4 text-sm text-center text-slate-400">Orbit Loader</p>
          </div>

          <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 flex flex-col items-center">
            <SpaceLoader type="rocket" size="sm" />
            <p className="mt-4 text-sm text-center text-slate-400">Rocket Loader</p>
          </div>

          <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 flex flex-col items-center">
            <SpaceLoader type="satellite" size="sm" />
            <p className="mt-4 text-sm text-center text-slate-400">Satellite Loader</p>
          </div>

          <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 flex flex-col items-center">
            <SpaceLoader type="astronaut" size="sm" />
            <p className="mt-4 text-sm text-center text-slate-400">Astronaut Loader</p>
          </div>

          <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 flex flex-col items-center">
            <SpaceLoader type="progress" size="sm" />
            <p className="mt-4 text-sm text-center text-slate-400">Progress Loader</p>
          </div>
        </div>

        <div className="mt-12 bg-slate-900 p-6 rounded-lg border border-slate-800">
          <h2 className="text-xl font-semibold mb-4">How to Use</h2>

          <div className="bg-slate-800 p-4 rounded-md">
            <pre className="text-sm text-slate-300 overflow-x-auto">
              {`// Import the SpaceLoader component
import { SpaceLoader } from "@/components/loading/space-loader"

// Basic usage
<SpaceLoader />

// With options
<SpaceLoader 
  type="rocket"
  color="cyan"
  size="lg"
  text="Loading data..."
/>

// Progress bar
<SpaceLoader 
  type="progress"
  progress={75}
  text="Downloading..."
/>

// Fullscreen loader
<SpaceLoader 
  fullScreen
  type="astronaut"
  text="Preparing your dashboard..."
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
