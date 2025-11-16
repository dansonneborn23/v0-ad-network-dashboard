"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Users, Target, BarChart3, AlertTriangle, Shield } from 'lucide-react'

const performanceData = [
  { month: "Jan", impressions: 3800000, clicks: 152000, conversions: 3040 },
  { month: "Feb", impressions: 4100000, clicks: 164000, conversions: 3280 },
  { month: "Mar", impressions: 4600000, clicks: 184000, conversions: 3680 },
  { month: "Apr", impressions: 4300000, clicks: 172000, conversions: 3440 },
  { month: "May", impressions: 4900000, clicks: 196000, conversions: 3920 },
  { month: "Jun", impressions: 5300000, clicks: 212000, conversions: 4240 },
]

const inventoryData = [
  { type: "Search", count: 189, percentage: 48 },
  { type: "Display", count: 122, percentage: 31 },
  { type: "Shopping", count: 51, percentage: 13 },
  { type: "Video", count: 32, percentage: 8 },
]

const riskData = [
  { 
    risk: "Multiple MCC's identified", 
    severity: "High",
    description: "Multiple Manager (MCC) accounts detected which increases complexity in data aggregation and reporting",
    mitigation: "Map MCC hierarchy and implement multi-account authentication flow with proper access tokens"
  },
  { 
    risk: "Local Services Ads in use", 
    severity: "Medium",
    description: "Local Services Ads use separate API endpoints and reporting structures from standard Google Ads",
    mitigation: "Implement dedicated LSA API integration and merge reporting with standard campaign data"
  },
  { 
    risk: "Campaign Structure Complexity", 
    severity: "High",
    description: "Deep campaign hierarchies with multiple nested ad groups and targeting layers require complex data traversal",
    mitigation: "Implement recursive API queries with pagination and optimize data fetching strategies"
  },
]

export function GoogleDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Google Advertising
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Google Ads campaign overview
          </p>
        </div>
        <Badge className="gap-1 bg-accent text-accent-foreground">
          <div className="size-2 animate-pulse rounded-full bg-accent-foreground" />
          Live Data
        </Badge>
      </div>

      {/* Fluency Compatibility Score */}
      <Card className="border-2 border-accent/50 bg-gradient-to-br from-accent/10 to-transparent">
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
            <Shield className="size-8 text-accent" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-2">
            <div className="text-6xl font-bold text-foreground">92</div>
            <div className="mb-2 text-2xl text-muted-foreground">/100</div>
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-secondary">
            <div className="h-full bg-gradient-to-r from-accent to-chart-2" style={{ width: '92%' }} />
          </div>
          <p className="mt-3 text-sm text-accent">
            Outstanding compatibility - Optimal for Fluency integration
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
            <div className="text-2xl font-bold text-foreground">8</div>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className="text-accent">+1</span> from last month
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
            <div className="text-2xl font-bold text-foreground">124</div>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className="text-accent">+18</span> from last month
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
            <div className="text-2xl font-bold text-foreground">394</div>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className="text-accent">+52</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Implementation Risks */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <AlertTriangle className="size-5 text-accent" />
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

      {/* Inventory Distribution */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Campaign Type Distribution</CardTitle>
          <p className="text-sm text-muted-foreground">
            Active campaigns by inventory type
          </p>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              count: {
                label: "Campaign Count",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={inventoryData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="type" className="text-xs" />
                <YAxis className="text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="count" fill="var(--color-chart-2)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {inventoryData.map((inventory) => (
              <div key={inventory.type} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{inventory.type}</span>
                  <span className="font-medium text-foreground">{inventory.percentage}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full bg-accent"
                    style={{ width: `${inventory.percentage}%` }}
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
