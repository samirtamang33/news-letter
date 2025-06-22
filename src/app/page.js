import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <picture className={styles.imageContainer}>
          <source
            srcSet="/assets/images/illustration-sign-up-desktop.svg"
            media="(min-width: 1440px)"
          />
          <source
            srcSet="/assets/images/illustration-sign-up-tablet.svg"
            media="(min-width: 768px)"
          />
          <Image
            className={styles.image}
            src="/assets/images/illustration-sign-up-mobile.svg"
            alt="Illustration artwork"
            width={375}
            height={284}
            priority
          />
        </picture>
        <div className={styles.content}>
          <h1 className={styles.title}>Stay Updated!</h1>
          <p className={styles.description}>
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className={styles.list}>
            <li>
              <MdCheckCircle className={styles.icon} />
              Product discovery and building what matters
            </li>
            <li>
              <MdCheckCircle className={styles.icon} />
              Measuring to ensure updates are a success
            </li>
            <li>
              <MdCheckCircle className={styles.icon} />
              And much more!
            </li>
          </ul>
          <form className={styles.form}>
            <label className={styles.label}>
              <span className={styles.labelText}>Email address</span>
            </label>
            <input
              type="email"
              placeholder="email@company.com"
              className={styles.input}
              required
            />

            <button type="submit" className={styles.button}>
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
