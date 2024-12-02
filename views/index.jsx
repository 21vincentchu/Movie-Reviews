import React from 'react';

function Index({ movies, title }) {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>{title}</h1>
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
                <p>No movies found.</p>
            )}
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
    },
    header: {
        textAlign: 'center',
        color: '#333',
    },
    movieGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
    },
    movieCard: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    movieTitle: {
        fontSize: '1.2em',
        marginBottom: '10px',
        color: '#2c3e50',
    },
    movieInfo: {
        margin: '5px 0',
        fontSize: '0.9em',
    },
    movieDescription: {
        marginTop: '10px',
        fontSize: '0.9em',
        lineHeight: '1.4',
    },
};

export default Index;