# Troubleshooting Guide

## Overview

This document contains common issues encountered while building and deploying the platform along with recommended fixes.

---

# Terraform Issues

## Terraform Init Fails

### Error

```text
Unreadable module directory
```

### Cause

Incorrect module path.

### Solution

Verify:

```hcl
source = "../modules/module-name"
```

Confirm module directory exists.

---

## Terraform Apply Fails

### Cause

Missing variable values.

### Solution

Verify:

```bash
terraform validate
terraform plan
```

Check:

```text
terraform.tfvars
```

---

# ECS Issues

## ECS Service Not Starting

### Cause

Invalid image URI.

### Solution

Verify:

```bash
aws ecr describe-repositories
```

Confirm image exists:

```bash
aws ecr list-images
```

---

## Tasks Continuously Restart

### Cause

Application startup failure.

### Solution

Check:

```bash
aws logs tail <log-group>
```

Review container logs.

---

# ALB Issues

## Target Group Unhealthy

### Cause

Health check configuration mismatch.

### Solution

Verify:

```text
Health Check Path

Container Port

Target Group Port
```

---

## Application Not Accessible

### Cause

Security Group rules missing.

### Solution

Verify:

```text
ALB Security Group

Port 80

Port 443
```

---

# Jenkins Issues

## Pipeline Fails During Build

### Cause

Dependency installation failure.

### Solution

Run locally:

```bash
npm install
npm run build
```

Verify application builds successfully.

---

## Docker Push Fails

### Cause

ECR authentication issue.

### Solution

Re-authenticate:

```bash
aws ecr get-login-password \
| docker login \
--username AWS \
--password-stdin <ECR_URI>
```

---

# CloudWatch Issues

## Logs Not Appearing

### Cause

Missing ECS execution role permissions.

### Solution

Verify:

```text
CloudWatch Logs permissions
```

are attached to:

```text
ECS Task Execution Role
```

---

# SNS Issues

## Email Notifications Not Received

### Cause

Subscription not confirmed.

### Solution

Verify subscription status:

```text
Confirmed
```

in SNS console.

---

# CloudFront Issues

## Changes Not Visible

### Cause

Cached content.

### Solution

Create invalidation:

```bash
aws cloudfront create-invalidation \
--distribution-id <ID> \
--paths "/*"
```

---

# General Debug Commands

Terraform

```bash
terraform validate
terraform plan
terraform state list
```

AWS

```bash
aws sts get-caller-identity
```

ECS

```bash
aws ecs list-services \
--cluster cloud-native-cicd-cluster
```

CloudWatch

```bash
aws logs describe-log-groups
```

---

# Summary

Most deployment issues can be resolved by checking Terraform configuration, ECS service health, ALB target health, CloudWatch logs, and Jenkins pipeline output. Always validate infrastructure changes before deployment and review logs before making corrective actions.