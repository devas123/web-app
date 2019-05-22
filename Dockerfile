# ---- Базовый Node ----
FROM node:latest AS base
# Создать директорию app
WORKDIR /app

# ---- Зависимости ----
FROM base AS dependencies
COPY frontend/package*.json ./
# Установить зависимости приложения, включая предназначенные для разработки ('devDependencies')
RUN npm install

# ---- Скопировать файлы/билд ----
FROM dependencies AS build
WORKDIR /app
COPY frontend/src /app/src
COPY frontend/e2e /app/e2e
COPY frontend/angular.json /app
COPY frontend/tsconfig.json /app
COPY frontend/tslint.json /app
# Собрать статические файлы react/vue/angular
RUN npm run build-prod

## --- Выпуск, используя Alpine ----
#FROM node:8.9-alpine AS release
## Создать директорию app
#WORKDIR /app
## Необязательно
## RUN npm -g install serve
#COPY --from=dependencies /app/package.json ./
## Установить зависимости приложения
#RUN npm install --only=production
#COPY --from=build /app ./
## CMD ["serve", "-s", "dist", "-p", "8080"]
#CMD ["node", "server.js"]

FROM nginx

WORKDIR /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist ./
