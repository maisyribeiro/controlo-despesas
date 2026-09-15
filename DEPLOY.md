# 📡 Deploy no Vercel

## Opção 1: Deploy Automático (Recomendado)

Conecta o repositório GitHub ao Vercel:

1. Vai para https://vercel.com
2. Clica em "New Project"
3. Seleciona o repositório `maisyribeiro/controlo-despesas`
4. Vercel detetará automaticamente que é um projeto HTML estático
5. Clica em "Deploy"

**Pronto!** Cada push para `master` (ou a branch que configurares) vai fazer auto-deploy.

---

## Opção 2: Deploy Manual (CLI)

```bash
# 1. Autentica-te no Vercel (primeira vez só)
vercel login

# 2. Deploy da branch atual
vercel --prod

# 3. Verá um URL como: https://controlo-despesas-xxxx.vercel.app
```

---

## URLs de Deploy

### Dashboard Principal (Controlo de Despesas)
```
https://controlo-despesas.vercel.app
ou
https://controlo-despesas-xxxx.vercel.app/index.html
```

### Dashboard de Campanhas (Novo - Single Client)
```
https://controlo-despesas-xxxx.vercel.app/dashboard-campanhas.html
```

### Aceder Diretamente
- Desktopo: https://seu-dominio-vercel.vercel.app/dashboard-campanhas.html
- Ou apontar domínio próprio no Vercel

---

## Estrutura do Projeto

```
controlo-despesas/
├── index.html                 (Dashboard de despesas)
├── dashboard-campanhas.html   (Dashboard de campanhas - NOVO)
├── vercel.json               (Config para Vercel)
└── .git/
```

---

## Dados da API

O dashboard de campanhas consome dados de:
```
https://dashboardmetaads-wheat.vercel.app/dashboard/campanhas
```

**Formato esperado:**
```json
{
  "cliente": "Nome do cliente",
  "resumo": {
    "gastos": 2450.50,
    "vendas": 31245.75,
    "roas": 12.75,
    "cpcMedio": 0.38,
    "ctr": 2.15,
    "conversoes": 145
  },
  "campanhas": [
    {
      "nome": "Campanha A",
      "impressoes": 45000,
      "cliques": 980,
      "ctr": 2.18,
      "gastos": 450.50,
      "vendas": 8900,
      "roi": 1875
    }
  ],
  "conteudo": [
    {
      "tipo": "Reel",
      "posts": 12,
      "impressoes": 85000,
      "cliques": 2100,
      "ctr": 2.47,
      "engagement": 4.2,
      "conversoes": 65,
      "cpa": 8.50,
      "roi": 185
    }
  ]
}
```

---

## Se a API não estiver disponível

O dashboard funciona com **dados de exemplo** automaticamente. Não há problema!

---

## Domínio Próprio

Para usar um domínio próprio no Vercel:

1. Vai a https://vercel.com/dashboard
2. Seleciona o projeto
3. Settings → Domains
4. Adiciona o teu domínio
5. Segue as instruções de DNS

---

**Status:** ✅ Pronto para deploy!
