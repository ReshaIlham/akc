import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 line-height-1.5",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Custom variants with proper dark mode support and improved contrast
        blue: "bg-agile-blue text-white hover:bg-agile-blue/90 dark:bg-agile-blue-dark dark:text-white dark:hover:bg-agile-blue-dark/90",
        red: "bg-agile-red text-white hover:bg-agile-red/90 dark:bg-agile-red-dark dark:text-white dark:hover:bg-agile-red-dark/90",
        green:
          "bg-agile-green text-white hover:bg-agile-green/90 dark:bg-agile-green-dark dark:text-white dark:hover:bg-agile-green-dark/90",
        outlineBlue:
          "border-2 border-agile-blue text-agile-blue hover:bg-agile-blue/10 dark:border-agile-blue-dark dark:text-white dark:hover:bg-agile-blue-dark/10",
        outlineRed:
          "border-2 border-agile-red text-agile-red hover:bg-agile-red/10 dark:border-agile-red-dark dark:text-white dark:hover:bg-agile-red-dark/10",
        outlineGreen:
          "border-2 border-agile-green text-agile-green hover:bg-agile-green/10 dark:border-agile-green-dark dark:text-white dark:hover:bg-agile-green-dark/10",
        // Outline variants specifically for dark backgrounds
        outlineDark: "border-2 border-white text-white hover:bg-white/10",
        outlineLight: "border-2 border-agile-dark text-agile-dark hover:bg-agile-dark/10",
        // White button for dark backgrounds
        white: "bg-white text-agile-blue hover:bg-gray-100 dark:bg-white dark:text-agile-blue dark:hover:bg-gray-100",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
