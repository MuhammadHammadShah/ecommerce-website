import React from "react";
import { FetchData } from "../../../../sanity/FetchData";

export async function generateStaticParams() {
  const data = await FetchData();
  return data.map((item: any) => ({
    product: item.slug.current,
  }));
}

const page = async ({ params }: { params: any }) => {
  const data = await FetchData();
  console.log("data", data);
  // console.log("params", data);
  const filteredData = data.find(
    (item: any) => item.slug.current == params.product
  );
  return (
    <div>
      <div> any product page</div>

      <h1>Title: {filteredData.title}</h1>
      <h1>Description: {filteredData.description}</h1>
      <h1>Price: {filteredData.price}</h1>
      <h1>Category: {filteredData.category}</h1>
    </div>
  );
};

export default page;
