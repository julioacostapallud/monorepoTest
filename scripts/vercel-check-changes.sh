#!/bin/bash

# Script para verificar cambios en el backend para Vercel
# Este script se ejecuta antes del build en Vercel

echo "🔍 Verificando cambios en el backend..."

# Verificar si hay cambios en backend/ o archivos de configuración de Vercel
if git diff --quiet HEAD^ HEAD -- backend/ backend/vercel.json; then
    echo "❌ No hay cambios en el backend - cancelando build"
    exit 1  # Vercel cancela el build cuando el script retorna 1
else
    echo "✅ Cambios detectados en el backend - procediendo con build"
    exit 0  # Vercel procede con el build cuando el script retorna 0
fi
