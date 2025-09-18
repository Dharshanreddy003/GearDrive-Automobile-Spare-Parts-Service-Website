-- Create database
CREATE DATABASE geardrive;

-- create user table
CREATE TABLE geardrive.user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    password VARCHAR(255) NOT NULL,
    door_building_name VARCHAR(255) NOT NULL,
    street_name VARCHAR(255) NOT NULL,
    landmark VARCHAR(255),
    district VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

