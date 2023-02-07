# Book Directory Management API

This is a simple Book Management API that allows you to add, edit, retrieve, and delete books from a database.

## Technologies Used

- Node.js
- Express.js
- Supabase
- Dotenv

## Project Setup

1. Clone this repository.
```git
git clone https://github.com/Xekhai/book-directory.git
```
2. Install dependencies.
```javascript
npm install
```

3. Create a `.env` file in the root directory of the project.
```
touch .env
```

4. Add the following environment variables to the `.env` file.
```
SUPABASE_URL=<supabase-instance-url>
SUPABASE_KEY=<supabase-instance-key>
PORT=3000
```
5. Run the API.
```javascript
npm start
```


## API Documentation

The API documentation can be found at https://documenter.getpostman.com/view/20296884/2s935pp2yP#b68e6242-3b03-4550-bf1a-925e4da4ac18.

This documentation contains all the endpoints, parameters, and expected responses for the API. It also provides examples of how to test the API using Postman.

## Contribute

If you find any issues or want to contribute to this project, feel free to open an issue or a pull request.

## License

This project is licensed under the MIT License.