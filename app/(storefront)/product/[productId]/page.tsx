'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  ArrowLeft, 
  Share2, 
  Truck, 
  Shield, 
  RotateCcw,
  CheckCircle
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useProduct } from '@/lib/sanity/hooks';
import { transformProduct, getProductName, getProductDescription, getProductImages, isProductInStock, getProductStockCount } from '@/lib/sanity/utils';

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Fetch single product by slug from Sanity
  const { data: productData, loading, error } = useProduct(params.productId as string);
  
  // Transform product data
  const product = productData ? transformProduct(productData) : null;

  // Show loading state
  if (loading) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="h-8 w-48 bg-muted animate-pulse rounded mb-4 mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          />
          <motion.div
            className="h-4 w-64 bg-muted animate-pulse rounded mb-6 mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          />
          <motion.div
            className="h-10 w-32 bg-muted animate-pulse rounded mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    );
  }

  // Show error state
  if (error) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Failed to load product
          </motion.h1>
          <motion.p
            className="text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            There was an error loading the product. Please try again later.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  if (!product) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Product Not Found
          </motion.h1>
          <motion.p
            className="text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            The product you're looking for doesn't exist.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/products">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  // Get product data using utility functions
  const productName = getProductName(product);
  const productDescription = getProductDescription(product);
  const productImages = getProductImages(product);
  const inStock = isProductInStock(product);
  const stockCount = getProductStockCount(product);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center space-x-2 text-sm text-muted-foreground mb-8"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="text-muted-foreground/50">/</span>
          <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
          <span className="text-muted-foreground/50">/</span>
          <span className="text-foreground font-medium">{productName}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <motion.div
            className="space-y-6"
            variants={slideInLeft}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Main Image */}
            <motion.div
              className="aspect-square relative overflow-hidden rounded-2xl border-2 border-border/50 bg-card shadow-2xl group"
              variants={imageVariants}
              whileHover={{ scale: 1.01, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <Image
                src={productImages[selectedImage] || '/placeholder-product.jpg'}
                alt={productName}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              
              {/* Badges */}
              <motion.div
                className="absolute top-6 left-6 flex flex-col gap-3 z-20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {product.isOnSale && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg px-3 py-1.5 text-sm font-semibold">
                      -{discountPercentage}% OFF
                    </Badge>
                  </motion.div>
                )}
                {product.isFeatured && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg px-3 py-1.5 text-sm font-semibold">
                      ⭐ Featured
                    </Badge>
                  </motion.div>
                )}
              </motion.div>

              {/* Wishlist Button */}
              <motion.div
                className="absolute top-6 right-6 z-20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleWishlist}
                  className="w-12 h-12 p-0 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full border border-border/50"
                >
                  <Heart className={`w-5 h-5 transition-all ${isWishlisted ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-700'}`} />
                </Button>
              </motion.div>
            </motion.div>

            {/* Thumbnail Images */}
            {productImages.length > 1 && (
              <motion.div
                className="grid grid-cols-4 gap-3"
                variants={itemVariants}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                {productImages.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square relative overflow-hidden rounded-xl border-2 transition-all duration-300 group ${
                      selectedImage === index 
                        ? 'border-primary shadow-lg ring-2 ring-primary/20 scale-105' 
                        : 'border-border/50 hover:border-primary/50'
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                    <Image
                      src={image}
                      alt={`${productName} ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {selectedImage === index && (
                      <motion.div
                        className="absolute inset-0 border-2 border-primary rounded-xl"
                        layoutId="selectedImage"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            className="space-y-8"
            variants={slideInRight}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Header */}
            <motion.div
              className="space-y-4"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.h1
                className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {product.name}
              </motion.h1>
              
              <motion.p
                className="text-muted-foreground text-lg leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {product.description}
              </motion.p>
            </motion.div>

            {/* Price */}
            <motion.div
              className="flex flex-col sm:flex-row sm:items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 shadow-lg"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="flex items-baseline gap-4">
                <motion.span
                  className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.4, type: 'spring', stiffness: 200 }}
                >
                  ${product.price.toFixed(2)}
                </motion.span>
                {product.originalPrice && (
                  <motion.span
                    className="text-xl text-muted-foreground line-through"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  >
                    ${product.originalPrice.toFixed(2)}
                  </motion.span>
                )}
              </div>
              {product.originalPrice && (
                <motion.div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-semibold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.65, duration: 0.4 }}
                >
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </motion.div>
              )}
            </motion.div>

            {/* Stock Status */}
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              {inStock ? (
                <motion.div
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium ${
                    stockCount > 10 
                      ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20' 
                      : 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20'
                  }`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.3, type: 'spring' }}
                >
                  <CheckCircle className={`w-5 h-5 ${
                    stockCount > 10 ? 'text-green-600 dark:text-green-400' :
                    stockCount > 0 ? 'text-orange-500 dark:text-orange-400' : 'text-red-600'
                  }`} />
                  <span>
                    {stockCount > 10 
                      ? '✓ In Stock - Ready to Ship' 
                      : `⚠ Only ${stockCount} left - Order soon!`
                    }
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  <span>Out of Stock</span>
                </motion.div>
              )}
            </motion.div>

            {/* Quantity and Add to Cart */}
            <motion.div
              className="space-y-6 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div
                className="flex items-center justify-between"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <label className="text-sm font-semibold text-foreground">Quantity:</label>
                <div className="flex items-center border-2 border-border rounded-xl overflow-hidden bg-background">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 p-0 hover:bg-muted rounded-none"
                    disabled={quantity <= 1}
                  >
                    <span className="text-lg font-semibold">−</span>
                  </Button>
                  <span className="px-6 py-2 min-w-[4rem] text-center font-bold text-lg bg-muted/50">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.min(stockCount, quantity + 1))}
                    className="h-10 w-10 p-0 hover:bg-muted rounded-none"
                    disabled={quantity >= stockCount}
                  >
                    <span className="text-lg font-semibold">+</span>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <Button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    size="lg"
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              {[
                { icon: Truck, text: 'Free Shipping', desc: 'On orders over $50' },
                { icon: Shield, text: '2 Year Warranty', desc: 'Full coverage' },
                { icon: RotateCcw, text: 'Easy Returns', desc: '30-day guarantee' },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{feature.text}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{feature.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Product Details Section */}
        <motion.div
          className="mt-16 lg:mt-20"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="bg-gradient-to-br from-card via-card to-card/50 border-2 border-border/50 rounded-3xl p-8 lg:p-12 shadow-2xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.4 }}
            >
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
              <motion.h3
                className="text-2xl lg:text-3xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.35, duration: 0.4 }}
              >
                Product Description
              </motion.h3>
            </motion.div>
            <motion.p
              className="text-muted-foreground leading-relaxed text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              {productDescription}
            </motion.p>
            <motion.div
              className="mt-8 pt-8 border-t border-border/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.4 }}
            >
              <h4 className="font-bold text-xl mb-4">Key Features:</h4>
              {product.tags && product.tags.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {product.tags.slice(0, 6).map((tag, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 p-3 rounded-lg bg-muted/30 border border-border/50"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.6 + index * 0.1, duration: 0.3 }}
                    >
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm capitalize">{tag.replace('-', ' ')}</span>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground italic">No additional features listed.</p>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
