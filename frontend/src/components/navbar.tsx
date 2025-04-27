// src/components/NavBar.tsx (or .jsx)
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import styles from "../css/navbar.module.css"; // Assuming it's a module file

const NavBar: React.FC = () => {
    return (
        // Use the Link component and apply the existing style class to it
        <Link to="/profile" className={styles.Clouds2Campus}>
            Clouds2Campus
        </Link>
    );
};

export default NavBar;