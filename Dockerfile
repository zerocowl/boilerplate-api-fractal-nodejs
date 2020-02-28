FROM node:12

RUN apt-get update

RUN apt-get install -y build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN chown -R node:node .

COPY . .

RUN npm i --silent

RUN npm run build

EXPOSE 3000

CMD node ./dist/server.js

USER node

