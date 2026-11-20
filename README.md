# LinkHub Premium

Página de links responsiva construída com React, Vite e Tailwind CSS.

## Requisitos
- Node.js 20.19+ ou 22.12+
- npm

## Instalação
```bash
npm install
npm run dev
```
Abra o endereço local informado pelo Vite (normalmente http://localhost:5173).

## Personalização
Edite `src/data/links.js` para alterar:
- Nome da empresa e descrição;
- Logo;
- Instagram, WhatsApp, site e loja;
- Texto e descrição de cada botão.

Coloque sua logo em `public/logo.png` e mantenha `logo: '/logo.png'` em `src/data/links.js`.
Se não tiver logo ainda, a página mostra um monograma com as iniciais da empresa.

## Publicar
Gere a versão de produção:
```bash
npm run build
```
A pasta `dist/` será criada. Publique o conteúdo dessa pasta em uma hospedagem estática, como Cloudflare Pages, Netlify, Vercel ou hospedagem tradicional compatível com arquivos estáticos.

## Observações
- Os links são configurados em um único arquivo.
- O botão do WhatsApp deve usar o formato `https://wa.me/55DDDNUMERO`, apenas números, com código do país e DDD.
- Troque os endereços de exemplo antes de publicar.
