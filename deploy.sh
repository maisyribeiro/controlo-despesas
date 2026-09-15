#!/bin/bash

# Script para deploy no Vercel
# Uso: ./deploy.sh [prod]

echo "🚀 Iniciando deploy no Vercel..."

if [ "$1" == "prod" ]; then
  echo "📦 Deploy em PRODUÇÃO (--prod)..."
  vercel --prod
else
  echo "📦 Deploy em staging..."
  vercel
fi

echo "✅ Deploy concluído!"
echo ""
echo "Podes acessar o dashboard em:"
echo "  Dashboard de Campanhas:"
echo "    https://[teu-url].vercel.app/dashboard-campanhas.html"
echo "  Dashboard de Despesas:"
echo "    https://[teu-url].vercel.app/index.html"
