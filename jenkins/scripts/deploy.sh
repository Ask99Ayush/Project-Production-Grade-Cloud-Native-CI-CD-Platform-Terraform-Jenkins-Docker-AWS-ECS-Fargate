#!/bin/bash

set -e

ENVIRONMENT=$1

if [ -z "$ENVIRONMENT" ]; then

    echo "Usage: deploy.sh blue|green"

    exit 1

fi

echo "Deploying ${ENVIRONMENT}"

aws ecs update-service \
--cluster cloud-native-cicd-cluster \
--service cloud-native-cicd-${ENVIRONMENT} \
--force-new-deployment

echo "${ENVIRONMENT} deployment triggered"