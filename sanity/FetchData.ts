import { client } from "./lib/client";

export const FetchData = () => {
  const data = client.fetch(`*[_type == "products"]`);
  // console.log(data);
  return data;
};
