import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { PROVINCES_AVAILABLE } from '../../utils';
import './index.scss';

export const ProductCarousel = ({ products, province }) => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const isPurchasable = PROVINCES_AVAILABLE.includes(province);

  const getProductLink = () => {
    switch (province) {
      case 'SK':
        return selectedProduct.key === 'creek-congo'
          ? 'https://fireandflower.com/product/organic-creek-congo-simply-bare-dried-flower-1821771'
          : 'https://fireandflower.com/product/organic-blue-dream-simply-bare-dried-flower-1821758';
      case 'BC':
        return selectedProduct.key === 'creek-congo'
          ? 'https://www.bccannabisstores.com/collections/simplybare/products/creek-congo-simplybare'
          : 'https://www.bccannabisstores.com/collections/simplybare/products/blue-dream-simplybare';
      default:
        return '#learn-more';
    }
  };

  return (
    <div className="product-carousel">
      <div className="product-carousel__button-container flex">
        {products.map(product => (
          <button
            type="button"
            onClick={() => setSelectedProduct(product)}
            key={product.key}
            className={`product-carousel__button outline-none focus:outline-none ${
              product.key === selectedProduct.key
                ? 'product-carousel__button--active bg-primary text-white'
                : 'bg-light text-primary'
            } border uppercase border-primary flex-1`}
          >
            {product.title}
          </button>
        ))}
      </div>
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="flex-1">
          <div className="product-carousel__subtitle hidden sm:block">
            {selectedProduct.subtitle}
          </div>
          <div className="product-carousel__title text-primary font-bold hidden sm:block">
            {selectedProduct.title}
          </div>
          <div className="product-carousel__stats-box flex border border-primary mt-5 sm:mt-3 mb-5 py-4">
            <div className="flex-1 text-center">
              <div className="text-primary font-body">THC*:</div>
              <div>{selectedProduct.thc}</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-primary font-body">CBD*:</div>
              <div>{selectedProduct.cbd}</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-primary font-body">TERPENES*:</div>
              <div>{selectedProduct.terpenes}</div>
            </div>
          </div>
          <p className="uppercase text-primary font-body font-semibold mb-2">Terpene Profile:</p>
          <p className="text-lg mb-5">{selectedProduct.profile}</p>
          <p>{selectedProduct.description}</p>
          <p className="mt-5">
            <sup>*</sup>
            {selectedProduct.footnote}
          </p>
          <a
            className="bg-brown hover:bg-primary hover:text-white font-body text-light p-4 w-full sm:w-64 text-center my-6 inline-block"
            href={getProductLink()}
          >
            {isPurchasable ? 'Buy Now' : 'Coming Soon'}
          </a>
        </div>
        <div className="flex-1">
          <ImageGallery
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
            showBullets
            lazyLoad
            items={selectedProduct.images.map(({ image, alt }) => ({
              original: image.childImageSharp.fluid.src,
              originalAlt: alt,
            }))}
          />
        </div>
        <div className="product-carousel__title text-primary font-bold block sm:hidden">
          {selectedProduct.title}
        </div>
        <div className="product-carousel__subtitle block sm:hidden">{selectedProduct.subtitle}</div>
      </div>
    </div>
  );
};
