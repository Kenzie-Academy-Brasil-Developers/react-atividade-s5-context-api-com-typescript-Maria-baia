import { useCart } from "../../Providers/Cart";

const ShowCart = () => {
    const { cart, deleteProduct } = useCart();

    return (
        <>
            {cart.length > 0 ?
                <ul>
                {cart.map((product, index) => (
                    <li key={index}>
                        <img alt={product.title} src={product.image}/>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <span> R&#x00024;{product.price}</span>
                        <button onClick={() => deleteProduct(product)}>REMOVER DO CARRINHO</button>
                    </li>
                ))}
                </ul>
                :
                <span className="add">Adicione itens ao carrinho!</span>
            }
        </>
    )
}

export default ShowCart;