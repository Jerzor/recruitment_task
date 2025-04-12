FROM node:18
WORKDIR /app
COPY package.json ./

RUN npm i -g pnpm

RUN pnpm i
COPY . .
RUN pnpm build

FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
