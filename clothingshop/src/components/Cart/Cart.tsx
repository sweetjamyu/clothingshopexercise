import { ProductsWrapper, Title } from './Cart.styled';
import useShop from "../../ShopContext";
import {ProductCard} from "../ProductCard";
import { Key } from 'react';
import { Product } from '../../models';


export const Cart = () => {
  const { products, total } = useShop();

  return (
    <>
      <Title>Your cart total is {total}.00$</Title>
      <ProductsWrapper>
        {products.map((product, index) => (
          <ProductCard {...product as Product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};
export default Cart;