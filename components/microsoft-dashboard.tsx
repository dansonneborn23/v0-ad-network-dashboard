"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { TrendingUp, Users, Target, BarChart3 } from 'lucide-react'

const performanceData = [
  { month: "Jan", impressions: 2100000, clicks: 63000, conversions: 1260 },
  { month: "Feb", impressions: 2300000, clicks: 69000, conversions: 1380 },
  { month: "Mar", impressions: 2600000, clicks: 78000, conversions: 1560 },
  { month: "Apr", impressions: 2400000, clicks: 72000, conversions: 1440 },
  { month: "May", impressions: 2800000, clicks: 84000, conversions: 1680 },
  { month: "Jun", impressions: 3100000, clicks: 93000, conversions: 1860 },
]

const inventoryData = [
  { type: "Search", count: 127, percentage: 55 },
  { type: "Display", count: 68, percentage: 30 },
  { type: "Shopping", count: 23, percentage: 10 },
  { type: "Native", count: 12, percentage: 5 },
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

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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

        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Spend
            </CardTitle>
            <TrendingUp className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$186.3K</div>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className="text-accent">+15%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">Performance Trends</CardTitle>
          <p className="text-sm text-muted-foreground">
            Impressions, clicks, and conversions over time
          </p>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              impressions: {
                label: "Impressions",
                color: "hsl(var(--chart-3))",
              },
              clicks: {
                label: "Clicks",
                color: "hsl(var(--chart-4))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="impressions"
                  stroke="var(--color-chart-3)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="clicks"
                  stroke="var(--color-chart-4)"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
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
