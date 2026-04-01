# VitalSync

Architecture: Frontend (Nginx) -> Backend (Express) -> PostgreSQL

## Prerequis
- Docker >= 24
- Docker Compose v2
- Git >= 2.40

## Lancement
```bash
docker compose up --build
```

## CI/CD
- Lint + tests
- Build images
- Deploy staging + health check
