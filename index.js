const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/bookstore').catch(error => console.error(error));
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    genre: {
        type: String
    },
    pages: {
        type: Number
    }
});

const Book = mongoose.model("Book", bookSchema);

app.post("/bookcreation", async (req, res) => {
    try {
        const randomPages = Math.floor(Math.random() * 1000) + 1;

        const newBook = new Book({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            pages: randomPages
        });
        await newBook.save();
        res.send({ newBook, message: "New book added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

app.get("/booklist", async (req, res) => {
    try {
        const bookList = await Book.find().limit(parseInt(req.query.limit));
        const docNumber = await Book.countDocuments();
        res.send({ docNumber, bookList });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

app.get("/book/:id", async (req, res) => {
    try {
        const book = await Book.findOne({ _id: req.params.id });
        if (!book) {
            res.status(404).send({ message: "Book not found" });
        } else {
            res.send(book);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

app.put("/book/:id", async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            res.status(404).send({ message: "Book not found" });
        } else {
            res.send({ updatedBook, message: "Book updated successfully" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

app.delete("/book/:id", async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            res.status(404).send({ message: "Book not found" });
        } else {
            res.send({ message: "Book deleted successfully" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
