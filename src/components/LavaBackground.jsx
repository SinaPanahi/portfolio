import styles from "./lavaBackground.module.css";
export default function LavaBackground() {
    return (
        <div class={styles.container}>
            <div class={styles.dots}>
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
