# Use an official Python runtime as a parent image
FROM alpine:3.6

# Install npm on base alpine image
RUN apk add --update nodejs nodejs-npm

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Copy package.json to install dependencies
COPY package.json /app

# Install any needed packages specified in requirements.txt
RUN npm install

# Build runtime of node app
RUN npm run build

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
#ENV NAME World

# Run app.py when the container launches
CMD ["npm", "run", "start"]
