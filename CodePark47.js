/*

-- Criação da tabela Autores
CREATE TABLE Autores (
    AutorID INT PRIMARY KEY,
    Nome VARCHAR(100),
    Nacionalidade VARCHAR(100)
);

-- Criação da tabela Livros com chave estrangeira referenciando Autores
CREATE TABLE Livros (
    LivroID INT PRIMARY KEY,
    Titulo VARCHAR(100),
    AnoPublicacao INT,
    AutorID INT,
    FOREIGN KEY (AutorID) REFERENCES Autores(AutorID)
);

*/

/*
-- Inserção de dados
INSERT INTO Autores (Nome, Nacionalidade) VALUES
('Autor 1', 'País A'),
('Autor 2', 'País B'),
('Autor 3', 'País C');

INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES
('Livro 1', 2010, 1),
('Livro 2', 2015, 1),
('Livro 3', 2012, 2),
('Livro 4', 2018, 2),
('Livro 5', 2020, 3);

-- Consulta simples
SELECT Autores.Nome AS Autor, Livros.Titulo AS Livro
FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- Consulta com junção INNER JOIN
SELECT Autores.Nome AS Autor, Livros.Titulo AS Livro, Livros.AnoPublicacao
FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- Consulta com junção LEFT JOIN
SELECT Autores.Nome AS Autor, Livros.Titulo AS Livro, Livros.AnoPublicacao
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- Consulta com filtro por nacionalidade
SELECT Autores.Nome AS Autor, Livros.Titulo AS Livro
FROM Autores
JOIN Livros ON Autores.AutorID = Livros.AutorID
WHERE Autores.Nacionalidade = 'País A';

-- Consulta agregada
SELECT Autores.Nome AS Autor, COUNT(Livros.LivroID) AS TotalLivros
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
GROUP BY Autores.Nome;
*/