<p align="center">
  A nestJS based rest api
</p>
    
## Description

<p align="center">This is a JWT based api which allows a user to register, login, add, view, edit or delete expenses.</p>
The application uses TypeORM and sqlite.  
The code is TypeScript (also recommended by Nest).

## Installation

```bash
$ yarn i
```

## Running the app

```bash

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Postman

```bash
# Register a user:
# POST http://localhost:3000/auth/register/
# Body: JSON
{
    "name": "bog2",
    "email": "bog2@dummymail.com",
    "password": "987654321"
}


# Login a user:
# POST http://localhost:3000/auth/login/
# Body: JSON
{
    "email": "bog2@dummymail.com",
    "password": "987654321"
}


# List all users:
# GET http://localhost:3000/user/list/

```

## This is work in progress and misses:

- Expenses functionality: crud, list by filters such as week, totals
- Adding passport and guards to control route access
- Testing
- Swagger documentation

