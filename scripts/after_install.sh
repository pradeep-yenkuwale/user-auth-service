#!/bin/bash
set -e

echo "=========================================="
echo "Starting AfterInstall"
echo "=========================================="

cd /home/ubuntu/app

# Install AWS CLI v2 if not already installed
if ! command -v aws &> /dev/null; then
    echo "AWS CLI not found. Installing AWS CLI v2..."
    
    # Install unzip if not present
    sudo apt-get update -qq
    sudo apt-get install -y unzip curl
    
    # Download and install AWS CLI v2
    cd /tmp
    curl -s "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
    unzip -q awscliv2.zip
    sudo ./aws/install
    
    # Clean up
    rm -rf aws awscliv2.zip
    
    # Verify installation
    /usr/local/bin/aws --version
    echo "AWS CLI installed successfully"
    
    # Go back to app directory
    cd /home/ubuntu/app
else
    echo "AWS CLI already installed: $(aws --version)"
fi

# Ensure aws is in PATH
export PATH="/usr/local/bin:$PATH"


# Remove old .env if it exists
if [ -f ".env" ]; then
    echo "Removing existing .env file..."
    rm -f .env
fi

# Create .env file
echo "=========================================="
echo "Creating .env file"
echo "=========================================="

cat > .env << EOF
TOKEN_SECRET=zyntra-token-secrete-key-zyntrathebrand
JWT_SECRET=zyntrathebrand
NODE_ENV=production
USER_SERVICE=http://localhost:3500
APP_PORT=3200
EOF

echo "✓ .env file created"

# Verify package.json exists
if [ ! -f "package.json" ]; then
    echo "ERROR: package.json not found"
    exit 1
fi

# Install dependencies
echo "=========================================="
echo "Installing dependencies"
echo "=========================================="
npm install
echo "✓ Dependencies installed"

# Build application
echo "=========================================="
echo "Building application"
echo "=========================================="
npm run build
echo "✓ Build completed"

# Verify dist folder was created
if [ ! -d "dist" ]; then
    echo "ERROR: dist folder not created"
    exit 1
fi

echo "=========================================="
echo "AfterInstall completed successfully!"
echo "=========================================="

echo "=========================================="
echo "Starting application with PM2"
echo "=========================================="

pm2 delete zyntra-auth-service || true
pm2 start dist/src/main.js --name zyntra-auth-service --cwd /home/ubuntu/app
pm2 save