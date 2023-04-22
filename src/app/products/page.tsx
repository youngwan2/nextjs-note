import { getProducts } from "@/service/products";
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import MeowArticle from "@/components/MeowArticle";


// export const revalidate = 3;

export default async function ProductsPage() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그것을 보여줌
  //products.ts 에서 promise 로 받아온 getProducts 함수를 호출 시 await 하여 비동기 처리 수행
  const products = await getProducts();

  return (
    <>
      <h1>상품 리스트</h1>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index} className={styles.products_list}>
              <Link href={"/products/" + product.id}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
      {/* <Image src={clothesImage} alt="clothesImage"></Image> */}

      <Image
        src={"https://images.unsplash.com/photo-1441986300917-64674bd600d8"}
        alt="photo"
        width={300}
        height={300}
      ></Image>
      <article className={styles.cats_container}>
        <h3>고양이의 특징</h3>
        <MeowArticle />
      </article>
    </>
  );
}
