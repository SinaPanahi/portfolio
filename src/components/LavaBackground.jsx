import styles from "./lavaBackground.module.css";
export default function LavaBackground() {
    return (
        <div className={styles.container}>
            <div className={styles.dots}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}
