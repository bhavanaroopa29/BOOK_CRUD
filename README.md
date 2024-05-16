# BOOK_CRUD
 the step-by-step instructions to install the necessary dependencies and run the server:

Open Terminal or Command Prompt: Open your terminal or command prompt on your computer.

Navigate to Your Project Directory: Use the cd command to navigate to the directory where your Node.js file


Initialize npm: If you haven't already initialized npm for your project, run the following command and follow the prompts:
npm init ---This command will create a package.json file in your project directory.

Install Dependencies: Run the following command to install the necessary dependencies (Express and Mongoose) 
npm install express 
npm install mongoose

then npm install nodemon --save-dev : this is to run server automatically after changes in code 
create index.js--- write code 

in json file :
script part add :start":"node index.js"

node index.js --- starts server

 here's how you can test each CRUD operation using Postman:

1. **Create (POST)**:
   - Open Postman and create a new request.
   - Set the request type to POST and enter the URL of your API endpoint for creating a new book (`http://localhost:8000/bookcreation`).
   - In the request body, select "raw" and choose "JSON" as the format.
   - Use the following JSON object as an example request body:
in json format
``json
  {
    "title": "{{$randomLastName}} Book",
    "author": "{{$randomFirstName}} {{$randomLastName}}",
    "genre": "{{$randomAlphaNumeric}}",
    "pages": "{{$randomInt}}"
}

   - Send the request. You should receive a response confirming that the book was created successfully.

2. **Read (GET)**:
   - Open a new request in Postman.
   - Set the request type to GET and enter the URL of your API endpoint for retrieving a list of books (`http://localhost:8000/booklist`).
   - Optionally, you can add query parameters to limit the number of books returned (`?limit=10`).
   - Send the request. You should receive a response with a list of books.

3. **Read One (GET)**:
   - Open another new request in Postman.
   - Set the request type to GET and enter the URL of your API endpoint for retrieving a specific book by its ID (`http://localhost:8000/book/:id`), replacing `:id` with the ID of the book you want to retrieve.
   - Send the request. You should receive a response with the details of the specified book.

4. **Update (PUT)**:
   - Open a new request in Postman.
   - Set the request type to PUT and enter the URL of your API endpoint for updating a book by its ID (`http://localhost:8000/book/:id`), replacing `:id` with the ID of the book you want to update.
   - In the request body, select "raw" and choose "JSON" as the format.
   - Use the following JSON object as an example request body with the fields you want to update:

     ```json
     {
         "title": "Updated Book Title",
         "author": "Jane Smith"
     }
     ```
   - Send the request. You should receive a response confirming that the book was updated successfully.

5. **Delete (DELETE)**:
   - Open a new request in Postman.
   - Set the request type to DELETE and enter the URL of your API endpoint for deleting a book by its ID (`http://localhost:8000/book/:id`), replacing `:id` with the ID of the book you want to delete.
   - Send the request. You should receive a response confirming that the book was deleted successfully.

By following these steps, you can test each CRUD operation of your API using Postman and verify that they are working as expected.
