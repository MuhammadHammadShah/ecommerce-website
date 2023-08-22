import { NextRequest, NextResponse } from "next/server";
import { cartColumns, db } from "../../../../Database/Drizzle";

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  try {
    const res = await db
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

    return NextResponse.json({ res });
    console.log("Data posted to DataBase");
  } catch (error) {
    console.log("Error while Posting to DataBase");
    console.log("error", error);
  }
};
