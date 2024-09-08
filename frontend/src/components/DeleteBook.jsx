import axios from "axios";
import { useState } from "react";

const DeleteBook = ({ fetchBooks }) => {
  const [id, setId] = useState("");

  const deleteBookFunction = async () => {
    try {
      await axios.delete(`/api/books/${id}`);
      setId("");
      fetchBooks();
    } catch (error) {
      alert(error || "Error deleting the book");
    }
  };

  return (
    <div className="delete-book-container">
      <h2>Delete a book</h2>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={deleteBookFunction}>Delete Book</button>
    </div>
  );
};

export default DeleteBook;
