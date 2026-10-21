#!/usr/bin/env bash
set -e

echo "Preparando entorno Node.js..."

# Forzar la instalación de Node antes de iniciar Reflex
node --version
npm --version

echo "Preparando entorno Python..."

python3 -m venv .venv
source .venv/bin/activate

python -m pip install --upgrade pip
python -m pip install -r requirements.txt

echo "Inicializando Reflex..."
reflex init --template blank

echo "Exportando portafolio..."
rm -rf public frontend.zip
reflex export --frontend-only

echo "Preparando archivos estáticos..."
mkdir -p public
unzip -o frontend.zip -d public

echo "Verificando archivos..."
test -f public/index.html

echo "¡Compilación completada!"