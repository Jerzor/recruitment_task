# Multi-Service Application Setup with Docker

This repository contains a two-service application: a **frontend** built using Vite, React.js, and TypeScript, and a **backend** built using Node.js, Express, and TypeScript.

## Getting Started

To set up and run the application, you’ll need Docker installed on your machine.

### Building and Running the Containers

1. **Build and run the backend service:**
   ```bash
   docker build -t backend-app ./backend
   docker run -d -p 3001:3001 backend-app
The backend will be available at http://localhost:3001.

2. **Build and run the frontend app:**
   ```bash
   docker build -t frontend-app ./frontend
   docker run -d -p 80:80 frontend-app
The frontend will be accessible at http://localhost.

3. **Also u can use prepared script to run both apps:**
   ```bash
    ./start.sh