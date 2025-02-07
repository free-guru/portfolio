import Link from "next/link";

import { Card } from "@/components/card/card";
import styles from "./styles.module.scss";

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2 className={styles.title}>
        <span>My</span> Works
      </h2>

      <ul className={styles.list}>
        <li>
          <Card
            img="/img/works/recipe.png"
            title="Recipe"
            description="Food Recipe (demo)."
            href="#"
            githubUrl="https://github.com/free-guru/Catalog-App-With-Ruby"
            topics={["ruby-on-rails", "html", "js", "css", "sass"]}
          />
        </li>
      </ul>
      <Link className={styles.btn} href="/works">
        See more
      </Link>
    </section>
  );
};

export { Portfolio };
