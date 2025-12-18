#!/bin/bash

# Stop script on error
set -e

echo "🚀 Starting deployment..."

# 1. Update code (Optional, if you want to sync git on server)
echo "📦 Pulling latest code..."
git pull origin main

# 2. Login to Registry (if needed) & Pull latest images
echo "📥 Pulling latest Docker images..."
if ! docker compose pull; then
    echo "Authentication required..."
    echo "Please ensure GHCR_PAT and GHCR_USER are set or login manually."
    if [ ! -z "$GHCR_PAT" ] && [ ! -z "$GHCR_USER" ]; then
        echo $GHCR_PAT | docker login ghcr.io -u $GHCR_USER --password-stdin
        docker compose pull
    else
        echo "❌ Login failed. Exiting."
        exit 1
    fi
fi

# 3. Restart containers
echo "🔄 Restarting containers..."
docker compose up -d

# 4. Cleanup
echo "🧹 Cleaning up unused images..."
docker image prune -f

echo "✅ Deployment completed successfully!"
