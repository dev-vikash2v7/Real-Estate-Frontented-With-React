# EazyHome Real Estate Website

EazyHome is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application designed to simplify the process of browsing and booking properties. The website allows users to view available properties, book them securely, and receive project details via email. It incorporates Auth0 for authentication and Stripe as the payment gateway for booking properties.

## Features

- **Property Listing:** Browse through a wide range of properties available for booking.
- **Property Details:** View detailed information about each property, including images, descriptions, amenities, and location.
- **Booking System:** Securely book properties using Stripe for payment processing.
- **Email Notifications:** Receive project details and booking confirmations via email.
- **Authentication:** User authentication and authorization system implemented using Auth0 for secure access to user accounts.

## Technologies Used

- **Frontend:**
  - React.js: A JavaScript library for building user interfaces.
  - Auth0: Authentication and authorization management.
  - Stripe: Payment processing for booking properties.
  - Tailwind CSS: A utility-first CSS framework for styling.
  - React Router: Routing library for navigating between pages.
  
- **Backend:**
  - Node.js: A JavaScript runtime environment.
  - Express.js: Web application framework for Node.js.
  - MongoDB: NoSQL database for storing property and user data.
  - Mongoose: MongoDB object modeling for Node.js.

## Usage
- Sign up or log in using your Auth0 account credentials.
- Browse through the list of available properties.
- Click on a property to view its details.
- Book the property by providing necessary information and completing the payment process through Stripe.
- Receive email notifications for booking confirmations and project details.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dev-vikash2v7/Real-Estate-Frontented-With-React.git
Navigate to the project directory:

bash
Copy code
cd eazyhome
Install dependencies for both frontend and backend:

bash
Copy code
cd frontend
npm install
cd ../backend
npm install

## Set up environment variables:

- Create a .env file in the frontend directory and add the necessary environment variables for Auth0 and Stripe.
- Create a .env file in the backend directory and add the necessary environment variables for MongoDB connection and Auth0.

### Start the development servers:

bash
Copy code
cd frontend
npm start
cd ../backend
npm start
Access the application at http://localhost:3000 in your web browser.



## Contact
For any inquiries or support, please contact us at vikashvermacom92@gmail.com.