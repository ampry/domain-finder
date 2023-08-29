TRUNCATE TABLE domain;

-- Load new data into the table from a CSV file
LOAD DATA LOCAL INFILE '/Users/cameron/Projects/domain-finder/domains.csv'
INTO TABLE domain
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
