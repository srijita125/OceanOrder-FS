import React from "react";
import Mainbanner from "../Components/Mainbanner/Mainbanner";
import PopularServices from "../Components/PopularServices/PopularServices";
import Features from "../Components/Features/Features";
import Connected from "../Components/Connected/Connected";
import Effortless from "../Components/Effortless/Effortless";
import NewsLetter from "../Components/NewsLetter/NewLetter";
import Brands from "../Components/Brands/Brands";


const Home = ({AllProductData}) => {
  return (
    <>
      <Mainbanner />
      <PopularServices AllProductData={AllProductData}/>
      <Connected />
      <Features />
      <Effortless />
      <Brands/>
      <NewsLetter/>

    </>
  );
};

export default Home;
