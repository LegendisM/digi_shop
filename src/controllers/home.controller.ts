import { Request, Response } from "express";
import productService from "../services/product.service";

export const index = async (req: Request, res: Response) => {
    let products = await productService.findAll();
    console.log(products); //! TODO: product list is empty []
    res.render("home", { products });
}