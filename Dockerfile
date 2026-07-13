
FROM node:20-alpine

WORKDIR /kaur_kiranpreet_ui_garden_build_checks

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 8018

CMD ["serve", "-s", "build", "-l", "8018"]