import { sql } from "@vercel/postgres";
import { pgTable, serial, integer, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const cartColumns = pgTable("cartdata", {
  id: serial("id").primaryKey(),
  product_id: varchar("product_id").notNull(),
  user_id: varchar("user_id").notNull(),
  product_title: varchar("product_title").notNull(),
  image_url: varchar("image_url").notNull(),
  product_price: integer("product_price").notNull(),
  product_quantity: integer("product_quantity").notNull(),
});

export const db = drizzle(sql);
