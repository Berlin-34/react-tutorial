import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <div className="booklist-parent">
      <h1>Amazon Bestsellers</h1>
      <hr />
      <section className="booklist">
        {books.map((book, index) => {
          return <Book key={book.id} {...book} position={index + 1} />;
        })}
      </section>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
