import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  console.log(req);

  try {
    // Placeholder for inserted data
    const insertedData = {
      product_id: req.product_id,
      user_id: req.user_id,
      product_title: req.product_title,
      image_url: req.image_url,
      product_price: req.product_price,
      product_quantity: req.product_quantity,
    };

    // Return the inserted data as the response
    return NextResponse.json(insertedData);
  } catch (error) {
    console.log("Error while Posting to DataBase");
    console.log("error", error);
    return NextResponse.json({ error: "Error while inserting data" });
  }
};
