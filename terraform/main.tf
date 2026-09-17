terraform {
  required_version = ">= 1.3.0"
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = ">= 5.0.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# 1. Enable Required Google Cloud Service APIs
resource "google_project_service" "enabled_apis" {
  for_each = toset([
    "run.googleapis.com",
    "artifactregistry.googleapis.com",
    "iam.googleapis.com"
  ])

  project            = var.project_id
  service            = each.key
  disable_on_destroy = false
}

# 2. Artifact Registry Repository for Presentation Container Images
resource "google_artifact_registry_repository" "presentation_repo" {
  depends_on    = [google_project_service.enabled_apis]
  location      = var.region
  repository_id = var.artifact_registry_repo_id
  description   = "Artifact Registry repository for Zip Agentic Factory presentation website"
  format        = "DOCKER"
}

# 3. Dedicated Service Account for Cloud Run
resource "google_service_account" "cloud_run_sa" {
  account_id   = var.service_account_id
  display_name = "Zip Agentic Factory Presentation Cloud Run SA"
  description  = "Service Account assigned to the presentation website Cloud Run service"
}

# 4. Cloud Run v2 Service Definition
resource "google_cloud_run_v2_service" "presentation_website" {
  name     = var.service_name
  location = var.region
  ingress  = var.ingress

  depends_on = [
    google_project_service.enabled_apis,
    google_artifact_registry_repository.presentation_repo
  ]

  template {
    service_account = google_service_account.cloud_run_sa.email

    containers {
      image = "${var.region}-docker.pkg.dev/${var.project_id}/${google_artifact_registry_repository.presentation_repo.repository_id}/${var.image_name}:${var.image_tag}"

      ports {
        container_port = 8080
      }

      resources {
        limits = {
          cpu    = var.cpu_limit
          memory = var.memory_limit
        }
      }
    }

    scaling {
      min_instance_count = var.min_instances
      max_instance_count = var.max_instances
    }
  }

  traffic {
    type    = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
    percent = 100
  }
}

# 5. IAM Invoker Binding for Permitted Domain
resource "google_cloud_run_v2_service_iam_member" "invoker_access" {
  project  = google_cloud_run_v2_service.presentation_website.project
  location = google_cloud_run_v2_service.presentation_website.location
  name     = google_cloud_run_v2_service.presentation_website.name
  role     = "roles/run.invoker"
  member   = var.invoker_member
}


