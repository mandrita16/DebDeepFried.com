"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function SigmaWalkSection({ id }: { id: string }) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-b from-pink-950 via-gray-900 to-blue-950"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-800/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div className="max-w-4xl mx-auto" style={{ opacity, scale }}>
          <h2 className="text-4xl font-bold mb-10 text-white text-center">
            <span className="relative inline-block">
              The &quot;Sigma&quot; Walk
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
            </span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <motion.div
                className="relative h-80 md:h-96 bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden flex items-center justify-center border border-blue-900/30"
                whileInView={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Character Animation */}
                <motion.div
                  className="relative"
                  animate={{
                    x: [-50, 50],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <div className="w-40 h-60 bg-gray-400 rounded-full relative">
                    {/* Simplified character */}
                    <div className="absolute w-full h-1/3 top-0 rounded-full bg-gray-300"></div>

                    {/* Hair for flipping */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-10 bg-gray-800 rounded-t-full"
                      animate={{
                        rotateZ: [0, 30, 0, -30, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />

                    {/* Legs for walking */}
                    <motion.div
                      className="absolute bottom-0 left-1/4 w-4 h-16 bg-gray-500 origin-top"
                      animate={{
                        rotate: [0, 30, 0, -30, 0],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />

                    <motion.div
                      className="absolute bottom-0 right-1/4 w-4 h-16 bg-gray-500 origin-top"
                      animate={{
                        rotate: [0, -30, 0, 30, 0],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                  </div>

                  {/* Hair flip trail */}
                  <motion.div
                    className="absolute top-0 left-0 right-0"
                    animate={{
                      opacity: [0, 0.7, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <div className="h-20 w-full bg-gradient-to-r from-blue-500 to-cyan-300 blur-md rounded-full opacity-50" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2">
              <motion.div
                className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-blue-900/30"
                whileInView={{ x: [50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Runway Disaster</h3>
                <p className="text-gray-200 mb-6">
                  Debdeep&apos;s &quot;model&quot; walk is a sight to behold. What he imagines as a smooth, confident
                  strut is actually a chaotic series of jumps, flips, and hair flicks that leave onlookers both confused
                  and entertained.
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                  Watch His Catwalk
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
