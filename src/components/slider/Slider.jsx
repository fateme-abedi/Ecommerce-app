import React, { useState, useEffect } from 'react'
import './Slider.scss'
import { sliderData } from './Slider-data'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

function Slider(props) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideLength = sliderData.length
  const autoScroll = true
  let slideInterval

  const nextSlideHandler = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }
  const prevSlideHandler = () => {
    setCurrentSlide(currentSlide - 1)
    if (currentSlide === 0) {
      setCurrentSlide(slideLength - 1)
    }
  }

  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlideHandler, 10000)
      }
      auto()
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide, autoScroll, slideInterval])

  return (
    <div className="slider">
      <BsArrowLeftCircle className="arrow prev" onClick={nextSlideHandler} />
      <BsArrowRightCircle className="arrow next" onClick={prevSlideHandler} />

      {sliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === currentSlide ? 'slide current' : 'slide'}
          >
            <>
              <img
                src={slide.image}
                alt=""
                style={{ width: '100%', height: '100%' }}
              />
              <div className="cotent">
                <h2>{slide.heading}</h2>
                <p>{slide.desc}</p>
                <hr />

                <a href="#products" className="--btn --btn-primary">
                  Buy Now
                </a>
              </div>
            </>
          </div>
        )
      })}
    </div>
  )
}

export default Slider
