"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isChanging, setIsChanging] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    setIsChanging(true)

    const timeout = setTimeout(() => {
      setDisplayChildren(children)
      setIsChanging(false)
    }, 600)

    return () => clearTimeout(timeout)
  }, [pathname, children])

  return (
    <div className="page-transition-wrapper">
      <div className={`page-transition-overlay ${isChanging ? "active" : ""}`} />
      <div className={`page-transition-content ${!isChanging ? "active" : ""}`}>{displayChildren}</div>
    </div>
  )
}
