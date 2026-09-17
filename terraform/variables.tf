variable "project_id" {
  type        = string
  description = "Google Cloud Project ID where resources will be deployed"
}

variable "region" {
  type        = string
  description = "GCP Region for Cloud Run and Artifact Registry"
  default     = "australia-southeast1"
}

variable "service_name" {
  type        = string
  description = "Cloud Run service name for the presentation website"
  default     = "zip-agentic-factory-presentation"
}

variable "artifact_registry_repo_id" {
  type        = string
  description = "Artifact Registry repository ID"
  default     = "zip-presentation-repo"
}

variable "image_name" {
  type        = string
  description = "Container image name"
  default     = "presentation-website"
}

variable "image_tag" {
  type        = string
  description = "Tag for the container image"
  default     = "latest"
}

variable "service_account_id" {
  type        = string
  description = "ID of the Service Account created for Cloud Run"
  default     = "zip-presentation-cr-sa"
}

variable "allow_unauthenticated" {
  type        = bool
  description = "Whether to allow unauthenticated public access (allUsers). Set to false if Organization Policy blocks allUsers."
  default     = false
}

variable "cpu_limit" {
  type        = string
  description = "CPU limit for Cloud Run container instance"
  default     = "1000m"
}

variable "memory_limit" {
  type        = string
  description = "Memory limit for Cloud Run container instance"
  default     = "512Mi"
}

variable "min_instances" {
  type        = number
  description = "Minimum number of Cloud Run instances"
  default     = 0
}

variable "max_instances" {
  type        = number
  description = "Maximum number of Cloud Run instances"
  default     = 10
}

variable "ingress" {
  type        = string
  description = "Ingress settings for Cloud Run service (INGRESS_TRAFFIC_ALL, INGRESS_TRAFFIC_INTERNAL_ONLY, INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER)"
  default     = "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"
}

variable "invoker_member" {
  type        = string
  description = "IAM member for Cloud Run invoker role (e.g. domain:google.com or user:pcorreia@google.com)"
  default     = "domain:google.com"
}


