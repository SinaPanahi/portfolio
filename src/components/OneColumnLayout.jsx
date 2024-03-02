import styles from "./oneColumnLayout.module.css";
export default function TwoColumnLayout({ children }) {
    return <div className={styles.oneColumnLayout}>{children}</div>;
}
