TRUNCATE TABLE your_table_name;

-- Load new data into the table from a CSV file
LOAD DATA LOCAL INFILE '/path/to/your/file.csv'
INTO TABLE your_table_name
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
