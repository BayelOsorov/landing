FROM node:14-alpine AS development
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

FROM node:14-alpine AS builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --production
COPY . .
RUN yarn build

FROM nginx:1.21.0-alpine AS production
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]