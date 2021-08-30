FROM node:16-alpine3.11 AS builder
ARG API_URL=${API_URL}

WORKDIR /app

COPY package.json .

RUN yarn install --production

COPY . .

RUN yarn build
