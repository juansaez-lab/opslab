# Sprint 4 — Nginx Reverse Proxy

## Objective

Install and configure Nginx as the front-end web server for the OpsLab infrastructure.

The objective is to understand how reverse proxies work and prepare the environment for routing requests to future Docker containers and services.

---

## Why Nginx?

Nginx is a high-performance web server that is commonly used as:

- Web server
- Reverse proxy
- Load balancer
- SSL/TLS termination point

In this project, Nginx will become the entry point for every service deployed inside Docker.

---

## Planned Architecture

Client

↓

Nginx

↓

Docker Containers

- Demo Web Application
- Jenkins
- Grafana
- Prometheus

---

## Tasks

- Install Nginx.
- Validate the service.
- Learn the configuration structure.
- Configure a custom web page.
- Prepare reverse proxy configuration.
- Document the deployment.
- Validate logs.
- Commit and push.

---

## Expected Result

Nginx will be running as the front-end server and ready to proxy requests to the services deployed in the following sprints.
---

## Implementation

A Docker container was started with:

```bash
docker run -d \
  --name opslab-demo \
  -p 8080:80 \
  nginx:alpine
```

The container was validated with:

```bash
docker ps
curl http://localhost:8080
```

A custom Nginx site was created at:

```text
/etc/nginx/sites-available/opslab
```

The default site was disabled and the OpsLab site was enabled through a symbolic link:

```bash
sudo rm /etc/nginx/sites-enabled/default
sudo ln -s /etc/nginx/sites-available/opslab \
  /etc/nginx/sites-enabled/opslab
```

The host Nginx forwards incoming HTTP traffic to the Docker container:

```nginx
location / {
    proxy_pass http://127.0.0.1:8080;
}
```

The configuration was validated and reloaded with:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## Validation

A request to:

```bash
curl http://localhost
```

returned the HTML served by the Docker container, confirming that the reverse proxy was working correctly.

## Result

Nginx is now configured as the entry point for OpsLab and forwards requests from port `80` to the container published on port `8080`.
