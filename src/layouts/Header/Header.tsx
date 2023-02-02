import { HeaderContainer, Location, LocationContainer } from "./Headerstyles"
import { ShoppingCart } from "phosphor-react"
import { useContext } from "react"
import { AddToCartContex } from "../../components/CheckoutContex/ContexCart"
import { Link } from "react-router-dom"


export function Header() {
  const { cartItem, setIsOpen, modalIsOpen, openModal, closeModal } = useContext(AddToCartContex)

  // const quantCart = cartItem.reduce(function(acumulador, quantity) {
  //     return acumulador + quantity.quantity
  // }, 0)

  return (
    <>
      <HeaderContainer>
        <div>
          <strong>MKS</strong>
          <span>Sistemas</span>
        </div>
        <LocationContainer>
          <Link to="" onClick={openModal}>
            <a >
              <ShoppingCart size={20} />
              <strong>{cartItem.length}</strong>
            </a>
          </Link>
          {/* <nav></nav> */}
        </LocationContainer>
      </HeaderContainer>


    </>


  )
}