# Vyomaa Aerospace Festival Website and Registration Portal

## Overview
This repository contains the codebase for the Vyomaa Aerospace Festival website and its associated registration portal. Vyomaa is an aerospace department festival organized by our college, showcasing cutting-edge aerospace technology and fostering innovation among students.

## Features
- Informative festival website with event details and schedules
- Online registration system for participants
- Admin dashboard for event management and participant tracking
- Advanced search functionality in the dashboard for efficient data retrieval

## Technology Stack
- Frontend: React.js
- Backend: Node.js with Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- Styling: CSS with Sass

## Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/vyomaa-website.git
   ```

2. Navigate to the project directory
   ```
   cd vyomaa-website
   ```

3. Install dependencies for both frontend and backend
   ```
   npm install
   cd client && npm install
   ```

4. Set up environment variables
   - Create a `.env` file in the root directory
   - Add necessary environment variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

5. Start the development server
   ```
   npm run dev
   ```

## Usage
- Access the website at `http://localhost:3000`
- Register for events through the registration portal
- Admin dashboard is available at `http://localhost:3000/admin` (login required)

## Admin Dashboard
The admin dashboard offers the following features:
- Comprehensive overview of event registrations
- Real-time search functionality for quick data retrieval
- Filtering options based on events, colleges, and registration dates
- Export functionality for registration data

## Contributing
We welcome contributions to improve Vyomaa's website and registration system. Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact
Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/vyomaa-website](https://github.com/yourusername/vyomaa-website)

## Acknowledgements
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
