#!/bin/bash
set -e

APP_DIR="/home/s_winklerf23/apps/mika-frontend"
REPO_URL="git@github-frontend:hwr-chatbot/mika-frontend.git"

echo "📁 Wechsle ins App-Verzeichnis: $APP_DIR"

if [ ! -d "$APP_DIR/.git" ]; then
  echo "📦 Verzeichnis existiert nicht oder kein Git-Repo. Klone Repository..."
  git clone "$REPO_URL" "$APP_DIR"
fi

cd "$APP_DIR"

echo "🔄 Hole aktuelle Änderungen aus Git..."
git pull origin master

echo "📦 Installiere Abhängigkeiten mit Yarn..."
yarn install --frozen-lockfile

echo "🔨 Baue das Projekt..."
yarn build

echo "🚀 Starte oder restarte den Webserver mit PM2..."

if pm2 describe mika-frontend > /dev/null 2>&1; then
  echo "🔄 Prozess 'mika-frontend' gefunden, starte Neustart..."
  pm2 restart mika-frontend --update-env
else
  echo "🚀 Prozess 'mika-frontend' nicht gefunden, starte neu..."
  pm2 start "yarn preview --port 5173 --host 0.0.0.0" --name mika-frontend
fi

echo "✅ Deployment abgeschlossen!"
