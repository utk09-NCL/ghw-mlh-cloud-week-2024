import axios from "axios";
import { useState } from "react";

const AddBook = ({ fetchBooks }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBookFunction = async () => {
    try {
      await axios.post("/api/books", { title, author });
      setTitle("");
      setAuthor("");
      fetchBooks();
    } catch (error) {
      alert(error || "Error adding book");
    }
  };

  return (
    <div className="add-book-container">
      <h2>Add a book</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={addBookFunction}>Add Book</button>
    </div>
  );
};

export default AddBook;
