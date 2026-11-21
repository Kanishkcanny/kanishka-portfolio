
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
            "IT professional with 4+ years of experience in "
            "server operations, infrastructure automation, "
            "production support and DevOps technologies."
        )
    }
