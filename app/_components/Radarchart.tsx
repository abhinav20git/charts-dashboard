"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

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
  { month: "January", feedback: 4.2 },
  { month: "February", feedback: 4.5 },
  { month: "March", feedback: 4.3 },
  { month: "April", feedback: 4.7 },
  { month: "May", feedback: 4.6 },
  { month: "June", feedback: 4.8 },
]

const chartConfig = {
  feedback: {
    label: "Feedback Score",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Radarchart() {
  return (
    <Card className="w-full">
      <CardHeader className="items-center pb-4">
        <CardTitle>Radar Chart</CardTitle>
       
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="feedback"
              fill="var(--color-feedback)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 4.8% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          January - June 2024
        </div>
      </CardFooter> */}
    </Card>
  )
}
