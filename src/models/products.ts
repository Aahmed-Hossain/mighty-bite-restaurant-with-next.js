import mongoose, { Document, Schema } from 'mongoose';

interface Option {
  title: string;
  additionalPrice: number;
}

interface Product extends Document {

  category: string;
  title: string;
  desc: string;
  img: string;
  price: number;
  options: Option[];
}

const optionSchema = new Schema<Option>({
  title: { type: String, required: true },
  additionalPrice: { type: Number, required: true },
});

const productSchema = new Schema<Product>({
  category: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  options: { type: [optionSchema], required: true },
});

const ProductModel = mongoose.model<Product>('Product', productSchema);
export default ProductModel;


