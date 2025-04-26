"use client"

import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface Project {
  name: string
  url: string
  icon: LucideIcon
}

interface NavProjectsProps {
  projects: Project[]
}

export function NavProjects({ projects }: NavProjectsProps) {
  return (
    <div className="px-3 py-2">
      <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-white/70 group-has-[[data-collapsible=icon]]/sidebar-wrapper:text-center">
        Projects
      </h2>
      <div className="space-y-1">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            className={cn(
              "flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white group-has-[[data-collapsible=icon]]/sidebar-wrapper:justify-center",
            )}
          >
            <project.icon className="h-5 w-5" />
            <span className="group-has-[[data-collapsible=icon]]/sidebar-wrapper:hidden">{project.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
