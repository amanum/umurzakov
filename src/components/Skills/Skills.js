import React from "react";
import styles from './Skills.module.css'

function Skills() {
    return (
        <section className={styles.skills} id="skills">
            <div className="container">
                <div className="skillsContent">
                    <h2 className="skillsTitle">
                        Мои Скиллы
                    </h2>
                    <div className={styles.skillsItems}>
                        <div className={styles.skillsItem}>
                            <div className={styles.skillsItemIcon}>
                                <img src="https://cdn.svgporn.com/logos/html-5.svg" alt="" className=""/>
                            </div>
                            <h3 className={styles.skillsItemTitle}>
                                HTML
                            </h3>
                            <div className={styles.skillsItemInfo}>
                                <p>
                                    Подробное описание навыка
                                    Подробное описание навыка
                                    Подробное описание навыка
                                </p>
                            </div>
                        </div>
                        <div className={styles.skillsItem}>
                            <div className={styles.skillsItemIcon}>
                                <img src="https://cdn.svgporn.com/logos/css-3.svg" alt="" className=""/>
                            </div>
                            <h3 className={styles.skillsItemTitle}>
                                CSS
                            </h3>
                            <div className={styles.skillsItemInfo}>
                                <p>
                                    Подробное описание навыка
                                </p>
                            </div>
                        </div>
                        <div className={styles.skillsItem}>
                            <div className={styles.skillsItemIcon}>
                                <img src="https://cdn.svgporn.com/logos/react.svg" alt="" className=""/>
                            </div>
                            <h3 className={styles.skillsItemTitle}>
                                React
                            </h3>
                            <div className={styles.skillsItemInfo}>
                                <p>
                                    Подробное описание навыка
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
