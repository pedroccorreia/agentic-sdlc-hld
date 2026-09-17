#!/usr/bin/env bash
set -e

# Zip Agentic Factory Presentation Deployment Script
# Usage: ./deploy.sh <PROJECT_ID> [REGION]

PROJECT_ID=${1:-"pcorreia-salty-codfish"}
REGION=${2:-"us-central1"}

if [ -z "$PROJECT_ID" ]; then
  echo "Error: PROJECT_ID is required."
  echo "Usage: ./deploy.sh <PROJECT_ID> [REGION]"
  exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PRESENTATION_DIR="${SCRIPT_DIR}/architecture-unpack/presentation"
TERRAFORM_DIR="${SCRIPT_DIR}/terraform"

echo "=========================================================="
echo " Deploying Zip Agentic Factory Presentation to Cloud Run"
echo " Project: $PROJECT_ID | Region: $REGION"
echo "=========================================================="

REPO_NAME="zip-presentation-repo"
IMAGE_NAME="presentation-website"
TAG="v$(git rev-parse --short HEAD 2>/dev/null || echo 'release')-$(date +%Y%m%d%H%M%S)"
IMAGE_URI="${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/${IMAGE_NAME}:${TAG}"

# 1. Enable Artifact Registry & Cloud Build / Cloud Run APIs (continue if already enabled)
echo "[1/4] Checking required GCP service APIs..."
gcloud services enable artifactregistry.googleapis.com run.googleapis.com cloudbuild.googleapis.com --project="$PROJECT_ID" 2>/dev/null || echo "APIs already enabled or managed externally."

# 2. Ensure Artifact Registry Repository exists
echo "[2/4] Ensuring Artifact Registry repository exists..."
if ! gcloud artifacts repositories describe "$REPO_NAME" --location="$REGION" --project="$PROJECT_ID" &>/dev/null; then
  echo "Creating Artifact Registry repository '$REPO_NAME'..."
  gcloud artifacts repositories create "$REPO_NAME" \
    --repository-format=docker \
    --location="$REGION" \
    --description="Repository for Zip Agentic Factory Presentation" \
    --project="$PROJECT_ID"
fi

# 3. Build & Push Image using Cloud Build
echo "[3/4] Building and pushing container image via Cloud Build..."
cd "$PRESENTATION_DIR"
gcloud builds submit . \
  --config=cloudbuild.yaml \
  --substitutions=_IMAGE_URI="$IMAGE_URI" \
  --suppress-logs \
  --project="$PROJECT_ID"

# 4. Deploy to Cloud Run with Direct VPC Egress (required by Org Policy constraints/run.allowedVPCEgress)
echo "[4/4] Deploying new revision to Cloud Run..."
gcloud run deploy zip-agentic-factory-presentation \
  --image="$IMAGE_URI" \
  --project="$PROJECT_ID" \
  --region="$REGION" \
  --network="zip-vpc" \
  --subnet="zip-subnet" \
  --vpc-egress="all-traffic" \
  --quiet

echo "=========================================================="
echo " Deployment Complete!"
echo " Presentation Website Public URL:"
gcloud run services describe zip-agentic-factory-presentation --project="$PROJECT_ID" --region="$REGION" --format="value(status.url)"
echo "=========================================================="
