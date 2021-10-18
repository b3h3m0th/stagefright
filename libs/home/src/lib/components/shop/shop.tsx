import './shop.scss';

/* eslint-disable-next-line */
export interface ShopProps {}

export const Shop: React.FC = (props: ShopProps) => {
  return (
    <div className="shop">
      <h2 className="shop__title">Shop</h2>
    </div>
  );
};

export default Shop;
