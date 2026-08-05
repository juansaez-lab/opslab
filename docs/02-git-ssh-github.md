# Sprint 2 — SSH, Git and GitHub

## Objective

Configure remote administration through SSH, initialize the Git repository, and securely connect the project to GitHub using SSH authentication.

---

## SSH Remote Access

The Ubuntu server is administered remotely from a Windows host using OpenSSH.

Connection command:

```powershell
ssh juan@192.168.163.130
```

Using SSH allows the server to be managed exactly as it would be in a production environment, without relying on the VMware console.

---

## Git Configuration

Git was configured globally for the project:

```bash
git config --global user.name "Juan Saez"
git config --global user.email "jusaez74@gmail.com"
```

Configuration was verified with:

```bash
git config --list
```

---

## Local Repository

The project directory was created:

```bash
mkdir -p ~/projects/opslab
cd ~/projects/opslab
```

Git repository initialization:

```bash
git init
git branch -m main
```

The first project structure was committed:

```bash
git add .
git commit -m "docs: initial project structure"
```

---

## GitHub Repository

A remote repository was created:

```text
git@github.com:juansaez-lab/opslab.git
```

Remote configuration:

```bash
git remote add origin git@github.com:juansaez-lab/opslab.git
git remote -v
```

---

## SSH Authentication with GitHub

An ED25519 key pair was generated:

```bash
ssh-keygen -t ed25519 -C "jusaez74@gmail.com"
```

The public key:

```text
~/.ssh/id_ed25519.pub
```

was added to GitHub under:

Settings → SSH and GPG keys

The connection was validated with:

```bash
ssh -T git@github.com
```

Successful authentication returned:

```text
Hi juansaez-lab! You've successfully authenticated, but GitHub does not provide shell access.
```

---

## Troubleshooting

### GitHub password authentication

The first push attempt used HTTPS and failed with:

```text
Password authentication is not supported for Git operations.
```

The repository remote was changed to SSH:

```bash
git remote set-url origin git@github.com:juansaez-lab/opslab.git
```

---

### Forgotten SSH passphrase

The first SSH key was accidentally created with a passphrase that could not be remembered.

The key pair was deleted:

```bash
rm ~/.ssh/id_ed25519 ~/.ssh/id_ed25519.pub
```

A new ED25519 key pair was generated and configured successfully.

---

## Validation

The repository was successfully pushed to GitHub using SSH authentication.

Current repository status:

```bash
git status
```

Current branch:

```bash
git branch
```

Configured remotes:

```bash
git remote -v
```

---

## Result

OpsLab is now version-controlled with Git, securely connected to GitHub using SSH authentication, and ready for collaborative and automated workflows.
