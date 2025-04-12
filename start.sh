docker build -t backend-app ./backend
docker run -d -p 3001:3001 backend-app
  
docker build -t frontend-app ./frontend
docker run -d -p 80:80 frontend-app

echo "Apps running!"