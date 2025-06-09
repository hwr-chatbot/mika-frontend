#!/bin/bash
set -e

APP_DIR="/home/s_winklerf23/apps/mika-frontend"
REPO_URL="git@github.com:hwr-chatbot/mika-frontend.git"

echo "📁 Wechsle ins App-Verzeichnis: $APP_DIR"

if [ ! -d "$APP_DIR" ]; then
  echo "📦 Verzeichnis existiert nicht. Klone Repository..."
  git clone "$REPO_URL" "$APP_DIR"
fi

cd "$APP_DIR"

echo "🔄 Hole aktuelle Änderungen aus Git..."
git pull origin main

echo "📦 Installiere Abhängigkeiten..."
npm install

echo "🔨 Baue das Projekt..."
npm run build

echo "🚀 Starte oder restarte den Webserver mit PM2..."
pm2 restart mika-frontend || pm2 start "npm run preview -- --port 5173" --name mika-frontend

echo "✅ Deployment abgeschlossen!"
