import React from "react";
import styles from "./index.module.scss";

console.log(styles);

const Bar1 = () => {
  return (
    <div className={styles["bar-container-d4"]}>
      <div className={styles["content"]}>
        <span>Some title</span>
        <p>
          Up to <b>70% discount</b> on the season end products.
        </p>
      </div>
      <div className={styles["arrow-container"]}>
        <i className="material-icons">keyboard_arrow_right</i>
      </div>
    </div>
  );
};

const GenderButtons = () => {
  return (
    <div className={styles["btn-container-d4"]}>
      <button>Woman</button>
      <button>Man</button>
      <button>Kid</button>
    </div>
  );
};

const Categories = ({ category, remaining, iconName }) => {
  return (
    <div className={styles["category-content"]} id={styles["cat-ico"]}>
      <i className="material-icons">{iconName}</i>
      <div className={styles["contents"]}>
        <p>{category}</p>
        <p> {remaining} items </p>
      </div>
      <div className={styles["icon-container"]}>
        <i className="material-icons">arrow_forward</i>
      </div>
    </div>
  );
};

//burda parametre olarak nasıl Component verebiliriz?
const CategoryCard = () => {
  return (
    <div className={styles["category-container"]}>
      <Categories
        category="Sportswear"
        remaining="167"
        iconName="sports_basketball"
      />
      <div className={styles["line"]}></div>
      <Categories
        category="Accesories"
        remaining="250"
        iconName="local_mall "
      />
      <div className={styles["line"]}></div>
      <Categories category="Foods" remaining="420" iconName="fastfood" />
    </div>
  );
};

const ProductCatalog = () => {
  return (
    <div className={styles["product-container"]}>
      <div className={styles["like-btn"]}>
        <i className="material-icons">favorite</i>
      </div>
      <div className={styles["selected"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default function Day4({}) {
  return (
    <div className={styles["components-container-d4"]}>
      <Bar1/>
      <GenderButtons/>
      <CategoryCard/>
      <ProductCatalog/>
    </div>
  );
}
