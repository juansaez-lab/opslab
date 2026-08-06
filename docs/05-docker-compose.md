# Sprint 5 — Docker Compose

## Objective

Replace standalone Docker containers with a reproducible multi-service deployment using Docker Compose.

The objective is to define the infrastructure as code and simplify the deployment of future services.

---

## Why Docker Compose?

Managing multiple containers individually with `docker run` quickly becomes difficult.

Docker Compose allows the entire infrastructure to be described in a single YAML file that can be version-controlled.

Benefits include:

- Infrastructure as Code
- Reproducible deployments
- Centralized configuration
- Automatic network creation
- Simplified service management

---

## Planned Services

- Reverse Proxy (Nginx)
- Demo Web Application
- Jenkins
- Prometheus
- Grafana

---

## Expected Result

The complete infrastructure will be deployed using a single command:

```bash
docker compose up -d
```
---

## Implementation

The previous standalone container was removed:

```bash
docker stop opslab-demo
docker rm opslab-demo
```

The `hello-world` test container was also removed:

```bash
docker rm bold_banach
```

The Docker Compose deployment was defined in:

```text
deploy/docker-compose.yml
```

The initial service configuration is:

```yaml
services:
  demo-nginx:
    image: nginx:alpine
    container_name: opslab-demo
    ports:
      - "8080:80"
    restart: unless-stopped
```

The service was started with:

```bash
cd deploy
docker compose up -d
```

Docker Compose automatically created:

- The `deploy_default` network.
- The `opslab-demo` container.

## Validation

The deployment was verified with:

```bash
docker compose ps
docker ps
```

Direct container access was tested with:

```bash
curl http://localhost:8080
```

Reverse proxy access through the host Nginx was tested with:

```bash
curl http://localhost
```

Both requests returned the expected Nginx page.

## Result

The demo service is now managed declaratively through Docker Compose instead of an individual `docker run` command.
