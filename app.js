const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'movie_review'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('❌ Error connecting to database:', err);
        return;
    }
    console.log('✅ Connected to MySQL database successfully!');
});

// Set up EJS as view engine
app.set('view engine', 'ejs');

// Middleware to parse JSON bodies
app.use(express.json());

// Log all incoming requests
app.use((req, res, next) => {
    console.log(`🔥 ${new Date().toISOString()} - ${req.method} request to ${req.url}`);
    next();
});

// Home route - render index.ejs with movies
app.get('/', (req, res) => {
    console.log('👋 Fetching movies for homepage...');
    connection.query('SELECT * FROM movies', (err, movies) => {
        if (err) {
            console.error('❌ Error fetching movies:', err);
            return res.status(500).send('Error fetching movies');
        }
        console.log(`✅ Found ${movies.length} movies`);
        res.render('index', {
            movies: movies,
            title: 'Movie Review Site'
        });
    });
});

// About route - render about.ejs
app.get('/about', (req, res) => {
    console.log('👋 Someone accessed about page');
    res.render('about', {
        title: 'About Us'
    });
});

// Test database connection
app.get('/test', (req, res) => {
    console.log('🔍 Testing database connection...');
    connection.query('SELECT 1', (err, results) => {
        if (err) {
            console.error('❌ Database test failed:', err);
            return res.status(500).send('Database connection failed');
        }
        console.log('✅ Database test successful!');
        res.send('Database connection successful!');
    });
});

// Start server
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
    console.log('📝 Available routes:');
    console.log(`   - http://localhost:${port}/ (Home)`);
    console.log(`   - http://localhost:${port}/about (About)`);
    console.log(`   - http://localhost:${port}/test (DB Test)`);
});