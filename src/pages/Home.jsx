import React, { useState } from "react";
import { AllCategory, Carousel, Loader, NotFound } from "../components/index";
import { useSelector } from "react-redux";

const value = Math.floor(Math.random() * 20);

const Home = () => {
  const { loading, products } = useSelector((state) => state.products);
  const { category } = useSelector((state) => state.category);
  const [state] = useState(value);

  if (loading) {
    return <Loader />;
  }

  return products?.length > 0 ? (
    <main className="flex flex-col gap-4 p-4">
      <section>
        <Carousel array={products} category={category[state]} />
      </section>

      <section>
        <AllCategory products={products} />
      </section>
    </main>
  ) : (
    <NotFound />
  );
};

export default Home;
