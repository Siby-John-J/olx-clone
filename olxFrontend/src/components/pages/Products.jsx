import React, { useEffect, useState } from "react"
import "../../assets/styles/Product.css"
// import car from "../../assets/images/car.jpg"
import { useParams } from "react-router-dom"

function Products() {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState('')

  const { products } = useParams()

  useEffect(() => {
    async function getProduct() {
      const get = await fetch('http://localhost:2000/' + products)
      const json = await get.json()

      setName(json.data.name)
      setDesc(json.data.desc)
      setPrice(json.data.price)
      setFile(json.data.filename)
    }

    getProduct()
  })

  return (
    <>
      {/* <div className="top"></div> */}
      <div className="mainProduct">
        <div className="productDetail">
          <div className="imgDiv">
            <img src={
              'http://localhost:2000/images/' + file
            } alt="" />
          </div>
          <div className="det">
            <div className="nameAndPrice">
              <div className="name">
                <h1>{ name }</h1>
              </div>
              <div className="price">
                <h1>{ price }</h1>
                <button>Buy</button>
              </div>
            </div>
            <div className="desc">
              <h3>Description</h3>
              <hr />
              <p>
                { desc }
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
