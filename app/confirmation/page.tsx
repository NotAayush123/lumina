"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, Package } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/home/navbar';
import FooterSection from '@/components/home/footerSection';
import EmergencyBar from '@/components/EmergencyBar';
import AccessibilityMenu from '@/components/AccessibilityMenu';

const ConfirmationPage = () => {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('lumina-last-order');
    if (savedOrder) {
      setOrderDetails(JSON.parse(savedOrder));
    } else {
      router.push('/merch');
    }
  }, [router]);

  if (!orderDetails) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <EmergencyBar />
      <AccessibilityMenu />
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-20 mt-16">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Thank You for Supporting Mental Health
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your contribution helps make resources more accessible to those in need.
          </p>
        </motion.div>

        {/* Order Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8"
        >
          <div className="border-b border-gray-200 pb-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Order Confirmation</h2>
              <span className="bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-full text-sm">
                Confirmed
              </span>
            </div>
            <p className="text-gray-600">
              Order ID: <span className="font-mono font-semibold text-gray-900">{orderDetails.orderId}</span>
            </p>
          </div>

          {/* Order Items */}
          <div className="space-y-4 mb-6">
            <h3 className="font-bold text-gray-900 text-lg">Order Items</h3>
            {orderDetails.items.map((item: any) => (
              <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-100">
                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="font-semibold text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900">Total Paid</span>
              <span className="text-3xl font-bold text-gray-900">
                ${(orderDetails.total + 5).toFixed(2)}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Shipping Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8"
        >
          <h3 className="font-bold text-gray-900 text-lg mb-4">Shipping Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Name</p>
              <p className="font-semibold text-gray-900">{orderDetails.customerInfo.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Email</p>
              <p className="font-semibold text-gray-900">{orderDetails.customerInfo.email}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-gray-600 mb-1">Shipping Address</p>
              <p className="font-semibold text-gray-900">
                {orderDetails.shippingInfo.address}<br />
                {orderDetails.shippingInfo.city}, {orderDetails.shippingInfo.state} {orderDetails.shippingInfo.zipCode}<br />
                {orderDetails.shippingInfo.country}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Email Confirmation Sent</h4>
                <p className="text-sm text-gray-600">
                  We've sent a confirmation email to {orderDetails.customerInfo.email} with your order details.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Preparing Your Order</h4>
                <p className="text-sm text-gray-600">
                  Your items will be shipped within 3-5 business days. You'll receive tracking information soon.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center border border-blue-100 mb-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Your Impact Matters
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            A significant portion of your purchase directly supports mental health nonprofits, 
            free resources, and community outreach programs. Thank you for helping us make 
            mental health support more accessible.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => router.push('/')}
            className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors"
          >
            Return to Home
          </button>
          <button
            onClick={() => router.push('/resources')}
            className="px-8 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-lg transition-colors"
          >
            Explore Resources
          </button>
        </motion.div>
      </div>

      <FooterSection />
    </div>
  );
};

export default ConfirmationPage;