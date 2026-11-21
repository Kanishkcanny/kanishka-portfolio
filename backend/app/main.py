
from fastapi import FastAPI
from app.api.routes import health, profile

app = FastAPI(
    title="Kanishka Portfolio API",
    description="Backend API for my AI-powered DevOps portfolio.",
    version="0.1.0"
)

# Register API routers
app.include_router(health.router)
app.include_router(profile.router)


@app.get("/")
def root():
    return {
        "message": "Welcome to Kanishka Portfolio API",
        "status": "running"
    }

