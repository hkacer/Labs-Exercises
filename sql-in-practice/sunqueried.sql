CREATE TABLE authors(
  author_id SERIAL PRIMARY KEY,
  author VARCHAR(20),
  book_id INTEGER NOT NULL REFERENCES books(book_id)

);

INSERT INTO authors(author,book_id)
VALUES
('Hawkins',1),
('Gold',2),
('Williams',3),
('Anderson',4);

CREATE TABLE books(
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  pages INTEGER NOT NULL
  
);
INSERT INTO books(book_id,title,pages,author_id)
VALUES 
(1, 'Big Book',2300,2),
(2,'Book',400,4),
(4,'The Book',1500,3),
(3,'Tiny Book',8,1);


SELECT *
FROM authors
WHERE author_id IN( 
SELECT author_id FROM books WHERE pages>1000);


UPDATE books
SET pages=7
WHERE book_id IN(
SELECT book_id FROM books 
WHERE title='Tiny Book');
SELECT * FROM books WHERE title='Tiny Book' ;


--Get all invoices where the unit_price on the invoice_line is greater than $0.99.
SELECT *
FROM invoice
WHERE invoice_id IN(
SELECT invoice_id FROM invoice_line WHERE unit_price>0.99);


--Get all playlist tracks where the playlist name is Music.
SELECT * 
FROM playlist 
WHERE name='music';


--Get all track names for playlist_id 5.
SELECT * 
FROM playlist
WHERE playlist_id IN(
SELECT playlist_id FROM playlist Where playlist_id=5);

--Get all tracks where the genre is Comedy.
SELECT *
FROM 