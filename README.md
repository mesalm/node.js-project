

Contact Management Backend
This project is a backend application for managing contacts. Users can perform CRUD (Create, Read, Update, Delete) operations on contacts and manage user authentication using JSON Web Tokens (JWT).

Features
User Registration: Users can register an account.
User Login: Users can log in to their account.
Current User: Retrieve details of the currently logged-in user.
Create Contact: Users can add a new contact.
Get All Contacts: Retrieve a list of all contacts.
Get Contact by ID: Retrieve details of a specific contact.
Update Contact: Update the details of an existing contact.
Delete Contact: Delete a contact.
Technologies Used
Node.js: JavaScript runtime for the server.
Express: Web framework for Node.js.
MongoDB: NoSQL database for storing contacts and user information.
Mongoose: ODM for MongoDB.
JSON Web Token (JWT): For user authentication.
bcrypt: For hashing passwords.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/contact-management-backend.git
cd contact-management-backend
Install dependencies:

bash
Copy code
npm install
Set up environment variables:
Create a .env file in the root directory and add the following:

env
Copy code
PORT=5000
MONGODB_URI=mongodb://localhost:27017/contacts
JWT_SECRET=your_jwt_secret
Run the server:

bash
Copy code
npm start
API Endpoints
Authentication
Register:

POST /api/register
Body: { "username": "yourusername", "password": "yourpassword" }
Response: { "message": "User registered successfully!" }
Login:

POST /api/login
Body: { "username": "yourusername", "password": "yourpassword" }
Response: { "token": "jwt_token" }
Current User:

GET /api/current
Headers: Authorization: Bearer jwt_token
Response: { "id": "user_id", "username": "yourusername" }
Contacts
Get All Contacts:

GET /api/contacts
Headers: Authorization: Bearer jwt_token
Response: [{ "id": "contact_id", "name": "contact_name", "email": "contact_email", ... }]
Get Contact by ID:

GET /api/contacts/:id
Headers: Authorization: Bearer jwt_token
Response: { "id": "contact_id", "name": "contact_name", "email": "contact_email", ... }
Create Contact:

POST /api/contacts
Headers: Authorization: Bearer jwt_token
Body: { "name": "contact_name", "email": "contact_email", ... }
Response: { "message": "Contact created successfully!" }
Update Contact:

PUT /api/contacts/:id
Headers: Authorization: Bearer jwt_token
Body: { "name": "new_name", "email": "new_email", ... }
Response: { "message": "Contact updated successfully!" }
Delete Contact:

DELETE /api/contacts/:id
Headers: Authorization: Bearer jwt_token
Response: { "message": "Contact deleted successfully!" }
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or new features to add.

Contact
If you have any questions or need further assistance, feel free to contact me at [mahamdabomesalm987@gmail.com].

This README provides an overview of the contact management backend project, detailing its features, installation instructions, API endpoints, and more. Feel free to customize it further to match your project's specific requirements and details.






