import { PC } from "@/components/pc/pc";
import styles from "./styles.module.scss";

const Intro = () => {
  return (
    <section id="home" className={styles.intro}>
      <PC className={styles.pc} />

      <div className={styles.description}>
        <h1 className={styles.title}>
          Hello there! 👋
          <br />
          I&apos;m <span>Emanuel Padilha</span>
        </h1>

        <p className={styles.text}>
          I&apos;m a Full Stack developer from Brazil, and this is my small
          portfolio website. Thank you for visiting, and I hope you enjoy
          exploring my portfolio.
        </p>
      </div>
    </section>
  );
};

export { Intro };
