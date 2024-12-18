# Asssignment_ovsinnovation
Vendor Management API
This is a simple Node.js API that lets vendors manage their products and orders. You can register, log in, add products, update them, and mark orders as shipped.

Table of Contents
Installation
Usage
API Endpoints
Technologies Used
License
Installation
Prerequisites


Make sure you have the following installed on your machine:-
Node.js (v14+ recommended)
MongoDB Compass (for local database management) or MongoDB Atlas (for cloud database)
npm or yarn for installing packages



Steps to Get Started
First, clone the repository:

bash
Copy code
git clone https://github.com/vinay-chaube17/Asssignment_ovsinnovation.git
Go into the project folder:

bash
Copy code
cd Asssignment_ovsinnovation
Install the required dependencies:

bash
Copy code
npm install
Set up your MongoDB:

If you're using MongoDB Compass (locally), make sure MongoDB is running on your machine and connect to it with Compass.
If you're using MongoDB Atlas (cloud database), create an Atlas account, set up a cluster, and get the connection string.
Create a .env file in the root of the project and add these variables:

bash
Copy code
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000


Replace your_mongo_connection_string with the connection string from MongoDB Compass.
Replace your_jwt_secret_key with a secret string for generating JWT tokens.


Now, start the server:
bash
Copy code
npm start


Your API should now be running on http://localhost:5000.

Usage
Once the server is running, you can use Postman or curl to make requests to the API.

API Endpoints:-

Vendor:
Register a new vendor:
POST: http://localhost:5000/api/vendors/register 

Log in as an existing vendor:
POST: http://localhost:5000/api/vendors/login

Products:-

Add a new product:
POST:http://localhost:5000/api/products 

Get all products for the logged-in vendor:
GET: http://localhost:5000/api/products

Update a product's details:
PUT: http://localhost:5000/api/products/:id 

Delete a product:
DELETE:http://localhost:5000/api/products/:id:

Orders:-
List orders for the logged-in vendor:
GET:http://localhost:5000/api/orders 

Mark an order as shipped
PUT:http://localhost:5000/api/orders/:id  Mark an order as shipped


Technologies Used
Node.js
Express.js
MongoDB (Mongoose)
JWT (JSON Web Token)
bcryptjs (for hashing passwords)


License
MIT License
