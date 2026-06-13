provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "cloud-native-cicd"
      Environment = "dev"
      ManagedBy   = "terraform"
    }
  }
}