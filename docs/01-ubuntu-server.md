# Sprint 1 — Ubuntu Server Base

## Objective

Provision a Linux server that will act as the foundation of the OpsLab infrastructure.

## Virtual machine configuration

- Operating system: Ubuntu Server 26.04 LTS
- Hypervisor: VMware
- CPU: 2 virtual cores
- Memory: 4 GB
- Disk: 40 GB
- Network mode: NAT
- Hostname: `opslab`
- Administrative user: `juan`

## Storage configuration

The server uses LVM to provide flexibility for future storage expansion.

## Network configuration

The server obtains its IPv4 address through DHCP from VMware's NAT network.

Main interface:

```text
ens33

Current address:

192.168.163.130/24
OpenSSH

OpenSSH Server was installed to allow remote administration from Windows.

Useful validation commands:

systemctl status ssh
ss -tlnp | grep :22
Initial system update
sudo apt update
sudo apt upgrade -y
sudo apt autoremove -y
Administration tools
sudo apt install -y git curl wget vim htop tree unzip zip net-tools
Validation
whoami
hostnamectl
cat /etc/os-release
uname -r
ip a
lsblk
df -h
free -h
Result

The Ubuntu server was successfully provisioned, updated and prepared for remote administration and future infrastructure deployments.


Guarda con:

```text
Ctrl + O
Enter
Ctrl + X
