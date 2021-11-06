/*eslint-disable-next-line */
import { HomeSection } from '@stagefright/router';
import './shop.scss';

import merch from './assets/products/merch/merch.jpg';
import music from './assets/products/music/music.jpg';
import { shopData } from '@stagefright/shared/config';
/*eslint-disable-next-line */
import { Button } from '@stagefright/shared/components';

/* eslint-disable-next-line */
export interface ShopProps {}

export const Shop: React.FC = (props: ShopProps) => {
  return (
    <div className="shop" id={HomeSection.shop}>
      <h2 className="shop__title">Shop</h2>
      <div className="shop__content">
        <a className="shop__content__merch" href={shopData.url}>
          <img src={merch} alt="StageFright Merch" />
          <div className="shop__content__merch__overlay">
            <h3>Merch</h3>
          </div>
        </a>
        <a className="shop__content__music" href={shopData.url}>
          <img src={music} alt="StageFright Music" />
          <div className="shop__content__merch__overlay">
            <h3>Music</h3>
          </div>
        </a>
      </div>
      <div className="shop__shop">
        <Button
          text="Visit StageFright Shop"
          link={shopData.url}
          linkTarget="_blank"
        />
      </div>
    </div>
  );
};

export default Shop;
