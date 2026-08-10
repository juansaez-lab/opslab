# Sprint 6 — Demo Web Application

## Objective

Create a custom OpsLab status dashboard and serve it through Docker Compose behind the existing Nginx reverse proxy.

## Application Structure

The application is stored in:

```text
app/
├── index.html
├── style.css
└── script.js
The application is intentionally lightweight and uses:

HTML5
CSS3
Vanilla JavaScript
Deployment

The application directory is mounted into the Nginx container through Docker Compose:

volumes:
  - ../app:/usr/share/nginx/html:ro

This allows changes in the local application files to be reflected immediately inside the container without rebuilding the image.

Application Features

The dashboard displays:

Ubuntu Server status
OpenSSH status
Docker Engine status
Nginx status
Docker Compose status
Planned Jenkins integration
Planned Prometheus integration
Planned Grafana integration
Current Git branch
Project version
Deployment information
Validation

The Docker Compose service was verified with:

docker compose -f deploy/docker-compose.yml ps

The application was tested through the host Nginx reverse proxy:

curl http://localhost

The application is also accessible from the Windows host through:

http://192.168.163.130
Result

OpsLab now contains a custom web application running inside Docker, managed through Docker Compose and exposed through the host Nginx reverse proxy.

The application is ready to be used as the deployment target for the future Jenkins CI/CD pipeline.


Guarda.

## 2. Commit y push

```bash
git add app/ deploy/docker-compose.yml docs/06-demo-web-app.md
git status
