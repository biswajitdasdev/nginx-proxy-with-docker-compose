# An example of nginx proxy with docker

```bash
# To run app
docker compose up -d

# Frontend App
curl http://localhost:4173

# Backend Api
curl http://localhost:4173/api/hello

# Stop and delete resources
docker compose down --rmi all --volumes --remove-orphans
```
