"use client";

import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setSuccess(false);
    } else {
      setError("");
      setSuccess(true);
    }
  };

  return (
    <div className={`${styles.page} ${success ? styles.pageSuccess : ""}`}>
      <main className={styles.main}>
        {!success && (
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
        )}
        <div className={styles.content}>
          {/* If Submit Successful,hide wrap element and show success message */}
          {!success ? (
            <>
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
              <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label}>
                  <span className={styles.labelText}>Email address</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@company.com"
                  className={`${styles.input} ${
                    error ? styles.inputError : ""
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {/* Email Error */}
                {error && (
                  <span
                    style={{
                      color: "var(--color-primary-red)",
                      fontSize: "0.9rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {error}
                  </span>
                )}

                <button type="submit" className={styles.button}>
                  Subscribe to monthly newsletter
                </button>
              </form>
              {/* If Submit Successful, show success message */}
            </>
          ) : (
            <div className={styles.successMessage}>
              <MdCheckCircle className={styles.successIcon} />
              <h1 className={styles.successTitle}>Thanks for subscribing!</h1>
              <p className={styles.successDescription}>
                A confirmation email has been sent to <strong>{email}</strong>
                .com. Please open it and click the button inside to confirm your
                subscription
              </p>
              <button
                type="submit"
                className={styles.button}
                onClick={() => {
                  setSuccess(false);
                  setEmail("");
                  setError("");
                }}
              >
                Dismiss message
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
