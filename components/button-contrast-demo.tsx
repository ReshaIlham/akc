"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useTheme } from "next-themes"

export function ButtonContrastDemo() {
  const { theme } = useTheme()
  const [background, setBackground] = useState<"dark" | "light">("dark")

  return (
    <div className="space-y-8 py-8">
      <div className="flex justify-center space-x-4">
        <Button variant={background === "light" ? "blue" : "outline"} onClick={() => setBackground("light")}>
          Light Background
        </Button>
        <Button variant={background === "dark" ? "blue" : "outline"} onClick={() => setBackground("dark")}>
          Dark Background
        </Button>
      </div>

      <Card className={background === "dark" ? "bg-agile-dark" : "bg-white border"}>
        <div className="p-8">
          <h3 className={`text-xl font-bold mb-6 ${background === "dark" ? "text-white" : "text-agile-dark"}`}>
            Button Contrast Demo - {background === "dark" ? "Dark" : "Light"} Background
          </h3>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="blue">Primary Button</Button>
            <Button variant="red">Secondary Button</Button>
            <Button variant="green">Tertiary Button</Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant={background === "dark" ? "outlineDark" : "outlineBlue"}>Outline Primary</Button>
            <Button variant={background === "dark" ? "outlineDark" : "outlineRed"}>Outline Secondary</Button>
            <Button variant={background === "dark" ? "outlineDark" : "outlineGreen"}>Outline Tertiary</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
