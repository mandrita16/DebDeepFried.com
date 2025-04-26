"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function DebdeepCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseDown = () => {
      setIsActive(true)
      setShowText(true)
      setTimeout(() => setShowText(false), 2000)
    }
    const handleMouseUp = () => setIsActive(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  // Only show on 20% of page loads to avoid being too annoying
  const [shouldShow] = useState(() => Math.random() < 0.2)

  if (!shouldShow) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: isActive ? 0.8 : 1,
      }}
      transition={{ type: "spring", damping: 10, stiffness: 100 }}
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="relative">
        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-sm opacity-70" />

        {showText && (
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 0.5 }}
            animate={{ opacity: 1, y: -40, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute whitespace-nowrap bg-black/70 text-white text-xs px-2 py-1 rounded"
          >
            That's MY click! 😤
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
