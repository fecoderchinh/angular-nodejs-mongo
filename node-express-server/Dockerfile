FROM node:18.4.0-alpine as build-step
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD [ "node","server.js" ]