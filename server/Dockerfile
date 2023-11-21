# Stage 1: Build
FROM node:16 AS build
WORKDIR /app/server
COPY package*.json ./
RUN npm install --production
COPY . .

# Stage 2: Final Image
FROM node:16-alpine
WORKDIR /app/server
COPY --from=build /app/server /app/server
EXPOSE 3000
CMD ["node", "server.js"]
