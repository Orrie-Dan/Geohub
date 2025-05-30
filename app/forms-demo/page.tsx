"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, User, Mail, Lock, Globe, MessageSquare, Rocket, Star } from "lucide-react"
import { SpaceInput } from "@/components/ui/space-input"
import {
  SpaceSelect,
  SpaceSelectContent,
  SpaceSelectItem,
  SpaceSelectTrigger,
  SpaceSelectValue,
} from "@/components/ui/space-select"
import { SpaceCheckbox } from "@/components/ui/space-checkbox"
import { SpaceRadioGroup, SpaceRadioItem } from "@/components/ui/space-radio"
import { SpaceTextarea } from "@/components/ui/space-textarea"
import { SpaceForm, SpaceFormField } from "@/components/ui/space-form"
import { SpaceButton } from "@/components/ui/space-button"

export default function FormsDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    message: "",
    notifications: false,
    theme: "cosmic",
    newsletter: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    alert("Form submitted successfully!")
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        {/* Animated Stars */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/" className="flex items-center text-sky-400 hover:text-sky-300 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold mb-2">Space-Themed Form Elements</h1>
            <p className="text-slate-400">
              Custom form components designed for the GeoHub platform with a space theme.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Form */}
            <div>
              <SpaceForm
                variant="cosmic"
                title="Join the Space Mission"
                description="Register for exclusive access to GeoHub's advanced features"
                onSubmit={handleSubmit}
              >
                <SpaceFormField
                  label="Full Name"
                  description="Enter your full name as it appears on official documents"
                  required
                >
                  <SpaceInput
                    variant="floating"
                    placeholder="Full Name"
                    icon={<User className="h-4 w-4" />}
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    error={errors.name}
                  />
                </SpaceFormField>

                <SpaceFormField label="Email Address" description="We'll use this to send you mission updates" required>
                  <SpaceInput
                    variant="cosmic"
                    type="email"
                    placeholder="Enter your email"
                    icon={<Mail className="h-4 w-4" />}
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    error={errors.email}
                  />
                </SpaceFormField>

                <SpaceFormField label="Password" description="Choose a strong password for your account" required>
                  <SpaceInput
                    variant="default"
                    type="password"
                    placeholder="Create a password"
                    icon={<Lock className="h-4 w-4" />}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    error={errors.password}
                  />
                </SpaceFormField>

                <SpaceFormField label="Country" description="Select your country of residence">
                  <SpaceSelect value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                    <SpaceSelectTrigger variant="cosmic">
                      <Globe className="h-4 w-4 mr-2" />
                      <SpaceSelectValue placeholder="Select your country" />
                    </SpaceSelectTrigger>
                    <SpaceSelectContent>
                      <SpaceSelectItem value="rwanda">Rwanda</SpaceSelectItem>
                      <SpaceSelectItem value="kenya">Kenya</SpaceSelectItem>
                      <SpaceSelectItem value="uganda">Uganda</SpaceSelectItem>
                      <SpaceSelectItem value="tanzania">Tanzania</SpaceSelectItem>
                      <SpaceSelectItem value="other">Other</SpaceSelectItem>
                    </SpaceSelectContent>
                  </SpaceSelect>
                </SpaceFormField>

                <SpaceFormField label="Message" description="Tell us about your interest in geospatial applications">
                  <SpaceTextarea
                    variant="cosmic"
                    placeholder="Share your thoughts about space and geospatial technology..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                  />
                </SpaceFormField>

                <SpaceFormField label="Preferences">
                  <div className="space-y-4">
                    <SpaceCheckbox
                      variant="orbital"
                      label="Enable notifications"
                      description="Receive updates about new applications and features"
                      checked={formData.notifications}
                      onCheckedChange={(checked) => handleInputChange("notifications", checked as boolean)}
                    />

                    <SpaceCheckbox
                      variant="cosmic"
                      label="Subscribe to newsletter"
                      description="Get monthly updates about space technology and GeoHub"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                    />
                  </div>
                </SpaceFormField>

                <SpaceFormField label="Theme Preference" description="Choose your preferred interface theme">
                  <SpaceRadioGroup value={formData.theme} onValueChange={(value) => handleInputChange("theme", value)}>
                    <SpaceRadioItem
                      variant="cosmic"
                      value="cosmic"
                      label="Cosmic"
                      description="Deep space with cosmic effects"
                    />
                    <SpaceRadioItem
                      variant="orbital"
                      value="orbital"
                      label="Orbital"
                      description="Earth orbit with satellite views"
                    />
                    <SpaceRadioItem
                      variant="default"
                      value="stellar"
                      label="Stellar"
                      description="Star field with nebula effects"
                    />
                  </SpaceRadioGroup>
                </SpaceFormField>

                <div className="flex gap-4 pt-4">
                  <SpaceButton type="submit" variant="cosmic" size="lg" loading={isSubmitting} className="flex-1">
                    <Rocket className="mr-2 h-4 w-4" />
                    Launch Mission
                  </SpaceButton>

                  <SpaceButton type="button" variant="orbital" size="lg">
                    Preview
                  </SpaceButton>
                </div>
              </SpaceForm>
            </div>

            {/* Component Showcase */}
            <div className="space-y-8">
              {/* Input Variants */}
              <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Star className="mr-2 h-5 w-5 text-sky-400" />
                  Input Variants
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">Default Input</label>
                    <SpaceInput placeholder="Default style input" />
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">Floating Label</label>
                    <SpaceInput variant="floating" placeholder="Floating label input" />
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">Cosmic Input</label>
                    <SpaceInput variant="cosmic" placeholder="Cosmic style input" />
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">With Icon</label>
                    <SpaceInput placeholder="Input with icon" icon={<MessageSquare className="h-4 w-4" />} />
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">Error State</label>
                    <SpaceInput placeholder="Input with error" error="This field is required" />
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">Success State</label>
                    <SpaceInput placeholder="Valid input" success />
                  </div>
                </div>
              </div>

              {/* Button Variants */}
              <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Star className="mr-2 h-5 w-5 text-sky-400" />
                  Button Variants
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <SpaceButton variant="default">Default</SpaceButton>
                  <SpaceButton variant="cosmic">Cosmic</SpaceButton>
                  <SpaceButton variant="orbital">Orbital</SpaceButton>
                  <SpaceButton variant="nebula">Nebula</SpaceButton>
                  <SpaceButton variant="outline">Outline</SpaceButton>
                  <SpaceButton variant="ghost">Ghost</SpaceButton>
                  <SpaceButton variant="secondary">Secondary</SpaceButton>
                  <SpaceButton variant="destructive">Destructive</SpaceButton>
                </div>
                <div className="mt-4 space-y-2">
                  <SpaceButton variant="cosmic" size="sm">
                    Small
                  </SpaceButton>
                  <SpaceButton variant="cosmic" size="default" className="ml-2">
                    Default
                  </SpaceButton>
                  <SpaceButton variant="cosmic" size="lg" className="ml-2">
                    Large
                  </SpaceButton>
                </div>
              </div>

              {/* Checkbox & Radio Variants */}
              <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Star className="mr-2 h-5 w-5 text-sky-400" />
                  Selection Controls
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">Checkboxes</label>
                    <div className="space-y-2">
                      <SpaceCheckbox variant="default" label="Default checkbox" />
                      <SpaceCheckbox variant="cosmic" label="Cosmic checkbox" />
                      <SpaceCheckbox variant="orbital" label="Orbital checkbox" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">Radio Buttons</label>
                    <SpaceRadioGroup defaultValue="option1">
                      <SpaceRadioItem variant="default" value="option1" label="Default radio" />
                      <SpaceRadioItem variant="cosmic" value="option2" label="Cosmic radio" />
                      <SpaceRadioItem variant="orbital" value="option3" label="Orbital radio" />
                    </SpaceRadioGroup>
                  </div>
                </div>
              </div>

              {/* Usage Instructions */}
              <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-semibold mb-4">Usage Instructions</h3>
                <div className="text-sm text-slate-300 space-y-2">
                  <p>
                    • Import components from <code className="bg-slate-800 px-1 rounded">@/components/ui/space-*</code>
                  </p>
                  <p>
                    • Use <code className="bg-slate-800 px-1 rounded">variant</code> prop to change styles
                  </p>
                  <p>
                    • Add <code className="bg-slate-800 px-1 rounded">error</code> or{" "}
                    <code className="bg-slate-800 px-1 rounded">success</code> props for validation states
                  </p>
                  <p>
                    • Combine with <code className="bg-slate-800 px-1 rounded">SpaceForm</code> for consistent layouts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
