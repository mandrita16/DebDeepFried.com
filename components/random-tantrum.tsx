"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function RandomTantrum() {
  const [showTantrum, setShowTantrum] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Show tantrum randomly
    const timer = setTimeout(
      () => {
        if (Math.random() < 0.7) {
          // 70% chance to show
          setPosition({
            x: Math.random() * (window.innerWidth - 300),
            y: Math.random() * (window.innerHeight - 200),
          })
          setShowTantrum(true)

          // Auto hide after some time if not closed
          setTimeout(() => {
            setShowTantrum(false)
          }, 8000)
        }
      },
      15000 + Math.random() * 30000,
    ) // Random time between 15-45 seconds

    return () => clearTimeout(timer)
  }, [])

  const tantrumTexts = [
    "WHY IS NO ONE PAYING ATTENTION TO ME?!",
    "I CAN'T BELIEVE YOU CLICKED THAT!",
    "THIS WEBSITE IS RIGGED AGAINST ME!",
    "I'M LITERALLY THE MAIN CHARACTER HERE!",
    "STOP SCROLLING AND LOOK AT ME!",
  ]

  const randomText = tantrumTexts[Math.floor(Math.random() * tantrumTexts.length)]

  return (
    <AnimatePresence>
      {showTantrum && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          style={{
            position: "fixed",
            top: position.y,
            left: position.x,
            zIndex: 100,
          }}
          className="max-w-xs"
        >
          <div className="bg-red-950/90 backdrop-blur-md p-4 rounded-lg border-2 border-red-500 shadow-lg">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-white font-bold">Debdeep's Tantrum</h3>
              <button onClick={() => setShowTantrum(false)} className="text-white/70 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 0.3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <p className="text-white font-bold text-lg">{randomText}</p>
            </motion.div>

            <div className="mt-3 flex gap-2">
              <motion.div
                className="h-2 bg-red-500 rounded-full"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 8, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
