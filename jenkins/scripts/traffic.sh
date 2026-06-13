#!/bin/bash

set -e

TARGET=$1

if [ -z "$TARGET" ]; then
    echo "Usage: traffic.sh blue|green"
    exit 1
fi

if [ -z "$ALB_LISTENER_ARN" ]; then
    echo "ALB_LISTENER_ARN not set"
    exit 1
fi

if [ -z "$BLUE_TARGET_GROUP_ARN" ]; then
    echo "BLUE_TARGET_GROUP_ARN not set"
    exit 1
fi

if [ -z "$GREEN_TARGET_GROUP_ARN" ]; then
    echo "GREEN_TARGET_GROUP_ARN not set"
    exit 1
fi

ACTION_FILE=$(mktemp)

if [ "$TARGET" = "green" ]; then

cat > "${ACTION_FILE}" <<EOF
[
  {
    "Type": "forward",
    "ForwardConfig": {
      "TargetGroups": [
        {
          "TargetGroupArn": "${BLUE_TARGET_GROUP_ARN}",
          "Weight": 0
        },
        {
          "TargetGroupArn": "${GREEN_TARGET_GROUP_ARN}",
          "Weight": 100
        }
      ]
    }
  }
]
EOF

elif [ "$TARGET" = "blue" ]; then

cat > "${ACTION_FILE}" <<EOF
[
  {
    "Type": "forward",
    "ForwardConfig": {
      "TargetGroups": [
        {
          "TargetGroupArn": "${BLUE_TARGET_GROUP_ARN}",
          "Weight": 100
        },
        {
          "TargetGroupArn": "${GREEN_TARGET_GROUP_ARN}",
          "Weight": 0
        }
      ]
    }
  }
]
EOF

else
    echo "Usage: traffic.sh blue|green"
    exit 1
fi

aws elbv2 modify-listener \
    --listener-arn "${ALB_LISTENER_ARN}" \
    --default-actions file://"${ACTION_FILE}"

echo "Traffic switched to ${TARGET}"

rm -f "${ACTION_FILE}"