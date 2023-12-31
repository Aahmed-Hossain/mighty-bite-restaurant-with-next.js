// import dbConnect from "@/lib/mongodb";
// import ProductModel from "@/models/products";
// import { NextResponse } from "next/server";
// export async function GET() {
//     await dbConnect();
//     const products = await ProductModel.find();
//     return NextResponse.json(products );
// };

import dbConnect from "@/lib/mongodb";
import ProductModel from "@/models/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const products = await ProductModel.find();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

