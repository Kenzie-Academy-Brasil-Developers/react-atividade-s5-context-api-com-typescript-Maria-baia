import  products  from "../ProductsList";
import { useCart } from "../../Providers/Cart";

const ShowProducts = () => {
    const { addProduct } = useCart();

    return(
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image}/>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <span>R&#x00024;{product.price}</span>
                    <button onClick={() => addProduct(product)} >ADICIONAR AO CARRINHO</button>
                </li>
            ))}
        </ul>
    )
}

export default ShowProducts;