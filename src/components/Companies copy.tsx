import Image from "next/image";

import f1 from "/public/Featured1.webp";
import f2 from "/public/Featured2.webp";
import f3 from "/public/Featured3.webp";
import f4 from "/public/Featured4.webp";
export default function companies() {
  return (
    <div>
      <div className="flex justify-evenly mt-16 ">
        <Image src={f1} alt="featured" width={100} height={50} />
        <Image src={f2} alt="featured" width={100} height={50} />
        <Image src={f3} alt="featured" width={100} height={50} />
        <Image src={f4} alt="featured" width={100} height={50} />
      </div>
    </div>
  );
}
