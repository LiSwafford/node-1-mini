let books = [
  {
    title: "Jack",
    id: 1
  },
  {
    title: "Li",
    id: 2
  },
  {
    title: "Brandon",
    id: 3
  }
];
let id = 0;

module.exports = {
  getBooks(req, res) {
    if (books.length <= 0) {
      return res.status(401).json({ message: "The bookshelf is empty." });
    }
    return res.status(200).json(books);
  },
  getBookById(req, res) {
    let index = books.findIndex(book => book.id === Number(req.params.id));
    if (index === -1) {
      return res.status(401).json({ message: "book not found." });
    }
    return res.status(200).json(books[index]);
  },
  // [ {id: 1, title: "Arthur" } ]
  postBook(req, res) {
    id++; //id: 1
    //req.body = { title: "Arthur" }
    req.body.id = id;
    //req.body = { title: "Arthur", id: 1 }
    books.push(req.body);
    return res.status(200).json(books);
  },
  updateBook(req, res) {
    //req.body = { title: "Brandon" }
    //req.params.id = 1
    books.forEach(
      book =>
        book.id === Number(req.params.id) ? Object.assign(book, req.body) : null
    );
    return res.status(200).json(books);
  }
};
