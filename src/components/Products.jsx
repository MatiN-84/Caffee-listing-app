import React, { useEffect, useState } from "react";
import styles from "./products.module.css";
function Products() {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setProductsData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={styles.container}>
      {productsData.map((product) => (
        <div key={product.id} className={styles.card}>
          <div>
            {product.popular && <div className={styles.popular}>Popular</div>}
            <img
              className={styles.image}
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className={styles.priceAndName}>
            <div>{product.name}</div> <div>{product.price}</div>
          </div>

          <div>
            {product.rating ? (
              <div className={styles.footer}>
                <div className={styles.rateBox}>
                  <img src="resources/Star_fill.svg" alt="star" />{" "}
                  <div className={styles.rating}>
                    <span className={styles.rate}>{product.rating} </span>
                    <span className={styles.votes}>
                      ({product.votes} votes){" "}
                    </span>
                  </div>
                </div>
                {!product.available && <div className={styles.soldOut}>Sold out</div>}
              </div>
            ) : (
              <div className={styles.footer}>
                <div className={styles.rateBox}>
                  <img src="resources/Star.svg" alt="star" />
                  <div className={styles.rating}>
                    <span className={styles.votes}>No rating</span>
                  </div>
                </div>
                {!product.available && <div className={styles.soldOut}>Sold out</div>}
              </div>
            )}
            {product.vote}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
