FROM node:18

WORKDIR /app

RUN npm i -g pnpm

COPY package.json tsconfig.json ./

RUN pnpm i
COPY . .
RUN pnpm build

EXPOSE 3001

CMD ["node", "dist/server.js"]
