FROM node:19
WORKDIR /work

COPY package.json tsconfig.json ./
COPY app/ app
COPY public/ public
COPY bin/ bin
RUN ["npm", "install"]
RUN ["npm", "install", "-g", "nodemon"]
RUN ["npx", "tsc"]
ENTRYPOINT ["nodemon", "--watch", "./bin", "--ext", "js,json", "bin/conn.js"]
