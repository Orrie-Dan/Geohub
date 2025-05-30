import { SpaceLoader } from "@/components/loading/space-loader"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm">
      <SpaceLoader type="astronaut" size="lg" color="cyan" text="Loading animations..." fullScreen />
    </div>
  )
}
