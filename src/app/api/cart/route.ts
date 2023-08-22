import { NextRequest, NextResponse } from "next/server";
import { cartColumns, db } from "../../../../Database/Drizzle";

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  try {
    const insertedData = await db
      .insert(cartColumns)
      .values({
        product_id: req.product_id,
        user_id: req.user_id,
        product_title: req.product_title,
        image_url: req.image_url,
        product_price: req.product_price,
        product_quantity: req.product_quantity,
      })
      .returning();

    const insertedItem = insertedData[0]; // Extract the inserted item from the array

    return NextResponse.json({ insertedItem });
  } catch (error) {
    console.log("Error while Posting to DataBase");
    console.log("error", error);
    return NextResponse.json({ error: "Error while inserting data" });
  }
};
