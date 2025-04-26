"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function BlameGameSection({ id }: { id: string }) {
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
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-b from-indigo-950 via-gray-900 to-red-950"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-800/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div className="max-w-4xl mx-auto" style={{ opacity, scale }}>
          <h2 className="text-4xl font-bold mb-10 text-white text-center">
            <span className="relative inline-block">
              The Blame Game
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg blur-lg opacity-75"
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
                className="relative h-80 md:h-96 bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden flex items-center justify-center border border-red-900/30"
                whileInView={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Character Animation */}
                <motion.div
                  className="relative"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <div className="w-40 h-60 bg-gray-400 rounded-full relative">
                    {/* Simplified character */}
                    <div className="absolute w-full h-1/3 top-0 rounded-full bg-gray-300"></div>

                    {/* Pointing finger */}
                    <motion.div
                      className="absolute -right-16 top-1/3 w-20 h-4 bg-gray-300 rounded-full origin-left"
                      animate={{
                        rotate: [0, 30, 0, -30, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    ></motion.div>
                  </div>

                  {/* Thought bubble */}
                  <motion.div
                    className="absolute -top-16 -right-20 bg-white rounded-xl p-3 shadow-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1.2, 1],
                      opacity: [0, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 2,
                    }}
                  >
                    <motion.p
                      className="text-black font-bold text-sm"
                      animate={{
                        textShadow: [
                          "0 0 5px rgba(255,0,0,0)",
                          "0 0 10px rgba(255,0,0,0.5)",
                          "0 0 5px rgba(255,0,0,0)",
                        ],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      It&apos;s YOUR fault!
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2">
              <motion.div
                className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-red-900/30"
                whileInView={{ x: [50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Master of Deflection</h3>
                <p className="text-gray-200 mb-6">
                  When things go wrong (which is often), Debdeep has mastered the art of pointing fingers. His dramatic
                  accusations come with theatrical gestures and an unwavering conviction that he is never, ever at
                  fault.
                </p>
                <Button className="bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 text-white">
                  Witness His Excuses
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
