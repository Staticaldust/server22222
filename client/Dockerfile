# Use an official Node.js runtime as a parent image
FROM node:16 as builder

# Set the working directory in the container
WORKDIR /app/client

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install client dependencies
RUN npm install --force

# Copy the client code into the container
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight Node.js runtime for the final image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app/client

# Copy the built React app from the builder stage to a different directory
COPY --from=builder /app/client/dist /app/client-build

# Switch to the parent directory
WORKDIR /app

# Expose the port on which the React app will run (adjust if needed)
EXPOSE 3000

# Install serve globally to serve the production build
RUN npm install -g serve

# Command to run the React app using serve
CMD ["serve", "-s", "client-build"]
