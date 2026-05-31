// ---------------------------------------------------------------------------
// projectConfig.ts
// Central configuration for the Cloud-Native CI/CD Platform showcase
// ---------------------------------------------------------------------------

export const projectConfig = {
  // ----- Meta Information -------------------------------------------------
  meta: {
    title: 'Cloud-Native CI/CD Platform',
    tagline: 'Automated. Scalable. Observable.',
    description:
      'Production-grade DevOps platform built using Jenkins, Terraform, Docker, Amazon ECS Fargate, CloudFront, CloudWatch, and SNS. Designed to automate software delivery through Infrastructure as Code, CI/CD automation, Blue-Green deployments, zero-downtime releases, real-time monitoring, intelligent alerting, and automated rollback mechanisms.',
    version: import.meta.env.VITE_APP_VERSION ?? '1.0.0',
    author: import.meta.env.VITE_APP_AUTHOR ?? 'Ayush Rao Chaudhary',
    year: import.meta.env.VITE_APP_YEAR ?? '2026',
  },

  // ----- Social Links -----------------------------------------------------
  social: [
    {
      label: 'GitHub Repository',
      href: import.meta.env.VITE_APP_GITHUB_URL ?? 'https://github.com',
      platform: 'github',
    },
    {
      label: 'LinkedIn',
      href: import.meta.env.VITE_APP_LINKEDIN_URL ?? 'https://linkedin.com',
      platform: 'linkedin',
    },
    {
      label: 'Instagram',
      href: import.meta.env.VITE_APP_INSTAGRAM_URL ?? 'https://instagram.com',
      platform: 'instagram',
    },
  ],

  // ----- Technology Stack -------------------------------------------------
  techStack: [
    { name: 'GitHub', category: 'source' },
    { name: 'GitHub Webhooks', category: 'source' },
    { name: 'Jenkins', category: 'ci' },
    { name: 'Terraform', category: 'iac' },
    { name: 'Docker', category: 'container' },
    { name: 'Amazon ECR', category: 'container' },
    { name: 'Amazon ECS Fargate', category: 'cloud' },
    { name: 'Application Load Balancer', category: 'network' },
    { name: 'CloudFront', category: 'network' },
    { name: 'CloudWatch', category: 'monitoring' },
    { name: 'Amazon SNS', category: 'monitoring' },
    { name: 'IAM', category: 'security' },
    { name: 'VPC', category: 'network' },
    { name: 'Security Groups', category: 'security' },
    { name: 'Route 53', category: 'network' },
  ],

  // ----- Key Metrics ------------------------------------------------------
  metrics: [
    {
      label: 'Automated Deployments',
      value: '500+',
      sub: 'pipeline executions',
      trend: 'up',
    },
    {
      label: 'Deployment Success Rate',
      value: '99.8%',
      sub: 'successful releases',
      trend: 'up',
    },
    {
      label: 'Application Uptime',
      value: '99.99%',
      sub: 'high availability target',
      trend: 'up',
    },
    {
      label: 'Rollback Recovery',
      value: '<60s',
      sub: 'automatic rollback',
      trend: 'stable',
    },
    {
      label: 'AWS Resources Managed',
      value: '25+',
      sub: 'Terraform controlled',
      trend: 'up',
    },
    {
      label: 'Incident Response',
      value: '<2 min',
      sub: 'CloudWatch + SNS alerts',
      trend: 'down',
    },
  ],

  // ----- Platform Features ------------------------------------------------
  features: [
    {
      title: 'Automated CI/CD Pipeline',
      description:
        'Every code commit automatically triggers source checkout, validation, testing, containerization, image publishing, deployment, verification, and notifications.',
      tags: ['GitHub', 'Jenkins', 'Automation'],
      icon: 'Workflow',
    },
    {
      title: 'Blue-Green Deployment Strategy',
      description:
        'Production traffic is routed only after deployment validation succeeds, enabling safe releases with instant rollback capability.',
      tags: ['ECS', 'ALB', 'Zero Downtime'],
      icon: 'ArrowLeftRight',
    },
    {
      title: 'Infrastructure as Code',
      description:
        'Entire cloud infrastructure is provisioned and managed using reusable Terraform modules ensuring consistency and repeatability.',
      tags: ['Terraform', 'AWS', 'IaC'],
      icon: 'Code2',
    },
    {
      title: 'Containerized Workloads',
      description:
        'Applications are packaged as immutable Docker images and securely stored in Amazon ECR before deployment to ECS Fargate.',
      tags: ['Docker', 'ECR', 'Containers'],
      icon: 'Package',
    },
    {
      title: 'Real-Time Monitoring',
      description:
        'CloudWatch dashboards provide operational visibility into deployments, containers, networking, infrastructure health, and application performance.',
      tags: ['CloudWatch', 'Metrics', 'Observability'],
      icon: 'BarChart3',
    },
    {
      title: 'Automated Alerting',
      description:
        'Critical incidents automatically trigger SNS notifications enabling rapid detection and response to operational issues.',
      tags: ['SNS', 'CloudWatch', 'Alerts'],
      icon: 'Bell',
    },
    {
      title: 'Auto Scaling Infrastructure',
      description:
        'ECS services dynamically scale based on workload demand to maintain performance and optimize cloud resource utilization.',
      tags: ['ECS', 'Scaling', 'AWS'],
      icon: 'TrendingUp',
    },
    {
      title: 'Secure Cloud Architecture',
      description:
        'Built with VPC isolation, private networking, IAM least-privilege access, security groups, and encrypted communication.',
      tags: ['IAM', 'VPC', 'Security'],
      icon: 'ShieldCheck',
    },
  ],

  // ----- Architecture Diagram Nodes ---------------------------------------
  architectureNodes: [
    {
      id: 'github',
      title: 'GitHub',
      description:
        'Source control platform hosting application code, infrastructure definitions, and CI/CD configuration.',
      icon: 'GitBranch',
      layer: 'source',
    },
    {
      id: 'jenkins',
      title: 'Jenkins CI/CD',
      description:
        'Pipeline orchestration engine responsible for build automation, testing, deployment, validation, and rollback workflows.',
      icon: 'Cpu',
      layer: 'ci',
    },
    {
      id: 'docker',
      title: 'Docker & ECR',
      description:
        'Container build and registry layer providing immutable application artifacts for deployment.',
      icon: 'Package',
      layer: 'registry',
    },
    {
      id: 'terraform',
      title: 'Terraform IaC',
      description:
        'Infrastructure provisioning layer managing AWS resources through version-controlled code.',
      icon: 'Code2',
      layer: 'iac',
    },
    {
      id: 'ecs',
      title: 'Amazon ECS Fargate',
      description:
        'Serverless container platform executing application workloads with automated scaling and recovery.',
      icon: 'Server',
      layer: 'cloud',
    },
    {
      id: 'alb',
      title: 'ALB & CloudFront',
      description:
        'Traffic distribution and global content delivery layer supporting secure and highly available access.',
      icon: 'Globe',
      layer: 'network',
    },
    {
      id: 'monitoring',
      title: 'CloudWatch & SNS',
      description:
        'Monitoring, observability, dashboarding, alerting, and incident notification services.',
      icon: 'BarChart3',
      layer: 'monitoring',
    },
  ],

  // ----- CI/CD Pipeline Stages --------------------------------------------
  pipeline: [
    {
      id: 'source',
      label: 'Source',
      description: 'GitHub commit triggers webhook to Jenkins pipeline',
      icon: 'GitBranch',
      technologies: ['GitHub', 'Webhooks'],
    },
    {
      id: 'build',
      label: 'Build & Test',
      description: 'Jenkins executes automated build, unit tests, and static analysis',
      icon: 'Hammer',
      technologies: ['Jenkins', 'Node.js', 'Jest'],
    },
    {
      id: 'containerize',
      label: 'Containerize',
      description: 'Docker image built from application source with immutable tags',
      icon: 'Package',
      technologies: ['Docker', 'Multi-stage Builds'],
    },
    {
      id: 'publish',
      label: 'Publish',
      description: 'Container image pushed to Amazon ECR with vulnerability scanning',
      icon: 'Upload',
      technologies: ['Amazon ECR', 'Image Scanning'],
    },
    {
      id: 'deploy',
      label: 'Blue-Green Deploy',
      description: 'New ECS service deployed on inactive target group with health validation',
      icon: 'ArrowLeftRight',
      technologies: ['ECS Fargate', 'ALB', 'Target Groups'],
    },
    {
      id: 'verify',
      label: 'Verify',
      description: 'Smoke tests and health checks executed against new deployment',
      icon: 'CheckCircle',
      technologies: ['Health Checks', 'Integration Tests'],
    },
    {
      id: 'switch',
      label: 'Traffic Switch',
      description: 'Production traffic routed to new version with zero downtime',
      icon: 'Shuffle',
      technologies: ['ALB Listener Rules', 'DNS'],
    },
    {
      id: 'notify',
      label: 'Notify',
      description: 'Deployment status notifications sent via SNS and logged to CloudWatch',
      icon: 'Bell',
      technologies: ['SNS', 'CloudWatch Logs', 'Slack'],
    },
  ],

  // ----- Screenshots / Demo Assets ----------------------------------------
  screenshots: [
    {
      title: 'CloudWatch Dashboard',
      description: 'Real-time operational metrics for ECS services, ALB traffic, and application health',
      src: '/screenshots/cloudwatch-dashboard.png',
      alt: 'AWS CloudWatch monitoring dashboard showing ECS metrics',
    },
    {
      title: 'Jenkins Pipeline Console',
      description: 'Blue Ocean view of CI/CD pipeline execution with stage-level logs',
      src: '/screenshots/jenkins-pipeline.png',
      alt: 'Jenkins pipeline execution showing all stages',
    },
    {
      title: 'Terraform Plan Output',
      description: 'Infrastructure as Code plan showing AWS resource changes before apply',
      src: '/screenshots/terraform-plan.png',
      alt: 'Terminal output of terraform plan command',
    },
    {
      title: 'ECS Service Dashboard',
      description: 'Fargate service view showing running tasks, scaling events, and deployment status',
      src: '/screenshots/ecs-service.png',
      alt: 'AWS ECS console showing Fargate service details',
    },
    {
      title: 'Blue-Green Deployment Flow',
      description: 'ALB target group configuration during traffic shifting between environments',
      src: '/screenshots/blue-green-alb.png',
      alt: 'ALB listener rules showing blue-green target group configuration',
    },
    {
      title: 'SNS Alert Notification',
      description: 'Automated incident alert received via email with CloudWatch alarm details',
      src: '/screenshots/sns-alert.png',
      alt: 'Email notification from SNS showing deployment failure alert',
    },
  ],
}

export default projectConfig