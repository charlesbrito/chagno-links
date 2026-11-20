
import {
  ArrowUpRight,
  Instagram,
  MessageCircle,
  Globe2,
  ShoppingBag,
  Link2,
} from 'lucide-react'

import type { LucideIcon } from 'lucide-react'

interface LinkButtonProps {
  link: {
    id: string
    title: string
    description: string
    url: string
    icon: string
    external: boolean
  }
}

const iconMap: Record<string, LucideIcon> = {
  instagram: Instagram,
  whatsapp: MessageCircle,
  globe: Globe2,
  store: ShoppingBag,
}

export default function LinkButton({ link }: LinkButtonProps) {
  const Icon = iconMap[link.icon] || Link2

  return (
    <a
      href={link.url}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      className="link-card group flex min-h-[76px] items-center gap-4 rounded-2xl px-5 py-4"
      aria-label={`${link.title}: ${link.description}`}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.045] text-zinc-200 transition duration-300 group-hover:border-white/15 group-hover:bg-white/[0.09] group-hover:text-white">
        <Icon size={19} strokeWidth={1.7} />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-medium text-zinc-100">
          {link.title}
        </span>

        <span className="mt-1 block text-xs leading-5 text-zinc-500">
          {link.description}
        </span>
      </span>

      <ArrowUpRight
        size={18}
        strokeWidth={1.6}
        className="shrink-0 text-zinc-600 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-200"
      />
    </a>
  )
}
