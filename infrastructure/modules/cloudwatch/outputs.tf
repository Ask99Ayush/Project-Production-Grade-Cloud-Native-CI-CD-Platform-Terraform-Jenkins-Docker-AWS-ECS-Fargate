output "dashboard_name" {
  value = aws_cloudwatch_dashboard.main.dashboard_name
}

output "log_group_name" {
  value = aws_cloudwatch_log_group.application.name
}