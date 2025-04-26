"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function TantrumSection({ id }: { id: string }) {
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
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-b from-blue-950 via-gray-900 to-gray-950"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-800/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div className="max-w-4xl mx-auto" style={{ opacity, scale }}>
          <h2 className="text-4xl font-bold mb-10 text-white text-center">
            <span className="relative inline-block">
              Tantrum Mode
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-500 rounded-lg blur-lg opacity-75"
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
                className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-orange-900/30"
                whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Epic Meltdowns</h3>
                <p className="text-gray-200 mb-6">
                  When things don&apos;t go his way, Debdeep transforms into a toddler having a meltdown. Complete with
                  stomping feet, flailing arms, and dramatic expressions, his tantrums are legendary performances that
                  no one asked for.
                </p>
                <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white">
                  Experience The Drama
                </Button>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2">
              <motion.div
                className="relative h-80 md:h-96 bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden flex items-center justify-center border border-orange-900/30"
                whileInView={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Character Animation */}
                <motion.div
                  className="relative"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <div className="w-40 h-60 bg-gray-400 rounded-full relative">
                    {/* Simplified character */}
                    <div className="absolute w-full h-1/3 top-0 rounded-full bg-gray-300"></div>

                    {/* Arms for flailing */}
                    <motion.div
                      className="absolute left-0 top-1/3 w-16 h-4 bg-gray-300 rounded-full origin-right"
                      animate={{
                        rotate: [0, 45, 0, -45, 0],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    ></motion.div>

                    <motion.div
                      className="absolute right-0 top-1/3 w-16 h-4 bg-gray-300 rounded-full origin-left"
                      animate={{
                        rotate: [0, -45, 0, 45, 0],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    ></motion.div>

                    {/* Legs for stomping */}
                    <motion.div
                      className="absolute bottom-0 left-1/4 w-4 h-16 bg-gray-500 origin-top"
                      animate={{
                        y: [0, 5, 0],
                      }}
                      transition={{
                        duration: 0.3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 0.15,
                      }}
                    ></motion.div>

                    <motion.div
                      className="absolute bottom-0 right-1/4 w-4 h-16 bg-gray-500 origin-top"
                      animate={{
                        y: [0, 5, 0],
                      }}
                      transition={{
                        duration: 0.3,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    ></motion.div>
                  </div>

                  {/* Tantrum effects */}
                  <motion.div
                    className="absolute -top-10 -left-10 -right-10 -bottom-10"
                    animate={{
                      opacity: [0, 0.7, 0],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <div className="h-full w-full bg-gradient-to-r from-orange-500 to-red-500 blur-xl rounded-full opacity-30" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
