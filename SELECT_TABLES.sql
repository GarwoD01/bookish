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

SELECT
  ba.copy_id,
  a.amount copies,
  ba.book_id,
  b.title BookTitle
FROM books_copies ba 
  INNER JOIN copies a ON a.id = ba.copy_id
  INNER JOIN books b ON b.id = ba.book_id
