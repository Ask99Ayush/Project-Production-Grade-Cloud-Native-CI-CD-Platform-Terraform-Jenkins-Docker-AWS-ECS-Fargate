output "blue_min_capacity" {
  value = aws_appautoscaling_target.blue.min_capacity
}

output "blue_max_capacity" {
  value = aws_appautoscaling_target.blue.max_capacity
}

output "green_min_capacity" {
  value = aws_appautoscaling_target.green.min_capacity
}

output "green_max_capacity" {
  value = aws_appautoscaling_target.green.max_capacity
}