FROM node:15

WORKDIR /usr/src/app/

RUN npm install express --save
RUN npm install mysql --save

## Debian 9/stretch moved to archive.debian.org https://unix.stackexchange.com/questions/743839/apt-get-update-failed-to-fetch-debian-amd64-packages-while-building-dockerfile-f
## Forca o Repositorio
RUN echo "deb http://archive.debian.org/debian stretch main" > /etc/apt/sources.list

## Instala o Dockerize
RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY . . 

## Conexoes na Porta 3000
EXPOSE 3000

CMD ["node", "index.js"]