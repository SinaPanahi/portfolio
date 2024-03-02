import styles from "./cubeBackground.module.css";

export default function CubeBackground({ children }) {
    return (
        <div className={styles.area}>
            {children}
            <div>
                <ul className={styles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}
