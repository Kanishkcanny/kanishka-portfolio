# KANISHKA. – Beyond the Resume

**An AI-powered personal portfolio showcasing my professional journey, DevOps engineering skills, technical projects, and experience.**

<p align="center">
  <a href="https://kanishka-portfolio-iota.vercel.app">
    <strong>🌐 Visit Live Portfolio</strong>
  </a>
</p>

---

## About the Project

KANISHKA. – Beyond the Resume is a personal portfolio website designed to showcase my technical skills, professional experience, hands-on projects, and learning journey in DevOps and Cloud Engineering.

The goal is to evolve this project into a full-stack, AI-powered portfolio application while applying practical software development and DevOps engineering practices.

## Live Application

**Production URL:** https://kanishka-portfolio-iota.vercel.app

**Source Code:** https://github.com/Kanishkcanny/kanishka-portfolio

**Hosting Platform:** Vercel

## Current Features

- Responsive personal portfolio homepage
- Professional introduction and profile
- About section
- Professional experience timeline
- DevOps and Cloud projects showcase
- Technical skills section
- Contact and professional profile links
- Responsive desktop and mobile layout

## Technology Stack

### Current Implementation

| Technology | Purpose |
|---|---|
| React | Frontend development |
| Vite | Development server and build tooling |
| JavaScript | Application logic |
| CSS | Styling and responsive design |
| Git | Version control |
| GitHub | Source code management |
| Vercel | Frontend hosting and deployment |

### Planned Technologies

| Technology | Planned Purpose |
|---|---|
| Python | Backend development |
| FastAPI | REST API development |
| AI API | AI-powered portfolio features |
| Docker | Application containerization |
| GitHub Actions | CI/CD automation |
| AWS | Cloud infrastructure |
| Terraform | Infrastructure as Code |
| Kubernetes | Container orchestration |
| Prometheus | Metrics monitoring |
| Grafana | Monitoring dashboards |

## Project Architecture

### Current Deployment Architecture

```text
             VISITOR
                |
                v
       PUBLIC PORTFOLIO URL
                |
                v
             VERCEL
          (Production)
                |
                v
          REACT + VITE
          (Frontend)
                |
                v
        GITHUB REPOSITORY
        (Source Control)
```

### Planned Full-Stack Architecture

```text
              USER
                |
                v
          REACT FRONTEND
                |
                v
          FASTAPI BACKEND
                |
          +-----+------+
          |            |
          v            v
      AI SERVICE    DATABASE
          |
          v
    PORTFOLIO AI FEATURES

      DEVOPS PIPELINE
              |
              v
       GITHUB ACTIONS
              |
              v
        DOCKER IMAGES
              |
              v
       AWS / KUBERNETES
              |
              v
      PROMETHEUS + GRAFANA
```

*The full-stack architecture is a planned direction, not the current deployed implementation.*

## Project Structure

```text
kanishka-portfolio/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/                  # Planned
│
├── infrastructure/
│   └── terraform/            # Planned
│
├── docker/                   # Planned
├── kubernetes/               # Planned
├── monitoring/               # Planned
│
├── docs/
│   ├── architecture/
│   ├── deployment/
│   ├── troubleshooting/
│   ├── daily-progress/
│   └── screenshots/
│
├── .github/
│   └── workflows/            # Planned
│
├── .gitignore
├── README.md
└── CHANGELOG.md
```

*Planned directories and components will be added as development progresses.*

## Run Locally

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Kanishkcanny/kanishka-portfolio.git
```

### 2. Navigate to the project

```bash
cd kanishka-portfolio/frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start development server

```bash
npm run dev
```

### 5. Create production build

```bash
npm run build
```

The production build is generated inside the `frontend/dist` directory.

## Deployment

The current frontend is deployed on Vercel.

### Deployment Configuration

| Configuration | Value |
|---|---|
| Platform | Vercel |
| Framework | Vite |
| Root Directory | frontend |
| Production Branch | main |
| Build Command | vite build |
| Output Directory | dist |

### Deployment Workflow

1. Develop and test changes locally.
2. Commit changes using Git.
3. Push changes to GitHub.
4. Vercel detects updates to the connected production branch.
5. Vercel builds and deploys the updated frontend.

## Documentation

Project documentation is maintained alongside the source code.

| Document | Description |
|---|---|
| [Deployment Guide](docs/deployment/vercel-deployment.md) | Vercel deployment configuration |
| [Day 1 Progress](docs/daily-progress/day-01.md) | Environment setup and frontend development |
| [Day 2 Progress](docs/daily-progress/day-02.md) | Production deployment progress |
| [Troubleshooting – INC-001](docs/troubleshooting/INC-001-wsl-npm-path-conflict.md) | WSL npm path conflict and resolution |
| [Changelog](CHANGELOG.md) | Project changes and releases |

## Development Roadmap

- [x] Initialize React + Vite frontend
- [x] Build responsive portfolio homepage
- [x] Create GitHub repository
- [x] Configure Git version control
- [x] Deploy frontend to Vercel
- [x] Add deployment documentation
- [ ] Complete production website verification
- [ ] Build FastAPI backend
- [ ] Develop AI Portfolio Assistant
- [ ] Develop AI Job Description Matcher
- [ ] Develop AI Project Explainer
- [ ] Containerize application with Docker
- [ ] Implement CI/CD using GitHub Actions
- [ ] Provision AWS infrastructure using Terraform
- [ ] Deploy backend and frontend infrastructure
- [ ] Implement Kubernetes deployment
- [ ] Add Prometheus and Grafana monitoring

## Engineering Practices

This project follows a structured engineering workflow:

**Plan → Implement → Test → Troubleshoot → Document → Commit → Deploy**

Key practices:

- Git-based version control
- Incremental development
- Deployment verification
- Troubleshooting documentation
- Infrastructure automation (planned)
- CI/CD implementation (planned)
- Monitoring and observability (planned)

## About Me

**Kanishka Bhardwaj**

DevOps Engineer | AWS | Kubernetes | Terraform | CI/CD

I have experience in IT infrastructure operations, Linux and Windows administration, server monitoring, troubleshooting, and enterprise application support. I am developing my expertise in cloud infrastructure, automation, containerization, and modern DevOps practices.

- **LinkedIn:** https://www.linkedin.com/in/kanishka-bhardwaj-a88a09193/
- **GitHub:** https://github.com/Kanishkcanny
- **Portfolio:** https://kanishka-portfolio-iota.vercel.app

---

**Built and maintained by Kanishka Bhardwaj.**

*Learning, building, automating, and moving beyond the resume.*
