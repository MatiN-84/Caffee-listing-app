import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import ProductCard from "./ProductCard";

function header() {
  const [responsiveState, setResponsiveState] = useState(
    window.innerWidth <= 1024
      ? window.innerWidth <= 640
        ? "mobile"
        : "tablet"
      : "desktop"
  );

  useEffect(() => {
    const handleResize = () => {
      setResponsiveState(
        window.innerWidth <= 1024
          ? window.innerWidth <= 640
            ? "mobile"
            : "tablet"
          : "desktop"
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div
        className={
          responsiveState === "desktop"
            ? styles.header
            : responsiveState === "tablet"
            ? styles.header1024
            : styles.header640
        }
      ></div>
      <div>
        <ProductCard />
      </div>
    </>
  );
}

export default header;
