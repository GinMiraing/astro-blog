FROM node:18-slim AS build
WORKDIR /app
COPY . .
ARG twikoo_host ""
ENV PUBLIC_TWIKOO_HOST $twikoo_host
RUN npm i
RUN npm run build

FROM nginx:1.24-alpine-slim AS runtime
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
