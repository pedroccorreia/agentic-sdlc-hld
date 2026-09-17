# Terraform Deployment for Presentation Website

This directory contains the Terraform configuration to deploy the **Zip Agentic Factory Presentation Website** (`architecture-unpack/presentation`) to **Google Cloud Run**.

## Architecture Overview

- **Nginx Web Server Container**: Lightweight container serving `index.html` and `factory-explorer.html` on Cloud Run port `8080`.
- **Artifact Registry Repository**: Docker repository (`zip-presentation-repo`) hosting the presentation image.
- **Cloud Run Service**: Serverless, auto-scaling Cloud Run service (`zip-agentic-factory-presentation`).
- **IAM Public Invoker**: Grants `roles/run.invoker` to `allUsers` for public accessibility.

---

## Quick Start (Automated Script)

Run the included automated deployment script from the project root:

```bash
./deploy.sh <YOUR_GCP_PROJECT_ID> [REGION]
```

Example:
```bash
./deploy.sh ple-prototype australia-southeast1
```

---

## Manual Terraform Deployment

### 1. Build and Push Container Image

Navigate to the presentation directory and submit the container build to GCP Cloud Build:

```bash
cd architecture-unpack/presentation

gcloud builds submit . \
  --config=cloudbuild.yaml \
  --substitutions=_IMAGE_URI="australia-southeast1-docker.pkg.dev/<YOUR_PROJECT_ID>/zip-presentation-repo/presentation-website:latest" \
  --project="<YOUR_PROJECT_ID>"
```

### 2. Run Terraform

Navigate to the `terraform` folder:

```bash
cd terraform

# Initialize Terraform
terraform init

# Plan deployment
terraform plan -var="project_id=<YOUR_PROJECT_ID>"

# Apply deployment
terraform apply -var="project_id=<YOUR_PROJECT_ID>"
```

### 3. Retrieve Cloud Run URL

```bash
terraform output cloud_run_url
```
