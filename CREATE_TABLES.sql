USE bookish

GO

CREATE TABLE books (
    id int IDENTITY NOT NULL PRIMARY KEY,
    title nvarchar(MAX) NULL,
    isbn nchar(14) NULL)

GO

CREATE TABLE authors (
    id int IDENTITY NOT NULL PRIMARY KEY,
    f_name nvarchar(MAX) NULL,
    s_name nvarchar(MAX) NULL)

GO

CREATE TABLE books_authors (
    author_id INT NOT NULL,
    book_id  INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
)

GO
