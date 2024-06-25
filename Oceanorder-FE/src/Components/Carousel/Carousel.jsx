import React from "react";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCard from "../CategoryCard/CategoryCard";
const Carousel = ({ AllProductData }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  const products = AllProductData.products;
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];
  return (
    <div className="mt-5 mb-10">
      <div className="slider-container">
        <Slider {...settings}>
          {uniqueCategories.map((category, i) => {
            return (
              <div>
                <CategoryCard
                  id={category}
                  category={category}
                  productName="Pumps"
                  imageSrc={products[i].imageSrc}
                  price="36.00"
                  color="red"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
