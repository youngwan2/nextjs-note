import { promises } from "fs"
import path from "path"


export type Product={
    id:string,
    name:string,
    price:number
} 
export async function getProducts(): Promise<Product[]> {
    const dir = path.join(process.cwd(),'data','products.json')
    const data = await promises.readFile(dir,'utf-8')
    
    return JSON.parse(data)
}

// 사용자가 특정 경로로 갔을 때, 그 경로의 슬러그(:id)를 전달해주면, 
// 해당 슬러그(id)의 타입은 문자열이다.
export async function getProduct(id:string):Promise<Product | undefined>{
    const products = await getProducts()
    return  products.find((product)=>{
        return product.id === id
    })
    
}