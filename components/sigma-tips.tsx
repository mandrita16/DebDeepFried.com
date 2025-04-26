"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lightbulb, ThumbsUp, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const sigmaTips = [
  "Tip #1: When someone asks how you are, just stare at them intensely for 10 seconds before saying 'grinding'.",
  "Tip #2: Always walk with your chin up so high that you can't see where you're going. That's how people know you're focused on your goals.",
  "Tip #3: If you trip and fall, claim you were just checking the floor quality. Sigmas are always inspecting their surroundings.",
  "Tip #4: Never admit you're wrong. Instead, say 'I was testing your knowledge' or 'I was seeing if you were paying attention'.",
  "Tip #5: When someone tells a joke, don't laugh. Just nod and say 'that's beta humor'.",
  "Tip #6: Randomly mention that you woke up at 4 AM, even if no one asked.",
  "Tip #7: If your food order is wrong, dramatically declare 'The universe is testing my patience' instead of just asking for it to be fixed.",
  "Tip #8: Take credit for other people's ideas but add 'as I always say' before repeating them.",
  "Tip #9: Wear sunglasses indoors. If anyone asks why, tell them 'my future is too bright'.",
  "Tip #10: When you lose at anything, claim you 'let them win' because you're 'focusing on bigger victories'.",
]

export default function SigmaTips() {
  const [showTip, setShowTip] = useState(false)
  const [currentTip, setCurrentTip] = useState(0)
  const [hasLiked, setHasLiked] = useState(false)

  const handleNextTip = () => {
    setCurrentTip((prev) => (prev + 1) % sigmaTips.length)
    setHasLiked(false)
  }

  const handleLike = () => {
    setHasLiked(true)
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <AnimatePresence>
        {showTip ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-black/70 backdrop-blur-sm p-4 rounded-xl border border-yellow-500/30 shadow-lg max-w-xs"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-400" />
                <h3 className="text-white font-bold">Sigma Male Tip</h3>
              </div>
              <button onClick={() => setShowTip(false)} className="text-white/70 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <p className="text-white/90 mb-4">{sigmaTips[currentTip]}</p>

            <div className="flex justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={handleNextTip}
                className="text-xs border-yellow-500/30 hover:bg-yellow-500/20"
              >
                Next Tip
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={`text-xs flex items-center gap-1 ${hasLiked ? "text-yellow-400" : "text-white/70"}`}
                disabled={hasLiked}
              >
                <ThumbsUp className="h-3 w-3" />
                {hasLiked ? "Sigma Approved" : "Approve"}
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            onClick={() => setShowTip(true)}
            className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-yellow-500/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Lightbulb className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
