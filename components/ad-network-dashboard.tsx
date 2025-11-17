"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ConnectionSetup } from "@/components/connection-setup"
import { MetaDashboard } from "@/components/meta-dashboard"
import { GoogleDashboard } from "@/components/google-dashboard"
import { MicrosoftDashboard } from "@/components/microsoft-dashboard"
import { Settings } from 'lucide-react'
import Image from 'next/image'

export function AdNetworkDashboard() {
  const [activeTab, setActiveTab] = useState("setup")

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 items-center justify-center">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fluency_Logo_Stacked_1200x300_1-Sr8IjJnrqsc97vWglKP8jwUZcVNtqO.png" 
                alt="Fluency" 
                width={160} 
                height={40}
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Environment Discovery
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container px-6 py-8">
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl grid-cols-4 bg-muted">
              <TabsTrigger value="setup" className="gap-2">
                <Settings className="size-4" />
                Setup
              </TabsTrigger>
              <TabsTrigger value="meta">Meta</TabsTrigger>
              <TabsTrigger value="google">Google</TabsTrigger>
              <TabsTrigger value="microsoft">Microsoft</TabsTrigger>
            </TabsList>

            <TabsContent value="setup" className="mt-6">
              <ConnectionSetup />
            </TabsContent>

            <TabsContent value="meta" className="mt-6">
              <MetaDashboard />
            </TabsContent>

            <TabsContent value="google" className="mt-6">
              <GoogleDashboard />
            </TabsContent>

            <TabsContent value="microsoft" className="mt-6">
              <MicrosoftDashboard />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
