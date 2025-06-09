#!/bin/bash
set -e

APP_DIR="/home/s_winklerf23/apps/mika-frontend"
REPO_URL="git@github-frontend:hwr-chatbot/mika-frontend.git"

echo "📁 Wechsle ins App-Verzeichnis: $APP_DIR"

if [ ! -d "$APP_DIR" ] || [ ! -d "$APP_DIR/.git" ]; then
  echo "📦 Verzeichnis existiert nicht oder ist kein Git-Repo. Klone Repository..."
  rm -rf "$APP_DIR"
  git clone "$REPO_URL" "$APP_DIR"
fi

cd "$APP_DIR"

echo "🔄 Hole aktuelle Änderungen aus Git..."
git pull origin master

echo "📦 Installiere Abhängigkeiten..."
npm install

echo "🔨 Baue das Projekt..."
npm run build

echo "🚀 Starte oder restarte den Webserver mit PM2..."
pm2 restart mika-frontend || pm2 start "npm run preview -- --port 5173" --name mika-frontend

echo "✅ Deployment abgeschlossen!"
