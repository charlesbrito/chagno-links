
interface Profile {
  companyName: string
  tagline: string
  logo?: string
  initials: string
  footer: string
}

interface LinkItem {
  id: string
  title: string
  description: string
  url: string
  icon: string
  external: boolean
}

// Edite este arquivo para personalizar a página sem mexer no layout.
export const profile: Profile = {
  companyName: 'Chagno Tech',
  tagline: 'Conectando você ao que importa.',
  // Coloque sua imagem em public/logo.png. Use null para exibir as iniciais.
  logo: `${import.meta.env.BASE_URL}logo.png`,
  initials: 'CT',
  footer: '© 2026 Chagno Tech. Todos os direitos reservados.',
}

export const links: LinkItem[] = [
  {
    id: 'instagram',
    title: 'Instagram',
    description: 'Acompanhe nossas novidades',
    url: 'https://www.instagram.com/chagnotech/',
    icon: 'instagram',
    external: true,
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    description: 'Fale diretamente com nossa equipe',
    url: 'https://wa.me/5573998323233',
    icon: 'whatsapp',
    external: true,
  },
  /*{
    id: 'website',
    title: 'Site institucional',
    description: 'Conheça nossa empresa e soluções',
    url: 'https://seudominio.com.br',
    icon: 'globe',
    external: true,
  },
  {
    id: 'store',
    title: 'Loja online',
    description: 'Explore nossos produtos',
    url: 'https://loja.seudominio.com.br',
    icon: 'store',
    external: true,
  },*/
]
