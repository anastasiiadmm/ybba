FROM node:16-alpine3.11 AS builder

ARG REACT_APP_API_URL=${REACT_APP_API_URL}

WORKDIR /app

COPY package.json .

RUN yarn install --production

COPY . .

RUN yarn build

FROM nginx:1.21.1-alpine as production

COPY --from=builder /app/build /usr/share/nginx/html

COPY dockerfiles/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
