# **TITLE: SSH Connection Between Ubuntu Containers**

## **Project Overview**
This project demostrates how to establish a secure SSH connection between two Docker containers within the same network. It simulates real-world DevOps scenarios where services communicate securely across isolated environment.
### **Tool Used**

- Docker
- Docker Compose
- OpenSSH Server and Client
- Linux (Ubuntu)
  

### Project Architecture
.
├── client
│   └── Dockerfile
├── docker-compose.yml
├── Readme.md
└── server
    ├── Dockerfile
    └── sshd_config



## **Required Steps**

### A. Build and Run Cotainers

    docker-compose up --build -d

![docker-build]()

![running-container]()

### B. Check ssh status of the server-container
    docker exec -it ssh-server bash
    service --status-all

![server-cont-status]()

### C. Access Client Container

    docker exec -it ssh-client bash

### D. SSH into Server Container From Client

    ssh root@IPAddresss

### Issue Faced: misconfig, and errors

### Definition of Command Used


### What I Learned