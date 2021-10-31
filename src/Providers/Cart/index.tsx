import { createContext, ReactNode, useContext, useState } from "react";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

interface CartProps {
    children: ReactNode;
}

interface CartProviderData {
    cart: Product[];
    addProduct: (product: Product) => void;
    deleteProduct: (product: Product) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}

export const CartProvider = ({ children }: CartProps) => {
    const [cart, setCart] = useState<Product[]>([]);
    const addProduct = (productToBeAdded: Product) => {
        if(cart.length > 0){
            cart.filter(product => product.id === productToBeAdded.id).length > 0 ?
            setCart(cart) :
            setCart([...cart, productToBeAdded]);
        } else {
            setCart([...cart, productToBeAdded])
        }
    };
    const deleteProduct = (productToBeDeleted: Product) => {
        const newCart = cart.filter(
            (product) => product.title !== productToBeDeleted.title
        );
        setCart(newCart);
    };

    return (
        <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
            {children}
        </CartContext.Provider>
    );
};