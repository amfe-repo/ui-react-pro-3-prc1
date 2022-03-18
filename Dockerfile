# Build docker node
FROM node:16.14-alpine3.15 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Create nginx server
FROM nginx:1.19.0-alpine as prod
COPY --from=build /app/build /usr/share/nginx/html
CMD [ "nginx","-g","daemon off;" ]