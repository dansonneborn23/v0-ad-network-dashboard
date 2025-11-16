"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Shield, Lock, Eye, CheckCircle2 } from 'lucide-react'

type NetworkType = 'meta' | 'google' | 'microsoft' | null

interface OAuthModalProps {
  network: NetworkType
  open: boolean
  onClose: () => void
  onComplete: (network: string) => void
}

const networkScopes = {
  meta: [
    { id: 'ads_read', label: 'Read Ads Data', description: 'Access campaign and ad set information' },
    { id: 'insights_read', label: 'Read Insights', description: 'View performance metrics and analytics' },
    { id: 'account_read', label: 'Read Account Info', description: 'Access account structure and settings' },
  ],
  google: [
    { id: 'adwords_readonly', label: 'Google Ads Read-Only', description: 'View campaigns, ad groups, and ads' },
    { id: 'reports_readonly', label: 'Reports Read-Only', description: 'Access performance reports and metrics' },
    { id: 'customer_readonly', label: 'Customer Read-Only', description: 'View customer account information' },
  ],
  microsoft: [
    { id: 'ads_read', label: 'Ads Read Permission', description: 'Read campaign and ad group data' },
    { id: 'reports_read', label: 'Reports Read Permission', description: 'Access performance and analytics data' },
    { id: 'accounts_read', label: 'Accounts Read Permission', description: 'View account structure and details' },
  ],
}

const networkColors = {
  meta: 'primary',
  google: 'accent',
  microsoft: 'chart-3',
}

export function OAuthModal({ network, open, onClose, onComplete }: OAuthModalProps) {
  const [selectedScopes, setSelectedScopes] = useState<Set<string>>(new Set())
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const scopes = network ? networkScopes[network] : []
  const networkName = network ? network.charAt(0).toUpperCase() + network.slice(1) : ''
  const color = network ? networkColors[network] : 'primary'

  const handleScopeToggle = (scopeId: string) => {
    setSelectedScopes(prev => {
      const newSet = new Set(prev)
      if (newSet.has(scopeId)) {
        newSet.delete(scopeId)
      } else {
        newSet.add(scopeId)
      }
      return newSet
    })
  }

  const handleAuthorize = () => {
    setIsAuthenticating(true)
    // Simulate OAuth flow
    setTimeout(() => {
      setIsAuthenticating(false)
      if (network) {
        onComplete(network)
      }
      setSelectedScopes(new Set())
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-card border-2 border-border">
        {/* Header with gaming aesthetic */}
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className={`flex size-12 items-center justify-center rounded-lg bg-${color}/10 border-2 border-${color}/30`}>
              <Shield className={`size-6 text-${color}`} />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-foreground">
                AUTHORIZE {networkName.toUpperCase()}
              </DialogTitle>
              <DialogDescription className="font-mono text-xs uppercase tracking-wider">
                Select Read-Only Permissions
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Scopes Selection */}
        <div className="space-y-4 py-4">
          <div className="rounded-lg bg-muted/50 p-4 border border-border">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
              <Eye className="size-4" />
              <span className="font-mono uppercase tracking-wide">Requested Permissions</span>
            </div>
            <div className="space-y-3">
              {scopes.map((scope) => (
                <div key={scope.id} className="flex items-start space-x-3 p-2 rounded hover:bg-muted/50 transition-colors">
                  <Checkbox
                    id={scope.id}
                    checked={selectedScopes.has(scope.id)}
                    onCheckedChange={() => handleScopeToggle(scope.id)}
                    className="mt-1"
                  />
                  <div className="grid gap-1 flex-1">
                    <Label
                      htmlFor={scope.id}
                      className="text-sm font-medium leading-none cursor-pointer text-foreground"
                    >
                      {scope.label}
                    </Label>
                    <p className="text-xs text-muted-foreground font-mono">
                      {scope.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Notice */}
          <div className="rounded-lg bg-primary/5 border border-primary/20 p-3">
            <div className="flex items-start gap-2">
              <Lock className="size-4 text-primary mt-0.5" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground font-mono">
                  <span className="text-primary font-bold">SECURITY PROTOCOL:</span> All permissions are read-only. 
                  No data modification or deletion access requested.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1 font-bold uppercase"
            disabled={isAuthenticating}
          >
            Cancel
          </Button>
          <Button
            onClick={handleAuthorize}
            disabled={selectedScopes.size === 0 || isAuthenticating}
            className={`flex-1 bg-${color} hover:bg-${color}/90 font-bold uppercase tracking-wider shadow-lg`}
          >
            {isAuthenticating ? (
              <>
                <div className="mr-2 size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                AUTHENTICATING...
              </>
            ) : (
              <>
                <CheckCircle2 className="mr-2 size-4" />
                AUTHORIZE
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
