FROM node:alpine

WORKDIR /app
RUN npm install -g @nestjs/cli
COPY package.json .

RUN npm install
RUN npx prisma generate

COPY . .

CMD ["npm", "run", "start:dev"]