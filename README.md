# Project Name
## Architecture

![Project Architecture](architecture.png)
## Project Overview

This project establishes a robust backend infrastructure using Google Cloud Platform (GCP), featuring Firestore collections for user registration and application state management.

## Backend Containers

### User Registration Service
1. **Firestore Setup**: Created "Reg" and "state" collections to store user registration data and application state, respectively.
2. **Dockerized Application**: Developed and containerized the application's business logic, deploying it as the "User Registration Service" on Cloud Run.
3. **Continuous Integration**: Automated the build and push of the Docker image to GCP Artifact Registry.

### User Validation Service
4. **User Validation Logic**: Implemented business logic for user validation, handling edge cases like null email and invalid email forms.
5. **Docker Image Build**: Constructed and tagged the Docker image, pushing it to GCP Artifact Registry for seamless deployment on Cloud Run.

### Session Management Service
6. **Session Management**: Created a session API for user logout, with corresponding logic and Firestore updates.
7. **Container Deployment**: Built, tagged, and pushed the Docker image to GCP Artifact Registry, deploying the "Session Management Service" on Cloud Run.

## Frontend Deployment

8. **Frontend Setup**: Established a frontend container built with React, featuring user registration and login pages.
9. **Artifact Registry Integration**: Developed and pushed the frontend Docker image to GCP Artifact Registry.
10. **Cloud Run Deployment**: Created and deployed a Cloud Run service for the frontend container, ensuring seamless user interactions.

## End-to-End Testing

11. **Testing Infrastructure**: Defined comprehensive test cases for each backend service, ensuring functionality and reliability.
12. **Frontend User Interface Testing**: Validated the frontend's user registration and login workflows.

<!-- # Project Showcase

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
   - "Screenshots of the user registration, login pages, and user list in the frontend application." -->

# Project Showcase

1. **Firestore Setup**
   - "Firestore collections 'Reg' and 'State' created to manage user registration data and application state."
   ![Firestore Setup](images/firestore_setup.png)

2. **Backend Container-1**
   - "Application business logic for Container-1, responsible for handling user data."
   ![Backend Container-1 Logic](images/container1_logic.png)
   - "Docker image built and tagged for Container-1, ensuring a reproducible deployment."
   ![Container-1 Docker Build](images/container1_docker_build.png)
   - "Container-1 Docker image successfully pushed to GCP Artifact Registry for streamlined deployment."
   ![Artifact Registry - Container-1](images/container1_artifact_registry.png)
   - "Artifact Registry console on GCP displaying Container-1 artifacts."
   ![Artifact Registry Console - Container-1](images/container1_artifact_registry_console.png)
   - "Container-1 running on Cloud Run service, providing scalable backend infrastructure."
   ![Container-1 on Cloud Run](images/container1_cloud_run.png)
   - "Postman sending requests to Container-1 for seamless user data storage."
   ![Postman - Container-1](images/container1_postman.png)
   - "Container-1 successfully running on GCP and interacting with Firestore."
   ![Container-1 Running on GCP](images/container1_running_on_gcp.png)

3. **Backend Container-2**
   - "Handling null email edge case during user registration in Container-2."
   ![Null Email Edge Case - Container-2](images/container2_null_email.png)
   - "Implementation of robust email form validation in Container-2."
   ![Email Form Validation - Container-2](images/container2_email_validation.png)
   - "Handling already registered email scenario in Container-2."
   ![Already Registered Email - Container-2](images/container2_already_registered_email.png)
   - "Test cases ensuring the reliability of Container-2 functionalities."
   ![Test Cases - Container-2](images/container2_test_cases.png)

4. **Backend Container-3 (Session API)**
   - "Application business logic for Container-3, focusing on session management."
   ![Backend Container-3 Logic](images/container3_logic.png)
   - "Logout API endpoint in Container-3 to manage user sessions."
   ![Logout API - Container-3](images/container3_logout_api.png)
   - "Building Docker image for Container-3 to encapsulate session-related functionalities."
   ![Container-3 Docker Build](images/container3_docker_build.png)
   - "Tagging Docker image for Container-3 for organized version control."
   ![Container-3 Docker Tag](images/container3_docker_tag.png)
   - "Successful build and push of Container-3 Docker image to GCP Artifact Registry."
   ![Artifact Registry - Container-3](images/container3_artifact_registry.png)
   - "Artifact Registry console showcasing artifacts related to Container-3."
   ![Artifact Registry Console - Container-3](images/container3_artifact_registry_console.png)
   - "Creating Cloud Run service for Container-3 to ensure seamless deployment."
   ![Container-3 Cloud Run Service](images/container3_cloud_run.png)
   - "Container-3 running on Cloud Run service, managing user sessions."
   ![Container-3 on Cloud Run](images/container3_running_on_cloud_run.png)
   - "GET request to retrieve all online users from Container-3."
   ![GET Request - Container-3](images/container3_get_request.png)
   - "GET request for user logout handled by Container-3."
   ![Logout Request - Container-3](images/container3_logout_request.png)
   - "Logout operation updating user status to offline in the state collection."
   ![Logout Update - Container-3](images/container3_logout_update.png)
   - "Test cases validating the functionality and reliability of Container-3."
   ![Test Cases - Container-3](images/container3_test_cases.png)

5. **Frontend Deployment**
   - "Building Docker image for the frontend to encapsulate the user interface."
   ![Frontend Docker Build](images/frontend_docker_build.png)
   - "Tagging Docker image for the frontend to maintain version control."
   ![Frontend Docker Tag](images/frontend_docker_tag.png)
   - "Successful push of frontend Docker image to GCP Artifact Registry."
   ![Artifact Registry - Frontend](images/frontend_artifact_registry.png)
   - "Artifact Registry showcasing the Docker image for the frontend."
   ![Artifact Registry Console - Frontend](images/frontend_artifact_registry_console.png)
   - "Creating Cloud Run service for the frontend to ensure a scalable user interface."
   ![Frontend Cloud Run Service](images/frontend_cloud_run.png)
   - "Frontend successfully running on Cloud Run, providing a user-friendly interface."
   ![Frontend on Cloud Run](images/frontend_running_on_cloud_run.png)
   - "Screenshots of the user registration, login pages, and user list in the frontend application."
   ![Frontend Screenshots](images/frontend_screenshots.png)


## Getting Started

1. Clone the repository.
2. Set up your GCP project and configure necessary credentials.
3. Follow the documentation in each container's directory for deployment and usage instructions.
