# Sprint 3 — Docker Engine Installation

## Objective

Install Docker Engine from Docker's official APT repository and validate that the server can download images and run containers correctly.

---

## Why Docker?

Docker provides lightweight containers that package applications together with all their dependencies, making deployments reproducible across different environments.

Instead of installing applications directly on the operating system, services run inside isolated containers.

---

## Installation

Docker was installed from the official Docker APT repository instead of Ubuntu's default `docker.io` package.

The following components were installed:

- Docker Engine
- Docker CLI
- containerd
- Docker Buildx
- Docker Compose Plugin

---

## Repository Configuration

Docker repository:

```text
https://download.docker.com/linux/ubuntu
```

APT signing key:

```text
/etc/apt/keyrings/docker.asc
```

Repository definition:

```text
/etc/apt/sources.list.d/docker.sources
```

---

## Docker Service

The Docker daemon was verified using:

```bash
sudo systemctl status docker
```

Result:

```text
Active: active (running)
```

Docker starts automatically with the operating system.

---

## Installed Version

```bash
docker --version
```

Output:

```text
Docker version 29.7.1
```

---

## Validation

Docker functionality was validated by running the official Hello World container.

Command:

```bash
docker run hello-world
```

Docker successfully:

1. Connected to the Docker daemon.
2. Downloaded the image from Docker Hub.
3. Created a container.
4. Started the container.
5. Displayed the expected output.
6. Exited successfully.

Container verification:

```bash
docker ps -a
```

---

## User Permissions

Initially Docker commands required root privileges.

The user was added to the Docker group:

```bash
sudo usermod -aG docker $USER
```

After reconnecting through SSH, Docker commands could be executed without using `sudo`.

---

## Troubleshooting

### Missing Docker GPG Key

During installation APT returned:

```text
NO_PUBKEY 7EA0A9C3F273FCD8
```

The issue was caused because the repository referenced:

```text
/etc/apt/keyrings/docker.asc
```

but the key file did not exist.

The key was downloaded again and correct permissions were applied.

---

### Package Download Error

The initial installation also failed with:

```text
404 Not Found
```

Running:

```bash
sudo apt update
```

refreshed the package metadata and solved the problem.

---

### Docker Socket Permissions

Initially the following error appeared:

```text
permission denied while trying to connect to the Docker daemon socket
```

This was solved by adding the user to the `docker` group and reconnecting through SSH.

---

## Result

Docker Engine is installed, running as a systemd service, configured to start automatically, and ready to host containerized applications for the following OpsLab sprints.
