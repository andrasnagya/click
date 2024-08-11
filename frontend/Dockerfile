# syntax=docker/dockerfile:1

# Use Node.js as the base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if present) first

COPY src/ /app/src/
COPY package.json ./
COPY package-lock.json ./
COPY webpack.config.js ./
COPY tsconfig.json ./
# Install dependencies
RUN npm install
# Copy the frontend source code into the container


# Verify that tsconfig.json is copied
RUN cat tsconfig.json

# Build the application
RUN npm run build

# Expose the port that the application will run on
EXPOSE 9000

# Start the application
CMD ["npm", "start"]
