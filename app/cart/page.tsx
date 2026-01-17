"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/home/navbar';
import FooterSection from '@/components/home/footerSection';
import EmergencyBar from '@/components/EmergencyBar';
import AccessibilityMenu from '@/components/AccessibilityMenu';
import BackButton from '@/components/BackButton';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const router = useRouter();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <EmergencyBar />
        <AccessibilityMenu />
        <Navbar />
        
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 mt-16 md:mt-20">
          <BackButton href="/merch" label="Back to Merch" className="mb-8" />
          
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
            <ShoppingBag className="w-20 h-20 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Support Cart is Empty
            </h2>
            <p className="text-gray-600 mb-8">
              Browse our mission-driven products to support mental health.
            </p>
            <button
              onClick={() => router.push('/merch')}
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Browse Products
            </button>
          </div>
        </div>
        
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <EmergencyBar />
      <AccessibilityMenu />
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 mt-16 md:mt-20">
        <BackButton href="/merch" label="Back to Merch" className="mb-6 sm:mb-8" />
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2"
        >
          Your Support Cart
        </motion.h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-10">
          A portion of your contribution supports mental health initiatives.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200"
              >
                <div className="flex gap-3 sm:gap-6 flex-col sm:flex-row">
                  {/* Product Image */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl sm:text-3xl">👕</span>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2 sm:mb-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.name}</h3>
                        <p className="text-gray-600 text-xs sm:text-sm mt-1">{item.description}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors p-1 flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 sm:mt-4 gap-3">
                      {/* Quantity Selector */}
                      <div className="flex items-center gap-2 sm:gap-3 bg-gray-100 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 sm:p-2 hover:bg-gray-200 rounded-lg transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-semibold text-gray-900 w-6 sm:w-8 text-center text-sm sm:text-base">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 sm:p-2 hover:bg-gray-200 rounded-lg transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right sm:text-left">
                        <p className="text-xl sm:text-2xl font-bold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-xs sm:text-sm text-gray-500">
                            ${item.price.toFixed(2)} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 sticky top-24"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Order Summary
              </h2>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex justify-between text-sm sm:text-base text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-xs sm:text-sm">Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-3 sm:pt-4 mb-4 sm:mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-base sm:text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => router.push('/checkout')}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all hover:shadow-lg text-sm sm:text-base"
              >
                Continue to Checkout
              </button>

              <p className="text-xs sm:text-sm text-gray-500 text-center mt-3 sm:mt-4">
                A portion of your contribution supports mental health initiatives
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default CartPage;