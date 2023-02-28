#!/bin/bash
#Always run with first arg as token sh ./run-local.container.sh token

argToken=$1

echo "Here"
echo $argToken
echo "Here" $argToken

docker buildx build  --build-arg LINODE_TOKEN="${argToken}" --platform=linux/amd64 --tag=finda/imperio-linode-services:latest.amd .
docker buildx build --build-arg LINODE_TOKEN="${argToken}" --platform=linux/arm64 --tag=finda/imperio-linode-services:latest.arm .

docker run imperio-linode-services
