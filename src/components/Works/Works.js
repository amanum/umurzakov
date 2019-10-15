import React from "react";
import styles from './Works.module.css'
import img from '../../img/worksImg.jpg'

function Works() {
    return (
        <section className={styles.works} id="works">
            <div className="container">
                <div className="worksContent">
                    <h2 className="worksTitle">
                        Мои Работы
                    </h2>
                    <div className={styles.worksItems}>
                        <div className={styles.worksItem}>
                            <div className={styles.worksItemImgWrapper}>
                                <img src={img} alt=""/>
                                <div className={styles.worksItemImgOverlay}>
                                    <a href="http://advokatsosnin.ru" target='_blank'>
                                        Смотреть
                                    </a>
                                </div>
                            </div>
                            <div className={styles.worksItemText}>
                                <h3 className={styles.worksItemTitle}>
                                    Название проекта
                                </h3>
                                <div className={styles.worksItemInfo}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, deserunt.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.worksItem}>
                            <div className={styles.worksItemImgWrapper}>
                                <img src={img} alt=""/>
                                <div className={styles.worksItemImgOverlay}>
                                    <a href="http://advokatsosnin.ru" target='_blank'>
                                        Смотреть
                                    </a>
                                </div>
                            </div>
                            <div className={styles.worksItemText}>
                                <h3 className={styles.worksItemTitle}>
                                    Название проекта
                                </h3>
                                <div className={styles.worksItemInfo}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, deserunt.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Works;
