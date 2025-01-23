# Silent Failure on Invalid JSON POST Request in Express.js

This repository demonstrates a common issue in Express.js applications where the server fails silently when receiving an invalid JSON payload in a POST request.  The provided code lacks proper error handling, leading to unexpected behavior and making debugging difficult.

## Bug

The `bug.js` file contains an Express.js server that accepts POST requests to the `/user` endpoint.  It attempts to access the request body (`req.body`) without checking for errors.  If the request body is malformed or empty, the server will likely throw an exception, but it won't be properly handled, resulting in a silent failure. 

## Solution

The `bugSolution.js` file demonstrates the improved code with proper error handling.  It uses a `try...catch` block to gracefully handle potential errors when parsing the JSON request body, providing a more informative response to the client.