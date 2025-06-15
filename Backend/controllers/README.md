# `/users/register` Endpoint Documentation

This endpoint allows users to register by providing their details. Below is a description of how to use the endpoint, the required data, expected status codes, and sample requests/responses.

## Description

-   **Route:** `/users/register`
-   **Method:** POST
-   **Purpose:** Registers a new user by validating and storing their information in the database.
-   **Controller:** [`userController.registerUser`](Backend/controllers/user.controller.js)
-   **Service:** [`userService.createUser`](Backend/services/user.service.js)

## Request Data

The endpoint expects a JSON payload with the following structure:

-   `fullname`: An object containing:
    -   `firstname` (string, required, minimum of 3 characters)
    -   `lastname` (string, required, minimum of 3 characters)
-   `email`: A valid email address (string, required, minimum of 5 characters)
-   `password`: A string (required, minimum of 6 characters)

### Example Request


- `user` (object);
  - `fullname` (object).
   -   `firstname` (string) :  required,( minimum of 3 characters)
    -   `lastname` (string) : required, (minimum of 3 characters)
-   `email`: (string) A valid email address (string, required, minimum of 5 characters)
-   `password`: (string) A string (required, minimum of 6 characters)
- `token` (string): JWT Token

    


## `/users/profile` Endpoint

### description

retrives the profile information of the currently authenticated user.

### HTTP Method

`GET`

### Authentication

requires a valid JWT token in the authorization header:
`Authorization: Bearer <token>`

### Example Response


- `user` (object);
  - `fullname` (object).
   -   `firstname` (string) :  required,( minimum of 3 characters)
    -   `lastname` (string) : required, (minimum of 3 characters)
-   `email`: (string) A valid email address (string, required, minimum of 5 characters)





## `/users/logout` Endpoint

### Description

Logout the current user and blacklist the token provided in 

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the authorization header or cookie: