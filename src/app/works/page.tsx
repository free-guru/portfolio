import { Card } from "@/components/card/card";
import styles from "./styles.module.scss";

const Works = () => {
  return (
    <section className={styles.works}>
      <div className={styles.container}>
        <h1 className={styles.title}>Archive</h1>

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
      </div>
    </section>
  );
};

export default Works;
