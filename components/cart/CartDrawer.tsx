'use client';

import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { getProductName, getProductImages } from '@/lib/sanity/utils';

const CartDrawer = () => {
  const { items, total, itemCount, isOpen, setIsOpen, updateQuantity, removeFromCart } = useCart();

  const drawerVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-background border-l border-border shadow-xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="w-5 h-5" />
                  <h2 className="text-lg font-semibold">Shopping Cart</h2>
                  {itemCount > 0 && (
                    <Badge variant="secondary">{itemCount}</Badge>
                  )}
                </div>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Cart items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingBag className="w-12 h-12 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                    <p className="text-muted-foreground mb-6">
                      Discover our premium surgical instruments
                    </p>
                    <Link href="/products">
                      <Button onClick={() => setIsOpen(false)}>
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <motion.div layout className="space-y-4">
                    <AnimatePresence>
                      {items.map((item) => (
                        <motion.div
                          key={item.product.id || item.product._id}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          layout
                          className="flex space-x-4 bg-muted/20 p-4 rounded-lg"
                        >
                          <Image
                            src={getProductImages(item.product)[0] || '/placeholder-product.jpg'}
                            alt={getProductName(item.product)}
                            width={64}
                            height={64}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-sm leading-tight mb-1">
                              {getProductName(item.product)}
                            </h4>
                            <p className="text-xs text-muted-foreground mb-2">
                              {item.product.brand || 'MedPro'}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="price-display font-semibold text-sm">
                                ${item.product.price.toFixed(2)}
                              </span>
                              <div className="flex items-center space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="w-6 h-6 p-0"
                                  onClick={() => updateQuantity(item.product.id || item.product._id, item.quantity - 1)}
                                >
                                  <Minus className="w-3 h-3" />
                                </Button>
                                <span className="text-sm font-medium w-6 text-center">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="w-6 h-6 p-0"
                                  onClick={() => updateQuantity(item.product.id || item.product._id, item.quantity + 1)}
                                >
                                  <Plus className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-destructive p-1"
                            onClick={() => removeFromCart(item.product.id || item.product._id)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-border space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Total:</span>
                    <span className="text-xl font-bold price-display">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <Link href="/cart" className="block">
                      <Button 
                        className="w-full" 
                        variant="outline"
                        onClick={() => setIsOpen(false)}
                      >
                        View Cart
                      </Button>
                    </Link>
                    <Link href="/checkout" className="block">
                      <Button 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        onClick={() => setIsOpen(false)}
                      >
                        Checkout
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;