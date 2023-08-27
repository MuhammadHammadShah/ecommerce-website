import Hero from "@/app/views/Hero";
import NewsLetter from "@/app/views/NewsLetter";

import Promotions from "@/app/views/Promotions";
import React from "react";
import ProductList from "./views/ProductionList";

export default function Home() {
  return (
    <div>
      <Hero />
      <Promotions />

      <ProductList />
      <NewsLetter />
    </div>
  );
}
