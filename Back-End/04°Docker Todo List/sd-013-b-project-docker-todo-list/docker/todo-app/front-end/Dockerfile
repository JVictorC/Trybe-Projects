FROM node:14-alpine


WORKDIR /app

EXPOSE 3000

COPY ./package.json ./

ADD node_modules.tar.gz ./

COPY . .

CMD [ "npm", "start" ]


# REferencia para arrumar Bug na 12 COPY ./package.json ./ Mestre Caputo Ajudou a resolver