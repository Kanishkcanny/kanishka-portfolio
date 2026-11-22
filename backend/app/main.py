
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import health, profile, projects

app = FastAPI(
    title="Kanishka Portfolio API",
    description="Backend API for my DevOps portfolio.",
    version="0.1.0",
)

# Local development + deployed frontend URLs
frontend_origins = os.getenv(
    "FRONTEND_URL",
    "http://localhost:5173,http://127.0.0.1:5173,https://kanishka-portfolio-iota.vercel.app",
)

allowed_origins = [
    origin.strip()
    for origin in frontend_origins.split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routers
app.include_router(health.router)
app.include_router(profile.router)
app.include_router(projects.router)


@app.get("/")
def root():
    return {
        "message": "Welcome to Kanishka Portfolio API",
        "status": "running",
    }
