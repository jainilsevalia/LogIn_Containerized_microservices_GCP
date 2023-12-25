# Project Name
## Architecture

![Project Architecture](Static/GCP_login.drawio.png)
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

# Project Showcase

1. **Firestore Setup**
   - "Firestore collections 'Reg' and 'State' created to manage user registration data and application state."
   ![Firestore Setup](Static/Firestore_Console_image.png)

2. **Backend Container-1**
   - "Docker image built and tagged for Container-1, ensuring a reproducible deployment."
   ![Container-1 Docker Build](Static/image_build_1.png)
   - "Container-1 Docker image successfully pushed to GCP Artifact Registry for streamlined deployment."
   ![Artifact Registry - Container-1](Static/Image_pushed.png)
   - "Artifact Registry console on GCP displaying Container-1 artifacts."
   ![Artifact Registry Console - Container-1](Static/GCR_Console_Image_1.png)
   - "Container-1 running on Cloud Run service, providing scalable backend infrastructure."
   ![Container-1 on Cloud Run](Static/Cloud_Run_console_Container_Running.png)
   - "Postman sending requests to Container-1 for seamless user data storage."
   ![Postman - Container-1](Static/Postman_test_register.png)


3. **Backend Container-2**
   #### To deploy the Login Service Container, initiate deployment using the code available in the repository for the Login service. Ensure all required configurations are set up and follow the deployment instructions outlined in the repository documentation.
   - "Handling null email edge case during user registration in Container-2."
   ![Null Email Edge Case - Container-2](Static/Error_1.png)
   - "Implementation of robust email form validation in Container-2."
   ![Email Form Validation - Container-2](Static/Error_2.png)
   - "Handling already registered email scenario in Container-2."
   ![Already Registered Email - Container-2](Static/Error_3.png)

5. **Backend Container-3 (Session API)**
   - "Building Docker image for Container-3 to encapsulate session-related functionalities."
   ![Container-3 Docker Build](Static/1.png)
   - "Successful build and push of Container-3 Docker image to GCP Artifact Registry."
   ![Artifact Registry - Container-3](Static/3.png)
   - "Artifact Registry console showcasing artifacts related to Container-3."
   ![Artifact Registry Console - Container-3](Static/4.png)
   - "Creating Cloud Run service for Container-3 to ensure seamless deployment."
   ![Container-3 Cloud Run Service](Static/5.png)
   - "Container-3 running on Cloud Run service, managing user sessions."
   ![Container-3 on Cloud Run](Static/6.png)
   - "GET request to retrieve all online users from Container-3."
   ![GET Request - Container-3](Static/7.png)
   - "GET request for user logout handled by Container-3."
   ![Logout Request - Container-3](Static/8.png)
   - "Logout operation updating user status to offline in the state collection."
   ![Logout Update - Container-3](9.png)

6. **Frontend Deployment**
   - "Building Docker image for the frontend to encapsulate the user interface."
   ![Frontend Docker Build](Static/f1.png)
   - "Tagging Docker image for the frontend to maintain version control."
   ![Frontend Docker Tag](Static/f2.png)
   - "Successful push of frontend Docker image to GCP Artifact Registry."
   ![Artifact Registry - Frontend](Static/f3.png)
   - "Artifact Registry showcasing the Docker image for the frontend."
   ![Artifact Registry Console - Frontend](Static/f4.png)
   - "Creating Cloud Run service for the frontend to ensure a scalable user interface."
   ![Frontend Cloud Run Service](Static/f5.png)
   - "Frontend successfully running on Cloud Run, providing a user-friendly interface."
   ![Frontend on Cloud Run](Static/f6.png)
   - "Screenshots of the user registration, login pages, and user list in the frontend application."
   ![Frontend Screenshots](Static/f7.png)
   ![Frontend Screenshots](Static/f8.png)
   ![Frontend Screenshots](Static/f9.png)
   ![Frontend Screenshots](Static/f10.png)


## Getting Started

1. Clone the repository.
2. Set up your GCP project and configure necessary credentials.
3. Follow the documentation in each container's directory for deployment and usage instructions.
