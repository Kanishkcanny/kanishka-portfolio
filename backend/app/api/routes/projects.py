
from fastapi import APIRouter, HTTPException

router = APIRouter(
    prefix="/projects",
    tags=["Projects"]
)

projects = [
    {
        "id": "microservices-gitops",
        "number": "01",
        "title": "Microservices CI/CD & GitOps",
        "category": "DevOps Project",
        "description": (
            "Containerized microservices deployed on Amazon EKS "
            "using Helm, Argo CD and GitHub Actions."
        ),
        "problem_statement": (
            "The project focuses on automating application delivery "
            "and managing Kubernetes deployments through GitOps."
        ),
        "technologies": [
            "AWS",
            "EKS",
            "Docker",
            "Kubernetes",
            "Helm",
            "GitHub Actions",
            "Argo CD",
            "Prometheus",
            "Grafana"
        ],
        "lifecycle": [
            {
                "step": 1,
                "name": "Planning & Requirements",
                "description": "Define application architecture and deployment requirements.",
                "status": "To be documented"
            },
            {
                "step": 2,
                "name": "Infrastructure Setup",
                "description": "Prepare AWS infrastructure and Kubernetes environment.",
                "status": "To be documented"
            },
            {
                "step": 3,
                "name": "Containerization",
                "description": "Build Docker images for application services.",
                "status": "To be documented"
            },
            {
                "step": 4,
                "name": "CI Pipeline",
                "description": "Automate build and validation using GitHub Actions.",
                "status": "To be documented"
            },
            {
                "step": 5,
                "name": "Kubernetes Deployment",
                "description": "Deploy applications using Kubernetes and Helm.",
                "status": "To be documented"
            },
            {
                "step": 6,
                "name": "GitOps",
                "description": "Manage application deployment through Argo CD.",
                "status": "To be documented"
            },
            {
                "step": 7,
                "name": "Monitoring",
                "description": "Monitor application and cluster metrics using Prometheus and Grafana.",
                "status": "To be documented"
            }
        ],
        "architecture": {
            "description": (
                "Planned flow: Developer -> GitHub -> GitHub Actions "
                "-> Container Registry -> Kubernetes EKS -> Argo CD "
                "-> Monitoring."
            ),
            "diagram": None
        },
        "repository": None
    },
    {
        "id": "aws-ha-infrastructure",
        "number": "02",
        "title": "Highly Available AWS Infrastructure",
        "category": "Cloud Infrastructure",
        "description": (
            "Multi-AZ AWS infrastructure using Terraform, "
            "Auto Scaling, Application Load Balancer and RDS."
        ),
        "problem_statement": (
            "Design infrastructure with availability, scalability "
            "and repeatable provisioning as key objectives."
        ),
        "technologies": [
            "AWS",
            "Terraform",
            "EC2",
            "VPC",
            "Auto Scaling",
            "ALB",
            "ECS",
            "RDS",
            "Secrets Manager",
            "CloudTrail"
        ],
        "lifecycle": [
            {
                "step": 1,
                "name": "Requirements & Design",
                "description": "Define availability, networking and application requirements.",
                "status": "To be documented"
            },
            {
                "step": 2,
                "name": "Network Architecture",
                "description": "Design VPC, subnets, routing and security groups.",
                "status": "To be documented"
            },
            {
                "step": 3,
                "name": "Terraform Provisioning",
                "description": "Define and provision AWS infrastructure using Terraform.",
                "status": "To be documented"
            },
            {
                "step": 4,
                "name": "High Availability",
                "description": "Configure multiple availability zones and Auto Scaling.",
                "status": "To be documented"
            },
            {
                "step": 5,
                "name": "Load Balancing",
                "description": "Configure Application Load Balancer for application traffic.",
                "status": "To be documented"
            },
            {
                "step": 6,
                "name": "Database & Security",
                "description": "Configure RDS, backups and secrets management.",
                "status": "To be documented"
            },
            {
                "step": 7,
                "name": "Validation",
                "description": "Test infrastructure availability and recovery behaviour.",
                "status": "To be documented"
            }
        ],
        "architecture": {
            "description": (
                "Planned flow: Users -> Application Load Balancer "
                "-> Multi-AZ application infrastructure -> RDS."
            ),
            "diagram": None
        },
        "repository": None
    },
    {
        "id": "aws-cost-automation",
        "number": "03",
        "title": "AWS Cost Guardrails Automation",
        "category": "Cloud Automation",
        "description": (
            "Automated non-production resource management and "
            "cloud cost monitoring using Python and AWS Lambda."
        ),
        "problem_statement": (
            "Reduce unnecessary non-production cloud usage and "
            "improve visibility into potentially idle resources."
        ),
        "technologies": [
            "AWS",
            "Python",
            "Boto3",
            "Lambda",
            "EventBridge",
            "SNS",
            "AWS Budgets",
            "Cost Explorer"
        ],
        "lifecycle": [
            {
                "step": 1,
                "name": "Cost Analysis",
                "description": "Identify non-production resource cost and usage patterns.",
                "status": "To be documented"
            },
            {
                "step": 2,
                "name": "Automation Design",
                "description": "Define resource tagging and automation rules.",
                "status": "To be documented"
            },
            {
                "step": 3,
                "name": "Python Automation",
                "description": "Implement AWS resource checks using Boto3.",
                "status": "To be documented"
            },
            {
                "step": 4,
                "name": "Lambda Integration",
                "description": "Run automation through AWS Lambda.",
                "status": "To be documented"
            },
            {
                "step": 5,
                "name": "Scheduled Execution",
                "description": "Schedule automation using EventBridge.",
                "status": "To be documented"
            },
            {
                "step": 6,
                "name": "Notifications",
                "description": "Send cost and resource notifications using SNS.",
                "status": "To be documented"
            },
            {
                "step": 7,
                "name": "Reporting",
                "description": "Review usage and cost information using AWS cost tools.",
                "status": "To be documented"
            }
        ],
        "architecture": {
            "description": (
                "Planned flow: EventBridge -> Lambda -> Boto3 -> "
                "AWS Resource Checks -> SNS Notifications."
            ),
            "diagram": None
        },
        "repository": None
    }
]


@router.get("/")
def get_projects():
    return {
        "total": len(projects),
        "projects": projects
    }


@router.get("/{project_id}")
def get_project(project_id: str):
    for project in projects:
        if project["id"] == project_id:
            return project

    raise HTTPException(
        status_code=404,
        detail="Project not found"
    )
