import { ListProductsContainer, MeunProducts } from "./Homestyles";
import { useContext } from "react";
import { AddToCartContex } from "../../components/CheckoutContex/ContexCart";
import { Checkout } from "../Checkout/Checkout";
import { MyLoader } from "../../components/Skeleton/Skeleton";
import { CardProducts } from '../../components/CardProducts/CardProducts'

export function Home() {
  const { products, loading } = useContext(AddToCartContex)
  return (
    <div>
      <MeunProducts>
        <ListProductsContainer>
          <>
            <span>
              {loading && <MyLoader />}
              {loading && <MyLoader />}
              {loading && <MyLoader />}
              {loading && <MyLoader />}
            </span>
            <span>
              {loading && <MyLoader />}
              {loading && <MyLoader />}
              {loading && <MyLoader />}
              {loading && <MyLoader />}
            </span>
            <span>
              {loading && <MyLoader />}
              {loading && <MyLoader />}
              {loading && <MyLoader />}
              {loading && <MyLoader />}
            </span>
            {products.map((products) => (
              <CardProducts
                key={products.id} products={products}
              />
            ))}
          </>
        </ListProductsContainer>
      </MeunProducts>
      <Checkout />
    </div>
  )
}