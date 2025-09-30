"use client";

import React, { useState } from 'react';
import { ChevronLeft, MapPin, DollarSign, Clock, Award, CheckCircle } from 'lucide-react';

const TherapistProfilePage = () => {
  const [activeTab, setActiveTab] = useState('My Approach');

  const tabs = ['My Approach', 'My Practice', 'Fees', 'Location'];

  const therapist = {
    name: 'Dr. Sarah Mitchell',
    credentials: 'Licensed Clinical Psychologist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop',
    gender: 'Female',
    type: 'Clinical Psychologist',
    languages: ['English', 'Spanish'],
    worksWith: ['Adults (21+)', 'Seniors (65+)'],
    experienced: ['Anxiety', 'Depression', 'Trauma', 'Grief', 'Life Transitions', 'Relationship Issues'],
    location: 'San Francisco, CA',
    acceptingNew: true,
    fees: {
      individual: '$150-200 per session',
      couples: '$200-250 per session',
      insurance: ['Aetna', 'Blue Cross Blue Shield', 'Cigna', 'United Healthcare']
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-20 right-40 w-64 h-64 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-red-400 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-40 left-60 w-72 h-72 bg-gray-300 rounded-full opacity-20 blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        {/* Back Button */}
        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8">
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium">Back to results</span>
        </button>

        {/* Header Section */}
        <div className="bg-white rounded-3xl shadow-sm p-8 mb-6">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-start space-x-6">
              <img 
                src={therapist.image} 
                alt={therapist.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{therapist.name}</h1>
                <p className="text-lg text-gray-600 mb-4">{therapist.credentials}</p>
                <div className="flex items-center space-x-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Accepting new clients</span>
                </div>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Request a Call
            </button>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2">Gender</h3>
              <p className="text-gray-900">{therapist.gender}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2">Type of Therapist</h3>
              <p className="text-gray-900">{therapist.type}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2">Languages Spoken</h3>
              <p className="text-gray-900">{therapist.languages.join(', ')}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 mb-2">Works with</h3>
              <ul className="space-y-1">
                {therapist.worksWith.map((group, index) => (
                  <li key={index} className="text-gray-900">• {group}</li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">Experienced in</h3>
              <div className="flex flex-wrap gap-2">
                {therapist.experienced.map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex space-x-8 px-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 font-medium transition-colors relative ${
                    activeTab === tab
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'My Approach' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What are your top three learnings from working as a therapist?</h2>
                  <p className="text-gray-700 leading-relaxed">
                    My top three learnings are: always bring an open mind into every consultation; if we pigeon hole our solutions, we miss the nuances. Listen on multiple levels, not only the content but also the delivery and context in which it is said. Finally, have a sense of humour, we are all humans after all and the ability to laugh and find joy in anything can brighten up the saddest of days.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How would you describe your approach to therapy?</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    I believe in creating a safe, non-judgmental space where clients feel comfortable exploring their thoughts and feelings. My approach is integrative, drawing from cognitive-behavioral therapy (CBT), mindfulness-based techniques, and psychodynamic principles to tailor treatment to each individual's unique needs.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    I view therapy as a collaborative process where we work together to identify patterns, develop insights, and create practical strategies for change. My goal is to help you build resilience, improve relationships, and develop a deeper understanding of yourself.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What can clients expect in sessions?</h2>
                  <p className="text-gray-700 leading-relaxed">
                    In our first session, we'll focus on getting to know each other and understanding what brings you to therapy. I'll ask questions about your history, current challenges, and goals for treatment. From there, we'll develop a treatment plan together that feels right for you. Sessions are typically 50 minutes and can be held weekly or bi-weekly depending on your needs.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'My Practice' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Practice Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Award className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Credentials & Licenses</h3>
                        <p className="text-gray-700">Licensed Clinical Psychologist (CA PSY 28945)</p>
                        <p className="text-gray-700">Ph.D. in Clinical Psychology, Stanford University</p>
                        <p className="text-gray-700">15+ years of clinical experience</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Availability</h3>
                        <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
                        <p className="text-gray-700">Offering both in-person and telehealth sessions</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Treatment Modalities</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {['CBT', 'DBT', 'Mindfulness-Based', 'Psychodynamic', 'Trauma-Focused', 'EMDR'].map((modality) => (
                            <span key={modality} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                              {modality}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Fees' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Session Fees</h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900">Individual Therapy (50 min)</span>
                        <span className="text-lg font-bold text-gray-900">{therapist.fees.individual}</span>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900">Couples Therapy (50 min)</span>
                        <span className="text-lg font-bold text-gray-900">{therapist.fees.couples}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Insurance</h2>
                  <p className="text-gray-700 mb-4">I am in-network with the following insurance providers:</p>
                  <div className="grid grid-cols-2 gap-3">
                    {therapist.fees.insurance.map((insurance) => (
                      <div key={insurance} className="p-3 bg-green-50 text-green-700 rounded-lg font-medium">
                        {insurance}
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 mt-4 text-sm">
                    For out-of-network insurance, I can provide a superbill for potential reimbursement. Sliding scale fees available on a limited basis for those with financial need.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Methods</h2>
                  <p className="text-gray-700">I accept credit cards, debit cards, HSA/FSA cards, and checks. Payment is due at the time of service.</p>
                </div>
              </div>
            )}

            {activeTab === 'Location' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Office Location</h2>
                  <div className="flex items-start space-x-3 mb-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">San Francisco Therapy Center</p>
                      <p className="text-gray-700">450 Sutter Street, Suite 2400</p>
                      <p className="text-gray-700">San Francisco, CA 94108</p>
                    </div>
                  </div>
                  
                  {/* Mock Map */}
                  <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Interactive map would be displayed here</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                    <h3 className="font-semibold text-blue-900 mb-2">Getting Here</h3>
                    <p className="text-blue-800 text-sm">
                      <strong>Public Transit:</strong> Near Montgomery BART station (5 min walk)<br />
                      <strong>Parking:</strong> Garage parking available at Sutter-Stockton Garage<br />
                      <strong>Accessibility:</strong> Wheelchair accessible building with elevator access
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Telehealth Option</h2>
                  <p className="text-gray-700">
                    I offer secure video sessions for clients throughout California. Telehealth sessions are conducted through a HIPAA-compliant platform to ensure your privacy and confidentiality.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to get started?</h2>
          <p className="text-blue-100 mb-6">Take the first step towards better mental health today.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Request a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default TherapistProfilePage;