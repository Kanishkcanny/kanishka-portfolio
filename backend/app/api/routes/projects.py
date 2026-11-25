
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
            "A Python FastAPI microservices application with "
            "Docker containerization, Docker Compose networking "
            "and automated container health checks."
        ),
        "problem_statement": (
            "Build independently running User and Order services, "
            "enable HTTP communication between them, and establish "
            "a reliable containerized deployment workflow."
        ),
        "technologies": [
            "Python",
            "FastAPI",
            "Uvicorn",
            "HTTPX",
            "Docker",
            "Docker Compose",
            "Git",
            "GitHub"
        ],
        "lifecycle": [
            {
                "step": 1,
                "name": "Planning & Requirements",
                "description": "Design two independent services and their communication flow.",
                "status": "Completed",
                "details": {
                    "objective": "Build independently running User and Order microservices.",
                    "implementation": "Created a FastAPI architecture with separate service applications and REST endpoints.",
                    "tools": ["Python", "FastAPI", "HTTP REST"],
                    "outcome": "Both services run independently on ports 8001 and 8002."
                }
            },
            {
                "step": 2,
                "name": "Infrastructure Setup",
                "description": "Prepare the local development environment and Docker network.",
                "status": "Completed",
                "details": {
                    "objective": "Prepare an environment to run and connect both services.",
                    "implementation": "Configured Docker Compose with a shared bridge network and service discovery.",
                    "tools": ["Ubuntu", "WSL2", "Docker Desktop", "Docker Compose"],
                    "commands": [
                        "docker compose config",
                        "docker compose up -d --build",
                        "docker compose ps"
                    ],
                    "outcome": "Both containers run on the shared Docker network."
                }
            },
            {
                "step": 3,
                "name": "Containerization",
                "description": "Build and run both services as independent Docker containers.",
                "status": "Completed",
                "details": {
                    "objective": "Package each microservice with its runtime dependencies.",
                    "implementation": "Created separate Dockerfiles and a Docker Compose configuration for both services.",
                    "tools": ["Docker", "Docker Compose", "Python 3.12"],
                    "commands": [
                        "docker compose build",
                        "docker compose up -d --build",
                        "docker compose logs",
                        "docker compose ps"
                    ],
                    "outcome": "Both service containers built and started successfully."
                }
            },
            {
                "step": 4,
                "name": "CI Pipeline",
                "description": "Automate application testing and image builds using GitHub Actions.",
                "status": "Planned",
                "details": {
                    "objective": "Automate validation and container image builds.",
                    "implementation": "GitHub Actions workflow has not been implemented yet.",
                    "tools": ["GitHub Actions"],
                    "outcome": "Planned for the next development milestone."
                }
            },
            {
                "step": 5,
                "name": "Kubernetes Deployment",
                "description": "Deploy both microservices to a Kubernetes cluster.",
                "status": "Planned",
                "details": {
                    "objective": "Orchestrate the microservices using Kubernetes.",
                    "implementation": "Kubernetes deployments and services have not been implemented yet.",
                    "tools": ["Kubernetes", "kubectl"],
                    "outcome": "Planned."
                }
            },
            {
                "step": 6,
                "name": "GitOps",
                "description": "Manage application deployment through a GitOps workflow.",
                "status": "Planned",
                "details": {
                    "objective": "Automate deployment synchronization from Git.",
                    "implementation": "Helm and Argo CD have not been implemented yet.",
                    "tools": ["Helm", "Argo CD"],
                    "outcome": "Planned."
                }
            },
            {
                "step": 7,
                "name": "Monitoring & Validation",
                "description": "Validate application health and investigate connectivity issues.",
                "status": "In progress",
                "details": {
                    "objective": "Validate service availability and troubleshoot container networking.",
                    "implementation": "Added Docker health checks to both services. Investigated WSL2 and Docker Desktop localhost connectivity and verified the Windows host gateway workaround.",
                    "tools": [
                        "Docker Health Checks",
                        "Docker Compose",
                        "curl",
                        "WSL2"
                    ],
                    "commands": [
    "docker compose ps",
    "docker compose logs --tail=50",
    "WSL_GATEWAY=$(ip route show default | awk '{print $3; exit}')",
    'curl "http://${WSL_GATEWAY}:8001/health"',
    'curl "http://${WSL_GATEWAY}:8002/health"',
    'curl "http://${WSL_GATEWAY}:8002/orders/101/details"'
],
                    "challenges": "Ubuntu WSL could not access Docker published ports through 127.0.0.1, while Windows and the Windows host gateway could reach them. The underlying localhost forwarding cause remains under investigation.",
                    "outcome": "Both containers reported healthy and end-to-end order-to-user communication was verified. Prometheus and Grafana monitoring remain pending."
                }
            }
        ],
        "architecture": {
            "description": (
                "Client -> Order Service (8002) -> User Service (8001). "
                "Both services run in separate Docker containers connected "
                "through a shared Docker bridge network. Docker health "
                "checks validate application readiness."
            ),
            "diagram": None
        },
        "repository": "https://github.com/Kanishkcanny/microservices-gitops"
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
