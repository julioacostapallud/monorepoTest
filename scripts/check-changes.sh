#!/bin/bash

# Script para verificar cambios en el monorepo
# Uso: ./scripts/check-changes.sh [frontend|backend]

PROJECT=$1

if [ "$PROJECT" = "frontend" ]; then
    # Verificar si hay cambios en frontend o netlify.toml
    if git diff --quiet HEAD^ HEAD -- frontend/ netlify.toml; then
        echo "No changes detected in frontend - skipping build"
        exit 1
    else
        echo "Changes detected in frontend - proceeding with build"
        exit 0
    fi
elif [ "$PROJECT" = "backend" ]; then
    # Verificar si hay cambios en backend o vercel.json
    if git diff --quiet HEAD^ HEAD -- backend/ vercel.json .vercelignore; then
        echo "No changes detected in backend - skipping build"
        exit 1
    else
        echo "Changes detected in backend - proceeding with build"
        exit 0
    fi
else
    echo "Usage: $0 [frontend|backend]"
    exit 1
fi
