import { Schema, Document, model } from "mongoose";

export interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    count: number;
    cover: string;
}

export const ProductSchema = new Schema<IProduct>({
    name: {
        type: "String",
        required: true,
    },
    description: {
        type: "String",
        default: "",
    },
    price: {
        type: "Number",
        required: true,
    },
    count: {
        type: "Number",
        default: 1,
    },
    cover: {
        type: "String",
        default: "",
    }
});

export default model<IProduct>("Product", ProductSchema);