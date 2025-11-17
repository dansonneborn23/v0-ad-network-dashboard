"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Circle, Zap, Shield, X, Plus, Key } from 'lucide-react'
import { OAuthModal } from "./oauth-modal"
import { ApiCredentialsModal } from "./api-credentials-modal"

type NetworkType = 'meta' | 'google' | 'microsoft' | null
type ConnectionMethod = 'oauth' | 'api' | null

interface ConnectedAccount {
  id: string
  name: string
  network: string
}

export function ConnectionSetup() {
  const [selectedNetwork, setSelectedNetwork] = useState<NetworkType>(null)
  const [connectionMethod, setConnectionMethod] = useState<ConnectionMethod>(null)
  const [connectedAccounts, setConnectedAccounts] = useState<ConnectedAccount[]>([])

  const handleConnect = (network: NetworkType, method: ConnectionMethod) => {
    setSelectedNetwork(network)
    setConnectionMethod(method)
  }

  const handleOAuthComplete = (network: string) => {
    const newAccount: ConnectedAccount = {
      id: `${network}-${Date.now()}`,
      name: `${network.charAt(0).toUpperCase() + network.slice(1)} Account ${connectedAccounts.filter(a => a.network === network).length + 1}`,
      network: network
    }
    setConnectedAccounts(prev => [...prev, newAccount])
    setSelectedNetwork(null)
    setConnectionMethod(null)
  }

  const handleApiComplete = (network: string) => {
    const newAccount: ConnectedAccount = {
      id: `${network}-api-${Date.now()}`,
      name: `${network.charAt(0).toUpperCase() + network.slice(1)} Account ${connectedAccounts.filter(a => a.network === network).length + 1} (API)`,
      network: network
    }
    setConnectedAccounts(prev => [...prev, newAccount])
    setSelectedNetwork(null)
    setConnectionMethod(null)
  }

  const handleDisconnect = (accountId: string) => {
    setConnectedAccounts(prev => prev.filter(account => account.id !== accountId))
  }

  const handleCloseModal = () => {
    setSelectedNetwork(null)
    setConnectionMethod(null)
  }

  const getNetworkAccounts = (network: string) => {
    return connectedAccounts.filter(account => account.network === network)
  }

  const NetworkCard = ({ 
    network, 
    title, 
    description, 
    logo, 
    color 
  }: { 
    network: string
    title: string
    description: string
    logo: string
    color: 'primary' | 'accent' | 'chart-3'
  }) => {
    const accounts = getNetworkAccounts(network)
    const isConnected = accounts.length > 0

    return (
      <div className="space-y-3">
        <Card className={`relative overflow-hidden bg-card border-2 border-${color}/20 hover:border-${color}/60 transition-all duration-300 hover:shadow-lg hover:shadow-${color}/20 group`}>
          <div className={`absolute inset-0 bg-gradient-to-br from-${color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          <CardHeader className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className={`flex size-24 items-center justify-center rounded-xl bg-${color}/10 border-2 border-${color}/30 group-hover:border-${color}/60 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-${color}/40 overflow-hidden`}>
                <img 
                  src={logo || "/placeholder.svg"}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              {isConnected ? (
                <Badge className="gap-1 bg-accent/20 border-accent text-accent hover:bg-accent/30 animate-pulse-slow">
                  <Circle className="size-2 fill-accent" />
                  {accounts.length} ONLINE
                </Badge>
              ) : (
                <Badge variant="outline" className="gap-1 border-muted-foreground/30">
                  <Circle className="size-2 fill-muted-foreground/50" />
                  OFFLINE
                </Badge>
              )}
            </div>
            <CardTitle className="text-foreground font-bold text-xl">{title}</CardTitle>
            <CardDescription className="font-mono text-xs uppercase">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="relative space-y-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
              <Shield className={`size-4 text-${color}`} />
              <span>READ-ONLY ACCESS</span>
            </div>
            <Button 
              className={`w-full bg-${color} hover:bg-${color}/90 ${color === 'chart-3' ? 'text-black' : 'text-primary-foreground'} font-bold uppercase tracking-wider shadow-lg shadow-${color}/30 hover:shadow-xl hover:shadow-${color}/40 transition-all duration-300 group`}
              onClick={() => handleConnect(network as NetworkType, 'oauth')}
            >
              <Zap className="mr-2 size-4 group-hover:animate-pulse" />
              OAUTH CONNECT
            </Button>
            <Button 
              variant="outline"
              className={`w-full border-2 border-${color}/30 hover:bg-${color}/10 hover:border-${color}/60 font-bold uppercase tracking-wider transition-all duration-300`}
              onClick={() => handleConnect(network as NetworkType, 'api')}
            >
              <Key className="mr-2 size-4" />
              USE API CREDENTIALS
            </Button>
          </CardContent>
        </Card>

        {accounts.length > 0 && (
          <div className="space-y-2 pl-4 border-l-2 border-muted-foreground/20">
            {accounts.map((account) => (
              <Card key={account.id} className="bg-card/50 border border-muted-foreground/20">
                <CardContent className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Circle className="size-2 fill-accent animate-pulse" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{account.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">{account.id}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDisconnect(account.id)}
                    className="hover:bg-destructive/20 hover:text-destructive"
                  >
                    <X className="size-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-dashed border-muted-foreground/30 hover:border-accent hover:bg-accent/10"
                onClick={() => handleConnect(network as NetworkType, 'oauth')}
              >
                <Zap className="mr-1 size-3" />
                OAuth
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-dashed border-muted-foreground/30 hover:border-accent hover:bg-accent/10"
                onClick={() => handleConnect(network as NetworkType, 'api')}
              >
                <Key className="mr-1 size-3" />
                API
              </Button>
            </div>
          </div>
        )}
      </div>
    )
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
        <NetworkCard 
          network="meta"
          title="META ADS"
          description="Facebook & Instagram Platform"
          logo="/meta-logo-abstract.png"
          color="primary"
        />
        
        <NetworkCard 
          network="google"
          title="GOOGLE ADS"
          description="Google Advertising Network"
          logo="/google-ads-logo.png"
          color="accent"
        />
        
        <NetworkCard 
          network="microsoft"
          title="MICROSOFT ADS"
          description="Bing & Microsoft Network"
          logo="/microsoft-logo.jpg"
          color="chart-3"
        />
      </div>

      <OAuthModal 
        network={selectedNetwork}
        open={selectedNetwork !== null && connectionMethod === 'oauth'}
        onClose={handleCloseModal}
        onComplete={handleOAuthComplete}
      />

      <ApiCredentialsModal
        network={selectedNetwork}
        open={selectedNetwork !== null && connectionMethod === 'api'}
        onClose={handleCloseModal}
        onComplete={handleApiComplete}
      />
    </div>
  )
}
