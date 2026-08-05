# Changelog

All notable changes to the OpsLab project are documented in this file.

---

## v0.3.0 — Docker Engine

### Added

- Installed Docker Engine from Docker's official APT repository.
- Installed Docker CLI.
- Installed containerd.
- Installed Docker Buildx plugin.
- Installed Docker Compose plugin.
- Configured Docker service with systemd.
- Added Docker documentation.

### Fixed

- Resolved missing Docker GPG key (`NO_PUBKEY`).
- Fixed package repository configuration.
- Configured Docker permissions for the `juan` user.

### Validated

- Docker daemon running.
- Successful image download from Docker Hub.
- Successful execution of the `hello-world` container.

---

## v0.2.0 — Git, SSH & GitHub

### Added

- Configured SSH remote administration.
- Configured Git global identity.
- Created local Git repository.
- Connected repository to GitHub.
- Configured SSH authentication with GitHub.
- Initial project structure.

### Fixed

- Replaced HTTPS authentication with SSH authentication.
- Regenerated SSH key after losing the initial passphrase.
- Removed the incorrectly named `RAEDME.md` file.

---

## v0.1.0 — Ubuntu Server

### Added

- Ubuntu Server 26.04 LTS virtual machine.
- VMware virtual environment.
- OpenSSH Server.
- System update.
- Basic administration utilities.
- Initial server validation.
