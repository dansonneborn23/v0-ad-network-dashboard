"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Key, Lock, CheckCircle2, AlertCircle } from 'lucide-react'

type NetworkType = 'meta' | 'google' | 'microsoft' | null

interface ApiCredentialsModalProps {
  network: NetworkType
  open: boolean
  onClose: () => void
  onComplete: (network: string) => void
}

const networkColors = {
  meta: 'primary',
  google: 'accent',
  microsoft: 'chart-3',
}

const credentialFields = {
  meta: [
    { id: 'app_id', label: 'App ID', type: 'text', placeholder: 'Enter your Meta App ID' },
    { id: 'app_secret', label: 'App Secret', type: 'password', placeholder: 'Enter your App Secret' },
    { id: 'access_token', label: 'Access Token', type: 'textarea', placeholder: 'Paste your long-lived access token' },
  ],
  google: [
    { id: 'client_id', label: 'Client ID', type: 'text', placeholder: 'Enter your Google Ads Client ID' },
    { id: 'client_secret', label: 'Client Secret', type: 'password', placeholder: 'Enter your Client Secret' },
    { id: 'refresh_token', label: 'Refresh Token', type: 'textarea', placeholder: 'Paste your refresh token' },
    { id: 'developer_token', label: 'Developer Token', type: 'text', placeholder: 'Enter your developer token' },
  ],
  microsoft: [
    { id: 'client_id', label: 'Client ID', type: 'text', placeholder: 'Enter your Microsoft Ads Client ID' },
    { id: 'client_secret', label: 'Client Secret', type: 'password', placeholder: 'Enter your Client Secret' },
    { id: 'refresh_token', label: 'Refresh Token', type: 'textarea', placeholder: 'Paste your refresh token' },
    { id: 'developer_token', label: 'Developer Token', type: 'text', placeholder: 'Enter your developer token' },
  ],
}

export function ApiCredentialsModal({ network, open, onClose, onComplete }: ApiCredentialsModalProps) {
  const [credentials, setCredentials] = useState<Record<string, string>>({})
  const [isConnecting, setIsConnecting] = useState(false)

  const fields = network ? credentialFields[network] : []
  const networkName = network ? network.charAt(0).toUpperCase() + network.slice(1) : ''
  const color = network ? networkColors[network] : 'primary'

  const handleInputChange = (fieldId: string, value: string) => {
    setCredentials(prev => ({
      ...prev,
      [fieldId]: value
    }))
  }

  const handleConnect = () => {
    setIsConnecting(true)
    // Simulate API validation
    setTimeout(() => {
      setIsConnecting(false)
      if (network) {
        onComplete(network)
      }
      setCredentials({})
    }, 2000)
  }

  const allFieldsFilled = fields.every(field => credentials[field.id]?.trim())

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px] bg-card border-2 border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className={`flex size-12 items-center justify-center rounded-lg bg-${color}/10 border-2 border-${color}/30`}>
              <Key className={`size-6 text-${color}`} />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-foreground">
                API CREDENTIALS - {networkName.toUpperCase()}
              </DialogTitle>
              <DialogDescription className="font-mono text-xs uppercase tracking-wider">
                Paste Your Existing Credentials
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Security Notice */}
          <div className="rounded-lg bg-primary/5 border border-primary/20 p-3">
            <div className="flex items-start gap-2">
              <Lock className="size-4 text-primary mt-0.5" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground font-mono">
                  <span className="text-primary font-bold">SECURE CONNECTION:</span> All credentials are encrypted and stored securely. 
                  Only read-only operations will be performed.
                </p>
              </div>
            </div>
          </div>

          {/* Credential Fields */}
          <div className="space-y-4">
            {fields.map((field) => (
              <div key={field.id} className="space-y-2">
                <Label htmlFor={field.id} className="text-sm font-medium text-foreground font-mono uppercase tracking-wide">
                  {field.label}
                </Label>
                {field.type === 'textarea' ? (
                  <Textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    value={credentials[field.id] || ''}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    className="font-mono text-xs bg-muted/50 border-border resize-none"
                    rows={3}
                  />
                ) : (
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={credentials[field.id] || ''}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    className="font-mono text-xs bg-muted/50 border-border"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Warning */}
          <div className="rounded-lg bg-chart-3/10 border border-chart-3/30 p-3">
            <div className="flex items-start gap-2">
              <AlertCircle className="size-4 text-chart-3 mt-0.5" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground font-mono">
                  <span className="text-chart-3 font-bold">NOTE:</span> Ensure these credentials have read-only permissions configured in your {networkName} account settings.
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
            disabled={isConnecting}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConnect}
            disabled={!allFieldsFilled || isConnecting}
            className={`flex-1 bg-${color} hover:bg-${color}/90 font-bold uppercase tracking-wider shadow-lg`}
          >
            {isConnecting ? (
              <>
                <div className="mr-2 size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                CONNECTING...
              </>
            ) : (
              <>
                <CheckCircle2 className="mr-2 size-4" />
                CONNECT
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
