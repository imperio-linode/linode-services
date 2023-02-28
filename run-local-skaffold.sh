#!/bin/bash
#Script to run local skaffold

argToken=$1

sed -i '' "s/linode_token_sed/$argToken/g" skaffold.yaml
skaffold dev

