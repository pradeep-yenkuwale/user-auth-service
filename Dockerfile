# Step 1: Build stage
FROM node:20-alpine AS builder

# Upgrade system packages to patch vulnerabilities
RUN apk update && apk upgrade

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including dev dependencies for building)
RUN npm ci

# Copy source code
COPY . .

# Build the NestJS application
RUN npm run build

# Step 2: Production stage
FROM node:20-alpine AS production

# Upgrade system packages
RUN apk update && apk upgrade

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built application from builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Expose application port
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["node", "dist/src/main"]
