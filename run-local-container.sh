#!/bin/bash

argToken=$1

docker buildx build  --build-arg LINODE_TOKEN="${argToken}" --platform=linux/amd64 --tag=finda/imperio-linode-services:latest.amd .
docker buildx build --build-arg LINODE_TOKEN="${argToken}" --platform=linux/arm64 --tag=finda/imperio-linode-services:latest.arm .

docker run imperio-linode-services
