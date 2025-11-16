"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ConnectionSetup } from "@/components/connection-setup"
import { MetaDashboard } from "@/components/meta-dashboard"
import { GoogleDashboard } from "@/components/google-dashboard"
import { MicrosoftDashboard } from "@/components/microsoft-dashboard"
import { Settings, BarChart3 } from 'lucide-react'

export function AdNetworkDashboard() {
  const [activeTab, setActiveTab] = useState("setup")

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
              <BarChart3 className="size-5 text-primary-foreground" />
            </div>
            <h1 className="text-lg font-semibold text-foreground">
              Ad Network Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Multi-Network Analytics
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container px-6 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Fluency Technical Discovery
            </h2>
          </div>
          
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
