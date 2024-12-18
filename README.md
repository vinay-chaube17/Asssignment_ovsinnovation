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
npm for installing packages



Steps to Get Started
First, clone the repository:


git clone https://github.com/vinay-chaube17/Asssignment_ovsinnovation.git
Go into the project folder:


cd Backend_Developer
Install the required dependencies:


npm install
Set up your MongoDB:

If you're using MongoDB Compass (locally), make sure MongoDB is running on your machine and connect to it with Compass.
If you're using MongoDB Atlas (cloud database), create an Atlas account, set up a cluster, and get the connection string.


Create a .env file in the root of the project and add these variables:
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000


Replace your_mongo_connection_string with the connection string from MongoDB Compass.
Replace your_jwt_secret_key with a secret string for generating JWT tokens.


Now, start the server
npm start


Your API should now be running on http://localhost:5000.

Usage
Once the server is running, you can use Postman to make requests to the API.

API Endpoints:-

Vendor:
Register a new vendor:
POST:http://localhost:5000/api/vendors/register 

Log in as an existing vendor:
POST:http://localhost:5000/api/vendors/login

Products:-

Add a new product:
POST:http://localhost:5000/api/products 

Get all products for the logged-in vendor:
GET:http://localhost:5000/api/products

Update a product's details:
PUT:http://localhost:5000/api/products/:id 

Delete a product:
DELETE:http://localhost:5000/api/products/:id:

Orders:-
List orders for the logged-in vendor:
GET:http://localhost:5000/api/orders 

Mark an order as shipped
PUT:http://localhost:5000/api/orders/:id


Vendor:
#Register a new vendor
POST http://localhost:5000/api/vendors/register
Example cURL command:
POST http://localhost:5000/api/vendors/register \
"Content-Type: application/json" \
'{"name": "Vendor Name", "email": "vendor@example.com", "password": "password123"}'

#Log in as an existing vendor
POST http://localhost:5000/api/vendors/login
Example cURL command:
POST http://localhost:5000/api/vendors/login \
"Content-Type: application/json" \
'{"email": "vendor@example.com", "password": "password123"}'

Products:

#Add a new product
POST http://localhost:5000/api/products
Example cURL command:
POST http://localhost:5000/api/products \
"Authorization: Bearer YOUR_JWT_TOKEN" \
"Content-Type: application/json" \
'{"name": "Product 1", "price": 100, "stock": 50}'

#Get all products for the logged-in vendor
GET http://localhost:5000/api/products
Example cURL command:
GET http://localhost:5000/api/products \
"Authorization: Bearer YOUR_JWT_TOKEN"

     
#Update a product's details
PUT http://localhost:5000/api/products/:id
Example cURL command:
PUT http://localhost:5000/api/products/PRODUCT_ID \
"Authorization: Bearer YOUR_JWT_TOKEN" \
"Content-Type: application/json" \
'{"name": "Updated Product", "price": 120, "stock": 40}'


#Delete a product
DELETE http://localhost:5000/api/products/:id
Example cURL command:
DELETE http://localhost:5000/api/products/PRODUCT_ID \
"Authorization: Bearer YOUR_JWT_TOKEN"


#Orders:
List orders for the logged-in vendor
GET http://localhost:5000/api/orders
Example cURL command
GET http://localhost:5000/api/orders \
"Authorization: Bearer YOUR_JWT_TOKEN"


#Mark an order as shipped
PUT http://localhost:5000/api/orders/:id
Example cURL command:
PUT http://localhost:5000/api/orders/ORDER_ID \
"Authorization: Bearer YOUR_JWT_TOKEN" \
"Content-Type: application/json" \
'{"status": "shipped"}'


Technologies Used
Node.js
Express.js
MongoDB (Mongoose)
JWT (JSON Web Token)
bcryptjs (for hashing passwords)


License
MIT License
