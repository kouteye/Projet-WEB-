import React from "react";
import "./homepage.css";
import Itemcard from "./Itemcard";
import data from "./data";
import { useHistory } from "react-router";

const Homepage = () => {
  console.warn(data.productData);
  const history = useHistory();
  return (
    <>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Homepage;
