import ProductCards from "@/components/ProductCards";
import product1 from "/public/p1.png";
import product2 from "/public/p2.png";
import product3 from "/public/p3.png";
// import product8 from "/public/p8.png";
// import product5 from "/public/p5.webp";
import product7 from "/public/p7.png";
import { Button } from "@/components/ui/button";

const ProductList = () => {
  return (
    <div>
      <div className="flex justify-evenly mt-16 relative">
        {/* <div className="flex justify-evenly w-full h-full rounded-2xl bg-center bg-cover duration-500"> */}
        <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-x-10">
          <ProductCards image={product1} title="sdsa" price={1000} />
          <ProductCards image={product2} title="sdsa" price={2000} />
          <ProductCards image={product3} title="sdsa" price={3000} />
          <ProductCards image={product7} title="sdsa" price={4000} />
        </div>
      </div>
      <div className="bg-black ml-44  lg:ml-[700px] w-36 text-white flex items-center justify-center mt-10">
        <Button>See All Products</Button>
      </div>
    </div>
  );
};

export default ProductList;
