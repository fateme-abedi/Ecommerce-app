import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'
import './Product.scss'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { AddToCart } from '../../redux/action/index'

function Product(props) {
  const { id } = useParams()

  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()
  const addProduct = (product) => {
    dispatch(AddToCart(product))
  }
  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true)
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`,
      )

      setProduct(await response.json())
      setIsLoading(false)
    }

    getProduct()
  }, [id])

  const ShowProduct = () => {
    return (
      <div className="row">
        <div className="col">
          <img src={product.images} alt="" />
        </div>

        <div className="col col-body">
          <div className="body">
            <h2 className="title">{product.title}</h2>

            <p>description : {product.description}</p>
          </div>

          <div className="footer">
            <h1 className="price">${product.price}</h1>
            <button
              className="add"
              onClick={() => {
                addProduct(product)
              }}
            >
              <BsFillCartPlusFill />
              Add to cart{' '}
            </button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className=" product">
      <div>
        <div>{isLoading ? <Loader /> : <ShowProduct />}</div>
      </div>
    </div>
  )
}

export default Product
