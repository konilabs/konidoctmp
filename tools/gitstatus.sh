#!/bin/sh

# Get Current Branch
BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Get Commit ID
COMMITID=$(git log --format="%H" -n 1)

# Get Commit Message
COMMITLOG=$(git log -1 --pretty="%B")

# Get last Commit date
COMMITDATE=$(git log -1 --format="%cd")

# Get untracked files
STATUS=$(git status --short)

mkdir -p data

# Generates JSON
JSON_FMT='{"branch":"%s","commitid":"%s","commitlog":"%s","commitdate":"%s","status":"%s"}\n'
printf "$JSON_FMT" "$BRANCH" "$COMMITID" "$COMMITLOG" "$COMMITDATE" "$STATUS" > data/gitstatus.json

# Replace newlines with \n
sed -i -E ':a;N;$!ba;s/\r{0,1}\n/\\n/g' data/gitstatus.json