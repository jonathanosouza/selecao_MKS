import { Minus, Plus, Trash } from "phosphor-react";
import { PriceContainer } from "../CardProducts/CardProduct";
import { AddOrRemoveContainter, AddToCartChekout, RemoveToCartChekout, SelectedCoffeContainer, SelectedCoffee, TotalConfirmed } from "./CardProductAddCartStyles";
import imgcoffe from './../../assets/Coffee.png';
import { useContext, useEffect } from "react";
import { AddToCartContex, CartProvider } from "../CheckoutContex/ContexCart";
import { LineDiv } from "../../pages/Checkout/CheckoutStyles";

export function CardCoffeeAddCart() {

  const { cartItem, handleIncrementToCart, handleDeleteToCart } = useContext(AddToCartContex)


  return (
    <SelectedCoffee>
      {cartItem.map(itens => {

        return (
          <>
            <SelectedCoffeContainer>
              <img src={itens.photo} alt="" />
              <div>
                <span>{itens.name}</span>
                <AddOrRemoveContainter>
                  <AddToCartChekout>
                    <div>
                      <button onClick={() => handleIncrementToCart(itens.id)} >
                        <Minus size={14} />
                      </button>
                      {itens.quantity}
                      <button onClick={() => handleIncrementToCart(itens.id)}>
                        <Plus size={14} />
                      </button>
                    </div>
                  </AddToCartChekout>
                  <RemoveToCartChekout onClick={() => handleDeleteToCart(itens.id)} >
                    <span><Trash size={18} />Remover</span>
                  </RemoveToCartChekout>
                </AddOrRemoveContainter>
              </div>
              <p>R$ <PriceContainer>{itens.price}</PriceContainer></p>
            </SelectedCoffeContainer>
            <div>
            </div>

          </>
        )
      })}

      <TotalConfirmed>
        <div>
          <h3>Total de itens</h3>
          <span>R$ 29,90</span>
        </div>

        <div>
          <h3>Entrega</h3>
          <span>R$ 3,00</span>
        </div>

        <div>
          <strong>Total</strong>
          <span><strong>R$ 29,90</strong></span>
        </div>

        <button> Confirmar Pedido</button>
      </TotalConfirmed>

    </SelectedCoffee>

  )
}
