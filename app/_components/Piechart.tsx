"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Replace with your actual data
const chartData = [
  { metric: "Total Users", value: 1245, fill: "var(--color-users)" },
  { metric: "Active Sessions", value: 875, fill: "var(--color-sessions)" },
  { metric: "Feedback Score", value: 645, fill: "var(--color-feedback)" },
]

const chartConfig = {
  value: {
    label: "Metrics",
  },
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

export function Piechart() {
  const total = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0)
  }, [])

  return (
    <Card className="flex justify-center w-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Platform Metrics Overview</CardTitle>
       
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="metric"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {total.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 3.8% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Metrics summary from recent activity
        </div>
      </CardFooter>
    </Card>
  )
}
