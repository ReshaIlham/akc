import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal-animation"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
  color?: "red" | "green" | "blue" | "default"
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
  color = "default",
}: SectionHeadingProps) {
  const getGradientClass = () => {
    switch (color) {
      case "red":
        return "text-gradient-red"
      case "green":
        return "text-gradient-green"
      case "blue":
        return "text-gradient-blue"
      default:
        return ""
    }
  }

  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <Reveal>
        <h2 className={cn("text-4xl md:text-5xl font-extrabold mb-4", getGradientClass())}>{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={200}>
          <p className="text-lg text-agile-gray max-w-3xl mx-auto">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
