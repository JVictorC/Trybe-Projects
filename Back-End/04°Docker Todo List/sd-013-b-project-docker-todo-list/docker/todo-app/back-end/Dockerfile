FROM node:14-alpine

WORKDIR /app

COPY ./package.json ./

ADD node_modules.tar.gz ./

COPY . .

EXPOSE 3001

CMD ["npm", "start"]

# Utilizei o video: https://www.youtube.com/watch?v=AVNADGzXrrQ&ab_channel=Rocketseat
# Como Referencia