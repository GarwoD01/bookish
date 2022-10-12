SELECT * FROM authors

SELECT * FROM books

SELECT * FROM copies

SELECT
  ba.author_id,
  a.f_name first_name,
  a.s_name surname_name,
  ba.book_id,
  b.title BookTitle
FROM books_authors ba
  INNER JOIN authors a ON a.id = ba.author_id
  INNER JOIN books b ON b.id = ba.book_id
