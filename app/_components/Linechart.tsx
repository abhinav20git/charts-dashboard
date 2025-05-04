"use client"

import { TrendingUp } from "lucide-react"
import { RadialBar, RadialBarChart } from "recharts"

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

const chartData = [
  { month: "January", feedbackScore: 4.2, fill: "var(--color-january)" },
  { month: "February", feedbackScore: 4.5, fill: "var(--color-february)" },
  { month: "March", feedbackScore: 4.7, fill: "var(--color-march)" },
  { month: "April", feedbackScore: 4.3, fill: "var(--color-april)" },
  { month: "May", feedbackScore: 4.6, fill: "var(--color-may)" },
  { month: "June", feedbackScore: 4.8, fill: "var(--color-june)" },
]

const chartConfig = {
  feedbackScore: {
    label: "Feedback Score",
  },
  january: {
    label: "January",
    color: "hsl(var(--chart-1))",
  },
  february: {
    label: "February",
    color: "hsl(var(--chart-2))",
  },
  march: {
    label: "March",
    color: "hsl(var(--chart-3))",
  },
  april: {
    label: "April",
    color: "hsl(var(--chart-4))",
  },
  may: {
    label: "May",
    color: "hsl(var(--chart-5))",
  },
  june: {
    label: "June",
    color: "hsl(var(--chart-6))",
  },
} satisfies ChartConfig

export function Radialchart() {
  return (
    <Card className="flex flex-col w-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Feedback Score Radial Chart</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="month" />}
            />
            <RadialBar dataKey="feedbackScore" background />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing feedback scores from January to June 2024
        </div>
      </CardFooter>
    </Card>
  )
}
