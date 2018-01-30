
CREATE TABLE IF NOT EXISTS user (
    id	int(11) AUTO_INCREMENT,
    email varchar(255) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
    PRIMARY KEY (id)
);