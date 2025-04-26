"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CuteSection({ id }: { id: string }) {
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
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-b from-red-950 via-gray-900 to-pink-950"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-800/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div className="max-w-4xl mx-auto" style={{ opacity, scale }}>
          <h2 className="text-4xl font-bold mb-10 text-white text-center">
            <span className="relative inline-block">
              Trying to Be Cute
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-500 rounded-lg blur-lg opacity-75"
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

          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <motion.div
                className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-pink-900/30"
                whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Adorably Awkward</h3>
                <p className="text-gray-200 mb-6">
                  Debdeep&apos;s attempts at being cute are a spectacle to behold. From exaggerated thumbs-ups to forced
                  smiles that look more like grimaces, his efforts to charm are as endearing as they are unsuccessful.
                </p>
                <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white">
                  See His Cute Attempts
                </Button>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2">
              <motion.div
                className="relative h-80 md:h-96 bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden flex items-center justify-center border border-pink-900/30"
                whileInView={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Character Animation */}
                <motion.div
                  className="relative"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <div className="w-40 h-60 bg-gray-400 rounded-full relative">
                    {/* Simplified character */}
                    <div className="absolute w-full h-1/3 top-0 rounded-full bg-gray-300"></div>

                    {/* Thumbs up */}
                    <motion.div
                      className="absolute -right-10 top-1/3 w-12 h-16 bg-gray-300 rounded-lg origin-bottom"
                      animate={{
                        rotate: [0, 20, 0, -20, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <div className="absolute top-0 right-0 w-8 h-8 bg-gray-300 rounded-full"></div>
                    </motion.div>
                  </div>

                  {/* Sparkles */}
                  <motion.div
                    className="absolute -top-10 -right-10"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.5, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Sparkles className="h-10 w-10 text-pink-400" />
                  </motion.div>

                  <motion.div
                    className="absolute top-10 -left-10"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.5, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: 0.5,
                    }}
                  >
                    <Sparkles className="h-8 w-8 text-purple-400" />
                  </motion.div>

                  {/* Stumble animation */}
                  <motion.div
                    className="absolute bottom-0 w-full"
                    animate={{
                      x: [0, 10, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 2,
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
