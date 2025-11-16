"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Circle, Zap, Shield } from 'lucide-react'
import { OAuthModal } from "./oauth-modal"

type NetworkType = 'meta' | 'google' | 'microsoft' | null

export function ConnectionSetup() {
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkType>(null)
  const [connectedNetworks, setConnectedNetworks] = useState<Set<string>>(new Set())

  const handleConnect = (network: NetworkType) => {
    setSelectedNetwork(network)
  }

  const handleOAuthComplete = (network: string) => {
    setConnectedNetworks(prev => new Set(prev).add(network))
    setSelectedNetwork(null)
  }

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-chart-3/20 blur-3xl" />
        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight text-foreground animate-pulse-slow">
            NETWORK CONNECTIONS
          </h2>
          <p className="mt-2 text-sm text-muted-foreground font-mono uppercase tracking-wider">
            {">> Initialize OAuth Protocol // Establish Secure Links"}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        <Card className="relative overflow-hidden bg-card border-2 border-primary/20 hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex size-16 items-center justify-center rounded-xl bg-primary/10 border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/40">
                <span className="text-3xl font-black text-primary">M</span>
              </div>
              {connectedNetworks.has('meta') ? (
                <Badge className="gap-1 bg-accent/20 border-accent text-accent hover:bg-accent/30 animate-pulse-slow">
                  <Circle className="size-2 fill-accent" />
                  ONLINE
                </Badge>
              ) : (
                <Badge variant="outline" className="gap-1 border-muted-foreground/30">
                  <Circle className="size-2 fill-muted-foreground/50" />
                  OFFLINE
                </Badge>
              )}
            </div>
            <CardTitle className="text-foreground font-bold text-xl">META ADS</CardTitle>
            <CardDescription className="font-mono text-xs uppercase">
              Facebook & Instagram Platform
            </CardDescription>
          </CardHeader>
          <CardContent className="relative space-y-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
              <Shield className="size-4 text-primary" />
              <span>READ-ONLY ACCESS</span>
            </div>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 group"
              onClick={() => handleConnect('meta')}
              disabled={connectedNetworks.has('meta')}
            >
              <Zap className="mr-2 size-4 group-hover:animate-pulse" />
              {connectedNetworks.has('meta') ? 'CONNECTED' : 'CONNECT'}
            </Button>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden bg-card border-2 border-accent/20 hover:border-accent/60 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 group">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex size-16 items-center justify-center rounded-xl bg-accent/10 border-2 border-accent/30 group-hover:border-accent/60 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/40">
                <span className="text-3xl font-black text-accent">G</span>
              </div>
              {connectedNetworks.has('google') ? (
                <Badge className="gap-1 bg-accent/20 border-accent text-accent hover:bg-accent/30 animate-pulse-slow">
                  <Circle className="size-2 fill-accent" />
                  ONLINE
                </Badge>
              ) : (
                <Badge variant="outline" className="gap-1 border-muted-foreground/30">
                  <Circle className="size-2 fill-muted-foreground/50" />
                  OFFLINE
                </Badge>
              )}
            </div>
            <CardTitle className="text-foreground font-bold text-xl">GOOGLE ADS</CardTitle>
            <CardDescription className="font-mono text-xs uppercase">
              Google Advertising Network
            </CardDescription>
          </CardHeader>
          <CardContent className="relative space-y-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
              <Shield className="size-4 text-accent" />
              <span>READ-ONLY ACCESS</span>
            </div>
            <Button 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 group"
              onClick={() => handleConnect('google')}
              disabled={connectedNetworks.has('google')}
            >
              <Zap className="mr-2 size-4 group-hover:animate-pulse" />
              {connectedNetworks.has('google') ? 'CONNECTED' : 'CONNECT'}
            </Button>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden bg-card border-2 border-chart-3/20 hover:border-chart-3/60 transition-all duration-300 hover:shadow-lg hover:shadow-chart-3/20 group">
          <div className="absolute inset-0 bg-gradient-to-br from-chart-3/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <CardHeader className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex size-16 items-center justify-center rounded-xl bg-chart-3/10 border-2 border-chart-3/30 group-hover:border-chart-3/60 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-chart-3/40">
                <span className="text-3xl font-black text-chart-3">M</span>
              </div>
              {connectedNetworks.has('microsoft') ? (
                <Badge className="gap-1 bg-accent/20 border-accent text-accent hover:bg-accent/30 animate-pulse-slow">
                  <Circle className="size-2 fill-accent" />
                  ONLINE
                </Badge>
              ) : (
                <Badge variant="outline" className="gap-1 border-muted-foreground/30">
                  <Circle className="size-2 fill-muted-foreground/50" />
                  OFFLINE
                </Badge>
              )}
            </div>
            <CardTitle className="text-foreground font-bold text-xl">MICROSOFT ADS</CardTitle>
            <CardDescription className="font-mono text-xs uppercase">
              Bing & Microsoft Network
            </CardDescription>
          </CardHeader>
          <CardContent className="relative space-y-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
              <Shield className="size-4 text-chart-3" />
              <span>READ-ONLY ACCESS</span>
            </div>
            <Button 
              className="w-full bg-chart-3 hover:bg-chart-3/90 text-black font-bold uppercase tracking-wider shadow-lg shadow-chart-3/30 hover:shadow-xl hover:shadow-chart-3/40 transition-all duration-300 group"
              onClick={() => handleConnect('microsoft')}
              disabled={connectedNetworks.has('microsoft')}
            >
              <Zap className="mr-2 size-4 group-hover:animate-pulse" />
              {connectedNetworks.has('microsoft') ? 'CONNECTED' : 'CONNECT'}
            </Button>
          </CardContent>
        </Card>
      </div>

      <OAuthModal 
        network={selectedNetwork}
        open={selectedNetwork !== null}
        onClose={() => setSelectedNetwork(null)}
        onComplete={handleOAuthComplete}
      />
    </div>
  )
}
