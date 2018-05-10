const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  port = 3001 || process.env.port,
  bc = require(`./controllers/book_controller`);

app.use(bodyParser.json());
app.use(cors());

app.get(`/api/books`, bc.getBooks);
app.get(`/api/books/:id`, bc.getBookById);
app.post(`/api/books`, bc.postBook);
app.put(`/api/books/:id`, bc.updateBook);

app.listen(port, () =>
  console.log(`This is Dr. Crane, I am listeng on port ${port} `)
);
