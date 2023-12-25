# Project Name
## Architecture

![Project Architecture](architecture.png)

## Overview

This project establishes a robust backend infrastructure using Google Cloud Platform (GCP), featuring Firestore collections for user registration and application state management.

## Backend Containers

### Container-1

#### Firestore Setup

- Created "Reg" and "state" collections to store user registration data and application state, respectively.

#### Dockerized Application

- Developed and containerized the application's business logic, deploying it as Container-1 on Cloud Run.

#### Continuous Integration

- Automated the build and push of the Docker image to GCP Artifact Registry.

### Container-2

#### User Validation Logic

- Implemented business logic for user validation, handling edge cases like null email and invalid email forms.

#### Docker Image Build

- Constructed and tagged the Docker image, pushing it to GCP Artifact Registry for seamless deployment on Cloud Run.

### Container-3 (Session API)

#### Session Management

- Created a session API for user logout, with corresponding logic and Firestore updates.

#### Container Deployment

- Built, tagged, and pushed the Docker image to GCP Artifact Registry, deploying Container-3 on Cloud Run.

## Frontend Deployment

### Frontend Setup

- Established a frontend container built with React, featuring user registration and login pages.

### Artifact Registry Integration

- Developed and pushed the frontend Docker image to GCP Artifact Registry.

### Cloud Run Deployment

- Created and deployed a Cloud Run service for the frontend container, ensuring seamless user interactions.

## End-to-End Testing

### Testing Infrastructure

- Defined comprehensive test cases for each backend container, ensuring functionality and reliability.

### Frontend User Interface Testing

- Validated the frontend's user registration and login workflows.
# Project Showcase

1. **Firestore Setup**
   - "Firestore collections 'Reg' and 'State' created to manage user registration data and application state."

2. **Backend Container-1**
   - "Application business logic for Container-1, responsible for handling user data."
   - "Docker image built and tagged for Container-1, ensuring a reproducible deployment."
   - "Container-1 Docker image successfully pushed to GCP Artifact Registry for streamlined deployment."
   - "Artifact Registry console on GCP displaying Container-1 artifacts."
   - "Container-1 running on Cloud Run service, providing scalable backend infrastructure."
   - "Postman sending requests to Container-1 for seamless user data storage."
   - "Container-1 successfully running on GCP and interacting with Firestore."

3. **Backend Container-2**
   - "Handling null email edge case during user registration in Container-2."
   - "Implementation of robust email form validation in Container-2."
   - "Handling already registered email scenario in Container-2."
   - "Test cases ensuring the reliability of Container-2 functionalities."

4. **Backend Container-3 (Session API)**
   - "Application business logic for Container-3, focusing on session management."
   - "Logout API endpoint in Container-3 to manage user sessions."
   - "Building Docker image for Container-3 to encapsulate session-related functionalities."
   - "Tagging Docker image for Container-3 for organized version control."
   - "Successful build and push of Container-3 Docker image to GCP Artifact Registry."
   - "Artifact Registry console showcasing artifacts related to Container-3."
   - "Creating Cloud Run service for Container-3 to ensure seamless deployment."
   - "Container-3 running on Cloud Run service, managing user sessions."
   - "GET request to retrieve all online users from Container-3."
   - "GET request for user logout handled by Container-3."
   - "Logout operation updating user status to offline in the state collection."
   - "Test cases validating the functionality and reliability of Container-3."

5. **Frontend Deployment**
   - "Building Docker image for the frontend to encapsulate the user interface."
   - "Tagging Docker image for the frontend to maintain version control."
   - "Successful push of frontend Docker image to GCP Artifact Registry."
   - "Artifact Registry showcasing the Docker image for the frontend."
   - "Creating Cloud Run service for the frontend to ensure a scalable user interface."
   - "Frontend successfully running on Cloud Run, providing a user-friendly interface."
   - "Screenshots of the user registration, login pages, and user list in the frontend application."

## Getting Started

1. Clone the repository.
2. Set up your GCP project and configure necessary credentials.
3. Follow the documentation in each container's directory for deployment and usage instructions.

## Contributing

We welcome contributions! Please follow the [contribution guidelines](CONTRIBUTING.md) before submitting pull requests.

## License

This project is licensed under the [LICENSE NAME] - see the [LICENSE.md](LICENSE.md) file for details.
