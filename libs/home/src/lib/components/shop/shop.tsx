import './shop.scss';

/* eslint-disable-next-line */
export interface ShopProps {}

export const Shop: React.FC = (props: ShopProps) => {
  return (
    <div className="shop">
      <h1 className="shop__title">Shop</h1>
    </div>
  );
};

export default Shop;
