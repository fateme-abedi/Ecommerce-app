import React, { useState, useEffect } from 'react'
import './Products.scss'
import Loader from '../loader/Loader'
import { Link } from 'react-router-dom'

function Products(props) {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [isLoading, setIsLoading] = useState(false)
  const componentMounted = true
  console.log(filter)
  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true)
      const response = await fetch('https://api.escuelajs.co/api/v1/products')
      if (componentMounted) {
        setData(await response.clone().json())
        setFilter(await response.json())
        setIsLoading(false)
      }

      return () => {
        componentMounted = false
      }
    }

    getProducts()
  }, [])

  const filterHandler = (category) => {
    const updatedList = data.filter((x) => x.category.name === category)
    setFilter(updatedList)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons">
          <button className="btn" type="submit" onClick={() => setFilter(data)}>
            All
          </button>
          <button
            className="btn"
            type="submit"
            onClick={() => filterHandler('Clothes')}
          >
            Clothes
          </button>
          <button
            className="btn"
            type="submit"
            onClick={() => filterHandler('Electronics')}
          >
            Electronics
          </button>
          <button
            className="btn"
            type="submit"
            onClick={() => filterHandler('Shoes')}
          >
            Shoes
          </button>
          <button
            className="btn"
            type="submit"
            onClick={() => filterHandler('Furniture')}
          >
            Furniture
          </button>
          <button
            className="btn"
            type="submit"
            onClick={() => filterHandler('Others')}
          >
            Others
          </button>
        </div>
        <div className="cards">
          {filter.map((product) => {
            return (
              <>
                <div className="card" key={product.id}>
                  <div className="card-header">
                    <img src={product.images} alt={product.title} />
                  </div>

                  <div className="card-body">
                    <h3 className="title">
                      {product.title.substring(0, 15)}...
                    </h3>
                    <div className="other">
                      <span className="price">${product.price}</span>
                    </div>
                  </div>

                  <div className="card-footer">
                    <Link
                      to={`/products/${product.id}`}
                      className="add-to-cart btn"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </>
    )
  }

  return (
    <div className="products">
      <div className="container">
        <div className="row rowTitle">
          <div className="col">
            <h1>Latest Products</h1>
            <hr />
          </div>
        </div>

        <div className="row rowProducts">
          <div className="col">{isLoading ? <Loader /> : <ShowProducts />}</div>
        </div>
      </div>
    </div>
  )
}

export default Products
