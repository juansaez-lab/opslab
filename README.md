# OpsLab

> A hands-on DevOps / SysOps laboratory built from scratch to learn, document and demonstrate real infrastructure skills.

---

## Overview

OpsLab is a personal infrastructure project designed to simulate a real production environment using industry-standard tools.

Instead of following isolated tutorials, the project is built incrementally through documented sprints, with every configuration, troubleshooting step and deployment tracked in Git.

The main objective is to gain practical experience in Linux system administration, containerization, automation, monitoring and CI/CD while maintaining professional documentation.

---

## Current Architecture

```
GitHub
   │
   ▼
Jenkins
   │
   ▼
Docker Engine
 ├── Demo Web Application
 ├── Nginx Reverse Proxy
 ├── Prometheus
 └── Grafana

Ubuntu Server 26.04 LTS
```

---

## Technologies

- Ubuntu Server 26.04 LTS
- Linux
- Bash
- Git
- GitHub
- OpenSSH
- Docker Engine
- Docker Compose
- Jenkins *(planned)*
- Nginx *(planned)*
- Prometheus *(planned)*
- Grafana *(planned)*
- Ansible *(planned)*

---

## Project Structure

```
opslab/
├── README.md
├── CHANGELOG.md
├── docs/
│   ├── 01-ubuntu-server.md
│   ├── 02-git-ssh-github.md
│   ├── 03-docker.md
│   └── ...
├── scripts/
├── configs/
└── images/
```

---

## Completed Sprints

- ✅ Sprint 1 — Ubuntu Server
- ✅ Sprint 2 — Git, SSH & GitHub
- ✅ Sprint 3 — Docker Engine

---

## Roadmap

- 🔄 Nginx Reverse Proxy
- 🔄 Jenkins CI/CD
- 🔄 Demo Web Application
- 🔄 Docker Compose
- 🔄 Prometheus Monitoring
- 🔄 Grafana Dashboards
- 🔄 Ansible Automation
- 🔄 Backup & Restore
- 🔄 Infrastructure Improvements

---

## Documentation

Detailed documentation for every sprint is available in the `docs/` directory.

Current documentation:

- Sprint 1 — Ubuntu Server
- Sprint 2 — Git, SSH & GitHub
- Sprint 3 — Docker Engine

---

## Goals

- Learn Linux administration.
- Master Docker fundamentals.
- Build CI/CD pipelines.
- Deploy production-like services.
- Implement infrastructure monitoring.
- Practice Infrastructure as Code.
- Create a professional DevOps portfolio project.

---

## Author

**Juan Sáez**

GitHub: https://github.com/juansaez-lab
