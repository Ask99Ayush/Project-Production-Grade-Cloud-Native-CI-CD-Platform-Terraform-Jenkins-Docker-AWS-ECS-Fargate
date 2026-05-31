import { useEffect, useState } from 'react'

const technologies = [
  'Jenkins', 'Terraform', 'Docker', 'ECS Fargate', 'ECR', 'CloudFront',
  'ALB', 'CloudWatch', 'SNS', 'IAM', 'VPC', 'GitHub Actions',
  'Route 53', 'Security Groups', 'NAT Gateway', 'CloudFormation'
]

export function TechMarquee() {
  const [scrollX, setScrollX] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollX(prev => (prev + 0.5) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden py-4 bg-gradient-to-r from-transparent via-purple-600/10 to-transparent">
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{ transform: `translateX(-${scrollX}%)` }}
      >
        {[...technologies, ...technologies].map((tech, i) => (
          <span
            key={i}
            className="text-sm font-mono text-purple-400/70 hover:text-purple-400 transition-colors"
          >
            {tech} •
          </span>
        ))}
      </div>
    </div>
  )
}