# Day 04 – Portfolio Improvements

## Completed
- Added profile photo to the portfolio.
- Added existing resume PDF to the website.
- Verified the resume URL returns HTTP 200 OK.
- Verified the PDF is served with application/pdf content type.
- Tested the portfolio on mobile viewport.
- Confirmed mobile layout is working correctly.
- Created separate Dockerfiles for User Service and Order Service.
- Configured Docker Compose for both microservices.
- Created a shared Docker bridge network.
- Configured service-to-service communication using Docker service discovery.
- Added Docker health checks to both services.
- Verified container health and application endpoints.
- Tested end-to-end order details retrieval with associated user data.
- Investigated WSL2 and Docker Desktop localhost connectivity.
- Verified the Windows host gateway workaround.
- Updated backend project API implementation details.
- Updated the portfolio project page with verified lifecycle progress.
- Added dynamic WSL gateway discovery commands.

## Validation
- Resume URL: Passed
- Mobile responsiveness: Passed
- Frontend production build: Passed
- Docker Compose services: Passed
- Container health checks: Passed
- User Service health endpoint: Passed
- Order Service health endpoint: Passed
- Order details endpoint: Passed
- Backend project API: HTTP 200
- Portfolio project detail page: Verified

## Next Steps
- Review portfolio content and accuracy.
- Improve project presentation.
- Prepare the next deployment milestone.
- Investigate the root cause of WSL localhost forwarding failure.
- Configure Prometheus and Grafana.
- Implement GitHub Actions CI/CD.
- Deploy to Kubernetes.
- Implement Helm and Argo CD.
