import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function WhatsappButton() {
  return (
    <Link
      href="https://wa.me/6281905454606"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </Link>
  )
}
