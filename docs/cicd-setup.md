# CI/CD Setup Guide for codingwithtony.io.vn

This document provides instructions on configuring GitHub Actions to automatically deploy the `codingwithtony.io.vn` application.

## 1. Prerequisites

For the pipeline to function correctly, the Repository must be configured with the correct **Secrets** and **Variables**.

## 2. Repository Secrets

Go to **Settings** > **Secrets and variables** > **Actions** and add the following secrets:

| Secret Name       | Sample Value              | Description                                                                                                |
| :---------------- | :------------------------ | :--------------------------------------------------------------------------------------------------------- |
| `VPS_HOST`        | `x.x.x.x`                 | IP address of the target VPS.                                                                              |
| `VPS_USER`        | `tony`                    | Username for SSH access.                                                                                   |
| `SSH_PRIVATE_KEY` | `-----BEGIN...`           | SSH Private Key for accessing the VPS.                                                                     |
| `GHCR_PAT`        | `ghp_xxxx`                | GitHub Personal Access Token (Classic) with `read:packages` permission. Used to log in to GHCR on the VPS. |
| `DISCORD_WEBHOOK` | `https://discord.com/...` | (Optional) Discord Webhook URL for sending deployment status notifications.                                |

## 3. Workflow Details

Configuration file: `.github/workflows/deploy.yml`

### Trigger

- Runs automatically when code is pushed to the `main` branch.

### Jobs

1.  **build-and-push**:
    - Runs on `ubuntu-latest`.
    - Logs in to GHCR.
    - Builds the Docker Image from source code.
    - Pushes the Image to `ghcr.io/toannguyen3105/codingwithtony.io.vn:latest`.

2.  **deploy** (Runs after build completes):
    - SSHs into the VPS (`VPS_HOST`).
    - Executes the `./scripts/deploy.sh` script in the `/opt/apps/codingwithtony.io.vn` directory.
    - Passes `GHCR_PAT` and `GHCR_USER` environment variables to the script for login/pull operations.

3.  **notify**:
    - Sends success or failure notifications to the Discord channel (if Webhook is configured).

## 4. Write Permissions

Ensure GitHub Actions has write access to GHCR:

1. Go to **Settings** > **Actions** > **General**.
2. Under **Workflow permissions**, select **Read and write permissions**.
3. Click **Save**.

## 5. VPS Configuration

On the VPS, ensure the following:

1. The project directory exists: `/opt/apps/codingwithtony.io.vn`.
2. `docker-compose.yml` and `scripts/deploy.sh` files are present on the VPS (or git cloned).
3. `scripts/deploy.sh` is executable (`chmod +x scripts/deploy.sh`).
4. The `web_network` is created (`docker network create web_network`) if using a shared Traefik instance.
