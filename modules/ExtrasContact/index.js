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
      <h2 className={styles.title}>İletişim Bilgileri</h2>
      <ul>
        <li>🔗 <a href="https://ahmetsafabulbul.com/">ahmetsafabulbul.com</a></li>
        <li>🔗 <a href="https://www.linkedin.com/in/ahmetsbulbul/">Linkedin</a></li>
        <li>🔗 <a href="https://twitter.com/AhmetSBulbul">Twitter</a></li>
        <li>🔗 <a href="https://github.com/AhmetSBulbul">Github</a></li>
        <li>📧 <a href="mailto:ahmetsafabulbul@gmail.com">ahmetsafabulbul@gmail.com</a></li>
      </ul>
    </div>
  );
}
