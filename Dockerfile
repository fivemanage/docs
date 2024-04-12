# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Set node environment as production
ENV NODE_ENV production

# Build the Nest.js project
RUN npm run build

# Expose the port on which your Nest.js app will run (adjust if needed)
EXPOSE 3000

# Run the application as non-root user
USER node

# Set the command to run your Nest.js app
CMD ["npm", "start"]