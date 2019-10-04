FROM node:10-alpine

WORKDIR /api

COPY package.json .
RUN npm install --quiet
RUN npm install -g nodemon

COPY . .
