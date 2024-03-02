import styles from "./twoColumnLayout.module.css";
export default function TwoColumnLayout({ children }) {
    return <div className={styles.twoColumnLayout}>{children}</div>;
}
