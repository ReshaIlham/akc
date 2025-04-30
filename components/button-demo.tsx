import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex space-x-4 p-6 bg-agile-dark dark:bg-gray-900 rounded-lg">
      {/* This button will have proper contrast in both light and dark modes */}
      <Button variant="blue">Get Started</Button>

      {/* This button will have proper contrast in both light and dark modes */}
      <Button
        variant="outline"
        className="bg-white text-agile-dark hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:border-gray-600"
      >
        Learn More
      </Button>
    </div>
  )
}
