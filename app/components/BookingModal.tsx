// booking modal component
"use client";

import React, { useState } from 'react';
import { X, Mail, Clock, User, MessageCircle, Shield, CheckCircle, Award, MapPin, DollarSign, Star } from 'lucide-react';

const BookingModal = ({ therapist, isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 1: Basic info, 2: Email verification, 3: Message
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    verificationCode: '',
    message: '',
    urgency: 'moderate',
    previousTherapy: 'no'
  });
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendVerificationCode = async () => {
    if (!formData.email) {
      alert('Please enter your email address first');
      return;
    }

    setIsLoading(true);
    // simulate api call for verification code
    setTimeout(() => {
      setVerificationSent(true);
      setIsLoading(false);
      alert(`Verification code sent to ${formData.email} (In a real app, this would be sent via email)`);
    }, 1500);
  };

  const verifyCode = () => {
    if (formData.verificationCode === '123456') { // demo code
      setIsVerified(true);
      setStep(3);
    } else {
      alert('Invalid verification code. Please try again. (Demo code: 123456)');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // simulate api call
    setTimeout(() => {
      setIsLoading(false);
      alert('Booking request submitted successfully! The therapist will contact you within 24 hours.');
      onClose();
      // reset form
      setStep(1);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        verificationCode: '',
        message: '',
        urgency: 'moderate',
        previousTherapy: 'no'
      });
      setIsVerified(false);
      setVerificationSent(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Request a Call</h2>
            <p className="text-sm text-gray-600 mt-1">Connect with {therapist.name}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* enhanced therapist info */}
        <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-blue-100">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              {therapist.image ? (
                <img 
                  src={therapist.image} 
                  alt={therapist.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
              ) : (
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-white shadow-lg">
                  {therapist.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{therapist.name}</h3>
                  <p className="text-sm text-gray-600">{therapist.credentials}</p>
                  
                  {/* specialties */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {therapist.specialty?.map((spec, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center space-x-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">{therapist.availability}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600 mt-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Response within 24h</span>
                  </div>
                </div>
              </div>

              {/* additional therapist details */}
              <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{therapist.yearsExperience} years experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{therapist.location}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{therapist.fees?.individual}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{therapist.approach}</span>
                  </div>
                </div>
              </div>

              {/* insurance & languages */}
              <div className="flex flex-wrap gap-4 mt-3 text-xs">
                {therapist.fees?.insurance && therapist.fees.insurance.length > 0 && (
                  <div>
                    <span className="font-medium text-gray-700">Accepts: </span>
                    <span className="text-gray-600">{therapist.fees.insurance.slice(0, 2).join(', ')}</span>
                    {therapist.fees.insurance.length > 2 && (
                      <span className="text-gray-500"> +{therapist.fees.insurance.length - 2} more</span>
                    )}
                  </div>
                )}
                {therapist.languages && (
                  <div>
                    <span className="font-medium text-gray-700">Languages: </span>
                    <span className="text-gray-600">{therapist.languages.join(', ')}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* progress steps */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNumber
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step > stepNumber ? <CheckCircle className="w-4 h-4" /> : stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`w-12 h-0.5 mx-2 ${
                      step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <span>Your Info</span>
            <span>Verify Email</span>
            <span>Message</span>
          </div>
        </div>

        {/* form content */}
        <form onSubmit={handleSubmit} className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
                <p className="text-xs text-gray-500 mt-1">
                  We'll use this to contact you for scheduling
                </p>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!formData.firstName || !formData.lastName || !formData.email}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Continue to Verification
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-800">Email Verification Required</h4>
                    <p className="text-yellow-700 text-sm mt-1">
                      We've sent a 6-digit code to {formData.email} to verify your identity.
                    </p>
                  </div>
                </div>
              </div>

              {!verificationSent ? (
                <button
                  type="button"
                  onClick={sendVerificationCode}
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending Code...' : 'Send Verification Code'}
                </button>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enter Verification Code *
                    </label>
                    <input
                      type="text"
                      name="verificationCode"
                      value={formData.verificationCode}
                      onChange={handleInputChange}
                      required
                      maxLength={6}
                      placeholder="123456"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg font-mono"
                    />
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Demo code: <strong>123456</strong>
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={verifyCode}
                      disabled={!formData.verificationCode || formData.verificationCode.length !== 6}
                      className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      Verify & Continue
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={sendVerificationCode}
                    className="w-full text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
                  >
                    Resend Code
                  </button>
                </>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 font-medium">Email Verified Successfully!</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What brings you to therapy? *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Please share what you'd like to work on, any specific concerns, and what you're hoping to achieve through therapy..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How urgent is your need for support?
                </label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="low">Not urgent - just exploring options</option>
                  <option value="moderate">Moderate - would like to start soon</option>
                  <option value="high">Urgent - need support as soon as possible</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Have you been in therapy before?
                </label>
                <select
                  name="previousTherapy"
                  value={formData.previousTherapy}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="no">No, this is my first time</option>
                  <option value="yes">Yes, I have experience with therapy</option>
                </select>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">What happens next?</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• {therapist.name} will review your request</li>
                  <li>• You'll receive a response within 24 hours</li>
                  <li>• Schedule a free 15-minute consultation call</li>
                  <li>• Discuss next steps and schedule your first session</li>
                </ul>
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isLoading || !formData.message}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookingModal;