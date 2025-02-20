# Blogging Website - Full Stack Development

## Overview
The Blogging Website is a full-stack web application designed to provide users with a seamless platform for creating, managing, and sharing blog posts. Built with modern web technologies, the application offers an intuitive user experience, enabling bloggers to publish multimedia-rich content, interact with other users, and manage their profiles efficiently.

## Key Features
- **User Authentication:** Secure login and registration using Firebase Authentication, including Google sign-in support.
- **Blog Creation:** Users can create, edit, and publish blog posts featuring rich text and multimedia (images).
- **Image Management:** Cloudinary is used for storing and managing images, ensuring optimal performance and efficient storage.
- **Database:** MongoDB serves as the database for blog posts, user profiles, and comments, offering a scalable and flexible structure.
- **Responsive Design:** The frontend, developed with React.js and Tailwind CSS, ensures a modern, adaptive user interface.
- **Deployment:** The frontend is deployed on Vercel, while the backend runs on Render.

## Technologies Used

### Frontend
- **React.js** - For building a dynamic and interactive UI.
- **Tailwind CSS** - For responsive and modern styling.
- **JavaScript (ES6+)** - For frontend logic and interactivity.

### Backend
- **Node.js** - For server-side logic.
- **Express.js** - For building RESTful APIs.
- **MongoDB** - For database management.
- **Mongoose ODM** - For MongoDB object modeling.

### Authentication & Image Management
- **Firebase Authentication** - For secure user login and registration.
- **Cloudinary** - For image storage and management.

### Deployment
- **Vercel** - For hosting the frontend.
- **Render** - For hosting the backend.

## Project Structure
The project consists of two primary components:
1. **Frontend** - Contains the React.js application with components for the user interface, blog creation, and user interactions.
2. **Backend** - Includes the Node.js server with Express.js for API endpoints, MongoDB for data storage, and Firebase for authentication.

## Installation and Setup

### Prerequisites
- Install **Node.js** and **npm** on your machine.
- Create a **MongoDB Atlas** account for database setup.
- Set up a **Firebase** project for authentication.
- Create a **Cloudinary** account for image management.

### Steps to Run the Project
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/blogging-website.git
   ```

2. **Install Dependencies:**
   Navigate to the frontend and backend directories and install the required dependencies:
   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the backend directory and add the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   FIREBASE_API_KEY=your_firebase_api_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. **Run the Backend Server:**
   Navigate to the backend directory and start the server:
   ```sh
   npm start
   ```

5. **Run the Frontend Application:**
   Navigate to the frontend directory and start the React application:
   ```sh
   npm run dev
   ```

6. **Access the Application:**
   Open your browser and visit **[http://localhost:5173](http://localhost:5173)** to view the application.

## Sample Screenshots
Here are some sample screenshots of the application:

1. **Login Page:**  
   ![image](https://github.com/user-attachments/assets/068dd7d6-c162-436f-a8d3-610e379c596e)

2. **Sign-up Page:**  
   ![image](https://github.com/user-attachments/assets/b909e33e-155f-4e26-9ecf-771b6b3ea2c0)

3. **Home Page:**  
   ![image](https://github.com/user-attachments/assets/c42918e7-3589-4a90-b7db-9e6449ef3413)

4. **Write Page:**  
   ![image](https://github.com/user-attachments/assets/56212a35-ce5c-4be7-942e-23a8e0357d7e)

5. **Preview Page:**  
   ![image](https://github.com/user-attachments/assets/2e2446e4-e6bb-4879-96bc-3bf2224d28d5)

6. **Profile Page:**  
   ![image](https://github.com/user-attachments/assets/bde8c05c-a94a-40cb-987c-51a8f7d0c085)

7. **Detailed Blog Page:**  
   ![image](https://github.com/user-attachments/assets/f6a72acb-81ba-4c52-8e4a-9cde3005b403)

**Live Demo**
You can access the live application here:  
[**Live Blogging Website**](https://frontend-lime-nu.vercel.app/)

