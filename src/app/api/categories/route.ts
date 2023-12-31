
import dbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";
import CategoryModel from './../../../models/categories';

export async function GET() {
    await dbConnect();
    const categories = await CategoryModel.find();
    return NextResponse.json(categories);
};