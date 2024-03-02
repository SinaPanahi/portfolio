import styles from "./navigation.module.css";
export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="ww">Experience</a>
                </li>
                <li>
                    <a href="ww">Project</a>
                </li>
            </ul>
        </nav>
    );
}
