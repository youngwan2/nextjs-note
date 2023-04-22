import { getProduct, getProducts } from "@/service/products";
import styles from "./products.module.css";
import Image from "next/image";
import jeans from '../../../../public/images/images/jeans.jpg'
import tshirt from '../../../../public/images/images/tshirt.jpg'
import shoes from '../../../../public/images/images/shoes.jpg'

type Props = {
  params: {
    slug: string;
  };
};

// 기본값은 false 이다. 숫자를 입력하면 해당 초 단위로 렌더링된다.
export const revalidate = 3

export default async function PantsPage({ params: { slug } }: Props) {
  console.log(slug);
  const product = await getProduct(slug);

  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
    <div>
      <h1 className={styles.products_title}>{product?.name} 상품 리스트</h1>
      <ul>
        <li>
          {" "}
          <strong> 식별:</strong> {product?.id}
        </li>
        <li>
          {" "}
          <strong> 상품명:</strong> {product?.name}
        </li>
        <li>
          {" "}
          <strong> 가격:</strong> {product?.price}원
        </li>
      </ul>
      {product?.id==='1234'?<Image src={jeans} alt="Jeans" width={300} height={300}></Image>:null}
      {product?.id==='1235'?<Image src={tshirt} alt="Tshirt" width={300} height={300}></Image>:null}
      {product?.id==='1236'?<Image src={shoes} alt="Shoes" width={300} height={300}></Image>:null}

    </div>
  );
}

// 특정한 경로에 한 해서는 미리 정적 페이지를 만들어 두고자 할 때 사용(SSG)
// 만일 사용하지 않고, 사용자의 요청마다 새롭게 각 페이지를 만들려면
// 이것을 사용하지 않으면 된다.

// 모든 제품의 페이지들을 미리 만들어 둘 수 있게 한다.
export async function generateStaticParams() {
  // 미리 렌더링하고자 하는 페이지를 적는다.
  const products = await getProducts();
  return products.map((products) => ({ slug: products.id }));
}
