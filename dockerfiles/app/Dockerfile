FROM node:16-alpine3.11 AS builder
ARG API_URL=${API_URL}

WORKDIR /app

COPY package.json .

RUN yarn install --production
RUN yarn global add serve

COPY . .

RUN yarn build

CMD ["server", "build", "-l", "3000"]
#
#FROM nginx:1.21.1-alpine as production
#
#COPY --from=builder /app/build /usr/share/nginx/html
#
#COPY dockerfiles/nginx/nginx.conf /etc/nginx/nginx.conf
#
#EXPOSE 80
#
#CMD ["nginx", "-g", "daemon off;"]
