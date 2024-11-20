CREATE DATABASE IF NOT EXISTS movie_review;
USE movie_review;

CREATE TABLE users (
                       username VARCHAR(50) PRIMARY KEY,
                       password VARCHAR(255) NOT NULL,
                       first_name VARCHAR(50) NOT NULL,
                       last_name VARCHAR(50) NOT NULL,
                       email VARCHAR(255) UNIQUE NOT NULL,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE movies (
                        movie_id INT AUTO_INCREMENT PRIMARY KEY,
                        title VARCHAR(255) NOT NULL,
                        director VARCHAR(100) NOT NULL,
                        release_year INT NOT NULL,
                        description TEXT,
                        genre VARCHAR(50),
                        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE reviews (
                         review_id INT AUTO_INCREMENT PRIMARY KEY,
                         username VARCHAR(50),
                         movie_id INT,
                         user_rating DECIMAL(2,1) NOT NULL,
                         review_text TEXT,
                         watch_status ENUM('want_to_watch', 'watching', 'completed') DEFAULT 'want_to_watch',
                         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                         FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE,
                         FOREIGN KEY (movie_id) REFERENCES movies(movie_id) ON DELETE CASCADE,
                         CONSTRAINT unique_review UNIQUE (username, movie_id)
);