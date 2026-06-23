# Switchback

### Production-Grade Cloud-Native CI/CD Platform
#### Terraform · Jenkins · Docker · AWS ECS Fargate

Switchback automates the complete software delivery lifecycle — from infrastructure provisioning to production deployments on AWS. Built with Terraform, Jenkins, Docker, Amazon ECR, ECS Fargate, CloudFront, and Application Load Balancer, it enables secure, scalable, and reliable application delivery through fully automated CI/CD workflows.

---

## Architecture Diagram

![Architecture Diagram](/assets/architecture-diagram.png)

---

## Table of Contents

- [Executive Summary](#executive-summary)
- [Business Problem](#business-problem)
- [Solution Overview](#solution-overview)
- [Architecture Diagram](#architecture-diagram)
- [Technology Stack](#technology-stack)
- [Key Features](#key-features)
- [System Architecture](#system-architecture)
- [Infrastructure Architecture](#infrastructure-architecture)
- [CI/CD Pipeline Architecture](#cicd-pipeline-architecture)
- [Blue-Green Deployment Strategy](#blue-green-deployment-strategy)
- [Automated Rollback](#automated-rollback)
- [Security Architecture](#security-architecture)
- [Networking Architecture](#networking-architecture)
- [High Availability Design](#high-availability-design)
- [Auto Scaling Design](#auto-scaling-design)
- [Monitoring and Observability](#monitoring-and-observability)
- [Alerting and Incident Response](#alerting-and-incident-response)
- [CloudFront CDN Layer](#cloudfront-cdn-layer)
- [Implementation Roadmap](#implementation-roadmap)
- [Documentation](#documentation)
- [Getting Started](#getting-started)
- [Validation Checklist](#validation-checklist)
- [AWS Services Used](#aws-services-used)
- [Skills Demonstrated](#skills-demonstrated)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## Executive Summary

This project simulates a real-world production deployment platform used by modern engineering teams. It demonstrates end-to-end automation across the full delivery lifecycle.

**The platform automates:**

- Infrastructure Provisioning
- Continuous Integration and Continuous Delivery
- Container Build, Scan, and Push
- Blue-Green Deployments with Traffic Switching
- Automated Rollback on Failure
- Monitoring, Alerting, and Auto Scaling
- Global Content Delivery via CloudFront

**Deployment Lifecycle:**

```text
Developer Commit
       │
       ▼
GitHub Repository
       │
       ▼
Webhook Trigger
       │
       ▼
Jenkins Pipeline
       │
       ▼
Build & Test
       │
       ▼
Docker Image Build
       │
       ▼
Trivy Security Scan
       │
       ▼
Push Image to ECR
       │
       ▼
Deploy to ECS Fargate
       │
       ▼
Health Validation
       │
       ▼
Traffic Switch
       │
       ▼
Production Release
```

---

## Business Problem

Traditional deployment models introduce significant operational risk as infrastructure scales:

| Problem                    | Impact                             |
| -------------------------- | ---------------------------------- |
| Manual deployments         | Slow release cycles, human error   |
| Configuration drift        | Environment inconsistency          |
| No rollback mechanism      | Extended downtime on failures      |
| Limited monitoring         | Poor visibility into system health |
| Uncontrolled scaling       | Capacity mismanagement             |

Switchback addresses each of these through automation, observability, and infrastructure as code.

---

## Solution Overview

| Capability                  | Implementation            |
| --------------------------- | ------------------------- |
| Infrastructure Provisioning | Terraform                 |
| Continuous Integration      | Jenkins                   |
| Containerization            | Docker                    |
| Image Storage               | Amazon ECR                |
| Container Orchestration     | Amazon ECS Fargate        |
| Traffic Management          | Application Load Balancer |
| Global Delivery             | CloudFront                |
| Monitoring                  | CloudWatch                |
| Alerting                    | SNS                       |
| Scaling                     | ECS Auto Scaling          |

---

## Architecture Diagram

![Architecture Diagram](assets/architecture-diagram.png)

---

## Technology Stack

| Layer                  | Technologies                     |
| ---------------------- | -------------------------------- |
| Source Control         | Git, GitHub                      |
| CI/CD                  | Jenkins                          |
| Infrastructure as Code | Terraform                        |
| Containerization       | Docker                           |
| Security Scanning      | Trivy                            |
| Registry               | Amazon ECR                       |
| Compute                | Amazon ECS Fargate               |
| Load Balancing         | Application Load Balancer        |
| CDN                    | CloudFront                       |
| Monitoring             | CloudWatch                       |
| Alerting               | SNS                              |
| Networking             | VPC, Subnets, NAT Gateway        |
| Security               | IAM, Security Groups             |

---

## Key Features

**Infrastructure as Code**
Terraform-managed, modular architecture with reproducible and version-controlled environments.

**CI/CD Automation**
GitHub webhook integration triggers automated testing, Docker builds, security scanning, and deployments with full build traceability.

**Blue-Green Deployments**
Two parallel environments with traffic switching enable zero-downtime releases and reduced deployment risk.

**Automated Rollback**
Health validation and failure detection trigger automatic recovery to the previous stable version.

**Monitoring and Observability**
CloudWatch dashboards with centralized logs provide full infrastructure and service visibility.

**Auto Scaling**
CPU and memory-based scaling policies manage elastic capacity automatically.

**Content Delivery**
CloudFront edge caching with HTTPS support delivers content globally with low latency.

---

## System Architecture

```text
GitHub
   │
   ▼
Jenkins
   │
   ▼
Docker Build
   │
   ▼
Amazon ECR
   │
   ▼
Amazon ECS Fargate
   │
   ▼
Application Load Balancer
   │
   ▼
CloudFront
   │
   ▼
End Users
```

## Infrastructure Architecture

All infrastructure is provisioned and managed through Terraform using a modular Infrastructure as Code (IaC) approach. The platform is designed for scalability, maintainability, and repeatable deployments across environments.

### Networking Components

* VPC
* Public and Private Subnets
* Internet Gateway
* NAT Gateway
* Route Tables

### Security Components

* IAM Roles and Policies
* Security Groups implementing least-privilege access

### Compute Components

* Amazon ECS Cluster
* ECS Services and Task Definitions
* AWS Fargate Serverless Compute

### Monitoring Components

* Amazon CloudWatch Logs
* CloudWatch Dashboards and Alarms
* Amazon SNS Notifications

The infrastructure architecture is represented in the project-wide architecture diagram and provisioned entirely through Terraform modules, ensuring consistency, version control, and reproducible deployments across environments.

---


## CI/CD Pipeline Architecture

```text
Checkout
   │
   ▼
Install Dependencies
   │
   ▼
Unit Testing
   │
   ▼
Build
   │
   ▼
Docker Build
   │
   ▼
Trivy Scan
   │
   ▼
Push to ECR
   │
   ▼
Deploy Green Environment
   │
   ▼
Validate
   │
   ▼
Approval Gate
   │
   ▼
Switch Traffic
```

**Evidence**

![Jenkins Pipeline](screenshots/jenkins-pipeline-success.png)

> Full pipeline documentation: [docs/implementation-guide.md](docs/implementation-guide.md)

---

## Blue-Green Deployment Strategy

Two independent environments run simultaneously. The Blue environment serves live traffic while Green receives the new deployment. Once health validation passes, traffic switches to Green.

```text
Current Production (Blue)
         │
         ▼
   Deploy to Green
         │
         ▼
   Health Validation
         │
         ▼
   Switch Traffic to Green
         │
         ▼
   Green is now Production
```

**Benefits:**

- Zero downtime deployments
- Instant rollback capability
- Safer, lower-risk releases
- No user-facing interruption

**Evidence**

![Blue-Green Deployment](screenshots/blue-green-deployment.png)

---

## Automated Rollback

Rollback is triggered automatically under any of the following conditions:

- Deployment validation fails
- ECS task startup fails
- Application health checks fail
- Container crashes occur

```text
Deployment Failure
       │
       ▼
Validation Failure
       │
       ▼
Rollback Triggered
       │
       ▼
Previous Version Restored
```

**Evidence**

![Rollback and Traffic Switch](screenshots/traffic-switch.png)

> Rollback test results: [docs/validation-testing.md](docs/validation-testing.md)

---

## Security Architecture

**Identity and Access Management**

- IAM Roles and Policies
- Least Privilege Principle applied throughout

**Network Security**

- Security Groups for controlled ingress and egress
- ECS Tasks running in private subnets
- No direct public exposure of compute workloads

**Container Security**

- Private Amazon ECR repositories
- Trivy image scanning on every build
- Immutable container deployments

**Communication Security**

- HTTPS enforced at CloudFront and ALB
- TLS encryption in transit

---

## Networking Architecture

```text
Internet
    │
    ▼
CloudFront
    │
    ▼
Application Load Balancer (Public Subnet)
    │
    ▼
ECS Fargate Tasks (Private Subnet)
```

**Benefits:**

* Network isolation for compute workloads
* Reduced attack surface
* Controlled and auditable ingress paths
* Public-facing traffic restricted to CloudFront and ALB
* Application workloads remain isolated within private subnets

**Evidence**

The following screenshots validate the networking design and traffic flow implementation:

### VPC Resource Map

Demonstrates the VPC architecture, including public and private subnets, Internet Gateway, and NAT Gateway configuration.

![VPC Resource Map](screenshots/vpc-resource-map.png)

### Application Load Balancer Target Health

Shows healthy target registration and successful traffic routing from the ALB to ECS services.

![ALB Target Health](screenshots/alb-targets.png)

### ECS Service Deployment

Validates that ECS Fargate tasks are running successfully within private subnets and serving application traffic through the load balancer.

![ECS Service](screenshots/ecs-service.png)

## High Availability Design

The platform is designed to tolerate component failures without service interruption through redundancy, health monitoring, and automated recovery mechanisms.

**Implemented Controls:**

* Multi-AZ deployment strategy for improved fault tolerance
* Application Load Balancer distributes traffic across healthy targets
* ECS continuously monitors task health and replaces unhealthy containers
* ALB and ECS health checks provide automated failure detection
* Service redundancy maintained through desired task count configuration

**Recovery Flow:**

```text
Task Failure
     │
     ▼
Health Check Failure Detected
     │
     ▼
ECS Detects Unhealthy Task
     │
     ▼
Replacement Task Created
```

These controls ensure that application availability is maintained during container failures, instance-level issues, and deployment events, minimizing downtime and improving service resilience.

---


## Auto Scaling Design

ECS Auto Scaling adjusts task count based on real-time utilization metrics.

**Scaling Metrics:**

- CPU Utilization
- Memory Utilization

**Scale Out**

```text
Traffic Increase
      │
      ▼
Threshold Reached
      │
      ▼
New Tasks Created
```

**Scale In**

```text
Traffic Decrease
      │
      ▼
Utilization Drops Below Threshold
      │
      ▼
Excess Tasks Removed
```

**Evidence**

![Auto Scaling](screenshots/autoscaling.png)

---

## Monitoring and Observability

CloudWatch provides centralized visibility across all platform components.

**Metrics Tracked:**

- CPU and Memory Utilization
- Request Count and Error Rate
- Latency (p50, p95, p99)

**Log Sources:**

- Application Logs
- Container Logs
- Deployment Logs

**Dashboard Views:**

- Infrastructure Health
- Service Health
- Deployment Status

**Evidence**

![CloudWatch Dashboard](screenshots/cloudwatch-dashboard.png)

## Alerting and Incident Response

The platform uses CloudWatch Alarms integrated with Amazon SNS to provide proactive monitoring and automated incident notification.

```text
CloudWatch Metric Threshold Breached
              │
              ▼
        CloudWatch Alarm
              │
              ▼
          SNS Topic
              │
              ▼
      Email Notification
```

**Alert Types:**

* High CPU Utilization
* High Memory Utilization
* ECS Service Failures
* Deployment Failures
* Application Load Balancer 5xx Error Rate

CloudWatch continuously monitors infrastructure and application metrics. When predefined thresholds are exceeded, alarms trigger SNS notifications, enabling rapid incident detection and response.

---


## CloudFront CDN Layer

CloudFront sits in front of the ALB and provides edge caching, HTTPS termination, and global distribution.

```text
User
 │
 ▼
CloudFront  (Edge Cache / HTTPS)
 │
 ▼
ALB
 │
 ▼
ECS Fargate
```

**Benefits:**

- Reduced origin load through edge caching
- Global availability with low latency
- HTTPS delivery enforced at the edge
- Integrated with ALB origin

**Evidence**

![CloudFront Distribution](screenshots/cloudfront-distribution.png)

---

## Implementation Roadmap

| Phase    | Description            |
| -------- | ---------------------- |
| Phase 1  | Application Setup      |
| Phase 2  | Dockerization          |
| Phase 3  | Terraform Foundation   |
| Phase 4  | Networking             |
| Phase 5  | Security               |
| Phase 6  | ECR                    |
| Phase 7  | ECS Fargate            |
| Phase 8  | Application Load Balancer |
| Phase 9  | Blue-Green Deployment  |
| Phase 10 | Jenkins CI/CD          |
| Phase 11 | Monitoring             |
| Phase 12 | Alerting               |
| Phase 13 | Auto Scaling           |
| Phase 14 | CloudFront             |

---

## Documentation

| Document                        | Purpose                                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------------------- |
| [docs/architecture.md](docs/architecture.md)             | AWS architecture, networking design, security controls, traffic flow, and deployment strategy |
| [docs/implementation-guide.md](docs/implementation-guide.md)  | Phase-wise implementation summary and deployment walkthrough                                 |
| [docs/validation-testing.md](docs/validation-testing.md)    | Infrastructure validation, rollback testing, monitoring and auto scaling results             |
| [docs/troubleshooting.md](docs/troubleshooting.md)       | Common deployment issues, Terraform fixes, ECS and Jenkins debugging, recovery procedures    |

---

## Getting Started

### Prerequisites

- Git
- Docker
- Terraform
- AWS CLI
- Node.js
- Jenkins

### Clone Repository

```bash
git clone https://github.com/Ask99Ayush/SwitchBack.git

cd SwitchBack
```

### Configure AWS Credentials

```bash
aws configure
```

### Deploy Infrastructure

```bash
cd infrastructure/terraform

terraform init
terraform validate
terraform plan
terraform apply
```

---

## Validation Checklist

- [ ] Infrastructure Provisioned via Terraform
- [ ] ECR Repository Created
- [ ] ECS Cluster Running
- [ ] ECS Services Healthy
- [ ] ALB Accessible and Returning 200
- [ ] Jenkins Pipeline Successful End-to-End
- [ ] Blue-Green Deployment Verified
- [ ] Rollback Tested and Confirmed
- [ ] CloudWatch Dashboard Operational
- [ ] CloudWatch Alarm Triggered
- [ ] Auto Scaling Triggered and Verified
- [ ] CloudFront Distribution Accessible

---

## AWS Services Used

- Amazon VPC, Subnets, Internet Gateway, NAT Gateway, Route Tables
- IAM Roles, Policies, and Security Groups
- Amazon ECR
- Amazon ECS with AWS Fargate
- Application Load Balancer
- Amazon CloudWatch
- Amazon SNS
- Amazon CloudFront

---

## Skills Demonstrated

- DevOps and Platform Engineering
- Site Reliability Engineering
- Infrastructure as Code with Terraform
- Container orchestration with ECS Fargate
- CI/CD pipeline design with Jenkins
- Blue-Green deployments and traffic management
- Auto scaling and capacity management
- Monitoring, observability, and incident alerting
- AWS networking and IAM security design

---

## Future Improvements

- Route53 for custom domain management
- ACM Certificates for managed TLS
- AWS WAF for edge-layer protection
- Slack Notifications for deployment events
- Prometheus and Grafana for metric visualization
- ArgoCD and GitOps deployment model
- Multi-environment support (dev, staging, production)
- Formal disaster recovery strategy

---

## Author

**Ayush Rao Chaudhary**

GitHub: [github.com/Ask99Ayush](https://github.com/Ask99Ayush)

LinkedIn: [linkedin.com/in/Ask99Ayush](https://linkedin.com/in/Ask99Ayush)
