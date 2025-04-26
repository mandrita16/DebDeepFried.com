"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  url: string
  icon: React.ElementType
  isActive?: boolean
  items?: {
    title: string
    url: string
  }[]
}

interface NavMainProps {
  items: NavItem[]
}

export function NavMain({ items }: NavMainProps) {
  const [openItem, setOpenItem] = useState<string | null>(items.find((item) => item.isActive)?.title || null)

  const toggleItem = (title: string) => {
    setOpenItem(openItem === title ? null : title)
  }

  return (
    <div className="space-y-1 py-2">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-white/70 group-has-[[data-collapsible=icon]]/sidebar-wrapper:text-center">
          Navigation
        </h2>
        <div className="space-y-1">
          {items.map((item) => (
            <div key={item.title} className="space-y-0.5">
              <button
                onClick={() => toggleItem(item.title)}
                className={cn(
                  "flex w-full items-center justify-between rounded-md px-4 py-2 text-sm font-medium hover:bg-white/10 group-has-[[data-collapsible=icon]]/sidebar-wrapper:justify-center",
                  item.isActive ? "bg-white/10 text-white" : "text-white/70",
                )}
              >
                <div className="flex items-center gap-3 group-has-[[data-collapsible=icon]]/sidebar-wrapper:justify-center">
                  <item.icon className="h-5 w-5" />
                  <span className="group-has-[[data-collapsible=icon]]/sidebar-wrapper:hidden">{item.title}</span>
                </div>
                {item.items && item.items.length > 0 && (
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform group-has-[[data-collapsible=icon]]/sidebar-wrapper:hidden",
                      openItem === item.title && "rotate-180",
                    )}
                  />
                )}
              </button>
              {item.items && item.items.length > 0 && openItem === item.title && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden group-has-[[data-collapsible=icon]]/sidebar-wrapper:hidden"
                >
                  <div className="space-y-1 px-4 py-2">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem.title}
                        href={subItem.url}
                        className="block rounded-md px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
