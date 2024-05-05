#!/bin/bash

API_URL="http://localhost:8000/api/v1/users/auth/"

TEST_CREDENTIALS='{"username": "test", "password": "testpass123"}'


generate_token() {
    RESPONSE=$(curl -s -X POST -H "Content-Type: application/json" -d "$TEST_CREDENTIALS" "$API_URL")

    if [ $? -ne 0 ]; then
        echo "Request failed. Check your network connection or API endpoint."
        exit 1
    fi

    created_access_token=$(echo "$RESPONSE" | jq -r '.access')
    echo "Token generated successfully"
}

generate_token

sed -i 's/"auth_jwt_token":.*/"auth_jwt_token": "'$created_access_token'"/' ./http-client.env.json

