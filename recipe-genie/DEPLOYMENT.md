# Deployment Guide - Recipe Genie

## 🚀 Deployment Options

### Option 1: Docker Deployment (Recommended)

#### Requirements
- Docker and Docker Compose
- 2GB RAM minimum
- Linux server (Ubuntu recommended)

#### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd recipe-genie
```

2. **Set environment variables**
```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Edit .env files with production values
nano backend/.env
nano frontend/.env
```

3. **Update docker-compose.yml**
```yml
# Change DATABASE_URL to PostgreSQL
DATABASE_URL=postgresql://user:secure_password@postgres:5432/recipe_genie
DEBUG=False
SECRET_KEY=your-secure-secret-key
```

4. **Build and deploy**
```bash
docker-compose up -d
```

---

### Option 2: Cloud Deployment

#### AWS EC2

1. **Launch Ubuntu 20.04 instance**
2. **Install Docker and Docker Compose**
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

3. **Configure security groups**
   - Allow port 80 (HTTP)
   - Allow port 443 (HTTPS)
   - Allow port 5432 (PostgreSQL - internal only)

4. **Deploy with docker-compose**

#### Heroku

```bash
# Install Heroku CLI
curl https://cli.heroku.com/install.sh | sh

# Login to Heroku
heroku login

# Create apps
heroku create recipe-genie-frontend
heroku create recipe-genie-backend

# Deploy
git push heroku main
```

#### DigitalOcean

1. Create Droplet (Ubuntu 20.04)
2. Install Docker
3. Use docker-compose deployment
4. Configure reverse proxy with Nginx

---

### Option 3: Traditional Server Deployment

#### Backend Deployment

```bash
# SSH into server
ssh user@your-server.com

# Install dependencies
sudo apt update
sudo apt install python3-pip python3-venv postgresql postgresql-contrib nginx

# Create app directory
mkdir -p /var/www/recipe-genie
cd /var/www/recipe-genie

# Clone repository
git clone <repo-url> .

# Setup Python environment
python3 -m venv venv
source venv/bin/activate
pip install -r backend/requirements.txt

# Setup PostgreSQL
sudo -u postgres createdb recipe_genie
sudo -u postgres createuser recipe_user
sudo -u postgres psql -c "ALTER USER recipe_user WITH PASSWORD 'password';"

# Create systemd service
sudo nano /etc/systemd/system/recipe-genie.service
```

**Service file content:**
```ini
[Unit]
Description=Recipe Genie Backend
After=network.target

[Service]
Type=notify
User=www-data
WorkingDirectory=/var/www/recipe-genie
Environment="PATH=/var/www/recipe-genie/venv/bin"
ExecStart=/var/www/recipe-genie/venv/bin/uvicorn app.main:app --host 0.0.0.0 --port 8000
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

```bash
# Enable and start service
sudo systemctl enable recipe-genie
sudo systemctl start recipe-genie
```

#### Frontend Deployment

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install nodejs

# Build frontend
cd /var/www/recipe-genie/frontend
npm install
npm run build

# Serve with Nginx
sudo nano /etc/nginx/sites-available/recipe-genie
```

**Nginx config:**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        root /var/www/recipe-genie/frontend/dist;
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

```bash
# Enable and restart Nginx
sudo ln -s /etc/nginx/sites-available/recipe-genie /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 🔐 Security Checklist

- [ ] Change all default passwords
- [ ] Enable HTTPS with Let's Encrypt
- [ ] Set DEBUG=False in production
- [ ] Use strong SECRET_KEY
- [ ] Configure CORS properly
- [ ] Enable firewall
- [ ] Regular backups
- [ ] Monitor logs
- [ ] Use environment variables for secrets
- [ ] Enable HTTPS redirects

### Let's Encrypt HTTPS

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d your-domain.com
sudo certbot renew --dry-run
```

---

## 📊 Performance Optimization

### Database
- Enable connection pooling
- Create indexes on frequently queried fields
- Regular VACUUM and ANALYZE

### Frontend
- Enable gzip compression
- Minify CSS and JavaScript
- Cache static assets
- CDN integration

### Backend
- Enable caching
- Use pagination for large datasets
- Rate limiting
- Load balancing

---

## 🔍 Monitoring & Logging

### Backend
```python
# Add to app/main.py
import logging

logging.basicConfig(
    filename='app.log',
    level=logging.INFO,
    format='%(asctime)s %(levelname)s: %(message)s'
)
```

### Uptime Monitoring
- Use UptimeRobot or similar
- Monitor API health endpoint
- Alert on failures

### Log Aggregation
- Use ELK Stack or similar
- Centralize logs for debugging
- Set up alerts

---

## 🚀 Scaling

### Horizontal Scaling
1. Load balancer (Nginx, HAProxy)
2. Multiple backend instances
3. Shared database (PostgreSQL)
4. Redis for caching

### Vertical Scaling
1. Increase server resources
2. Optimize code and queries
3. Database optimization

---

## 📝 Maintenance

### Regular Tasks
- Review logs weekly
- Check disk space
- Update dependencies monthly
- Backup database daily
- Monitor performance

### Updates & Patches
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Update Python packages
pip install --upgrade -r requirements.txt

# Update Node packages
npm update
```

---

## 🆘 Troubleshooting Deployment

### Backend not starting
```bash
# Check logs
journalctl -u recipe-genie -n 50

# Check database connection
python -c "from app.database import engine; engine.connect()"
```

### Frontend not loading
```bash
# Check Nginx
sudo nginx -t
sudo systemctl status nginx
```

### CORS errors
- Update ALLOWED_ORIGINS in backend config
- Check frontend API_URL environment variable

---

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [FastAPI Deployment](https://fastapi.tiangolo.com/deployment/)
- [React Production Build](https://create-react-app.dev/docs/production-build/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

---

**Questions? Check the main README or contact support.**
