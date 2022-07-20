## Setup
```
npm install
```

### Run
```
node server.js
```
If you are running on the localhost, make sure that you have run your MONGODB.

### Test the APIs

Run our Node.js application with command: `node server.js`.

Using `Postman`, we’re gonna test all the Apis above.

1. Create a new Tutorial using POST `/api/tutorials` Api
2. Retrieve a single Tutorial by id using GET `/api/tutorials/:id` Api
3. Update a Tutorial using PUT `/api/tutorials/:id` Api
4. Find all Tutorials which title contains ‘js’: GET `/api/tutorials?title=js`
5. Find all published Tutorials using GET `/api/tutorials/published` Api
6. Delete a Tutorial using DELETE `/api/tutorials/:id` Api
7. Delete all Tutorials using DELETE `/api/tutorials` Api

You can also use the `Simple HTTP Client using Axios` or `Simple HTTP Client using Fetch API` to check it.