FROM node:lts-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm i
COPY . .
CMD [ "npm", "run", "dev"]