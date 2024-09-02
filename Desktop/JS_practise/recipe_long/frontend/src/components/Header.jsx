import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Assuming you have some CSS for styling

function Header() {
  return (
    <header className={styles.header}>
      <h1>Recipe App</h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;