FROM node:current-alpine3.20

WORKDIR /usr/src/App

COPY package*.json ./

RUN npm install --only=production

COPY . .

USER node

EXPOSE 3000

# ENV NAME=project5

CMD ["node", "index.js"]
