resource "aws_appautoscaling_target" "blue" {

  max_capacity = 4

  min_capacity = 1

  resource_id = "service/${var.ecs_cluster_name}/${var.blue_service_name}"

  scalable_dimension = "ecs:service:DesiredCount"

  service_namespace = "ecs"
}

resource "aws_appautoscaling_target" "green" {

  max_capacity = 4

  min_capacity = 1

  resource_id = "service/${var.ecs_cluster_name}/${var.green_service_name}"

  scalable_dimension = "ecs:service:DesiredCount"

  service_namespace = "ecs"
}

resource "aws_appautoscaling_policy" "blue_cpu" {

  name = "${var.project_name}-blue-cpu-scaling"

  policy_type = "TargetTrackingScaling"

  resource_id = aws_appautoscaling_target.blue.resource_id

  scalable_dimension = aws_appautoscaling_target.blue.scalable_dimension

  service_namespace = aws_appautoscaling_target.blue.service_namespace

  target_tracking_scaling_policy_configuration {

    predefined_metric_specification {

      predefined_metric_type = "ECSServiceAverageCPUUtilization"
    }

    target_value = 75

    scale_in_cooldown = 300

    scale_out_cooldown = 60
  }
}

resource "aws_appautoscaling_policy" "blue_memory" {

  name = "${var.project_name}-blue-memory-scaling"

  policy_type = "TargetTrackingScaling"

  resource_id = aws_appautoscaling_target.blue.resource_id

  scalable_dimension = aws_appautoscaling_target.blue.scalable_dimension

  service_namespace = aws_appautoscaling_target.blue.service_namespace

  target_tracking_scaling_policy_configuration {

    predefined_metric_specification {

      predefined_metric_type = "ECSServiceAverageMemoryUtilization"
    }

    target_value = 75

    scale_in_cooldown = 300

    scale_out_cooldown = 60
  }
}

resource "aws_appautoscaling_policy" "green_cpu" {

  name = "${var.project_name}-green-cpu-scaling"

  policy_type = "TargetTrackingScaling"

  resource_id = aws_appautoscaling_target.green.resource_id

  scalable_dimension = aws_appautoscaling_target.green.scalable_dimension

  service_namespace = aws_appautoscaling_target.green.service_namespace

  target_tracking_scaling_policy_configuration {

    predefined_metric_specification {

      predefined_metric_type = "ECSServiceAverageCPUUtilization"
    }

    target_value = 75

    scale_in_cooldown = 300

    scale_out_cooldown = 60
  }
}

resource "aws_appautoscaling_policy" "green_memory" {

  name = "${var.project_name}-green-memory-scaling"

  policy_type = "TargetTrackingScaling"

  resource_id = aws_appautoscaling_target.green.resource_id

  scalable_dimension = aws_appautoscaling_target.green.scalable_dimension

  service_namespace = aws_appautoscaling_target.green.service_namespace

  target_tracking_scaling_policy_configuration {

    predefined_metric_specification {

      predefined_metric_type = "ECSServiceAverageMemoryUtilization"
    }

    target_value = 75

    scale_in_cooldown = 300

    scale_out_cooldown = 60
  }
}