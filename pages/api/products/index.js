import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
    const products = getAllProducts();
    res.status(200).json(products);
}