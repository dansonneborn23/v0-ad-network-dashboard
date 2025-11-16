"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Users, Target, BarChart3, AlertTriangle, Shield } from 'lucide-react'

const performanceData = [
  { month: "Jan", impressions: 4200000, clicks: 84000, conversions: 1680 },
  { month: "Feb", impressions: 4500000, clicks: 90000, conversions: 1800 },
  { month: "Mar", impressions: 5100000, clicks: 102000, conversions: 2040 },
  { month: "Apr", impressions: 4800000, clicks: 96000, conversions: 1920 },
  { month: "May", impressions: 5400000, clicks: 108000, conversions: 2160 },
  { month: "Jun", impressions: 5800000, clicks: 116000, conversions: 2320 },
]

const adFormatData = [
  { format: "Video", count: 145, percentage: 42 },
  { format: "Carousel", count: 98, percentage: 28 },
  { format: "Image", count: 72, percentage: 21 },
  { format: "Stories", count: 31, percentage: 9 },
]

const riskData = [
  { 
    risk: "Inactive Accounts and Campaigns", 
    severity: "Medium",
    description: "Multiple inactive accounts and paused campaigns may contain historical data that needs migration",
    mitigation: "Audit and archive inactive entities before integration to reduce API load"
  },
  { 
    risk: "Day Parting", 
    severity: "High",
    description: "Complex ad scheduling configurations may not map directly to Fluency's optimization engine",
    mitigation: "Review all day parting rules and establish conversion protocols for time-based targeting"
  },
  { 
    risk: "Instant Form Templates are In Use", 
    severity: "High",
    description: "Lead generation forms with custom fields require special handling for data continuity",
    mitigation: "Develop custom integration layer to preserve form submissions and field mappings"
  },
]

export function MetaDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Meta Advertising
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Facebook & Instagram campaign overview
          </p>
        </div>
        <Badge className="gap-1 bg-primary text-primary-foreground">
          <div className="size-2 animate-pulse rounded-full bg-primary-foreground" />
          Live Data
        </Badge>
      </div>

      {/* Fluency Compatibility Score */}
      <Card className="border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-transparent">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-medium text-muted-foreground">
                Fluency Compatibility Score
              </CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">
                Overall integration readiness and data quality
              </p>
            </div>
            <Shield className="size-8 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-2">
            <div className="text-6xl font-bold text-foreground">87</div>
            <div className="mb-2 text-2xl text-muted-foreground">/100</div>
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-secondary">
            <div className="h-full bg-gradient-to-r from-primary to-accent" style={{ width: '87%' }} />
          </div>
          <p className="mt-3 text-sm text-accent">
            Excellent compatibility - Ready for full integration
          </p>
        </CardContent>
      </Card>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Accounts
            </CardTitle>
            <Users className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">12</div>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className="text-accent">+2</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Campaigns
            </CardTitle>
            <Target className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">87</div>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className="text-accent">+12</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Ad Groups
            </CardTitle>
            <BarChart3 className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">346</div>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className="text-accent">+45</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Implementation Risks */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <AlertTriangle className="size-5 text-primary" />
            Implementation Risks
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Potential challenges and recommended mitigation strategies
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskData.map((risk, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card/50 p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-foreground">{risk.risk}</h4>
                      <Badge
                        variant={
                          risk.severity === "High"
                            ? "destructive"
                            : risk.severity === "Medium"
                            ? "default"
                            : "secondary"
                        }
                        className={
                          risk.severity === "High"
                            ? "bg-primary text-primary-foreground"
                            : risk.severity === "Medium"
                            ? "bg-chart-3 text-foreground"
                            : "bg-accent text-foreground"
                        }
                      >
                        {risk.severity}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {risk.description}
                    </p>
                    <div className="mt-3 rounded bg-accent/10 p-2">
                      <p className="text-xs font-medium text-accent">
                        Mitigation: {risk.mitigation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ad Format Distribution */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Ad Format Distribution</CardTitle>
          <p className="text-sm text-muted-foreground">
            Active ads by format type
          </p>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              count: {
                label: "Ad Count",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={adFormatData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="format" className="text-xs" />
                <YAxis className="text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="var(--color-chart-1)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {adFormatData.map((format) => (
              <div key={format.format} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{format.format}</span>
                  <span className="font-medium text-foreground">{format.percentage}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${format.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
