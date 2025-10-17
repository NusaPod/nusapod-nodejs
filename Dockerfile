# Base image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy source
COPY . .

# Expose port and start app
EXPOSE 3000
CMD ["npm", "start"]
