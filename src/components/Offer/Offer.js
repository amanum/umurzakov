import React from "react";
import styles from './Offer.module.css'
import img from '../../img/offerImg.jpg'

function Offer() {
    return (
        <section className={styles.offer} id="offer">
            <div className={`${styles.container} container`}>
                <div className={styles.offerContent}>
                    <div className={styles.offerText}>
                        <span className="offerPre-Title">
                            Привет!
                        </span>
                        <h1 className="offerTitle">
                            Меня зовут Аманжол Умурзаков
                        </h1>
                        <span className="offerAfter-Title">
                            Я front-end разработчик
                        </span>
                    </div>
                    <div className={styles.offerImg}>
                        <img src={img} alt="" className=""/>
                        <div className={styles.offerImgBg}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Offer;
