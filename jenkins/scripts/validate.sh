#!/bin/bash

set -e

ENVIRONMENT=$1

if [ -z "$ENVIRONMENT" ]; then

    echo "Usage: validate.sh blue|green"

    exit 1

fi

echo "Waiting for ECS service stability..."

aws ecs wait services-stable \
--cluster cloud-native-cicd-cluster \
--services cloud-native-cicd-${ENVIRONMENT}

echo "${ENVIRONMENT} service stable"

echo "Validation successful"