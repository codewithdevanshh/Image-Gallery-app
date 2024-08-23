import React from 'react';
const image=process.env.PUBLIC_URL + "/Not_found.jpg"

const PageNotFound = () => {
  return (
    <div style={styles.container}>
      <img src={image} alt="Maintenance" style={styles.image} />
      <h1 style={styles.heading}>Oops! Page Not Found</h1>
      <p style={styles.text}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0', 
  },
  image: {
    width: '50%', 
    marginBottom: 20,
    
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', 
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666', 
  },
};

export default PageNotFound;
