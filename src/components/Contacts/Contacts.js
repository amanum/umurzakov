import React from "react";
import styles from './Contacts.module.css'

function Contacts() {
    return (
        <section className={styles.contacts} id="contacts">
            <div className="container">
                <div className={styles.contactsContent}>
                    <h2 className="contactsTitle">
                        Контакты
                    </h2>
                    <form action="#" className={styles.contactsForm}>
                        <input type="text" name='name' placeholder="Введите Имя"/>
                        <input type="email" name='email' placeholder="Введите Email"/>
                        <textarea name="message" id="" className="contactsFormMessage" placeholder="Введите сообщение"/>
                    </form>
                    <div className={styles.contactsBtnWrapper}>
                        <button className={styles.contactsBtn}>
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;
