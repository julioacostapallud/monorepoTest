#!/bin/bash

# Script de build para Vercel que verifica cambios en backend
echo "🔍 Checking for backend changes..."

# Verificar si hay cambios en backend o archivos de configuración de Vercel
if git diff --quiet HEAD^ HEAD -- backend/ vercel.json .vercelignore; then
    echo "❌ No changes detected in backend - skipping Vercel build"
    exit 1
else
    echo "✅ Changes detected in backend - proceeding with Vercel build"
    echo "🚀 Building backend for Vercel deployment..."
    exit 0
fi
