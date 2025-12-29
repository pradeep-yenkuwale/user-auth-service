#!/bin/bash
set -e

echo "Starting ApplicationStart"

cd /home/ubuntu/app

# Stop existing process if running (use your service name)
pm2 delete zyntra-auth-service 2>/dev/null || true

# Start with your service name
pm2 start dist/src/main.js --name zyntra-auth-service

# Save PM2 process list
pm2 save

# Show status
pm2 list

echo "ApplicationStart completed"