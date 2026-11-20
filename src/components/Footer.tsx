
interface FooterProps {
  text: string
}

export default function Footer({ text }: FooterProps) {
  return (
    <footer className="pt-8 text-center">
      <div className="mx-auto mb-5 h-px w-10 bg-white/10" />
      <p className="text-[11px] leading-5 text-zinc-600">
        {text}
      </p>
    </footer>
  )
}
