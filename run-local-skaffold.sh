#!/bin/bash
#Always run with first arg as token sh ./run-local.skaffold.sh token

argToken=$1

sed -i '' "s/TOKEN_SED/$argToken/g" skaffold.yaml
skaffold dev

