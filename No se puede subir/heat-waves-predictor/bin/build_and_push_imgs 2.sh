#!/bin/bash

# replace '/' with '-' in branch name
branch_name=$(git rev-parse --abbrev-ref HEAD | tr '/' '-')
tag=$branch_name

# remove prefix if exists
prefixes=("feat-" "bugfix-" "refactor-" "hotfix-")
for prefix in "${prefixes[@]}"; do
    if [[ "$branch_name" == $prefix* ]]; then
        tag=${branch_name#"$prefix"}
        break
    fi
done

# protected branches point to 'latest', feature branches to [jira_card_id]
if [[ "$tag" == "dev" ]] || [[ "$tag" == "qa" ]] || [[ "$tag" == "prod" ]]; then
    tag="latest"
fi

echo "Building & pushing images with tag $tag"

registry=msmendoza
tag=latest

# build & push ingestor
docker build --tag $registry/hw-ingestor:$tag src/components/ingestor
docker image prune --force
docker push $registry/hw-ingestor:$tag
