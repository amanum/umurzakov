import React from "react";
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer} id="footer">
            <div className="container">
                <div className="footerContent">
                    <h2 className="footerTitle">
                        Аманжол Умурзаков
                    </h2>
                    <ul className={styles.footerSocial}>
                        <li className={styles.footerSocialItem}>
                            <a href="https://www.instagram.com/umurzakov.amanzhol/" target='_blank'>
                                <img src="https://cdn.svgporn.com/logos/instagram-icon.svg" alt=""/>
                            </a>
                        </li>
                        <li className={styles.footerSocialItem}>
                            <a href="https://t.me/umurzakov_aman" target='_blank'>
                                <img src="https://cdn.svgporn.com/logos/telegram.svg" alt=""/>
                            </a>
                        </li>
                        <li className={styles.footerSocialItem}>
                            <a href="https://api.whatsapp.com/send?phone=77085482936" target='_blank'>
                                <img src="https://cdn.svgporn.com/logos/whatsapp.svg" alt=""/>
                            </a>
                        </li>
                        <li className={styles.footerSocialItem}>
                            <a href="https://vk.com/umurzakov.amanzhol" target='_blank'>
                                <img src="http://pngimg.com/uploads/vkontakte/vkontakte_PNG19.png" alt=""/>
                            </a>
                        </li>
                    </ul>
                    <div className={styles.footerCopyright}>
                        &copy; 2019 Все права защищены
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
