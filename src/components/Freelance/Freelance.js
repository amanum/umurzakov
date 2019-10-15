import React from "react";
import styles from './Freelance.module.css'

function Freelance() {
    return (
        <section className={styles.freelance} id="freelance">
            <div className="container">
                <div className="freelanceContent">
                    <h2 className="freelanceTitle">
                        Рассматриваю варианты удаленной&nbsp;работы
                    </h2>
                    <div className={styles.freelanceBtnWrapper}>
                        <a href="#contacts" className={styles.freelanceBtn}>
                            Нанять меня
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Freelance;
