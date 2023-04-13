FROM node:19
WORKDIR /work

ARG TOKEN

COPY package.json tsconfig.json ./
COPY app/ app
COPY public/ public
COPY bin/ bin

RUN sed -i "s/TOKEN_SED/${TOKEN}/g" app/resources/linode.txt
RUN ["cat", "app/resources/linode.txt"]
RUN ["npm", "install"]
RUN ["npm", "install", "-g", "nodemon"]
RUN ["npx", "tsc"]
ENTRYPOINT ["nodemon", "--watch", "./bin", "--ext", "js,json", "bin/conn.js"]
