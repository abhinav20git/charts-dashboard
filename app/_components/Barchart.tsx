"use client"
import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Sample operational data (mocked)
const chartData = [
  { date: "2024-04-01", users: 120, sessions: 90, feedback: 4.1 },
  { date: "2024-04-02", users: 135, sessions: 112, feedback: 4.3 },
  { date: "2024-04-03", users: 140, sessions: 110, feedback: 4.0 },
  { date: "2024-04-04", users: 155, sessions: 125, feedback: 3.9 },
  { date: "2024-04-05", users: 160, sessions: 130, feedback: 4.4 },
  { date: "2024-04-06", users: 170, sessions: 145, feedback: 4.6 },
  { date: "2024-04-07", users: 180, sessions: 150, feedback: 4.2 },
]

const chartConfig = {
  users: {
    label: "Total Users",
    color: "hsl(var(--chart-1))",
  },
  sessions: {
    label: "Active Sessions",
    color: "hsl(var(--chart-2))",
  },
  feedback: {
    label: "Feedback Score",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig
export default function OperationalBarChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("users")

  const total = React.useMemo(() => ({
    users: chartData.reduce((acc, cur) => acc + cur.users, 0),
    sessions: chartData.reduce((acc, cur) => acc + cur.sessions, 0),
    feedback: (
      chartData.reduce((acc, cur) => acc + cur.feedback, 0) / chartData.length
    ).toFixed(2),
  }), [])

  return (
    <Card className="w-[450px]">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle></CardTitle>
          
        </div>
        <div className="flex text-sm w-full">
          {Object.keys(chartConfig).map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center  border-t px-2 py-1 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[chart as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            data={chartData}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[180px]"
                  labelFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }
                />
              }
            />
            <Bar
              dataKey={activeChart}
              fill={`var(--color-${activeChart})`}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
