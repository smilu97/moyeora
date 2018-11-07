DROP TABLE IF EXISTS offers;
DROP TABLE IF EXISTS user_group;
DROP TABLE IF EXISTS requests;

CREATE TABLE offers (
    id INT NOT NULL AUTO_INCREMENT,
    groupname VARCHAR(32) NOT NULL,
    itemname VARCHAR(32) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE user_group (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(32) NOT NULL,
    groupname VARCHAR(32) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE requests (
    id INT NOT NULL AUTO_INCREMENT,
    offerId INT NOT NULL,
    requestor VARCHAR(32) NOT NULL,
    cost INT NOT NULL,
    PRIMARY KEY (id)
);