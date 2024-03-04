import styles from "./decorativeBorder.module.css";

export default function DecorativeBorder() {
    return (
        <div className={styles.decorativeBorder}>
            <div className={`${styles.separator} ${styles.gradient}`}></div>
        </div>
    );
}
