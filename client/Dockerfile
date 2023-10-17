FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 5173

ENV VITE_BACKEND_URL=http://localhost:5000

CMD ["yarn", "dev"]