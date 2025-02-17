# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY sources/package.json sources/package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the source code to the working directory
COPY sources .

# Build the Next.js application
RUN npm run build

# Expose the port that the Next.js application will run on
EXPOSE 80

# Define the command to run the application
CMD ["npm", "start"]