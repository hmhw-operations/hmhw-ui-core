#!/bin/bash
set -e

echo "Checking package version..."

PACKAGE_NAME=$(node -p "require('./package.json').name")
LOCAL_VERSION=$(node -p "require('./package.json').version")
PUBLISHED_VERSION=$(npm view "$PACKAGE_NAME" version 2>/dev/null || echo "0.0.0")

echo "Package: $PACKAGE_NAME"
echo "Local version: $LOCAL_VERSION"
echo "Published version: $PUBLISHED_VERSION"

version_compare() {
    echo "$1" "$2" | awk '{
        split($1, local_ver, ".");
        split($2, published_ver, ".");
        for(i=1; i<=3; i++) {
            if(local_ver[i] > published_ver[i]) { print "greater"; exit }
            if(local_ver[i] < published_ver[i]) { print "less"; exit }
        }
        print "equal"
    }'
}

COMPARISON=$(version_compare "$LOCAL_VERSION" "$PUBLISHED_VERSION")

case $COMPARISON in
    "greater")
        echo "Local version is ahead of published version - using local version as base"
        echo "should_bump=false" >> $GITHUB_OUTPUT
        echo "target_version=$LOCAL_VERSION" >> $GITHUB_OUTPUT
        ;;
    "equal")
        echo "Versions match - will bump patch version"
        echo "should_bump=true" >> $GITHUB_OUTPUT
        IFS='.' read -r major minor patch <<< "$LOCAL_VERSION"
        NEXT_VERSION="$major.$minor.$((patch + 1))"
        echo "target_version=$NEXT_VERSION" >> $GITHUB_OUTPUT
        ;;
    "less")
        echo "Local version is behind - syncing with published version first"
        IFS='.' read -r major minor patch <<< "$PUBLISHED_VERSION"
        NEXT_VERSION="$major.$minor.$((patch + 1))"
        echo "should_bump=true" >> $GITHUB_OUTPUT
        echo "target_version=$NEXT_VERSION" >> $GITHUB_OUTPUT
        
        npm version "$PUBLISHED_VERSION" --no-git-tag-version
        git add package.json package-lock.json 2>/dev/null || true
        git commit -m "Sync version with published npm package ($PUBLISHED_VERSION)" || echo "No changes to commit"
        ;;
esac

TARGET_VERSION=$(grep "target_version=" $GITHUB_OUTPUT | cut -d'=' -f2)
echo "Target version: $TARGET_VERSION" 