
import { useState } from 'react'

interface BrandHeaderProps {
  profile: {
    logo?: string
    companyName: string
    initials: string
    tagline: string
  }
}

export default function BrandHeader({ profile }: BrandHeaderProps) {
  const [imageError, setImageError] = useState<boolean>(false)

  const showLogo = profile.logo && !imageError

  return (
    <header className="flex flex-col items-center text-center">
      <div className="logo-frame mb-6">
        {showLogo ? (
          <img
            src={profile.logo}
            alt={`Logo ${profile.companyName}`}
            className="h-full w-full object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="font-semibold tracking-[0.12em] text-white">
            {profile.initials}
          </span>
        )}
      </div>

      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.34em] text-zinc-500">
        Bem-vindo(a)
      </p>

      <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-[30px]">
        {profile.companyName}
      </h1>

      <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-400">
        {profile.tagline}
      </p>
    </header>
  )
}
