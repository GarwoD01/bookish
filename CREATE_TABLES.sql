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

GO

CREATE TABLE copies (
    id int NOT NULL IDENTITY(1,1),
    amount int NULL,
    PRIMARY KEY(id)   
)

GO

CREATE TABLE person (
    id int NOT NULL IDENTITY(1,1),
    card_no int NOT NULL,
    f_name nvarchar(MAX) NULL,
    s_name nvarchar(MAX) NULL,
    PRIMARY KEY(id)
)

GO

CREATE TABLE books_authors (
    author_id INT NOT NULL,
    book_id  INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
)

GO

CREATE TABLE books_copies (
    book_id INT NOT NULL,
    copy_id  INT NOT NULL,
    FOREIGN KEY (book_id) REFERENCES books(id),
    FOREIGN KEY (copy_id) REFERENCES copies(id)
)

GO
