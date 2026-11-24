# Day 05 — Production Deployment & API Integration

## Completed
- Deployed FastAPI backend on Render.
- Deployed React frontend on Vercel.
- Configured CORS to allow the deployed Vercel frontend.
- Connected frontend API requests to the production Render URL.
- Fixed frontend deployment using Git commit and push.
- Verified profile API and projects API responses.
- Confirmed all three project cards load on the live website.
- Confirmed footer displays Backend API: Connected.

## Troubleshooting
### Issue: Projects were not loading
- Browser Console showed requests going to http://127.0.0.1:8000.
- This address referred to the visitor's local machine, not the deployed backend.
- Updated the frontend API URL to the Render production URL.
- Committed and pushed the frontend fix.
- Vercel deployed the updated frontend successfully.

## Validation
- Backend root endpoint: HTTP 200
- Profile endpoint: HTTP 200
- Projects endpoint: HTTP 200
- CORS origin: Verified
- Frontend API connection: Connected
- Project cards: 3 visible
- Production deployment: Successful

## Learnings
- Why localhost URLs must not be used in deployed frontend applications.
- How CORS controls cross-origin browser requests.
- How to inspect browser Console errors.
- How GitHub pushes trigger frontend deployments.

## Next Steps
- Build detailed project case studies.
- Add architecture diagrams and implementation evidence.
- Add verified GitHub repository links.
