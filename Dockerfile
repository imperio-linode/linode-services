FROM node:19
WORKDIR /work

COPY package.json app.js ./
COPY app/ app
COPY public/ public
COPY bin/ bin

RUN ["npm", "install"]
RUN ["npm", "install", "-g", "nodemon"]

#RUN ["chmod", "+x", "/work/bin/conn"]
RUN ["echo", "Hello World"]
RUN ["pwd"]
RUN ["ls"]

ENTRYPOINT ["nodemon", "bin/conn"]
#ENTRYPOINT ["npm", "run-script", "serve"]

