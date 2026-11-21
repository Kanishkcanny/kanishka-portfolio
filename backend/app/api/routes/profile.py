
from fastapi import APIRouter

router = APIRouter(
    prefix="/profile",
    tags=["Profile"]
)


@router.get("/")
def get_profile():
    return {
        "name": "Kanishka Bhardwaj",
        "headline": "DevOps Engineer | AWS | Kubernetes | Terraform | CI/CD",
        "location": "Bengaluru, India",
        "availability": "Immediate Joiner",

        "summary": (
            "IT professional with 4+ years of experience in server "
            "operations, infrastructure automation, system administration "
            "and production support. Experienced with Linux, Windows, AWS, "
            "Docker, Kubernetes, Terraform and CI/CD technologies."
        ),

        "experience": [
            {
                "company": "Collabera",
                "client": "HCLTech",
                "role": "System Engineer",
                "start_date": "June 2025",
                "end_date": "November 2025",
                "responsibilities": [
                    "Supported CI/CD pipelines using Jenkins and GitHub Actions.",
                    "Worked with Docker and Kubernetes deployments.",
                    "Worked with AWS infrastructure and Terraform.",
                    "Performed Linux server maintenance and troubleshooting.",
                    "Handled incidents and supported SLA requirements."
                ],
                "technologies": [
                    "Linux",
                    "AWS",
                    "Docker",
                    "Kubernetes",
                    "Terraform",
                    "Jenkins",
                    "GitHub Actions"
                ]
            },
            {
                "company": "Doppio Group",
                "role": "Associate Consultant",
                "start_date": "June 2021",
                "end_date": "June 2025",
                "responsibilities": [
                    "Managed and supported Linux and Windows servers.",
                    "Worked with AWS EC2, security groups and Terraform.",
                    "Automated configuration tasks using Ansible and Bash.",
                    "Supported Docker-based environments.",
                    "Worked with Infor OS, LCM, LTR, AD FS and EDI systems."
                ],
                "technologies": [
                    "Linux",
                    "Windows Server",
                    "AWS",
                    "Terraform",
                    "Ansible",
                    "Bash",
                    "Docker",
                    "Infor",
                    "EDI"
                ]
            }
        ],

        "skills": {
            "cloud": [
                "AWS EC2",
                "VPC",
                "IAM",
                "S3",
                "EKS",
                "ECS",
                "RDS",
                "CloudWatch"
            ],
            "devops": [
                "Docker",
                "Kubernetes",
                "Helm",
                "Jenkins",
                "GitHub Actions",
                "Argo CD",
                "Git"
            ],
            "infrastructure_as_code": [
                "Terraform",
                "Ansible",
                "CloudFormation"
            ],
            "monitoring": [
                "Prometheus",
                "Grafana",
                "AWS CloudWatch"
            ],
            "operating_systems": [
                "Linux",
                "Windows Server"
            ],
            "scripting": [
                "Bash",
                "Python",
                "Boto3",
                "YAML"
            ]
        },

        "education": [
            {
                "degree": "Bachelor of Technology",
                "specialization": "Computer Science and Engineering",
                "university": "West Bengal University of Technology",
                "start_year": 2015,
                "end_year": 2019
            }
        ],

        "contact": {
            "email": "kanishka.bhardwaj430@gmail.com",
            "linkedin": "https://www.linkedin.com/in/kanishka-bhardwaj-a88a09193/",
            "github": "https://github.com/Kanishkcanny"
        }
    }
