"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote } from "lucide-react"

const sigmaQuotes = [
  "I'm not ignoring you, I'm just in my sigma grindset mode.",
  "When I walk into a room, people think 'wow, what a sigma'... at least in my head.",
  "I don't have an attitude problem. You have a perception problem.",
  "I'm not dramatic, I'm a sigma male. There's a difference.",
  "My mom says I'm special, and that's all the validation I need.",
  "I don't make mistakes, I create alternative winning strategies.",
  "It's not a tantrum if you call it 'expressing your sigma energy'.",
  "I'm not late, everyone else is simply too early.",
  "I don't lose arguments, I just allow you to experience the illusion of victory.",
  "My walk isn't weird, it's called 'signature sigma stride'.",
]

export default function FunnyQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % sigmaQuotes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-xs">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
        <div className="bg-black/60 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30">
          <Quote className="h-6 w-6 text-purple-400 mb-2 float-left mr-2" />
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuote}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-white/90 text-sm italic"
            >
              {sigmaQuotes[currentQuote]}
            </motion.p>
          </AnimatePresence>
          <div className="clear-both"></div>
        </div>
        <motion.div
          className="absolute -bottom-2 left-4 w-4 h-4 bg-black/60 rotate-45 border-r border-b border-purple-500/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </motion.div>
    </div>
  )
}
