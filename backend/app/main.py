
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import health, profile

app = FastAPI(
    title="Kanishka Portfolio API",
    description="Backend API for my AI-powered DevOps portfolio.",
    version="0.1.0"
)

# Allow the local React development server
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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

