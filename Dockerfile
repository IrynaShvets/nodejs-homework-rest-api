# Install Node.js
FROM node:16

# Create a folder for the project
WORKDIR /usr/src/app

COPY package*.json ./

# Install packages from package.json
RUN npm install

# Copy the project files to the folder
COPY . .

# Start the project
EXPOSE 3000
CMD [ "node", "bin/server" ]
