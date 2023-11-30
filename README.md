# LinkedIn System for Engineering students

Welcome to the LinkedIn System designed specifically for Engineering students! This application facilitates student connections, internship opportunities, and communication within the engineering community.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account with a database connection string

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/i-sanmatidash/LinkedIn_Project.git
   ```

2. Navigate to the project directory:

```bash
cd linkedin-system
```

3. Install dependencies:

```bash
 npm install
```

4. Create a .env file in the project root and add your MongoDB connection string:

```bash
MONGODB_URI=your_mongodb_atlas_connection_string
```

5. Run the application:

```bash
npm start
```

The application should be accessible at http://localhost:3000/.

### Project Structure

- `controllers`: Contains backend logic for different features.
- `middleware`: Houses middleware functions, such as authentication.
- `models`: Defines MongoDB schemas.
- `routes`: Manages routing logic for various features.
- `views`: Stores EJS templates for rendering dynamic HTML.
- `partials`: Contains reusable HTML components (header and footer).
- `app.js`: Entry point for the application.
- `package.json` and `package-lock.json`: Dependency and project configuration files.

### Features

1. **User Authentication:**

   - Secure user registration and login.
   - Passwords are hashed using bcrypt.
   - JSON Web Tokens (JWT) for secure user sessions.

2. **Profile Management:**

   - Users can manage their profiles through dedicated routes and controllers.

3. **Internship Opportunities:**

   - HR representatives can post internship opportunities.
   - Engineering students can explore and apply for opportunities.

4. **Messaging Feature (Backend):**
   - Backend groundwork laid for real-time communication.
   - Messaging model, routes, and controllers implemented.

### Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- EJS (Embedded JavaScript)
- bcrypt
- JSON Web Tokens (JWT)
- dotenv
- body-parser

```

```
