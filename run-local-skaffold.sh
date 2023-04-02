#!/bin/bash
#Always run with first arg as token sh ./run-local.skaffold.sh token until it gets fixed to use redux

argToken=$1

sed -i '' "s/TOKEN_SED/$argToken/g" skaffold.yaml
skaffold dev

