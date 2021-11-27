/*eslint-disable-next-line */
import { HomeSection } from '@stagefright/router';
import './shop.scss';

import {
  animationData,
  IProduct,
  loading,
  shopData,
  socials,
} from '@stagefright/shared/config';
/*eslint-disable-next-line */
import { Button, SectionTitle } from '@stagefright/shared/components';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, Power4 } from 'gsap/all';
import { useMousePosition } from '@stagefright/shared/util';
gsap.registerPlugin(ScrollTrigger);

/* eslint-disable-next-line */
export interface ShopProps {}

export const Shop: React.FC = (props: ShopProps) => {
  const shopProducts = useRef<HTMLUListElement>(null);
  const shopButton = useRef<HTMLDivElement>(null);
  const imageFollowRef = useRef<HTMLDivElement>(null);
  const imageFollowImageRef = useRef<HTMLImageElement>(null);
  const imageFollowBlenderRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();

  const updateFollowImage: (source: string) => void = (source: string) => {
    imageFollowImageRef.current && (imageFollowImageRef.current.src = source);
  };

  useEffect(() => {
    const onProductsOver: (e: MouseEvent) => gsap.core.Tween = (
      e: MouseEvent
    ) =>
      gsap.to(imageFollowRef.current, {
        autoAlpha: 1,
        scale: 1,
        duration: animationData.shop.duration / 1000 / 4,
      });

    const onProductsLeave: (e: MouseEvent) => gsap.core.Tween = (
      e: MouseEvent
    ) =>
      gsap.to(imageFollowRef.current, {
        autoAlpha: 0,
        scale: 0.5,
        duration: animationData.shop.duration / 1000 / 4,
      });

    gsap.to(imageFollowRef.current, {
      css: {
        left: mousePosition.x,
        top: mousePosition.y,
      },
    });

    shopProducts.current?.addEventListener('mouseover', onProductsOver);
    shopProducts.current?.addEventListener('mouseleave', onProductsLeave);

    return () => {
      shopProducts.current?.removeEventListener('mouseover', onProductsOver);
      shopProducts.current?.removeEventListener('mouseleave', onProductsLeave);
    };
  });

  return (
    <div className="shop" id={HomeSection.shop}>
      <div className="shop__content">
        <SectionTitle text="StageFright Shop" />
        <ul className="shop__content__products" ref={shopProducts}>
          <div
            className="shop__content__products__image-follow"
            ref={imageFollowRef}
          >
            <div
              className="shop__content__products__image-follow__blender"
              ref={imageFollowBlenderRef}
            ></div>
            <img
              alt="StageFright merch shirt"
              className="shop__content__products__image-follow__image"
              ref={imageFollowImageRef}
              src={shopData.products.shirt[0].image}
            />
          </div>
          {Object.values(shopData.products).map((e, _: number) => {
            return e.map((p: IProduct, __: number) => {
              return (
                <a
                  href={shopData.url}
                  target="_blank"
                  rel="noreferrer"
                  key={`product-${_}-${__}`}
                >
                  <li
                    className="shop__content__products__product"
                    data-follow-image={p.image}
                    onMouseEnter={(
                      event: React.MouseEvent<HTMLLIElement, MouseEvent>
                    ) =>
                      updateFollowImage(
                        event.currentTarget.getAttribute('data-follow-image') ??
                          ''
                      )
                    }
                  >
                    <div className="shop__content__products__product__text">
                      {p.name}
                    </div>
                    <span className="shop__content__products__product__info">
                      {p.status}
                    </span>
                  </li>
                </a>
              );
            });
          })}
        </ul>
        <div className="shop__shop" ref={shopButton}>
          <Button
            text="Visit StageFright Shop"
            link={shopData.url}
            linkTarget="_blank"
            icon={faShoppingCart}
            linkClassName="shop__shop__button-link"
          />
        </div>
      </div>
      <div className="shop__links">
        <h2>More of us</h2>
        <a href={socials.instagram.link} target="_blank" rel="noreferrer">
          {socials.instagram.text}
        </a>
        <a href={socials.facebook.link} target="_blank" rel="noreferrer">
          {socials.facebook.text}
        </a>
        <a href={shopData.url} target="_blank" rel="noreferrer">
          StageFright Shop
        </a>
      </div>
    </div>
  );
};

export default Shop;
