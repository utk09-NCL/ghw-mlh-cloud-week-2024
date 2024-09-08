import { useState } from "react";
import axios from "axios";
import "./App.css";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import DeleteBook from "./components/DeleteBook";
import DeleteDatabase from "./components/DeleteDatabase";

axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL;

export default function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("/api/books");
      const fetchedBooks = response.data.map((bookObj) => bookObj.value);
      setBooks(fetchedBooks);
    } catch (error) {
      console.error("Error fetching books: ", error);
    }
  };

  return (
    <main className="app">
      <h1>Book Library</h1>
      <hr />

      <div className="container">
        <div className="left-side">
          <BookList books={books} fetchBooks={fetchBooks} />
        </div>

        <div className="right-side">
          <AddBook fetchBooks={fetchBooks} />
          <DeleteBook fetchBooks={fetchBooks} />
          <DeleteDatabase fetchBooks={fetchBooks} />
        </div>
      </div>
    </main>
  );
}
