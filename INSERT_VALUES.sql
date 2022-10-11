

INSERT INTO authors
    (f_name, s_name)
VALUES
    ('Aldous', 'Huxley'),
    ('Albert', 'Camus'),
    ('Max', 'Tegmark')

GO

INSERT INTO books
    (title, isbn)
VALUES
    ('Brave New World', '9780582060166'),
    ('The Myth of Sisyphus', '9780679733737'),
    ('Life 3.0', '9783548377964')

GO

INSERT INTO copies
    (amount)
VALUES
    (420),
    (69),
    (21)

INSERT INTO books_authors
    (book_id, author_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3)

GO

INSERT INTO books_copies
    (book_id, copy_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3)
