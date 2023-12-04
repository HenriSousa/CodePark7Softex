/*
-- 1. Seleção de dados:
SELECT * FROM transacoes;

-- 2. Renomeando colunas:
SELECT ID_Transacao AS ID, Data AS Data_Transacao, Valor AS Valor_Transacao FROM transacoes;

-- 3. Filtragem com a cláusula WHERE:
SELECT * FROM transacoes WHERE Valor > 100.00;

-- 4. Ordenação com a cláusula ORDER BY:
SELECT * FROM transacoes ORDER BY Valor DESC;

-- 5. Agregação com funções SQL:
SELECT AVG(Valor) AS Media_Valor, MAX(Valor) AS Valor_Maximo, MIN(Valor) AS Valor_Minimo, COUNT(*) AS Total_Transacoes FROM transacoes;

-- 6. Agrupamento com a cláusula GROUP BY:
SELECT Produto, AVG(Valor) AS Media_Valor_Produto FROM transacoes GROUP BY Produto;

-- 7. Consulta combinada:
SELECT Categoria_Produto, COUNT(*) AS Total_Produtos_Vendidos, SUM(Valor) AS Valor_Total_Vendas, AVG(Valor) AS Media_Valor_Transacao
FROM transacoes
GROUP BY Categoria_Produto;
*/

/*

Para os insights:

Filtragem por valor superior a R$ 100,00: Isso ajuda a identificar transações de alto valor, úteis para campanhas direcionadas ou análise de segmentos de clientes com maior poder de compra.

Ordenação por valor decrescente: Permite identificar as transações mais lucrativas ou os produtos mais caros vendidos.

Agregação de valores: Fornece uma visão estatística geral das transações, útil para entender tendências de gastos e comportamento médio dos consumidores.

Agrupamento por produto com média de valor: Ajuda a compreender quais produtos têm um valor médio mais alto, útil para estratégias de precificação e análise de desempenho de produtos.

Consulta combinada por categoria de produto: Permite entender o desempenho das diferentes categorias de produtos em termos de volume de vendas, receita total gerada e o valor médio de transações por categoria. Isso pode orientar estratégias de marketing e estoque.

Esses insights podem ajudar a empresa a tomar decisões informadas, como ajustar estratégias de marketing, identificar produtos de alto desempenho, entender os padrões de compra dos clientes e muito mais.

*/