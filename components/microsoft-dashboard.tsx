"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Users, Target, BarChart3, AlertTriangle, Shield } from 'lucide-react'

const performanceData = [
  { month: "Jan", impressions: 2100000, clicks: 63000, conversions: 1260 },
  { month: "Feb", impressions: 2300000, clicks: 69000, conversions: 1380 },
  { month: "Mar", impressions: 2600000, clicks: 78000, conversions: 1560 },
  { month: "Apr", impressions: 2400000, clicks: 72000, conversions: 1440 },
  { month: "May", impressions: 2800000, clicks: 84000, conversions: 1680 },
  { month: "Jun", impressions: 3100000, clicks: 93000, conversions: 1860 },
]

const inventoryData = [
  { type: "PMax", count: 148, percentage: 45 },
  { type: "Search", count: 92, percentage: 28 },
  { type: "Shopping", count: 56, percentage: 17 },
  { type: "Display", count: 34, percentage: 10 },
]

const riskData = [
  { 
    risk: "Extensive PMax campaigns in use", 
    severity: "High",
    description: "Performance Max campaigns require specialized handling and may have limited manual optimization capabilities",
    mitigation: "Develop dedicated PMax integration workflow with automated reporting and performance tracking"
  },
  { 
    risk: "Inactive Accounts and Campaigns", 
    severity: "Medium",
    description: "Multiple inactive accounts and campaigns detected that may impact reporting accuracy and create data inconsistencies",
    mitigation: "Implement automated filtering for inactive entities and establish clear archival processes"
  },
]

export function MicrosoftDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Microsoft Advertising
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Bing & Microsoft Ads campaign overview
          </p>
        </div>
        <Badge className="gap-1 bg-chart-3 text-primary-foreground">
          <div className="size-2 animate-pulse rounded-full bg-primary-foreground" />
          Live Data
        </Badge>
      </div>

      {/* Fluency Compatibility Score */}
      <Card className="border-2 border-chart-3/50 bg-gradient-to-br from-chart-3/10 to-transparent">
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
            <Shield className="size-8 text-chart-3" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-2">
            <div className="text-6xl font-bold text-foreground">78</div>
            <div className="mb-2 text-2xl text-muted-foreground">/100</div>
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-secondary">
            <div className="h-full bg-gradient-to-r from-chart-3 to-chart-4" style={{ width: '78%' }} />
          </div>
          <p className="mt-3 text-sm text-chart-3">
            Good compatibility - Some documentation gaps to address
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
            <div className="text-2xl font-bold text-foreground">6</div>
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
            <div className="text-2xl font-bold text-foreground">72</div>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className="text-accent">+9</span> from last month
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
            <div className="text-2xl font-bold text-foreground">230</div>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className="text-accent">+28</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Implementation Risks */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <AlertTriangle className="size-5 text-chart-3" />
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
                    <div className="mt-3 rounded bg-chart-3/10 p-2">
                      <p className="text-xs font-medium text-chart-3">
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
                color: "hsl(var(--chart-3))",
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
                <Bar dataKey="count" fill="var(--color-chart-3)" radius={[4, 4, 0, 0]} />
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
                    className="h-full bg-chart-3"
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
