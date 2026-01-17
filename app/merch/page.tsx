"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, BookOpen, Share2, ExternalLink, ShoppingCart, Check } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/home/navbar';
import FooterSection from '@/components/home/footerSection';
import EmergencyBar from '@/components/EmergencyBar';
import AccessibilityMenu from '@/components/AccessibilityMenu';
import BackButton from '@/components/BackButton';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';

const products = [
  {
    id: 1,
    name: 'Support Sweatshirt',
    description: 'Designed to spark conversation and fund mental health access.',
    image: '/assets/sweater.png',
    price: 45,
  },
  {
    id: 2,
    name: 'Awareness Shirt',
    description: 'Wear your support and help break the stigma around mental health.',
    image: '/assets/shirt.png',
    price: 25,
  },
  {
    id: 3,
    name: 'Support Pen',
    description: 'A daily reminder that mental health support is always within reach.',
    image: '/assets/pen.png',
    price: 8,
  },
];

const MerchPage = () => {
  const { addToCart, cartCount } = useCart();
  const router = useRouter();
  const [addedItems, setAddedItems] = useState<{ [key: number]: boolean }>({});

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
    setAddedItems({ ...addedItems, [product.id]: true });
    setTimeout(() => {
      setAddedItems({ ...addedItems, [product.id]: false });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <EmergencyBar />
      <AccessibilityMenu />
      <Navbar />

      {/* Floating Cart Button */}
      {cartCount > 0 && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => router.push('/cart')}
          className="fixed top-24 right-6 z-50 bg-gray-900 text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {cartCount}
          </span>
        </motion.button>
      )}

      {/* Top Hero Section - Short & Serious */}
      <section className="bg-gray-100 py-20 sm:py-24 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <BackButton href="/" label="Back to Home" className="mb-10 inline-flex" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Support Mental Health Beyond the Screen
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Every purchase helps fund mental health education, resources, and access for those who need it most.
          </motion.p>
        </div>
      </section>

      {/* Impact Transparency Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 text-center mb-16"
          >
            Where Your Support Goes
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Heart className="w-16 h-16 text-gray-400 stroke-1" />
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-3">70%</div>
              <p className="text-gray-600">Mental health nonprofits & programs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-gray-400 stroke-1" />
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-3">20%</div>
              <p className="text-gray-600">Platform maintenance & free resources</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-16 h-16 text-gray-400 stroke-1" />
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-3">10%</div>
              <p className="text-gray-600">Community outreach initiatives</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Soft Divider / Transition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="w-24 h-px bg-gray-300 mx-auto mb-8"></div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-700 font-medium italic"
          >
            "Small actions can create real change."
          </motion.p>
          <div className="w-24 h-px bg-gray-300 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Product Section - Very Clean */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all"
              >
                {/* Product Image Placeholder */}
                <div className="bg-gray-100 rounded-lg mb-6 aspect-square flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>

                {/* Product Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Subtle Button */}
                <button 
                  onClick={() => handleAddToCart(product)}
                  disabled={addedItems[product.id]}
                  className="w-full py-3 px-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all disabled:bg-green-600 flex items-center justify-center gap-2"
                >
                  {addedItems[product.id] ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added to Cart
                    </>
                  ) : (
                    'Support the Mission'
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Framing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-xl text-gray-800 leading-relaxed">
              This page is optional.
            </p>
            <p className="text-xl text-gray-800 leading-relaxed">
              Support should never feel required.
            </p>
            <p className="text-xl text-gray-800 leading-relaxed">
              If you can't contribute, you are still welcome here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Optional Final CTA - Very Soft */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Want to support mental health in other ways?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://twitter.com/intent/tweet?text=Check%20out%20Lumina%20-%20accessible%20mental%20health%20support"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-colors"
              >
                <Share2 className="w-5 h-5" />
                Share Our Mission
              </a>
              <a
                href="/resources"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Explore Free Resources
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default MerchPage;