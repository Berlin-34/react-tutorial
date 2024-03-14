const Book = ({ img, title, author, position }) => {
  return (
    <article className="book">
      <div className="position">
        <span># {position}</span>
      </div>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;
