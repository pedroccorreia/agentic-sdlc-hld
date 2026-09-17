#!/usr/bin/env bash
set -e

# Zip Agentic Factory Presentation Deployment Script
# Usage: ./deploy.sh <PROJECT_ID> [REGION]

PROJECT_ID=${1:-"theta-reserve-507310-t4"}
REGION=${2:-"us-central1"}
ACCOUNT=${3:-"pcorreia@pcorreia.altostrat.com"}

if [ -z "$PROJECT_ID" ]; then
  echo "Error: PROJECT_ID is required."
  echo "Usage: ./deploy.sh <PROJECT_ID> [REGION] [ACCOUNT]"
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PRESENTATION_DIR="${SCRIPT_DIR}/architecture-unpack/presentation"

echo "=========================================================="
echo " Deploying Zip Agentic Factory Presentation to Cloud Run"
echo " Project: $PROJECT_ID | Region: $REGION | Account: $ACCOUNT"
echo "=========================================================="

REPO_NAME="zip-presentation-repo"
IMAGE_NAME="presentation-website"
TAG="v$(git rev-parse --short HEAD 2>/dev/null || echo 'release')-$(date +%Y%m%d%H%M%S)"
IMAGE_URI="${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/${IMAGE_NAME}:${TAG}"

# 1. Enable Artifact Registry & Cloud Build / Cloud Run APIs (continue if already enabled)
echo "[1/3] Checking required GCP service APIs..."
gcloud services enable artifactregistry.googleapis.com run.googleapis.com cloudbuild.googleapis.com --project="$PROJECT_ID" --account="$ACCOUNT" 2>/dev/null || echo "APIs already enabled."

# 2. Build & Push Image using Cloud Build
echo "[2/3] Building and pushing container image via Cloud Build..."
cd "$PRESENTATION_DIR"
gcloud builds submit . \
  --config=cloudbuild.yaml \
  --substitutions=_IMAGE_URI="$IMAGE_URI" \
  --suppress-logs \
  --project="$PROJECT_ID" \
  --account="$ACCOUNT"

# 3. Deploy to Cloud Run
echo "[3/3] Deploying new revision to Cloud Run..."
gcloud run deploy zip-agentic-factory-presentation \
  --image="$IMAGE_URI" \
  --project="$PROJECT_ID" \
  --region="$REGION" \
  --account="$ACCOUNT" \
  --quiet

echo "=========================================================="
echo " Deployment Complete!"
echo " Presentation Website Public URL:"
gcloud run services describe zip-agentic-factory-presentation --project="$PROJECT_ID" --region="$REGION" --account="$ACCOUNT" --format="value(status.url)"
echo "=========================================================="
