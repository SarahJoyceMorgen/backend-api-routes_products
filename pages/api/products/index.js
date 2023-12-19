import { getAllProducts } from "@/services/productServices";
import useSWR from 'swr';

export default function handler(request, response) {
    const products = getAllProducts();
    res.status(200).json(products);
}

const fetcher = async (url) => {
    const res = await fetch(url);
    return res.json();
  };


  export default function ProductDetail() {
    const router = useRouter();
    const { id } = router.query;

    const { data, error} =useSWR(`/api/products/${id}`, fetcher)

    if (error) return <div>Oops...Error!</div>
    if (!data) return <div>Loading...</div>

    return(
        <div>
            <p>Product Details</p>
            <p>Name: {data.name}</p>
            <p>Price: {data.price}</p>
        </div>
    )

}