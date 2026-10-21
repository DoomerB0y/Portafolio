#!/usr/bin/env bash
set -e

echo "Instalando dependencias..."
python3 -m venv .venv
source .venv/bin/activate

python -m pip install --upgrade pip
python -m pip install -r requirements.txt

echo "Inicializando Reflex..."
reflex init --template blank

echo "Exportando portafolio..."
rm -rf public
reflex export --frontend-only

echo "Preparando carpeta de publicacion..."
mkdir -p public
unzip -o frontend.zip -d public

echo "Verificando index.html..."
test -f public/index.html

echo "Compilacion completada correctamente."