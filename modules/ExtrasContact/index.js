import styles from "./index.module.css";
import cn from "classnames";

export default function ExtrasContact({
  className,
  children,
  ...props
}) {
  return (
    <div
      className={styles.wrapper}
    >
      <h2 className={styles.title}>Δ°letiΕim Bilgileri</h2>
      <ul>
        <li>π <a href="https://ahmetsafabulbul.com/">ahmetsafabulbul.com</a></li>
        <li>π <a href="https://www.linkedin.com/in/ahmetsbulbul/">Linkedin</a></li>
        <li>π <a href="https://twitter.com/AhmetSBulbul">Twitter</a></li>
        <li>π <a href="https://github.com/AhmetSBulbul">Github</a></li>
        <li>π§ <a href="mailto:ahmetsafabulbul@gmail.com">ahmetsafabulbul@gmail.com</a></li>
      </ul>
    </div>
  );
}
