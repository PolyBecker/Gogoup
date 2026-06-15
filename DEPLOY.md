# Deploy — Cloudflare Pages

Este site é uma **landing page Next.js exportada como site estático** (`output: "export"`),
publicada no **Cloudflare Pages** via **integração Git nativa**: o Cloudflare conecta no
repositório e, a cada `push` na `main`, faz o build e publica automaticamente.

- Projeto Cloudflare Pages: **`gogoup`**
- Domínio: **gogoup.com** (DNS já está na Cloudflare)
- Branch de produção: **`main`**

---

## Configuração no painel do Cloudflare Pages (1 vez)

Ao conectar o repositório (**Workers & Pages → Create → Pages → Connect to Git**), use
**exatamente** estas opções de build:

| Campo                    | Valor                                   |
| ------------------------ | --------------------------------------- |
| Framework preset         | **Next.js (Static HTML Export)**        |
| Build command            | `npm run build`                         |
| Build output directory   | `out`                                   |
| Root directory           | `/` (padrão)                            |
| Production branch         | `main`                                  |

> ⚠️ **Não** escolha o preset "Next.js" comum (esse usa o adaptador SSR `next-on-pages`).
> Este site é 100% estático — tem que ser **"Static HTML Export"** com saída em `out`.

A versão do Node já está fixada pelo arquivo [`.nvmrc`](.nvmrc) (Node 20).

## Domínio

Depois do primeiro deploy: **Workers & Pages → gogoup → Custom domains → Set up a domain**.
Adicione **`gogoup.com`** e **`www.gogoup.com`**. Como o DNS já está na Cloudflare, os
registros e o HTTPS são configurados automaticamente.

A partir daí, **todo push na `main` republica o site sozinho**.

---

## Notas técnicas

- **Export estático**: como o site usa `next/image`, o `next.config.ts` define
  `images.unoptimized: true` (não há otimização de imagem sob demanda em export estático;
  o CDN da Cloudflare cuida do cache).
- Sem rotas de API, server actions ou SSR — 100% estático, servido pela borda da Cloudflare
  (inclui POPs no Brasil: São Paulo, Rio, Fortaleza...).

## Rodar localmente

```bash
npm install
npm run dev      # desenvolvimento (http://localhost:3000)
npm run build    # gera o site estático em ./out
```

## Alternativa: CI/CD via GitHub Actions

Caso um dia prefira buildar no GitHub em vez da integração nativa do Cloudflare, dá para usar
a action oficial `cloudflare/wrangler-action` (build no Actions → `wrangler pages deploy out`),
configurando os secrets `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID`. Não é necessário
enquanto a integração nativa estiver ativa — use uma **ou** a outra, nunca as duas.
