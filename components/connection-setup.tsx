"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle } from 'lucide-react'

export function ConnectionSetup() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          API Connections
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Configure your advertising network API credentials to sync data
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        {/* Meta Connection */}
        <Card className="bg-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-lg font-bold text-primary">M</span>
                </div>
                <div>
                  <CardTitle className="text-foreground">Meta Ads</CardTitle>
                  <CardDescription>Facebook & Instagram Advertising</CardDescription>
                </div>
              </div>
              <Badge variant="outline" className="gap-1">
                <Circle className="size-2 fill-muted-foreground" />
                Not Connected
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="meta-app-id">App ID</Label>
              <Input id="meta-app-id" placeholder="Enter your Meta App ID" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="meta-app-secret">App Secret</Label>
              <Input
                id="meta-app-secret"
                type="password"
                placeholder="Enter your Meta App Secret"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="meta-access-token">Access Token</Label>
              <Input
                id="meta-access-token"
                type="password"
                placeholder="Enter your Meta Access Token"
              />
            </div>
            <Button className="w-full">Connect Meta Ads</Button>
          </CardContent>
        </Card>

        {/* Google Connection */}
        <Card className="bg-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-accent/10">
                  <span className="text-lg font-bold text-accent">G</span>
                </div>
                <div>
                  <CardTitle className="text-foreground">Google Ads</CardTitle>
                  <CardDescription>Google Advertising Platform</CardDescription>
                </div>
              </div>
              <Badge variant="outline" className="gap-1">
                <Circle className="size-2 fill-muted-foreground" />
                Not Connected
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="google-client-id">Client ID</Label>
              <Input id="google-client-id" placeholder="Enter your Google Client ID" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="google-client-secret">Client Secret</Label>
              <Input
                id="google-client-secret"
                type="password"
                placeholder="Enter your Google Client Secret"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="google-developer-token">Developer Token</Label>
              <Input
                id="google-developer-token"
                type="password"
                placeholder="Enter your Google Developer Token"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="google-refresh-token">Refresh Token</Label>
              <Input
                id="google-refresh-token"
                type="password"
                placeholder="Enter your Google Refresh Token"
              />
            </div>
            <Button className="w-full">Connect Google Ads</Button>
          </CardContent>
        </Card>

        {/* Microsoft Connection */}
        <Card className="bg-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-chart-3/10">
                  <span className="text-lg font-bold text-chart-3">M</span>
                </div>
                <div>
                  <CardTitle className="text-foreground">Microsoft Ads</CardTitle>
                  <CardDescription>Bing & Microsoft Advertising</CardDescription>
                </div>
              </div>
              <Badge variant="outline" className="gap-1">
                <Circle className="size-2 fill-muted-foreground" />
                Not Connected
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="microsoft-client-id">Client ID</Label>
              <Input
                id="microsoft-client-id"
                placeholder="Enter your Microsoft Client ID"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="microsoft-client-secret">Client Secret</Label>
              <Input
                id="microsoft-client-secret"
                type="password"
                placeholder="Enter your Microsoft Client Secret"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="microsoft-developer-token">Developer Token</Label>
              <Input
                id="microsoft-developer-token"
                type="password"
                placeholder="Enter your Microsoft Developer Token"
              />
            </div>
            <Button className="w-full">Connect Microsoft Ads</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
