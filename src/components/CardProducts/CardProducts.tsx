import { ShoppingCart } from "phosphor-react";
import { CountPrice, InfoProduct, ItemContainer, ListItem, TagContainer } from './CardProduct'
import { GoToCart } from '../ButtonCount/ButtonCount';
import { useContext } from 'react';
import { AddToCartContex } from '../CheckoutContex/ContexCart';

export interface products {
  id: number
  name: string,
  brand: string
  description: string,
  photo: string,
  quantity: number
  price: number
}

interface ProductsProps {
  products: products
}

export function CardProducts({ products }: ProductsProps) {
  const { handleAddToCart } = useContext(AddToCartContex)
  return (
    <ItemContainer>
      <ListItem>
        <div>
          <img src={products.photo} alt="" />
        </div>
        <InfoProduct>
          <h1>{products.name}</h1>
          <TagContainer>
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(products.price as number)}
          </TagContainer>
        </InfoProduct>
        <p>{products.description}</p>
      </ListItem>
      <CountPrice>
        <GoToCart
          onClick={() => handleAddToCart(products.id)}
        >  <ShoppingCart size={20} />
          <span >COMPRAR</span>
        </GoToCart>
      </CountPrice>
    </ItemContainer>
  )
}
