resource "aws_cloudwatch_log_group" "application" {

  name = "/cloud-native-cicd/application"

  retention_in_days = 30

  tags = {
    Name = "${var.project_name}-logs"
  }
}

resource "aws_cloudwatch_dashboard" "main" {

  dashboard_name = "${var.project_name}-dashboard"

  dashboard_body = jsonencode({

    widgets = [

      # ==========================
      # BLUE SERVICE METRICS
      # ==========================

      {
        type   = "metric"
        width  = 12
        height = 6

        properties = {
          title = "Blue Service CPU Utilization"

          metrics = [
            [
              "AWS/ECS",
              "CPUUtilization",
              "ClusterName",
              var.ecs_cluster_name,
              "ServiceName",
              var.blue_service_name
            ]
          ]

          stat   = "Average"
          period = 300
          region = var.aws_region
        }
      },

      {
        type   = "metric"
        width  = 12
        height = 6

        properties = {
          title = "Blue Service Memory Utilization"

          metrics = [
            [
              "AWS/ECS",
              "MemoryUtilization",
              "ClusterName",
              var.ecs_cluster_name,
              "ServiceName",
              var.blue_service_name
            ]
          ]

          stat   = "Average"
          period = 300
          region = var.aws_region
        }
      },

      {
        type   = "metric"
        width  = 12
        height = 6

        properties = {
          title = "Blue Service Live Tasks"

          metrics = [
            [
              "AWS/ECS",
              "LiveTaskCount",
              "ClusterName",
              var.ecs_cluster_name,
              "ServiceName",
              var.blue_service_name
            ]
          ]

          stat   = "Average"
          period = 300
          region = var.aws_region
        }
      },

      # ==========================
      # GREEN SERVICE METRICS
      # ==========================

      {
        type   = "metric"
        width  = 12
        height = 6

        properties = {
          title = "Green Service CPU Utilization"

          metrics = [
            [
              "AWS/ECS",
              "CPUUtilization",
              "ClusterName",
              var.ecs_cluster_name,
              "ServiceName",
              var.green_service_name
            ]
          ]

          stat   = "Average"
          period = 300
          region = var.aws_region
        }
      },

      {
        type   = "metric"
        width  = 12
        height = 6

        properties = {
          title = "Green Service Memory Utilization"

          metrics = [
            [
              "AWS/ECS",
              "MemoryUtilization",
              "ClusterName",
              var.ecs_cluster_name,
              "ServiceName",
              var.green_service_name
            ]
          ]

          stat   = "Average"
          period = 300
          region = var.aws_region
        }
      },

      {
        type   = "metric"
        width  = 12
        height = 6

        properties = {
          title = "Green Service Live Tasks"

          metrics = [
            [
              "AWS/ECS",
              "LiveTaskCount",
              "ClusterName",
              var.ecs_cluster_name,
              "ServiceName",
              var.green_service_name
            ]
          ]

          stat   = "Average"
          period = 300
          region = var.aws_region
        }
      },

      # ==========================
      # APPLICATION LOAD BALANCER
      # ==========================

      {
        type   = "metric"
        width  = 12
        height = 6

        properties = {
          title = "ALB Request Count"

          metrics = [
            [
              "AWS/ApplicationELB",
              "RequestCount",
              "LoadBalancer",
              var.alb_arn_suffix
            ]
          ]

          stat   = "Sum"
          period = 300
          region = var.aws_region
        }
      },

      {
        type   = "metric"
        width  = 12
        height = 6

        properties = {
          title = "ALB Response Time"

          metrics = [
            [
              "AWS/ApplicationELB",
              "TargetResponseTime",
              "LoadBalancer",
              var.alb_arn_suffix
            ]
          ]

          stat   = "Average"
          period = 300
          region = var.aws_region
        }
      },

      # ==========================
      # CLOUDFRONT METRICS
      # ==========================

      {
        type   = "metric"
        width  = 12
        height = 6

        properties = {
          title = "CloudFront Requests"

          metrics = [
            [
              "AWS/CloudFront",
              "Requests",
              "DistributionId",
              var.cloudfront_distribution_id,
              "Region",
              "Global"
            ]
          ]

          stat   = "Sum"
          period = 300
          region = "us-east-1"
        }
      },

      {
        type   = "metric"
        width  = 12
        height = 6

        properties = {
          title = "CloudFront Cache Hit Rate"

          metrics = [
            [
              "AWS/CloudFront",
              "CacheHitRate",
              "DistributionId",
              var.cloudfront_distribution_id,
              "Region",
              "Global"
            ]
          ]

          stat   = "Average"
          period = 300
          region = "us-east-1"
        }
      },

      {
        type   = "metric"
        width  = 12
        height = 6

        properties = {
          title = "CloudFront 4XX Error Rate"

          metrics = [
            [
              "AWS/CloudFront",
              "4xxErrorRate",
              "DistributionId",
              var.cloudfront_distribution_id,
              "Region",
              "Global"
            ]
          ]

          stat   = "Average"
          period = 300
          region = "us-east-1"
        }
      },

      {
        type   = "metric"
        width  = 12
        height = 6

        properties = {
          title = "CloudFront 5XX Error Rate"

          metrics = [
            [
              "AWS/CloudFront",
              "5xxErrorRate",
              "DistributionId",
              var.cloudfront_distribution_id,
              "Region",
              "Global"
            ]
          ]

          stat   = "Average"
          period = 300
          region = "us-east-1"
        }
      }
    ]
  })
}