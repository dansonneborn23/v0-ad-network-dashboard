"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { TrendingUp, Users, Target, BarChart3 } from 'lucide-react'

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

        <Card className="bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Spend
            </CardTitle>
            <TrendingUp className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$342.5K</div>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className="text-accent">+18%</span> from last month
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
                color: "hsl(var(--chart-1))",
              },
              clicks: {
                label: "Clicks",
                color: "hsl(var(--chart-2))",
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
                  stroke="var(--color-chart-1)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="clicks"
                  stroke="var(--color-chart-2)"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
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
