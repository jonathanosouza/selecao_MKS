import { createContext, ReactNode, useEffect, useState, useMemo } from "react";
import { api } from "../../service/api";

export interface products {
  id: number
  name: string,
  brand: string
  description: string,
  photo: string,
  quantity: number,
  price: string
}

export interface purchase {
  cep: string
  addressroad: string
  addressnumber: string
  addresscomplement: string
  addressdistrict: string
  addressstate: string
  cartitem: []
  payment: string
}

export interface cartItem extends products {
  quantity: number
}

interface ProductsProps {
  products: products[]
  cartItem: cartItem[]
  datapurchase: purchase[]
  quantity: number
  setDataPurchase: any
  setIsOpen: any
  modalIsOpen: boolean
  handleAddToCart: (id: number) => void
  handleDecrementToCart: (id: number) => void
  handleIncrementToCart: (id: number) => void
  handleDeleteToCart: (id: number) => void
  openModal: () => void
  closeModal: () => void
  loading: boolean
}

interface ProductsPropsProviderProps {
  children: ReactNode
}

export const AddToCartContex = createContext({} as ProductsProps);
export const CartProvider = ({ children }: ProductsPropsProviderProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cartItem, setCartItem] = useState<cartItem[]>([])
  const [products, setProducts] = useState<products[]>([])
  const [datapurchase, setDataPurchase] = useState<purchase[]>([])
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)


  async function loadCoffesPage() {
    const response = await api.get('/products?page=1&rows=10&sortBy=name&orderBy=ASC')
    setProducts(response.data.products)
    console.log(products)
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      loadCoffesPage()
    }, 2000);
  }, [])

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleAddToCart(id: number) {
    const productExist = products.find(product => product.id === id)
    const productExistInCart = cartItem.find(product => product.id === id)
    if (productExist?.id === id && !productExistInCart) {
      productExist.quantity = 1
      setCartItem([...cartItem, productExist])
    }
    console.log(cartItem)
  }

  function handleDecrementToCart(id: number) {
    const allCartproducts = [...cartItem]
    const produtoExistToCart = cartItem.find(item => item.id == id)
    console.log(produtoExistToCart?.id)

    if (produtoExistToCart) {
      produtoExistToCart.quantity -= 1
      if (produtoExistToCart.quantity <= 0) {
        const cartFiltered = allCartproducts.filter(item => item.id !== id)
        setCartItem(cartFiltered)
      } else {
        setCartItem(allCartproducts)
      }
    }
  }

  function handleIncrementToCart(id: number) {
    const allCartproducts = [...cartItem]
    const produtoExistToCart = cartItem.find(item => item.id == id)
    console.log(produtoExistToCart?.id)

    if (produtoExistToCart) {
      produtoExistToCart.quantity += 1
      setCartItem(allCartproducts)
    }
  }

  function handleDeleteToCart(id: number) {
    const allCartproducts = [...cartItem]
    const productsFilteredItem = allCartproducts.filter(item => item.id == id)
    console.log(productsFilteredItem)
    if (productsFilteredItem) {
      const cartFiltered = allCartproducts.filter(item => item.id !== id)
      setCartItem(cartFiltered)
    }
  }

  return (
    <AddToCartContex.Provider
      value=
      {{
        products,
        cartItem,
        modalIsOpen,
        setIsOpen,
        openModal,
        closeModal,
        handleAddToCart,
        handleDecrementToCart,
        handleDeleteToCart,
        handleIncrementToCart,
        datapurchase,
        setDataPurchase,
        quantity,
        loading
      }}>{children}
    </AddToCartContex.Provider>
  );

}