"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Reveal } from "@/components/reveal-animation"
import { ThemeToggle } from "@/components/theme-toggle"

export function DarkModeDemo() {
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("light")

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setTheme(tab)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gradient-blue">
            Seamless Experience in Any Mode
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-lg text-center text-agile-gray dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Our website is designed to provide optimal readability and usability in both light and dark modes, ensuring
            a comfortable viewing experience at any time of day.
          </p>
        </Reveal>

        <div className="flex flex-col items-center mb-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full flex mb-4">
            <button
              className={`px-4 py-2 rounded-full flex items-center ${
                activeTab === "light" ? "bg-white dark:bg-gray-700 shadow-sm" : "text-gray-500 dark:text-gray-400"
              }`}
              onClick={() => handleTabChange("light")}
            >
              <Sun className="mr-2 h-4 w-4" />
              Light
            </button>
            <button
              className={`px-4 py-2 rounded-full flex items-center ${
                activeTab === "dark" ? "bg-white dark:bg-gray-700 shadow-sm" : "text-gray-500 dark:text-gray-400"
              }`}
              onClick={() => handleTabChange("dark")}
            >
              <Moon className="mr-2 h-4 w-4" />
              Dark
            </button>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm text-agile-gray dark:text-gray-300 mb-2">Try the theme toggle:</p>
            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal direction="right">
            <Card className="overflow-hidden">
              <CardHeader className="bg-agile-blue dark:bg-agile-blue-dark text-white">
                <CardTitle>Button Contrast Demo</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h3 className="text-lg font-medium mb-4 dark:text-white">Light Background</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="blue">Primary Button</Button>
                      <Button variant="red">Secondary Button</Button>
                      <Button variant="outlineBlue">Outline Button</Button>
                    </div>
                  </div>

                  <div className="p-4 bg-agile-dark dark:bg-gray-900 rounded-lg">
                    <h3 className="text-lg font-medium mb-4 text-white">Dark Background</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="blue">Primary Button</Button>
                      <Button variant="red">Secondary Button</Button>
                      <Button variant="outline" className="border-white text-white hover:bg-white/10">
                        Outline Button
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal direction="left">
            <Card className="overflow-hidden">
              <CardHeader className="bg-agile-green dark:bg-agile-green-dark text-white dark:text-agile-dark">
                <CardTitle>Form Elements Demo</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">Input Field</label>
                    <input
                      type="text"
                      placeholder="Enter text here"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-agile-blue focus:border-agile-blue dark:bg-gray-800 dark:text-white dark:focus:ring-agile-blue-dark dark:focus:border-agile-blue-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">Select Menu</label>
                    <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-agile-blue focus:border-agile-blue dark:bg-gray-800 dark:text-white dark:focus:ring-agile-blue-dark dark:focus:border-agile-blue-dark">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>

                  <Button variant="green" className="w-full">
                    Submit Form
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
