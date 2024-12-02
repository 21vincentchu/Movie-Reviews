const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'movie_review'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database successfully!');
});

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} request to ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    console.log('Fetching movies...');
    connection.query('SELECT * FROM movies', (err, movies) => {
        if (err) {
            console.error('Error fetching movies:', err);
            return res.status(500).send('Error fetching movies');
        }
        console.log('Movies fetched:', movies);
        res.render('index', { movies: movies, title: 'Movie Review Site' });
    });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});