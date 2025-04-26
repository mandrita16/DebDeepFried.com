"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function IntroSection({ id }: { id: string }) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-b from-purple-950 via-gray-900 to-indigo-950"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-800/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="max-w-3xl mx-auto bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-purple-900/30"
          style={{ opacity }}
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white text-center">
            <span className="relative inline-block">
              Debdeep&apos;s Persona
              <motion.span
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur-lg opacity-75"
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
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            Meet Debdeep, a comically overconfident individual who thinks he&apos;s a &quot;sigma male&quot; (a la Kabir
            Singh), yet the reality is far from his delusional perception. His world is a fascinating contrast between
            how he sees himself and how others perceive him.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed">
            As you journey through his life, you&apos;ll witness his dramatic blame-shifting, failed attempts at
            cuteness, his signature &quot;model&quot; walk, and of course, his legendary tantrums when things don&apos;t
            go his way.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
