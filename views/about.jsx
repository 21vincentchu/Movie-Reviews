const React = require('react');

function About() {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>About Us</h1>

            <div style={styles.navContainer}>
                <a href="/" style={styles.navButton}>Home</a>
                <a href="/login" style={styles.navButton}>Login</a>
            </div>

            <div style={styles.content}>
                <p style={styles.description}>
                    Welcome to our movie review website! Here you can find and share reviews for your favorite movies.
                </p>

                <div style={styles.teamSection}>
                    <h2 style={styles.subheader}>Our Team</h2>
                    <div style={styles.teamGrid}>
                        <div style={styles.teamMember}>
                            <h3 style={styles.memberName}>Ethan Pokress</h3>
                            <p style={styles.email}>eipc4y@umsystem.edu</p>
                        </div>
                        <div style={styles.teamMember}>
                            <h3 style={styles.memberName}>Vinny Chu</h3>
                            <p style={styles.email}>vmc43b@umsystem.edu</p>
                        </div>
                        <div style={styles.teamMember}>
                            <h3 style={styles.memberName}>Wesley Jennings</h3>
                            <p style={styles.email}>wmjyn9@umsystem.edu</p>
                        </div>
                        <div style={styles.teamMember}>
                            <h3 style={styles.memberName}>Yi Zheng</h3>
                            <p style={styles.email}>yzkp8@umystem.edu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: "'Poppins', Arial, sans-serif",
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
    },
    header: {
        textAlign: 'center',
        color: '#333',
        fontSize: '2.5em',
        marginBottom: '30px',
        letterSpacing: '1.5px',
    },
    navContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '40px',
    },
    navButton: {
        padding: '10px 20px',
        backgroundColor: '#2c3e50',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        transition: 'background-color 0.3s',
        fontSize: '16px',
    },
    content: {
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    description: {
        fontSize: '1.2em',
        lineHeight: '1.6',
        color: '#555',
        textAlign: 'center',
        marginBottom: '40px',
    },
    teamSection: {
        marginTop: '40px',
    },
    subheader: {
        textAlign: 'center',
        color: '#2c3e50',
        fontSize: '2em',
        marginBottom: '30px',
    },
    teamGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        padding: '20px',
    },
    teamMember: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.3s ease',
    },
    memberName: {
        color: '#2c3e50',
        fontSize: '1.3em',
        marginBottom: '10px',
    },
    email: {
        color: '#666',
        fontSize: '0.9em',
    },
};

export default About;