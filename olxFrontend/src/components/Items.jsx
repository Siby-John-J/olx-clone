import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../assets/styles/Items.css"
import car from "../assets/images/car.jpg"

function Items() {
  const [products, setProducts] = useState([])

  console.log()

  useEffect(() => {
    async function items() {
      const res = await fetch("http://localhost:2000/get_products")
      const json = await res.json()

      setProducts(json.data)
    }

    items()
  }, [])

  return (
    <div className="mainItems">
      <h1>Fresh recommendations</h1>
      <div className="wrapItems">
        {products.map((data, index) => {
          console.log(index % 4)
          return (
            <React.Fragment key={data.name}>
              <Link to={'/' + data.name}>
                <div className="items">
                  <img src={'http://localhost:2000/images/' + data.filename} alt="" />
                  <label id="price" htmlFor="">
                    {"$" + data.price}
                  </label>
                  <label id="name" htmlFor="">
                    {data.name}
                  </label>
                </div>
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
  
}

export default Items
