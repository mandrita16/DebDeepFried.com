"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"

export default function DramaticAudioButton() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/dramatic-sound.mp3")
      audioRef.current.volume = 0.5
      audioRef.current.loop = true

      // Fallback to a console message if audio fails to load
      audioRef.current.onerror = () => {
        console.log("Audio couldn't be loaded. Imagine dramatic sigma male background music playing.")
      }
    }

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      const playPromise = audioRef.current.play()

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Playback prevented by browser. Click again to try.")
        })
      }
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <motion.button
        onClick={toggleAudio}
        className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-lg ${
          isPlaying
            ? "bg-gradient-to-r from-purple-600 to-pink-600"
            : "bg-black/60 backdrop-blur-sm border border-white/10"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isPlaying ? (
          <>
            <Volume2 className="h-4 w-4 text-white" />
            <span className="text-white text-sm">Sigma Soundtrack Playing</span>
          </>
        ) : (
          <>
            <VolumeX className="h-4 w-4 text-white/70" />
            <span className="text-white/70 text-sm">Play Sigma Soundtrack</span>
          </>
        )}
      </motion.button>
    </div>
  )
}
