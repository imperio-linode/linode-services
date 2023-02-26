#!/bin/bash

docker buildx build --platform=linux/amd64 --tag=finda/imperio-linode-services:latest.amd .
docker buildx build --platform=linux/arm64 --tag=finda/imperio-linode-services:latest.arm .

docker run imperio-linode-services
