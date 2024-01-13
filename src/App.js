import { useState } from "react";
import Nav from "./Navigation/Nav";
import Product from "./Products/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./SideBar/Sidebar";
import "./index.css";
// database
import products from "./db/data";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");


  // input filter.................................
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const filterdItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  // radio filter..................................
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // button filter.................................
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filterData(products, selected, query) {
    let filterProducts = products;
    // filtering input item
    if (query) {
      filterProducts = filterdItems;
    }
    // selected filter
    if (selected) {
      filterProducts = filterProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filterProducts.map(({ img, title, star, reviews, prevPrice , newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ));
  }

  const result = filterData(products,selectedCategory,query)

  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Product result={result}/>
    </>
  );
}

export default App;
