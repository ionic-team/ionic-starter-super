## User Provider API Documentation

#### Table of Contents
1. [login()]

### `login(credentials)`

Posts an email and password to the `login` endpoint of your API.

Takes an object as input:

    {
        email: "string",
        password: "string"
    }

*Note: when developing in production, make sure to hash or encrypt your passwords. Do not transfer or store them as plain text.*


### `signup(credentials)`

Posts an email and password to the `signup` endpoint of your API.

Takes an object as input:

    {
        name: "string",
        email: "string",
        password: "string"
    }

*Note: when developing in production, make sure to hash or encrypt your passwords. Do not transfer or store them as plain text.*


### logout()

Signs out the current user by setting the user object to `null`.

Takes no input.