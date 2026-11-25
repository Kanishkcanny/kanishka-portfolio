
# Changelog

All notable changes to this project will be documented here.

## [0.4.0] - 2026-11-25

### Added
- Dockerfiles for User Service and Order Service.
- Docker Compose orchestration with a shared bridge network.
- Docker health checks for both microservices.
- Detailed implementation notes for the Microservices CI/CD & GitOps project.
- WSL2 and Docker Desktop networking troubleshooting documentation.

### Improved
- Updated project lifecycle statuses and implementation details.
- Added dynamic WSL gateway discovery commands.
- Improved local frontend API configuration using VITE_API_URL.
- Updated backend CORS configuration for local development on port 5174.

### Tested
- Both microservices and their health endpoints.
- End-to-end order details API with associated user information.
- Backend project API and portfolio project detail page.

## [0.3.0] - 2026-11-21

### Added
- Expandable project lifecycle stages.
- Implementation details section for each lifecycle stage.

### Improved
- Project detail page layout and lifecycle readability.

### Tested
- Frontend production build successful.

## [0.2.0] - 2026-11-21

### Added
- FastAPI backend application.
- Root, health and profile REST endpoints.
- Modular API routing using APIRouter.
- Swagger API documentation.
- Python virtual environment and requirements file.
- Automated pytest API tests.

### Tested
- Three API endpoint tests passed.
- No test warnings after dependency update.

### Added
- Deployed React portfolio frontend to Vercel.
- Added public production portfolio URL.
- Added Vercel deployment documentation.
- Added Day 2 deployment progress report.
- Updated README with architecture, technology stack, setup instructions and roadmap.

### Deployment
- Platform: Vercel Hobby
- Framework: Vite
- Root directory: frontend
- Production branch: main
- Build status: Successful

## [0.1.0] - 2026-11-20

### Updated
- Added expandable project lifecycle stages.
- Improved project detail page layout and lifecycle readability.
- Verified frontend production build successfully.

### Added
- Initial React and Vite application.
- Professional portfolio homepage.
- Navigation section.
- Career experience timeline.
- DevOps project showcase.
- Technical skills section.
- Contact section.
- Responsive desktop and mobile layout.
- Initial README documentation.
- WSL npm troubleshooting report.

### Fixed
- Resolved Windows/Linux npm executable conflict in WSL.
- Cleared stale Bash command cache.

### Testing
- Verified local development server.
- Tested responsive mobile layout.
