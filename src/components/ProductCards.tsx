import Image, { StaticImageData } from "next/image";

const ProductCards = (props: {
  title: any;
  price: number;
  image: StaticImageData;
}) => {
  return (
    <div>
      <div>
        <Image src={props.image} alt="product" width={350} height={500} />
        <h3 className="font-bold text-lg mt-3">{props.title}</h3>
        <p className="font-bold text-lg">${props.price}</p>
      </div>
    </div>
  );
};

// export function companiesImages(props: { image: StaticImageData }) {
//   return (
//     <div>
//       <div>
//         <Image src={props.image} alt="product" width={100} height={50} />
//       </div>
//     </div>
//   );
// }

export default ProductCards;
