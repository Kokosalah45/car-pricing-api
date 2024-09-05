FROM node:20-alpine3.17 AS deps

WORKDIR /app

COPY package.json /app
COPY pnpm-lock.yaml /app


RUN npm install -g pnpm \
    && pnpm install  


FROM node:20-alpine3.17 AS builder

WORKDIR /app

COPY . /app

COPY --from=deps /app/node_modules /app/node_modules

RUN npm run build

FROM node:20-alpine3.17 AS runner

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=deps /app/node_modules /app/node_modules

CMD ["node", "dist/main.js"]

