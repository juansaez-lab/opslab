# Sprint 3 — Docker Installation

## Objective

Install Docker Engine from Docker's official APT repository and validate that the server can run containers correctly.

## Environment

- Ubuntu Server 26.04 LTS
- Docker Engine 29.7.1
- Architecture: amd64

## Installation approach

Docker was installed from Docker's official repository instead of using the `docker.io` package from Ubuntu.

This provides access to the vendor-maintained packages and components:

- Docker Engine
- Docker CLI
- containerd
- Docker Buildx
- Docker Compose plugin

## Repository configuration

The Docker GPG key was stored in:

```text
/etc/apt/keyrings/docker.asc

