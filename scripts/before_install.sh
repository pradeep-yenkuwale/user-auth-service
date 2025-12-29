#!/bin/bash
set -e

echo "Starting BeforeInstall"

if [ -d "/home/ubuntu/app" ]; then
    echo "Removing old app directory"
    rm -rf /home/ubuntu/app
fi

mkdir -p /home/ubuntu/app
echo "App directory created"