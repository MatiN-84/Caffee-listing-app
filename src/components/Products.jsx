import React, { useEffect, useState } from 'react'

function Products() {
  const [productsData, setProductsData] = useState([])
  useEffect(()=>{
    fetch(
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
)
  .then((response) => response.json())
  .then((data) => {
    setProductsData(data)
    console.log(data);
    
  })
  .catch((error) => {
    console.log(error);
  });
  },[])
  return (
    <div>
        
        <div><div>popular</div>image</div>
        <div><p>title</p> <span>price</span></div>
        <div>star , numberStar , vote</div>
    </div>
  )
}

export default Products