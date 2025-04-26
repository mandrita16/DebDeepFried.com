"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const emojis = ["😂", "🤦‍♂️", "🙄", "😱", "🤣"]

export default function EmojiReactions() {
  const [showEmojis, setShowEmojis] = useState(false)
  const [emitted, setEmitted] = useState<{ emoji: string; id: number; x: number; y: number }[]>([])
  const [emojiCount, setEmojiCount] = useState(0)

  const handleEmojiClick = (emoji: string) => {
    // Random position within button area
    const x = Math.random() * 40 - 20
    const y = -20

    setEmitted((prev) => [
      ...prev,
      {
        emoji,
        id: Date.now(),
        x,
        y,
      },
    ])

    // Remove emoji after animation
    setTimeout(() => {
      setEmitted((prev) => prev.filter((e) => e.id !== Date.now()))
    }, 2000)

    setEmojiCount((prev) => prev + 1)
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        {emitted.map(({ emoji, id, x, y }) => (
          <motion.div
            key={id}
            initial={{ opacity: 1, scale: 0.5, x, y }}
            animate={{
              opacity: [1, 1, 0],
              scale: [0.5, 1.5, 1],
              y: y - 100,
              x: x + (Math.random() * 50 - 25),
            }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute text-2xl pointer-events-none"
          >
            {emoji}
          </motion.div>
        ))}

        <motion.button
          onClick={() => setShowEmojis(!showEmojis)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-purple-500/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {emojiCount > 0 ? (
            <span className="text-xl">{emojis[emojiCount % emojis.length]}</span>
          ) : (
            <span className="text-xl">😆</span>
          )}
        </motion.button>

        <AnimatePresence>
          {showEmojis && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: -60 }}
              exit={{ opacity: 0, scale: 0.8, y: 0 }}
              className="absolute bottom-full right-0 mb-2 bg-black/60 backdrop-blur-sm p-2 rounded-full border border-purple-500/30 flex gap-2"
            >
              {emojis.map((emoji) => (
                <motion.button
                  key={emoji}
                  onClick={() => handleEmojiClick(emoji)}
                  className="text-2xl hover:scale-125 transition-transform"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {emoji}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
