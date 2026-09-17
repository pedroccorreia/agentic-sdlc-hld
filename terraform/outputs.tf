output "cloud_run_url" {
  value       = google_cloud_run_v2_service.presentation_website.uri
  description = "The public HTTPS URL of the deployed Cloud Run presentation website"
}

output "artifact_registry_repository" {
  value       = "${var.region}-docker.pkg.dev/${var.project_id}/${google_artifact_registry_repository.presentation_repo.repository_id}"
  description = "The Artifact Registry Docker repository URI"
}

output "service_name" {
  value       = google_cloud_run_v2_service.presentation_website.name
  description = "The name of the deployed Cloud Run service"
}


