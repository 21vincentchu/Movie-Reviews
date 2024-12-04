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

// Set up view engine - make sure these come before your routes
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Serve static files (for CSS)
app.use(express.static('public'));
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} request to ${req.url}`);
    next();
});

// Root route handling both initial page load and search
app.get('/', (req, res) => {
    connection.query('SELECT * FROM movies', (err, movies) => {
        if (err) {
            console.error('Error fetching movies:', err);
            return res.status(500).send('Error fetching movies');
        }
        res.render('index', { movies: movies, title: 'Movie Review Site' });
    });
});

// Add this new route for search
app.get('/search', (req, res) => {
    const searchQuery = req.query.search;

    if (!searchQuery) {
        return res.redirect('/');
    }

    const query = 'SELECT * FROM movies WHERE title LIKE ?';
    const searchTerm = `%${searchQuery}%`;

    connection.query(query, [searchTerm], (err, movies) => {
        if (err) {
            console.error('Error searching movies:', err);
            return res.status(500).send('Error searching movies');
        }
        res.render('SearchResults', {
            movies: movies,
            searchTerm: searchQuery,
            title: `Search Results for "${searchQuery}"`
        });
    });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

// Login Page Route
app.get('/login', (req, res) => {
    res.render('LoginPage', { title: 'Login' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});