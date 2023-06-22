import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const Navbar = ({ onCreateBlogClick }) => {
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log('Logged out successfully');
        // Perform any additional actions after successful logout
      })
      .catch((error) => {
        console.log('Error occurred during logout:', error);
      });
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Blogapp</div>
      <div style={styles.navButtons}>
        {/* <button style={styles.createBlogButton} onClick={onCreateBlogClick}>
          Create Blog
        </button> */}
        <Link to="/" >
        <button style={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
        </Link>
      </div>
    </nav>
  );
};




const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navButtons: {},
  createBlogButton: {
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
    fontSize: '14px',
  },
  logoutButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default Navbar;
