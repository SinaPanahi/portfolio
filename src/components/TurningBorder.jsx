import styles from "./turningBorder.module.css";
export default function TurningBorder({ children }) {
    return <div className={styles.turningBorder}>{children}</div>;
}
