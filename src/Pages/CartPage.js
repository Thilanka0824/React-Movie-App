import Cart from "../Components/Cart"

const CartPage = (props) => {
    const { handleAddMovie } = props

    return (
        <div>
            <h1>Cart</h1>
            <Cart/>
        </div>
    )


}

export default CartPage