import React from "react";
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header} id="header">
            <div className="container">
                <div className={styles.headerContent}>
                    <ul className={styles.headerMenu}>
                        <li className={styles.headerMenuItem}>
                            <a href="#">Главная</a>
                        </li>
                        <li className={styles.headerMenuItem}>
                            <a href="#skills">Скиллы</a>
                        </li>
                        <li className={styles.headerMenuItem}>
                            <a href="#works">Работы</a>
                        </li>
                        <li className={styles.headerMenuItem}>
                            <a href="#contacts">Контакты</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
