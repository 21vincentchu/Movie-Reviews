import React from 'react';

function Index({ movies, title }) {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>{title}</h1>

            {/* Navigation buttons */}
            <div style={styles.navigationButtons}>
                <a href="/about" style={styles.navButton}>About</a>
                <a href="/login" style={styles.navButton}>Login</a>
            </div>

            {/* Search form */}
            <form action="/search" method="GET" style={styles.searchContainer}>
                <input
                    type="text"
                    name="search"
                    placeholder="Search movies..."
                    style={styles.searchInput}
                />
                <button
                    type="submit"
                    style={styles.searchButton}
                >
                    Search
                </button>
            </form>

            {movies && movies.length > 0 ? (
                <div style={styles.movieGrid}>
                    {movies.map(movie => (
                        <div key={movie.movie_id} style={styles.movieCard}>
                            <h2 style={styles.movieTitle}>{movie.title}</h2>
                            <p style={styles.movieInfo}><strong>Director:</strong> {movie.director}</p>
                            <p style={styles.movieInfo}><strong>Year:</strong> {movie.release_year}</p>
                            <p style={styles.movieInfo}><strong>Genre:</strong> {movie.genre}</p>
                            <p style={styles.movieDescription}>{movie.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p style={styles.noMovies}>No movies found.</p>
            )}
        </div>
    );
}

const styles = {
    container: {
        fontFamily: "'Poppins', Arial, sans-serif",
        maxWidth: '4000px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#ffffff',
    },
    header: {
        textAlign: 'center',
        color: '#333',
        fontSize: '2.5em',
        marginBottom: '30px',
        letterSpacing: '1.5px',
    },
    navigationButtons: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '30px',
    },
    navButton: {
        padding: '10px 20px',
        backgroundColor: '#6493c3',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        transition: 'background-color 0.3s',
        fontSize: '16px',
        cursor: 'pointer',
    },
    movieGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '30px',
    },
    movieCard: {
        border: '1px solid #e6e6e6',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#cdcdcd',
        transition: 'transform 0.3s, box-shadow 0.3s',
    },
    movieCardHover: {
        transform: 'scale(1.05)',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
    },
    movieTitle: {
        fontSize: '1.4em',
        marginBottom: '15px',
        color: '#6a95bf',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    },
    movieInfo: {
        margin: '5px 0',
        fontSize: '1em',
        color: '#7c7c7c',
    },
    movieDescription: {
        marginTop: '15px',
        fontSize: '0.95em',
        lineHeight: '1.6',
        color: '#666',
    },
    noMovies: {
        textAlign: 'center',
        color: '#999',
        fontSize: '1.2em',
    },
    searchContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '30px',
    },
    searchInput: {
        padding: '10px 15px',
        fontSize: '16px',
        border: '2px solid #e6e6e6',
        borderRadius: '8px',
        width: '300px',
        outline: 'none',
    },
    searchButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#2c3e50',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

export default Index;