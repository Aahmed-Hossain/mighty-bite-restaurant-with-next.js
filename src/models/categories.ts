
import mongoose from 'mongoose'
export interface Categories extends mongoose.Document {
    slug: string;
    title: string;
    desc: string;
    img: string;
    color: string;
}
const CategorySchema = new mongoose.Schema<Categories>({
    slug: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    color: { type: String, required: true },
});

export default  mongoose.models.Category || mongoose.model<Categories>('Category', CategorySchema)
