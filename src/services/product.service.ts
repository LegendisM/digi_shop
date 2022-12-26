import { ObjectId } from "mongoose";
import productModel, { IProduct } from "../models/product.model";
import userModel from "../models/user.model";

class ProductService {

    async create(definition: { name: string, description: string, price: number, count: number }): Promise<IProduct> {
        return await productModel.create(definition);
    }

    async find(filter: { id?: string | ObjectId, name?: string }): Promise<IProduct | null> {
        let user = null;
        if (filter.id) {
            user = await productModel.findById(filter.id);
        } else if (filter.name) {
            user = await productModel.findOne({ name: filter.name });
        }
        return user;
    }

    async findAll(): Promise<IProduct[]> {
        return await userModel.find();
    }
}

export default new ProductService();