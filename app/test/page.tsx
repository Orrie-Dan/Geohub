"use client"

import { SpaceButton } from "@/components/ui/space-button"
import { SpaceInput } from "@/components/ui/space-input"
import { SpaceLoader } from "@/components/loading/space-loader"

export default function TestPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-8 gap-8">
      <h1 className="text-3xl font-bold text-white">GeoHub Test Page</h1>

      <div className="flex flex-col gap-4 items-center">
        <SpaceLoader type="orbit" size="md" color="blue" />
        <p className="text-white">If you can see a spinning orbit loader above, the loader components are working!</p>
      </div>

      <div className="w-full max-w-md space-y-4">
        <SpaceInput placeholder="Test input field" variant="cosmic" />
        <SpaceButton variant="cosmic">Test Button</SpaceButton>
      </div>

      <p className="text-white text-center max-w-md">
        If you can see this page with styled components, your project is working correctly! Try visiting the{" "}
        <a href="/" className="text-sky-400 hover:underline">
          homepage
        </a>
        ,
        <a href="/loading-demo" className="text-sky-400 hover:underline">
          loading demo
        </a>
        , or
        <a href="/forms-demo" className="text-sky-400 hover:underline">
          forms demo
        </a>
        .
      </p>
    </div>
  )
}
