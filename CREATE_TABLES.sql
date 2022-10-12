USE bookish

GO

CREATE TABLE books (
    id INT NOT NULL IDENTITY(1,1),
    title nvarchar(MAX) NULL,
    isbn nchar(14) NULL,
    PRIMARY KEY(id)
)

GO

CREATE TABLE authors (
    id INT NOT NULL IDENTITY(1,1),
    f_name nvarchar(MAX) NULL,
    s_name nvarchar(MAX) NULL,
    PRIMARY KEY(id)
)

GO

CREATE TABLE copies (
    id INT NOT NULL IDENTITY(1,1),
    book_id INT NOT NULL,
    person_id INT NULL,
    FOREIGN KEY (book_id) REFERENCES books(id),
    FOREIGN KEY (person_id) REFERENCES person(id),
    PRIMARY KEY(id)
)

GO

CREATE TABLE person (
    id INT NOT NULL IDENTITY(1,1),
    library_card INT NOT NULL,
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
