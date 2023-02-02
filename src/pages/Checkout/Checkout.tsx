import React, { useMemo } from "react";
import { Minus, Plus, Trash } from "phosphor-react";
import { SelectedCoffeeContainer } from "./CheckoutStyles";
import { PriceContainer } from "../../components/CardProducts/CardProduct";
import { useForm } from "react-hook-form";
import { AddOrRemoveContainter, AddToCartChekout, RemoveToCartChekout, SelectedCoffeContainer, SelectedCoffee, TotalConfirmed } from "../../components/CardProductAddCart/CardProductAddCartStyles";
import { useContext, useState } from "react";
import { AddToCartContex } from "../../components/CheckoutContex/ContexCart";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalBody,
  ModalHeader
} from "reactstrap";



export function Checkout() {
  const { cartItem, setDataPurchase, datapurchase, handleDecrementToCart, handleIncrementToCart, handleDeleteToCart, modalIsOpen, setIsOpen, openModal, closeModal, quantity } = useContext(AddToCartContex)
  const { register, handleSubmit, reset, setValue, setFocus } = useForm()
  const [taxaentrega, setTaxaEntrega] = useState(3)

  const totalCart = cartItem.reduce(function (acc, valAtual): any {
    return acc + valAtual.price
  }, 0)

  const cartTotal = useMemo(() => {
    const { total } = cartItem.reduce(
      (accumulator, product) => {
        accumulator.total += product.quantity * product.price;
        return accumulator;
      },
      { total: 0 }
    );
    return total;
  }, [cartItem]);


  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      toggle={closeModal}
      size="xl"
      fullscreen="xl"
      style={{ marginTop: "0", float: "right" }}
    >
      <ModalHeader toggle={closeModal}>Carrinho de Compras</ModalHeader>
      <ModalBody style={{ margin: "0", background: "#0F52BA", width: "42rem" }}>
        <div>
          {/* <CheckoutContainar> */}
          <SelectedCoffeeContainer>
            {cartItem.map(itens => {
              if (itens.id >= 0)
                return (
                  <>
                    <SelectedCoffeContainer>
                      <img src={itens.photo} alt="" />
                      <span>{itens.name}</span>
                      <div>
                        <AddOrRemoveContainter>
                          <AddToCartChekout>
                            <div>
                              <button onClick={() => handleDecrementToCart(itens.id)}>
                                <Minus size={14} />
                              </button>
                              {itens.quantity}
                              <button onClick={() => handleIncrementToCart(itens.id)}>
                                <Plus size={14} />
                              </button>
                            </div>
                          </AddToCartChekout>
                          <RemoveToCartChekout onClick={() => handleDeleteToCart(itens.id)}  >
                            <Trash size={25} color="white" />
                          </RemoveToCartChekout>
                        </AddOrRemoveContainter>
                      </div>
                      <p><PriceContainer> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(itens.price as any)}</PriceContainer></p>
                    </SelectedCoffeContainer>
                    <div>
                    </div>
                  </>
                )
            })}
          </SelectedCoffeeContainer>
        </div>
        <TotalConfirmed>
          <div>
            <strong style={{ color: 'white' }}>Total</strong>
            <span><strong style={{ color: 'white' }}> {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartTotal as any)}</strong></span>
          </div>
          <button  >
            <Link to="/Sucess">
              Confirmar Pedido
            </Link>
          </button>
        </TotalConfirmed>
      </ModalBody>
    </ Modal >
  )
}