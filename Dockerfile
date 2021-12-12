FROM node:17

WORKDIR /bot

COPY package.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]