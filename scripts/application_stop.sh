#!/bin/bash
set -e

echo "=========================================="
echo "Stopping existing application (if running)"
echo "=========================================="

pm2 delete zyntra-auth-service || true

echo "✓ Application stopped (if it was running)"
