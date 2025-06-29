import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import Product from "./Products";
import Products from "./Products";
function ProductsCard() {
  const [show, setShow] = useState("ALL");
  return (
    <div className={styles.card}>
      <img src="public/resources/vector.svg" alt="" />
      <h3>Our Collection</h3>
      <p>
        Introducting our Coffee Collection, a selection of unique coffees from
        diffrent roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <div className="buttonBox">
        <button
          className={show == "ALL" ? styles.active : null}
          onClick={() => setShow("ALL")}
        >
          All Products
        </button>
        <button
          className={show == "AVAILABLE" ? styles.active : null}
          onClick={() => setShow("AVAILABLE")}
        >
          Available Now
        </button>



        
      </div>
      <Products/>
    </div>
  );
}

export default ProductsCard;
