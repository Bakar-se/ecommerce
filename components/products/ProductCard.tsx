'use client';

import React from 'react';
import Link from 'next/link';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { getProductName, getProductDescription, getProductImages, isProductInStock, getProductStockCount, getProductUrl } from '@/lib/sanity/utils';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  // Get product data using utility functions
  const productName = getProductName(product);
  const productDescription = getProductDescription(product);
  const productImages = getProductImages(product);
  const inStock = isProductInStock(product);
  const stockCount = getProductStockCount(product);
  const productUrl = getProductUrl(product);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <Link href={productUrl}>
        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
          {/* Image */}
          <div className="aspect-square relative overflow-hidden">
            <img
              src={productImages[0] || '/placeholder-product.jpg'}
              alt={productName}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading={priority ? 'eager' : 'lazy'}
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.isOnSale && (
                <Badge className="sale-badge">
                  -{discountPercentage}%
                </Badge>
              )}
              {!inStock && (
                <Badge variant="secondary" className="bg-muted text-muted-foreground">
                  Out of Stock
                </Badge>
              )}
            </div>

            {/* Heart icon */}
            {/* <Button
              variant="ghost"
              size="sm"
              className="absolute top-3 right-3 w-8 h-8 p-0 bg-white/80 hover:bg-white text-muted-foreground hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-200"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <Heart className="w-4 h-4" />
            </Button> */}

            {/* Quick add to cart */}
            {inStock && (
              <Button
                onClick={handleAddToCart}
                className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-r from-stone-100 to-orange-200 text-gray-800 hover:from-stone-200 hover:to-orange-300"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            )}
          </div>

          {/* Content */}
          <div className="p-3 sm:p-4 flex-1 flex flex-col">
            <div className="mb-2 flex-1">
              <h3 className="font-medium text-sm sm:text-base line-clamp-2 group-hover:text-primary transition-colors">
                {productName}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {product.subCategory?.title || 'No Subcategory'}
              </p>
            </div>

            {/* Rating */}
            {/* <div className="flex items-center space-x-1 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(product.rating || 0)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                ({product.reviewCount})
              </span>
            </div> */}

            {/* Price */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-auto">
              <div className="flex items-center space-x-2">
                <span className="text-sm sm:text-base font-semibold">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-xs sm:text-sm text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              
              {/* Stock indicator */}
              <span className={`text-xs font-medium ${
                stockCount > 10 ? 'text-green-600' :
                stockCount > 0 ? 'text-orange-500' : 'text-red-600'
              }`}>
                {stockCount > 10 ? 'In Stock' :
                 stockCount > 0 ? `Only ${stockCount} left` : 'Out of Stock'}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;