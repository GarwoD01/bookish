USE bookish

GO

CREATE TABLE books (
    id int NOT NULL IDENTITY(1,1),
    title nvarchar(MAX) NULL,
    isbn nchar(14) NULL,
    PRIMARY KEY(id)
)

GO

CREATE TABLE authors (
    id int NOT NULL IDENTITY(1,1),
    f_name nvarchar(MAX) NULL,
    s_name nvarchar(MAX) NULL,
    PRIMARY KEY(id)
)

CREATE TABLE books_authors (
    author_id INT NOT NULL,
    book_id  INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
)

CREATE TABLE copies (
    amount int NULL
)

CREATE TABLE person (
    card_no int NOT NULL IDENTITY(1,1),
    f_name nvarchar(MAX) NULL,
    s_name nvarchar(MAX) NULL
    PRIMARY KEY(card_no)
)

GO

