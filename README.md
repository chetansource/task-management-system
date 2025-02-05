# task-management-system

## How AI Tools Were Used

### AI tools played a significant role in accelerating the development process of this project. Here’s how they were utilized:

    Code Generation:

        DeepSeek and ChatGPT were used to generate boilerplate code for both the backend and frontend, including API endpoints, database schemas, and React components.

        Example: The initial setup for Express routes, Mongoose models, and TypeScript interfaces was generated using AI.

### Documentation:

    AI tools assisted in writing clear and concise documentation, including this README file and inline code comments.

    Example: Generating API usage examples and deployment instructions.

### Learning and Best Practices:

    AI provided insights into best practices for structuring the project, such as separating concerns into controllers, services, and models.

    Example: Recommendations for modularizing the backend code and using Zod for validation.

### Frontend Styling:

    ChatGPT suggested modern UI/UX principles and helped integrate Shadcn UI components for a responsive and user-friendly design.

### By leveraging these AI tools, the development process was significantly faster, more efficient, and less error-prone.


## Backend Documentation
Overview

This is the backend for a Task Management System built with:

    Node.js and Express for the server.

    MongoDB for the database.

    TypeScript for type safety.

    Zod for request validation.

The backend provides RESTful APIs to manage tasks, including creating, reading, updating, and deleting tasks.

## API Endpoints

| Method | Endpoint      | Description            |
|--------|-------------|------------------------|
| **POST**   | `/tasks`      | Create a new task.      |
| **GET**    | `/tasks`      | Fetch all tasks.        |
| **PUT**    | `/tasks/:id`  | Update a task by ID.    |
| **DELETE** | `/tasks/:id`  | Delete a task by ID.    |

---


## How to Run Locally

### 1. Clone the Repository
```sh
git clone <repository-url>
```
### 2.Navigate to the Backend Folder & Install Dependencies
cd backend
npm install

### 3.Set Up Environment Variables
### 4. Run the Server
```sh
npm run dev
```


## Frontend Documentation
Overview

## 🚀 Features
- Create, edit, and delete tasks
- Task management dashboard
- Interactive UI with ShadCN components

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

### 2. Install Dependencies

Make sure you have Node.js (>=18.x) installed. Then, install dependencies using:

```sh
npm install
```

### 3. Set Up Environment Variables

Create a .env file in the root of the frontend folder and add your API base URL:

### 4. Start the Development Server
```sh
npm run dev
```
