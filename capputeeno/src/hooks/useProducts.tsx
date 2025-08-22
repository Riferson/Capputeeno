import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { Axios, AxiosPromise } from "axios";

const api_url = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(api_url,
        {
            query:`
            query {
	            allProducts{
                    id,
                    name,
                    price_in_cents,
                    image_url,
                }
            }`
        }
        
    );
}

export function useProducts() {
    const {data} = useQuery({
        queryFn: fetcher,
        queryKey: ['products']
    })

    return {
        data: data?.data?.data?.allProducts
    }
}