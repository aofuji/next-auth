"use client"

import styles from '@/app/form.module.css';

export default function Clients() {

    const send = (formData:any) => {
        const query = formData.get("name");
       console.log(query)
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} action={send}>
                <input type="text" name='name'  placeholder="name"/>
                <input type="text" name='email'  placeholder="Email"/>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}