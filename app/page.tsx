"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { ChevronDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import IntroSection from "@/components/intro-section"
import BlameGameSection from "@/components/blame-game-section"
import CuteSection from "@/components/cute-section"
import SigmaWalkSection from "@/components/sigma-walk-section"
import TantrumSection from "@/components/tantrum-section"
import FunnyQuotes from "@/components/funny-quotes"
import EmojiReactions from "@/components/emoji-reactions"
import DebdeepCursor from "@/components/debdeep-cursor"
import RandomTantrum from "@/components/random-tantrum"
import SigmaTips from "@/components/sigma-tips"
import DramaticAudioButton from "@/components/dramatic-audio-button"

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-purple-950">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet{" "}
            <span className="relative inline-block">
              Debdeep
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur-lg opacity-75"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The{" "}
            <span className="font-bold relative">
              Sigma Male
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur-lg opacity-75"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </span>{" "}
            you never knew you needed
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold"
              onClick={() => {
                document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Discover His World <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </section>

      {/* Introduction Section */}
      <IntroSection id="intro" />

      {/* The Blame Game Section */}
      <BlameGameSection id="blame-game" />

      {/* Trying to Be Cute Section */}
      <CuteSection id="cute" />

      {/* The "Sigma" Walk Section */}
      <SigmaWalkSection id="sigma-walk" />

      {/* Tantrum Mode Section */}
      <TantrumSection id="tantrum" />

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8 text-center border-t border-gray-800">
        <p className="text-sm opacity-70">Created with 💥 for the one and only Debdeep</p>
      </footer>

      {/* Funny interactive elements */}
      <FunnyQuotes />
      <EmojiReactions />
      <DebdeepCursor />
      <RandomTantrum />
      <SigmaTips />
      <DramaticAudioButton />
    </div>
  )
}
